import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';

type CategoryFilter = 'all' | 'web' | 'mobile' | 'design' | 'ai';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all' as CategoryFilter, label: 'All Projects', count: projects.length },
    { id: 'web' as CategoryFilter, label: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile' as CategoryFilter, label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'design' as CategoryFilter, label: 'Design', count: projects.filter(p => p.category === 'design').length },
    { id: 'ai' as CategoryFilter, label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div variants={titleVariants}>
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                Portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              variants={titleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                All Projects
              </span>
            </motion.h1>
            
            <motion.p 
              variants={titleVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Explore my complete portfolio of web applications, mobile apps, design work, 
              and AI/ML projects showcasing my technical and creative abilities.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div 
            variants={titleVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`relative group transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20'
                }`}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    activeFilter === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  }`}
                >
                  {category.count}
                </Badge>
                
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isDetailed={true}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Projects Completed', value: projects.length },
                { label: 'Technologies Used', value: '15+' },
                { label: 'Years Experience', value: '3+' },
                { label: 'Happy Clients', value: '10+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}