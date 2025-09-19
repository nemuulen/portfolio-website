import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  index: number;
  isDetailed?: boolean;
}

export function ProjectCard({ project, index, isDetailed = false }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  // Ensure consistent tag display - max 4 tags with proper truncation
  const displayTags = project.tags.length > 4 ? [...project.tags.slice(0, 3), `+${project.tags.length - 3} more`] : project.tags;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
              Featured
            </Badge>
          </div>
        )}

        {/* Project Image - Fixed height for consistency */}
        <div className="relative overflow-hidden h-48 flex-shrink-0">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex gap-3">
              {project.demoUrl && (
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Content - Flexible area */}
        <div className="p-6 flex flex-col flex-1">
          {/* Header with Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <Badge 
              variant="outline" 
              className={`capitalize ${ 
                project.category === 'web' ? 'border-blue-500 text-blue-600 dark:text-blue-400' :
                project.category === 'mobile' ? 'border-green-500 text-green-600 dark:text-green-400' :
                project.category === 'design' ? 'border-purple-500 text-purple-600 dark:text-purple-400' :
                'border-orange-500 text-orange-600 dark:text-orange-400'
              }`}
            >
              {project.category}
            </Badge>
          </div>

          {/* Title - Fixed space */}
          <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description - Fixed space */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-shrink-0 h-12 line-clamp-3">
            {project.description}
          </p>

          {/* Timeline & Funding Info - Consistent layout */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[24px]">
            {project.timeline && (
              <Badge variant="outline" className="bg-white/5 dark:bg-black/5 text-xs">
                📅 {project.timeline}
              </Badge>
            )}
            {project.funding && (
              <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30 text-xs">
                💰 {project.funding}
              </Badge>
            )}
          </div>

          {/* Tags - Consistent spacing and height */}
          <div className="flex flex-wrap gap-1.5 mb-6 min-h-[32px]">
            {displayTags.map((tag, tagIndex) => (
              <span
                key={`${tag}-${tagIndex}`}
                className="px-3 py-1 text-xs bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons - Pushed to bottom */}
          {!isDetailed && (
            <div className="flex gap-3 mt-auto">
              {project.demoUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 group/btn bg-white/5 dark:bg-black/5 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 group/btn bg-white/5 dark:bg-black/5 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Code
                </Button>
              )}
              {/* If no demo or github, show a placeholder to maintain consistent height */}
              {!project.demoUrl && !project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 opacity-50 cursor-not-allowed bg-white/5 dark:bg-black/5 border-white/20 dark:border-white/10"
                  disabled
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}