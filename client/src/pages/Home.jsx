/**
 * Home Page Component
 * Primary layout orchestrator handling active blog route resolution, CAPTCHA verification & timer synchronization
 */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FullBlogArticle from '../components/FullBlogArticle';
import Pagination from '../components/Pagination';
import LatestBlogsSidebar from '../components/LatestBlogsSidebar';
import { BLOG_POSTS } from '../data/cryptoBlogs';

export default function Home({ blogId }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Robot verification & 10-second countdown timer state
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  // Extract page ID from props or URL parameter (e.g. /blog1 -> 1, /blog/2 -> 2)
  let currentPage = blogId;
  if (!currentPage && id) {
    const parsedId = parseInt(id.replace('blog', ''), 10);
    currentPage = isNaN(parsedId) ? 1 : parsedId;
  }
  if (!currentPage) currentPage = 1;

  const totalPages = BLOG_POSTS.length; // 5 blog posts total

  // Active blog post object
  const activeBlog = BLOG_POSTS.find((post) => post.id === currentPage) || BLOG_POSTS[0];

  // Reset verification & timer when page changes
  useEffect(() => {
    setIsVerified(false);
    setIsVerifying(false);
    setTimeLeft(10);
  }, [currentPage]);

  // Start timer once robot check is verified
  useEffect(() => {
    if (!isVerified) return;

    setTimeLeft(10);
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isVerified, currentPage]);

  const SMART_LINK_URL = 'https://www.profitableratecpmnetwork.com/sx0z4q13?key=f4e974c00255faab0c07ada0028ae896';

  const handleVerify = () => {
    try {
      window.open(SMART_LINK_URL, '_blank');
    } catch (e) {
      console.error(e);
    }
    if (isVerified || isVerifying) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 600);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/blog${newPage}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Light Red Navbar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Responsive Grid Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dual Column Layout: Left (Full Blog Page) + Right (Latest Blogs Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Complete Blog Post Page (8 cols on lg) */}
          <section className="lg:col-span-8 space-y-6">
            
            {/* Full Long-Form Blog Article View */}
            <FullBlogArticle
              blog={activeBlog}
              currentPage={currentPage}
              totalPages={totalPages}
              isVerified={isVerified}
              isVerifying={isVerifying}
              timeLeft={timeLeft}
              onVerify={handleVerify}
            />

            {/* Pagination Controls at Bottom */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              isVerified={isVerified}
              isVerifying={isVerifying}
              timeLeft={timeLeft}
              onVerify={handleVerify}
            />

          </section>

          {/* RIGHT COLUMN: Latest Blogs Sidebar (4 cols on lg) */}
          <section className="lg:col-span-4">
            <LatestBlogsSidebar
              currentPage={currentPage}
              onPageSelect={handlePageChange}
            />
          </section>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-16 bg-red-50 border-t border-red-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-red-900 space-y-2">
          <p className="font-extrabold text-base text-red-900">Blogs — Crypto Edition</p>
          <p>© 2026 Blogs Media Inc. React Router Multi-Route Publication.</p>
        </div>
      </footer>

    </div>
  );
}
