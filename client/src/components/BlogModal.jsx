/**
 * BlogModal Component
 * Popup modal dialog displaying detailed article contents, category badges, and author info
 */
import React from 'react';

export default function BlogModal({ blog, onClose }) {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-red-100 relative flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {blog.image && (
          <div className="w-full h-64 sm:h-80 overflow-hidden relative">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              {blog.category}
            </span>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-3">
            <span>Published on {blog.date || 'Sep 2026'}</span>
            <span>{blog.readTime || '4 min read'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            {blog.title}
          </h2>

          {blog.author && (
            <div className="flex items-center space-x-3 bg-red-50/70 p-3 rounded-xl border border-red-100">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-10 h-10 rounded-full object-cover border border-red-200"
              />
              <div>
                <p className="text-sm font-bold text-gray-900">{blog.author.name}</p>
                <p className="text-xs text-red-700 font-medium">{blog.author.role}</p>
              </div>
            </div>
          )}

          <div className="prose prose-red max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {blog.content || blog.excerpt || 'Full blog content loading...'}
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
