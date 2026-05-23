"use client";

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SearchFilters from '@/components/SearchFilters';
import ToolCard from '@/components/ToolCard';
import ComparisonTable from '@/components/ComparisonTable';
import toolsData from '@/data/tools.json';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = Array.from(new Set(toolsData.map(tool => tool.category)));

  // Filter tools based on search and category
  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Hero />
      
      <ComparisonTable tools={toolsData} />
      
      <section id="tools" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore All AI Tools</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse our curated directory of the best AI tools tailored for small businesses and beginners. Find exactly what you need to scale your operations.
            </p>
          </div>
          
          <SearchFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No tools found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                className="mt-6 text-primary-600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Never Miss an AI Tool</h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter to get weekly updates on new AI tools that can save your business time and money.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-full border border-slate-200 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button 
              type="submit" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-full transition shadow-md whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
