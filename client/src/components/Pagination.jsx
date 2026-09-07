/**
 * Pagination Component
 * Bottom navigation bar supporting Previous/Next actions, locked states synced with CAPTCHA verification and 10s countdown
 */
import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isVerified,
  isVerifying,
  timeLeft = 10,
  onVerify
}) {
  const isUnlocked = isVerified && timeLeft === 0;
  const isLastPage = currentPage === totalPages;

  return (
    <div
      id="bottom-pagination"
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 border-t border-red-100 pt-8 mt-8 scroll-mt-24 w-full"
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex items-center px-6 py-3 text-sm font-bold bg-white text-red-900 border border-red-200 rounded-xl hover:bg-red-100 shadow-sm transition-all active:scale-95"
        >
          ← Previous
        </button>
      ) : (
        <div className="hidden sm:block"></div>
      )}

      {/* Centered Next Button OR "Come again tomorrow" Text on Last Page */}
      {isLastPage ? (
        <div className="flex justify-center w-full sm:w-auto">
          {!isVerified ? (
            <button
              onClick={onVerify}
              className="inline-flex items-center px-6 py-3 text-xs sm:text-sm font-black bg-red-100 hover:bg-red-200 text-red-900 rounded-xl border border-red-300 shadow-sm transition-all active:scale-95"
            >
              <span>🤖 Verify "I'm not a robot" First</span>
            </button>
          ) : isUnlocked ? (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl px-8 py-4 text-center shadow-md animate-fadeIn">
              <p className="text-sm sm:text-base font-extrabold text-red-900">
                🎉 Come again tomorrow
              </p>
              <p className="text-xs text-red-700 font-semibold mt-1">
                You have read all 5 crypto blogs for today!
              </p>
            </div>
          ) : (
            <div className="inline-flex items-center px-5 py-2.5 text-xs font-bold bg-red-100 text-red-400 rounded-xl border border-red-200/80 cursor-not-allowed">
              <svg className="w-4 h-4 mr-2 animate-spin text-red-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Finalizing Post in {timeLeft}s
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          {!isVerified ? (
            <button
              onClick={onVerify}
              className="inline-flex items-center px-6 py-3 text-xs sm:text-sm font-black bg-red-100 hover:bg-red-200 text-red-900 rounded-xl border border-red-300 shadow-sm transition-all active:scale-95"
            >
              <span>🤖 Check "I'm not a robot" to start timer</span>
            </button>
          ) : isUnlocked ? (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="inline-flex items-center px-7 py-3 text-sm font-black bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-red-200 transition-all active:scale-95 animate-bounce"
            >
              <span>Next</span>
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          ) : (
            <button
              disabled
              className="inline-flex items-center px-5 py-2.5 text-xs font-bold bg-red-100 text-red-400 rounded-xl border border-red-200/80 cursor-not-allowed"
            >
              <svg className="w-4 h-4 mr-2 animate-spin text-red-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Next Unlocks in {timeLeft}s
            </button>
          )}
        </div>
      )}
    </div>
  );
}
