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
  'United States', 'Mexico',
  
  // The Americas - Central America & Caribbean
  'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Haiti', 'Dominican Republic', 'Guadeloupe',
  
  // The Americas - South America
  'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'Ecuador', 'Peru', 'Brazil', 'Bolivia', 'Paraguay', 'Chile',
  
  // Africa - North & West Africa 
  'Morocco', 'Senegal', 'The Gambia', 'Guinea', 'Ghana', 'Nigeria', "Côte d'Ivoire", 'Niger',
  
  // Africa - Central & Southern Africa
  'Cameroon', 'Gabon', 'Republic of Congo', 'Namibia', 'Botswana', 'South Africa',
  'Lesotho', 'Swaziland', 'Zimbabwe', 'Zambia', 'Malawi', 'Mozambique',
  
  // Africa - East Africa
  'Egypt', 'Sudan', 'Eritrea', 'Djibouti', 'Ethiopia', 'Somalia', 'Kenya', 'Uganda', 'Tanzania', 'Madagascar', 'Rwanda', 'Seychelles',
  
  // Asia & The Middle East - Middle East
  'Syria', 'Iraq', 'Iran', 'Yemen', 'Oman', 'Saudi Arabia', 'Lebanon', 'Kuwait', 'UAE', 'Qatar',
  
  // Asia & The Middle East - South & Central Asia
  'Afghanistan', 'India', 'Nepal', 'Bhutan', 'Bangladesh', 'Sri Lanka', 'Mongolia', 'Maldives',
  
  // Asia & The Middle East - Southeast Asia
  'Myanmar', 'Thailand', 'Vietnam', 'Cambodia', 'Malaysia', 'Philippines', 'Indonesia', 'Timor-Leste',
  
  // Oceania
  'Papua New Guinea', 'New Zealand', 'Netherlands',
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
  'Nepal': 'nepal',
  'Netherlands': 'netherlands',
  'New Zealand': 'new-zealand',
  'Niger': 'niger',
  'Nigeria': 'nigeria',
  'Guatemala': 'guatemala',
  'Cameroon': 'cameroon',
  'Chile': 'chile',
  "Côte d'Ivoire": 'cote-divoire',
  'Egypt': 'egypt',
  'Ethiopia': 'ethiopia',
  'Gabon': 'gabon',
  'The Gambia': 'gambia',
  'Georgia': 'georgia',
  'Ghana': 'ghana',
  'Guadeloupe': 'guadeloupe',
  'Guinea': 'guinea',
  'Indonesia': 'indonesia',
  'Iran': 'iran',
  'Iraq': 'iraq',
  'Kenya': 'kenya',
  'Kuwait': 'kuwait',
  'Lebanon': 'lebanon',
  'Maldives': 'maldives',
  'Malawi': 'malawi',
  'Mexico': 'mexico',
  'Mongolia': 'mongolia',
  'Morocco': 'morocco',
  'Myanmar': 'myanmar',
  'Namibia': 'namibia',
  'Oman': 'oman',
  'Peru': 'peru',
  'Philippines': 'philippines',
  'Qatar': 'qatar',
  'Rwanda': 'rwanda',
  'Saudi Arabia': 'saudi-arabia',
  'Senegal': 'senegal',
  'Seychelles': 'seychelles',
  'Somalia': 'somalia',
  'South Africa': 'south-africa',
  'Sri Lanka': 'sri-lanka',
  'Sudan': 'sudan',
  'Tanzania': 'tanzania',
  'Thailand': 'thailand',
  'United Arab Emirates': 'uae',
  'Uganda': 'uganda',
  'United States': 'usa',
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
    setTooltip({
      country: countryName,
      x: event.clientX,
      y: event.clientY - 20
    });
  };

  const handleMouseMove = (countryName: string, event: React.MouseEvent<SVGPathElement>) => {
    setTooltip({
      country: countryName,
      x: event.clientX,
      y: event.clientY - 20
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const isHighlighted = (countryId: string): boolean => {
    return HIGHLIGHTED_COUNTRIES.has(countryId);
  };

  const getFillColor = (countryId: string): string => {
    if (countryId === 'India') {
      return '#FFD700'; // Gold for India
    } else if (isHighlighted(countryId)) {
      return '#7cb77c'; // Light green for other highlighted countries
    }
    return '#e0e0e0'; // Light grey for non-highlighted countries
  };

  return (
    <div className="position-relative">
      <svg
        id="allSvg"
        baseProfile="tiny"
        fill="#ececec"
        stroke="black"
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
            fill={getFillColor(country.id)}
            stroke="white"
            strokeWidth="0.5"
            style={{ 
              cursor: COUNTRY_URL_MAPPING[country.id] ? 'pointer' : 'default',
              transition: 'fill 0.2s ease'
            }}
            onMouseEnter={(e) => handleMouseEnter(country.id, e)}
            onMouseMove={(e) => handleMouseMove(country.id, e)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCountryClick(country.id)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          id="country-tooltip"
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -100%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            pointerEvents: 'none',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          {tooltip.country}
        </div>
      )}
    </div>
  );
}
