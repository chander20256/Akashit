/**
 * CategoryFilter Component
 * Displays pill filter buttons allowing users to filter blogs by category (DeFi, Layer 2, AI, ZK Proofs, Staking)
 */
import React from 'react';
import { CATEGORIES } from '../data/cryptoBlogs';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div id="categories" className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const active = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
              active
                ? 'bg-red-600 text-white shadow-md shadow-red-200 scale-105'
                : 'bg-red-50 hover:bg-red-100 text-red-900 border border-red-200/60'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
