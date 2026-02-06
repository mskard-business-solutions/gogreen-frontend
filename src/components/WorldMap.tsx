'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import worldMapData from '@/data/world-map-paths.json';

interface CountryPath {
  id: string;
  d: string;
}

interface TooltipState {
  country: string;
  x: number;
  y: number;
}

// List of highlighted countries (where GoGreen has presence)
const HIGHLIGHTED_COUNTRIES = new Set([
  // The Americas - North America
  'Mexico',
  
  // The Americas - Central America & Caribbean
  'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Haiti', 'Dominican Republic',
  
  // The Americas - South America
  'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'Ecuador', 'Peru', 'Brazil', 'Bolivia', 'Paraguay',
  
  // Africa - North & West Africa
  'Morocco', 'Western Sahara', 'Mauritania', 'Senegal', 'The Gambia', 'Guinea-Bissau', 'Guinea', 'Sierra Leone', 'Liberia',
  "Côte d'Ivoire", 'Ghana', 'Togo', 'Benin', 'Nigeria',
  
  // Africa - Central & Southern Africa
  'Cameroon', 'Equatorial Guinea', 'Gabon', 'Republic of Congo', 'Angola', 'Namibia', 'Botswana', 'South Africa',
  'Lesotho', 'Swaziland', 'Zimbabwe', 'Zambia', 'Malawi', 'Mozambique',
  
  // Africa - East Africa
  'Egypt', 'Sudan', 'Eritrea', 'Djibouti', 'Ethiopia', 'Somalia', 'Kenya', 'Uganda', 'Tanzania', 'Madagascar',
  
  // Asia & The Middle East - Middle East
  'Syria', 'Iraq', 'Iran', 'Yemen', 'Oman',
  
  // Asia & The Middle East - South & Central Asia
  'Afghanistan', 'Pakistan', 'India', 'Nepal', 'Bhutan', 'Bangladesh', 'Sri Lanka', 'Mongolia',
  
  // Asia & The Middle East - Southeast Asia
  'Myanmar', 'Thailand', 'Vietnam', 'Cambodia', 'Malaysia', 'Philippines', 'Indonesia', 'Timor-Leste',
  
  // Oceania
  'Papua New Guinea', 'New Zealand',
]);

// Mapping of country names to their export page URL slugs
const COUNTRY_URL_MAPPING: Record<string, string> = {
  'Bahrain': 'bahrain',
  'Bangladesh': 'bangladesh',
  'Bhutan': 'bhutan',
  'Bolivia': 'bolivia',
  'Botswana': 'botswana',
  'Brazil': 'brazil',
  'Burundi': 'burundi',
  'Chile': 'chile',
  'Egypt': 'egypt',
  'Ethiopia': 'ethiopia',
  'Gabon': 'gabon',
  'The Gambia': 'gambia',
  'Georgia': 'georgia',
  'Ghana': 'ghana',
  'Guinea': 'guinea',
  'Indonesia': 'indonesia',
  'Iran': 'iran',
  'Iraq': 'iraq',
  'Kenya': 'kenya',
  'Kuwait': 'kuwait',
  'Lebanon': 'lebanon',
  'Mexico': 'mexico',
  'Morocco': 'morocco',
  'Oman': 'oman',
  'Peru': 'peru',
  'Philippines': 'philippines',
  'Senegal': 'senegal',
  'Somalia': 'somalia',
  'South Africa': 'south-africa',
  'Sri Lanka': 'sri-lanka',
  'Sudan': 'sudan',
  'Tanzania': 'tanzania',
  'Thailand': 'thailand',
  'United Arab Emirates': 'uae',
  'Uganda': 'uganda',
  'Vietnam': 'viet-nam',
  'Yemen': 'yemen',
  'Zambia': 'zambia',
  'Zimbabwe': 'zimbabwe',
};

const countryPaths: CountryPath[] = worldMapData as CountryPath[];

// Debug: Log which countries are being highlighted
console.log('Total countries in JSON:', countryPaths.length);
console.log('Countries to highlight:', HIGHLIGHTED_COUNTRIES.size);
const matchedCountries = countryPaths.filter(c => HIGHLIGHTED_COUNTRIES.has(c.id)).map(c => c.id);
console.log('Matched countries:', matchedCountries.length, matchedCountries);

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const router = useRouter();

  const handleCountryClick = (countryName: string) => {
    const urlSlug = COUNTRY_URL_MAPPING[countryName];
    if (urlSlug) {
      router.push(`/exports/${urlSlug}`);
    }
  };

  const handleMouseEnter = (countryName: string, event: React.MouseEvent<SVGPathElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      country: countryName,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleMouseMove = (event: React.MouseEvent<SVGPathElement>) => {
    if (tooltip) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        ...tooltip,
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const isHighlighted = (countryId: string): boolean => {
    return HIGHLIGHTED_COUNTRIES.has(countryId);
  };

  return (
    <div className="position-relative">
      <svg
        id="allSvg"
        baseProfile="tiny"
        fill="#ececec"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        version="1.2"
        viewBox="0 0 2000 857"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block', backgroundColor: '#c5dce8' }}
      >
        {countryPaths.map((country, index) => (
          <path
            key={`${country.id}-${index}`}
            className="allPaths"
            d={country.d}
            fill={isHighlighted(country.id) ? '#7cb77c' : '#e0e0e0'}
            stroke="white"
            strokeWidth="0.5"
            style={{ 
              cursor: COUNTRY_URL_MAPPING[country.id] ? 'pointer' : 'default',
              transition: 'fill 0.2s ease'
            }}
            onMouseEnter={(e) => handleMouseEnter(country.id, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCountryClick(country.id)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          id="name"
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            pointerEvents: 'none',
            zIndex: 1000,
            whiteSpace: 'nowrap'
          }}
        >
          <p style={{ margin: 0 }}>{tooltip.country}</p>
        </div>
      )}
    </div>
  );
}
