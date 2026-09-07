/**
 * FullBlogArticle Component
 * Displays complete long-form crypto article view featuring interactive "I'm not a robot" CAPTCHA check and 10s timer
 */
import React, { useState } from 'react';

export default function FullBlogArticle({
  blog,
  currentPage,
  totalPages,
  isVerified,
  isVerifying,
  timeLeft = 10,
  onVerify
}) {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!blog) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const scrollToBottomNext = () => {
    const bottomElement = document.getElementById('bottom-pagination');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isUnlocked = isVerified && timeLeft === 0;

  // SVG Circular Dashoffset calculation for 10-to-1 counting
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (timeLeft / 10) * circumference;

  return (
    <article className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Blog Hero Cover Image */}
      <div className="w-full h-72 sm:h-96 overflow-hidden relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {/* Floating Category Badge & Date */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
          <span className="bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {blog.category}
          </span>
          <div className="flex items-center space-x-3 text-xs text-gray-200 font-medium">
            <span>📅 {blog.date}</span>
            <span>•</span>
            <span>⏱️ {blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Article Content Container */}
      <div className="p-6 sm:p-10 space-y-6">
        
        {/* 1. Blog Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
          {blog.title}
        </h1>

        {/* 2. ROBOT CHECK & CIRCULAR 10-TO-1 COUNTDOWN TIMER BANNER */}
        <div id="captcha-box" className="bg-gradient-to-r from-red-50/90 via-white to-red-50/90 border border-red-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
            {!isVerified ? (
              /* --- "I am not a robot" CAPTCHA Box --- */
              <div
                onClick={onVerify}
                className={`group flex items-center justify-between border-2 rounded-xl p-3 sm:px-5 sm:py-3.5 bg-white shadow-sm cursor-pointer select-none transition-all ${
                  isVerifying
                    ? 'border-amber-400 bg-amber-50/40 scale-[0.99]'
                    : 'border-gray-300 hover:border-red-500 hover:shadow-md hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  {/* Custom Checkbox Square */}
                  <div
                    className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                      isVerifying
                        ? 'border-amber-500 bg-amber-100'
                        : 'border-gray-400 bg-white group-hover:border-red-600'
                    }`}
                  >
                    {isVerifying && (
                      <svg className="w-4 h-4 animate-spin text-amber-600" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                    )}
                  </div>

                  <div>
                    <span className="text-sm sm:text-base font-extrabold text-gray-800 group-hover:text-red-600 transition-colors">
                      {isVerifying ? 'Verifying human...' : "I'm not a robot"}
                    </span>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {isVerifying ? 'Checking security credentials...' : 'Click checkbox to start 10s timer'}
                    </p>
                  </div>
                </div>

                {/* reCAPTCHA style Badge Icon */}
                <div className="flex flex-col items-center justify-center pl-4 border-l border-gray-200 text-[10px] text-gray-400 ml-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black mb-0.5 shadow-sm">
                    🤖
                  </div>
                  <span className="font-extrabold text-gray-600 tracking-tight">reCAPTCHA</span>
                  <span className="text-[8px] text-gray-400">Privacy - Terms</span>
                </div>
              </div>
            ) : (
              /* --- Verified & Circular Timer Section --- */
              <div className="flex items-center space-x-4">
                {/* Verified Checkmark Icon */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 font-black text-xl shadow-sm shrink-0 animate-fadeIn">
                  ✓
                </div>

                {/* SVG Countdown Ring */}
                <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r={radius}
                      stroke="#fca5a5"
                      strokeWidth="4"
                      fill="transparent"
                      className="opacity-40"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r={radius}
                      stroke="#dc2626"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-linear"
                    />
                  </svg>

                  <span className="absolute text-sm font-black text-red-900">
                    {timeLeft > 0 ? timeLeft : '✓'}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-red-900">
                    {isUnlocked ? '🎉 Unlocked' : '⏱️ 10s Timer Running'}
                  </p>
                  <p className="text-xs text-red-700 font-semibold mt-0.5">
                    {isUnlocked
                      ? 'Click Next to scroll down to the bottom.'
                      : `Counting down: ${timeLeft} second${timeLeft === 1 ? '' : 's'} remaining...`}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Top "Next" Button */}
          <div>
            {!isVerified ? (
              <button
                onClick={onVerify}
                className="w-full sm:w-auto px-5 py-3 bg-red-100 hover:bg-red-200 text-red-900 text-xs font-extrabold rounded-xl flex items-center justify-center space-x-2 border border-red-300 shadow-sm transition-all active:scale-95"
              >
                <span>🤖 Check "I'm not a robot"</span>
              </button>
            ) : isUnlocked ? (
              <button
                onClick={scrollToBottomNext}
                className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl shadow-lg hover:shadow-red-200 transition-all active:scale-95 animate-bounce flex items-center justify-center space-x-2"
              >
                <span>Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7-7V3" />
                </svg>
              </button>
            ) : (
              <div className="w-full sm:w-auto px-5 py-3 bg-red-200/70 text-red-800 text-xs font-extrabold rounded-xl flex items-center justify-center space-x-2 border border-red-300">
                <svg className="w-4 h-4 animate-spin text-red-700" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <span>Unlocks in {timeLeft}s</span>
              </div>
            )}
          </div>

        </div>

        {/* 3. Author Bio Bar */}
        <div className="flex items-center justify-between py-4 border-y border-red-100/80 bg-red-50/50 px-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-red-300 shadow-sm"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">{blog.author.name}</p>
              <p className="text-xs text-red-700 font-medium">{blog.author.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                hasLiked
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-red-200 hover:bg-red-100'
              }`}
            >
              <span>❤️</span>
              <span>{likes}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 text-xs rounded-full border transition-all ${
                bookmarked
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-gray-600 border-red-200 hover:bg-red-100'
              }`}
              title="Bookmark Post"
            >
              🔖
            </button>
          </div>
        </div>

        {/* 4. Full Article Body Sections */}
        <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
          {blog.sections.map((section, idx) => {
            if (section.type === 'intro') {
              return (
                <p key={idx} className="text-lg sm:text-xl font-medium text-gray-900 leading-relaxed border-l-4 border-red-500 pl-4 py-1 italic bg-red-50/30 rounded-r-xl">
                  {section.content}
                </p>
              );
            }

            if (section.type === 'bullets') {
              return (
                <ul key={idx} className="space-y-3 bg-red-50/40 p-5 rounded-2xl border border-red-100">
                  {section.items.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm sm:text-base text-gray-700">
                      <span className="text-red-600 font-bold mr-2 text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <div key={idx} className="space-y-3">
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-2 tracking-tight">
                    {section.heading}
                  </h2>
                )}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Article Footer */}
        <div className="pt-8 border-t border-red-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-400">Category:</span>
            <span className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
              #{blog.category}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <span>Verified On-Chain Post</span>
            <span>•</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }}
              className="text-red-600 font-bold hover:underline"
            >
              Share Link 🔗
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
