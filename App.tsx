import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomeView } from './views/HomeView';
import { DictionaryView } from './views/DictionaryView';
import { AnalysisView } from './views/AnalysisView';
import { MethodologyView } from './views/MethodologyView';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname.substring(1) || 'home';

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeView onNavigate={handleNavigate} />} />
        <Route path="/dictionary" element={<DictionaryView />} />
        <Route path="/analysis" element={<AnalysisView />} />
        <Route path="/methodology" element={<MethodologyView />} />
      </Routes>
    </Layout>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}