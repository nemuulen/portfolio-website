import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, Coffee, Phone } from 'lucide-react';
import { personalInfo } from '../data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-purple-600'
    },
    {
      icon: Coffee,
      href: 'https://buymeacoffee.com',
      label: 'Buy me a coffee',
      color: 'hover:text-yellow-600'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/5 dark:bg-black/5 backdrop-blur-md border-t border-white/10 dark:border-white/5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
            >
              Nemuulen
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Duke Kunshan University Computer Science & Design student passionate about creating 
              innovative digital experiences that bridge technology, culture, and human connection.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              {['About', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact & Social */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-semibold mb-4"
            >
              Let's Connect
            </motion.h4>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Always open to discussing new opportunities and creative collaborations.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 dark:border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Nemuulen</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </motion.footer>
  );
}