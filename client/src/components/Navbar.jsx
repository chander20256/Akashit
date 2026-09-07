/**
 * Navbar Component
 * Responsive header navigation bar featuring brand branding, instant search bar, and action controls
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-red-100/95 backdrop-blur-md border-b border-red-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo Link to /blog1 */}
          <Link to="/blog1" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-red-300">
              B
            </div>
            <div>
              <span className="text-2xl font-extrabold text-red-900 tracking-tight">Blogs</span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-semibold bg-red-200 text-red-800 rounded-full">
                Crypto Edition
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search crypto blogs, topics, analysis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white/90 border border-red-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-gray-800 placeholder-gray-400 transition-all shadow-inner"
              />
              <svg className="w-4 h-4 text-red-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-red-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Right Nav Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/blog1" className="text-sm font-medium text-red-900 hover:text-red-600 transition-colors">
              Latest Blogs
            </Link>
            <a href="#market" className="text-sm font-medium text-red-900 hover:text-red-600 transition-colors">
              Market Pulse
            </a>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95">
              Subscribe
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-red-900 hover:bg-red-200/60 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Search & Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-200/80 space-y-3 animate-fadeIn">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search crypto blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-red-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg className="w-4 h-4 text-red-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <nav className="flex flex-col space-y-2 pt-2">
              <Link to="/blog1" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-200/50 rounded-md">
                Latest Blogs
              </Link>
              <a href="#market" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-red-900 hover:bg-red-200/50 rounded-md">
                Market Pulse
              </a>
              <button className="w-full py-2 bg-red-600 text-white text-sm font-semibold rounded-md shadow-sm">
                Subscribe to Newsletter
              </button>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
