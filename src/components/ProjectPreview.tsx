import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

interface ProjectPreviewProps {
  onNavigateToProjects: () => void;
}

export function ProjectPreview({ onNavigateToProjects }: ProjectPreviewProps) {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <motion.h2 
              variants={titleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <Button
                onClick={onNavigateToProjects}
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl -z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}