/**
 * App Router Component
 * Configures React Router routes for multi-page crypto blog navigation (/blog1 through /blog5)
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/blog1" replace />} />
        <Route path="/blog1" element={<Home blogId={1} />} />
        <Route path="/blog2" element={<Home blogId={2} />} />
        <Route path="/blog3" element={<Home blogId={3} />} />
        <Route path="/blog4" element={<Home blogId={4} />} />
        <Route path="/blog5" element={<Home blogId={5} />} />
        <Route path="/blog/:id" element={<Home />} />
        <Route path="*" element={<Navigate to="/blog1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
