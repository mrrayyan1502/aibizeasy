import React from 'react';

type Tool = {
  id: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  affiliateLink: string;
  isTop3: boolean;
};

export default function ComparisonTable({ tools }: { tools: Tool[] }) {
  const topTools = tools.filter(t => t.isTop3).slice(0, 3);
  
  if (topTools.length === 0) return null;

  return (
    <section id="comparison" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
          Top 3 AI Tools for Business
        </h2>
        
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 font-semibold text-slate-600 w-1/4">Tool</th>
                <th className="p-4 font-semibold text-slate-600 w-1/6">Category</th>
                <th className="p-4 font-semibold text-slate-600 w-1/6">Rating</th>
                <th className="p-4 font-semibold text-slate-600 w-1/3">Best For</th>
                <th className="p-4 font-semibold text-slate-600 w-1/6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {topTools.map((tool, index) => (
                <tr key={tool.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                  <td className="p-4">
                    <div className="font-bold text-lg text-slate-900 flex items-center gap-2">
                      {index === 0 && <span className="text-yellow-500">🏆</span>}
                      {index === 1 && <span className="text-slate-400">🥈</span>}
                      {index === 2 && <span className="text-amber-600">🥉</span>}
                      {tool.name}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-semibold">{tool.rating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    {tool.description.substring(0, 80)}...
                  </td>
                  <td className="p-4 text-center">
                    <a 
                      href={tool.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-slate-900 hover:bg-primary-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition"
                    >
                      Try It Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
