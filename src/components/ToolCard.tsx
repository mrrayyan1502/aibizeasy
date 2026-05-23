import React from 'react';

type Tool = {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  pros: string[];
  cons: string[];
  affiliateLink: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {tool.category}
            </span>
            <h3 className="text-2xl font-bold mt-3 text-slate-900">{tool.name}</h3>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <span className="text-yellow-500 font-bold mr-1">★</span>
            <span className="font-semibold text-slate-700">{tool.rating.toFixed(1)}</span>
          </div>
        </div>
        <h4 className="font-semibold text-lg text-slate-800 mb-2">{tool.title}</h4>
        <p className="text-slate-600 mb-6">{tool.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <h5 className="font-semibold text-green-600 mb-2 flex items-center">
              <span className="mr-1">✓</span> Pros
            </h5>
            <ul className="text-slate-600 space-y-1">
              {tool.pros.map((pro, idx) => (
                <li key={idx}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-red-500 mb-2 flex items-center">
              <span className="mr-1">✕</span> Cons
            </h5>
            <ul className="text-slate-600 space-y-1">
              {tool.cons.map((con, idx) => (
                <li key={idx}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
        <a 
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition shadow-md"
        >
          Get Started with {tool.name}
        </a>
      </div>
    </div>
  );
}
