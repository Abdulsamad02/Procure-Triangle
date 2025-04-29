import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { SEO } from '../utils/seo';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
} 