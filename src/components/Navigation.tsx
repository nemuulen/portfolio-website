import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/personal';

interface NavigationProps {
  currentPage: 'home' | 'projects' | 'about';
  onNavigate: (page: 'home' | 'projects' | 'about') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Nemuulen
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' }
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => onNavigate(nav.id as any)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === nav.id
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {nav.label}
                  {currentPage === nav.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
              
              {/* Social Links */}
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-300 dark:border-gray-600">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-white/10">
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' }
                ].map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => {
                      onNavigate(nav.id as any);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === nav.id
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30'
                        : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {nav.label}
                  </button>
                ))}
                <div className="flex items-center space-x-3 px-4 py-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}