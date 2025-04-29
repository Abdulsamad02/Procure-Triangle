import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './components/layout/main-layout';
import { ScrollToTop } from './components/utils/scroll-to-top';

// Pages
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ServicesPage } from './pages/services';
import { ProjectsPage } from './pages/projects';
import { BlogPage } from './pages/blog';
import { ContactPage } from './pages/contact';
import { NotFoundPage } from './pages/not-found';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
