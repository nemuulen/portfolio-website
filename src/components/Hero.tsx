import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigateToProjects: () => void;
  onNavigateToAbout: () => void;
}

export function Hero({ onNavigateToProjects, onNavigateToAbout }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Artistic Background Image */}
      <div className="absolute inset-0 -z-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724159465042-f345315d2cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBhcnQlMjBnbGFzcyUyMGhvbG9ncmFwaGljfGVufDF8fHx8MTc1ODI2NzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract digital art background"
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm"></div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-transparent to-purple-500/15"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/6 left-1/6 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/6 right-1/6 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [0.9, 1.3, 0.9],
            rotate: [0, -360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/12 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Artistic floating elements around content */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl backdrop-blur-sm border border-white/10"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              y: [-10, 10, -10],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-12 -left-12 w-12 h-12 border-2 border-blue-400/30 rounded-full backdrop-blur-sm"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 -right-16 w-8 h-24 bg-gradient-to-b from-pink-400/20 via-purple-400/20 to-transparent rounded-full backdrop-blur-sm"
          />
          <motion.div
            animate={{
              x: [-8, 8, -8],
              rotate: [0, -180],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-8 w-20 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm"
          />
        </div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="relative inline-block"
          >
            {/* Message bubble */}
            <div className="relative px-6 py-3 bg-white/25 dark:bg-black/25 backdrop-blur-md border border-white/40 dark:border-white/25 rounded-2xl shadow-lg">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                👋 Hello, I'm Nemuulen (Nemka)
              </span>
              
              {/* Message bubble tail */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/25 dark:bg-black/25 backdrop-blur-md border-r border-b border-white/40 dark:border-white/25 rotate-45 rounded-sm"></div>
            </div>
            
            {/* Simplified floating sparkles */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400/60 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-1 -right-4 w-1 h-1 bg-pink-400/60 rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="mb-6">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Creative Technologist
            </span>
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              & Digital Innovator
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Duke Kunshan University student passionate about creating{' '}
          <span className="text-purple-600 dark:text-purple-400 font-medium">innovative</span>,{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">impactful</span>, and{' '}
          <span className="text-pink-600 dark:text-pink-400 font-medium">culturally-aware</span>{' '}
          digital experiences that bridge technology and human connection.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={onNavigateToProjects}
            size="lg"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View My Work
          </Button>
          <Button
            onClick={onNavigateToAbout}
            variant="outline"
            size="lg"
            className="group bg-white/20 dark:bg-black/20 backdrop-blur-md border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-black/30 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Learn More About Me
          </Button>
        </motion.div>

        {/* Skills Pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-1 justify-center">
          {['UI/UX Design', 'User Research', 'React Native', 'Educational Technology', 'Java', 'Python'].map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/15 dark:bg-black/15 backdrop-blur-md border border-white/25 dark:border-white/15 rounded-full text-sm hover:bg-white/25 dark:hover:bg-black/25 transition-all duration-300 cursor-default shadow-md"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}