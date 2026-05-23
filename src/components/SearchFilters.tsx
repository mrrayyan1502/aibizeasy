import React from 'react';

type SearchFiltersProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export default function SearchFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
      <div className="w-full md:w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for AI tools..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
          />
          <div className="absolute left-3 top-3.5 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-2/3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            selectedCategory === null
              ? 'bg-primary-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All Tools
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
