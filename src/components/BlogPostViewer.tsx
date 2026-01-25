
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Link from '@tiptap/extension-link';

interface BlogPostViewerProps {
  content: any; // Tiptap JSON
}

export default function BlogPostViewer({ content }: BlogPostViewerProps) {
  // Generate HTML on the server
  const html = generateHTML(content, [
    StarterKit,
    Image,
    Table,
    TableRow,
    TableCell,
    TableHeader,
    Link.configure({
        HTMLAttributes: {
            class: 'text-blue-600 font-bold underline',
        }
    }),
  ]);

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:font-bold prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-2 prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:my-1"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
