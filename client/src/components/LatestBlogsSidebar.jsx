/**
 * LatestBlogsSidebar Component
 * Right sidebar featuring active blog selection, 24h crypto market stats ticker, trending topics, and newsletter signup
 */
import React from 'react';
import { LATEST_BLOGS, CRYPTO_MARKET_FLASH } from '../data/cryptoBlogs';

export default function LatestBlogsSidebar({ currentPage, onPageSelect }) {
  return (
    <aside id="latest" className="space-y-6">
      
      {/* Latest Crypto Blogs Quick Switcher Widget */}
      <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-red-100">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <h3 className="text-lg font-bold text-gray-900">Latest Crypto Blogs</h3>
          </div>
          <span className="text-xs font-medium text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
            5 Articles
          </span>
        </div>

        <div className="space-y-3">
          {LATEST_BLOGS.map((item) => {
            const isActive = item.pageIndex === currentPage;
            return (
              <div
                key={item.id}
                onClick={() => onPageSelect(item.pageIndex)}
                className={`group cursor-pointer p-3 rounded-xl transition-all border ${
                  isActive
                    ? 'bg-red-100/80 border-red-300 shadow-sm'
                    : 'hover:bg-red-50/60 border-transparent hover:border-red-100'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                  <span className="font-semibold text-red-700">
                    Blog #{item.pageIndex} • {item.category}
                  </span>
                  <span className="text-gray-400">{item.timeAgo}</span>
                </div>
                <h4 className={`text-xs sm:text-sm font-bold line-clamp-2 leading-snug ${
                  isActive ? 'text-red-900' : 'text-gray-800 group-hover:text-red-600'
                }`}>
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-gray-400 mt-2">
                  <span>{item.readTime}</span>
                  <span className="text-red-600 font-bold group-hover:translate-x-0.5 transition-transform">
                    {isActive ? 'Currently Reading ✓' : 'Read Page ' + item.pageIndex + ' →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Crypto Market Pulse Flash */}
      <div id="market" className="bg-gradient-to-br from-red-900 to-gray-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold tracking-wide uppercase text-red-200">
            Crypto Market Pulse
          </h3>
          <span className="text-[10px] bg-red-800 text-red-100 px-2 py-0.5 rounded font-mono">
            24H LIVE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {CRYPTO_MARKET_FLASH.map((coin) => (
            <div key={coin.symbol} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-white">{coin.symbol}</span>
                <span className="text-xs font-bold text-emerald-400">{coin.change}</span>
              </div>
              <p className="text-xs text-gray-300 font-mono mt-1">{coin.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics Widget */}
      <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {['#BitcoinL2', '#EthereumStaking', '#ZeroKnowledge', '#SolanaDeFi', '#Web3AI', '#Restaking'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-700 px-3 py-1 rounded-lg cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Signup Widget */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h3 className="text-base font-bold text-red-900">Crypto Weekly Digest</h3>
        <p className="text-xs text-red-700 mt-1 leading-relaxed">
          Get top blockchain insights, Layer 2 deep dives, and market trends delivered every Monday.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-xs bg-white border border-red-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>

    </aside>
  );
}
