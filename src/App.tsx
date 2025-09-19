import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectPreview } from './components/ProjectPreview';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';

type Page = 'home' | 'projects' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleNavigateToProjects = () => {
    setCurrentPage('projects');
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <div key="home">
            <Hero onNavigateToProjects={handleNavigateToProjects} onNavigateToAbout={handleNavigateToAbout} />
            <ProjectPreview onNavigateToProjects={handleNavigateToProjects} />
            <Footer />
          </div>
        ) : currentPage === 'about' ? (
          <div key="about">
            <About />
            <Footer />
          </div>
        ) : (
          <div key="projects">
            <Projects />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}