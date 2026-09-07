/**
 * BlogCard Component
 * Renders individual crypto blog post cards with featured variants and author metadata
 */
import React from 'react';

export default function BlogCard({ blog, onReadMore }) {
  const isFeatured = blog.featured;

  if (isFeatured) {
    return (
      <article className="group bg-white border border-red-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
        <div className="md:w-1/2 overflow-hidden relative min-h-[220px] md:min-h-[300px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Featured
          </span>
        </div>
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
              <span className="bg-red-50 text-red-700 font-semibold px-2.5 py-0.5 rounded-md border border-red-100">
                {blog.category}
              </span>
              <span>•</span>
              <span>{blog.readTime}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
              {blog.title}
            </h2>
            <p className="mt-3 text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-9 h-9 rounded-full object-cover border border-red-200"
              />
              <div>
                <p className="text-xs font-semibold text-gray-900">{blog.author.name}</p>
                <p className="text-[11px] text-gray-500">{blog.author.role}</p>
              </div>
            </div>
            <button
              onClick={() => onReadMore(blog)}
              className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 group-hover:translate-x-1 transition-transform"
            >
              Read Article
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white border border-red-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-red-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-red-200">
            {blog.category}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
            {blog.title}
          </h3>
          <p className="mt-2 text-gray-600 text-xs line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-gray-50">
        <div className="flex items-center space-x-2">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-7 h-7 rounded-full object-cover border border-red-100"
          />
          <span className="text-xs font-medium text-gray-700">{blog.author.name}</span>
        </div>
        <button
          onClick={() => onReadMore(blog)}
          className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Read
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}
