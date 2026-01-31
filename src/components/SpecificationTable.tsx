import React from 'react';
import { TableData, TableCell } from '@/types/specification';

interface Props {
  title: string;
  data: TableData;
  className?: string;
}

const renderCellContent = (value: TableCell['value']) => {
  if (typeof value === 'boolean') {
    // Handle the checkmarks for boolean values
    return value ? (
      <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <span className="text-gray-300">-</span>
    );
  }
  return value;
};

export const SpecificationTable: React.FC<Props> = ({ title, data, className = '' }) => {
  return (
    <div className={`w-full my-8 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {/* Title Header */}
      <div className="bg-white p-4 text-center text-xl font-bold uppercase tracking-wide" style={{ color: '#004AAD' }}>
        {title}
      </div>

      <div className="overflow-x-auto border-4 border-gray-400">
        <table className="w-full text-sm border-collapse">
          {/* Dynamic Header Rendering */}
          {data.headers && data.headers.length > 0 && (
            <thead className="text-white" style={{ backgroundColor: '#004AAD' }}>
              {data.headers.map((row, rowIndex) => (
                <tr key={`header-row-${rowIndex}`}>
                  {row.map((cell) => (
                    <th
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border-4 border-white px-4 py-3 font-semibold text-center ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                    >
                      {renderCellContent(cell.value)}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          {/* Dynamic Body Rendering */}
          <tbody className="bg-white">
            {data.rows.map((row, rowIndex) => (
              <tr 
                key={`row-${rowIndex}`} 
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#E8F1FA]'}
              >
                {row.map((cell) => {
                  const CellTag = cell.isHeader ? 'th' : 'td';
                  return (
                    <CellTag
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border-4 px-4 py-3 text-center font-semibold border-gray-400 ${
                        cell.isHeader 
                          ? 'bg-white' 
                          : ''
                      } ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                      style={cell.isHeader ? { color: '#004AAD' } : { color: '#1F2937' }}
                    >
                      {renderCellContent(cell.value)}
                    </CellTag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
