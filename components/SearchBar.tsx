'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Import all data
import journalEntries from '@/data/journalEntries.json';
import gaap from '@/data/gaap.json';
import ratios from '@/data/ratios.json';
import statements from '@/data/statements.json';
import gaapVsIfrs from '@/data/gaapVsIfrs.json';

// Combine all data for searching
const allData = [
  ...journalEntries.map(item => ({ ...item, type: 'Journal Entry' })),
  ...gaap.map(item => ({ ...item, type: 'GAAP Rule' })),
  ...ratios.map(item => ({ ...item, type: 'Ratio' })),
  ...statements.map(item => ({ ...item, type: 'Financial Statement' })),
  ...gaapVsIfrs.map(item => ({ ...item, type: 'GAAP vs IFRS' }))
];

const fuse = new Fuse(allData, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'content', weight: 1 },
    { name: 'explanation', weight: 1 },
    { name: 'gaap_note', weight: 1 },
    { name: 'category', weight: 1 }
  ],
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2
});

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof allData>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = fuse.search(query).map(r => r.item);
      setResults(searchResults.slice(0, 8));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Journal Entry': return 'bg-green-100 text-green-800';
      case 'GAAP Rule': return 'bg-blue-100 text-blue-800';
      case 'Ratio': return 'bg-purple-100 text-purple-800';
      case 'Financial Statement': return 'bg-orange-100 text-orange-800';
      case 'GAAP vs IFRS': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div ref={searchRef} className="relative mb-6">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search GAAP topics, journal entries, ratios..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {results.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.url || '#'}
              className="block p-4 hover:bg-gray-50 border-b last:border-0 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-gray-900">{item.title}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type || '')}`}>
                  {item.type}
                </span>
              </div>
              {item.category && (
                <span className="text-xs text-gray-500 mb-2 block">{item.category}</span>
              )}
              <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
            </Link>
          ))}
        </div>
      )}
      
      {isOpen && query.length > 1 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-xl p-4 text-center text-gray-500">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
}
