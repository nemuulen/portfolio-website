import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { personalInfo, education, leadership, awards, workExperience, volunteering } from '../data/personal';
import { GraduationCap, Award, Users, Globe, MapPin, Mail, Languages, Briefcase, Heart, Download, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import exampleCV from 'figma:asset/186986f77d9f473a6d5dae3a978a1dcac5177560.png';

export function About() {
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

  const itemVariants = {
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
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                About Me & Resume
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get to Know Me
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6"
            >
              A passionate student bridging cultures and technologies, combining Computer Science 
              with Design to create meaningful digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Resume
              </Button>
            </motion.div>
          </div>

          {/* Hero Section with Image */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Hello! I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Nemuulen</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      As a Computer Science and Design student at Duke Kunshan University, I'm passionate about 
                      creating technology that connects cultures and empowers communities. My Mongolian heritage 
                      and international education have shaped my perspective on building inclusive digital solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm">{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm">{personalInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm">{personalInfo.phone}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.programming.concat(personalInfo.skills.frameworks, personalInfo.skills.design).slice(0, 6).map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white/5 dark:bg-black/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFzaWFuJTIwbWFufGVufDF8fHx8MTY4Nzg3NjQxMnww&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Nemuulen portrait"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              Education
            </h2>
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{education.institution}</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400">{education.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">{education.timeline}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{education.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                    GPA: {education.gpa}
                  </Badge>
                  {education.honors?.map((honor) => (
                    <Badge key={honor} variant="outline" className="bg-white/5 dark:bg-black/5">
                      {honor}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.position}</h3>
                          <p className="text-purple-600 dark:text-purple-400">{job.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{job.location}</p>
                        </div>
                        <Badge variant="outline" className="bg-white/5 dark:bg-black/5 mt-2 md:mt-0">
                          {job.timeline}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Languages className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalInfo.languages.map((lang, index) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">
                        {lang.language === 'Mongolian' ? '🇲🇳' : 
                         lang.language === 'English' ? '🇺🇸' :
                         lang.language === 'Mandarin Chinese' ? '🇨🇳' : '🇯🇵'}
                      </div>
                      <h3 className="font-semibold mb-2">{lang.language}</h3>
                      <Badge 
                        variant="outline" 
                        className={`${
                          lang.proficiency === 'Native' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800' :
                          lang.proficiency === 'Proficient' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
                          lang.proficiency === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800' :
                          'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        {lang.proficiency}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Awards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Leadership */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                Leadership
              </h2>
              <div className="space-y-6">
                {leadership.map((role, index) => (
                  <motion.div
                    key={role.organization}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{role.position}</h3>
                            <p className="text-purple-600 dark:text-purple-400">{role.organization}</p>
                          </div>
                          <Badge variant="outline" className="bg-white/5 dark:bg-black/5">
                            {role.timeline}
                          </Badge>
                        </div>
                        <ul className="space-y-2">
                          {role.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                Awards & Recognition
              </h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{award.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{award.organization}</p>
                          </div>
                          <div className="text-right">
                            {award.placement && (
                              <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800 mb-1">
                                {award.placement}
                              </Badge>
                            )}
                            <p className="text-sm text-gray-500 dark:text-gray-400">{award.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Volunteering */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
              Volunteering
            </h2>
            <div className="space-y-4">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.organization}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{vol.organization}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{vol.description}</p>
                        </div>
                        <Badge variant="outline" className="bg-white/5 dark:bg-black/5 mt-2 md:mt-0">
                          {vol.timeline}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Programming', skills: personalInfo.skills.programming, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
                { category: 'Frameworks', skills: personalInfo.skills.frameworks, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800' },
                { category: 'Design Tools', skills: personalInfo.skills.design, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800' },
                { category: 'Other Skills', skills: personalInfo.skills.other, color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800' }
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <Badge key={skill} className={skillGroup.color}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Personal Interests</h2>
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {personalInfo.interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 hover:from-purple-200/50 hover:to-blue-200/50 dark:hover:from-purple-800/30 dark:hover:to-blue-800/30 transition-all duration-300 cursor-default"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}