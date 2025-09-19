export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'design' | 'ai';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  timeline?: string;
  funding?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Chinese Radical Lab',
    description: 'Fully funded DKU Innovation Incubator project for Chinese language learning',
    longDescription: 'An innovative app designed to revolutionize Chinese language learning through interactive radical recognition and gamified learning experiences. Fully funded by Duke Kunshan University Innovation Incubator. The project involves comprehensive UI/UX design, user research with 66+ students, and development of a prototype that makes Chinese character learning more accessible and engaging.',
    image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU3NTUzMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UI/UX Design', 'User Research', 'React Native', 'Educational Technology'],
    category: 'mobile',
    timeline: 'Apr 2025 - Present',
    funding: 'DKU Innovation Incubator',
    featured: true
  },
  {
    id: '2',
    title: 'CO2u - Campus Sustainability Initiative',
    description: 'UN Millennium Fellowship project for digital campus health interventions',
    longDescription: 'Leading a digital intervention initiative to improve student health and wellbeing on campus as part of the prestigious Millennium Fellowship by United Nations Academic Impact and Millennium Campus Network. The project focuses on designing and implementing technology-driven solutions to promote sustainable living and wellness among university students.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTYwMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Sustainability', 'Health Tech', 'Digital Interventions', 'UN SDGs'],
    category: 'design',
    timeline: 'Aug 2025 - Present',
    funding: 'UN Millennium Fellowship',
    featured: true
  },
  {
    id: '3',
    title: 'DKU Intersections Club Website',
    description: 'Complete website redesign and development for university club',
    longDescription: 'Designed and developed a modern, responsive website for DKU Intersections Club as Student Website Developer & Graphic Designer. The project involved creating engaging visual content, editing and updating over 20 website pages, managing student-written articles edited by professors, and designing promotional posters and materials.',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTc2MjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Web Development', 'Graphic Design', 'Content Management', 'Adobe Creative Suite'],
    category: 'web',
    timeline: 'Aug 2024 - Present',
    demoUrl: 'https://intersections.example.com',
    githubUrl: 'https://github.com/nemuulen/intersections-website',
    featured: true
  },
  {
    id: '4',
    title: 'Viral Agency Marketing Campaigns',
    description: 'Digital content creation for major Mongolian corporations',
    longDescription: 'Produced 5 high-quality digital content pieces for major Mongolian corporations during internship at Viral Agency. Assisted in brainstorming and drafting marketing campaign proposals for major projects, gaining hands-on experience in digital marketing and creative content production using Adobe Premier Pro.',
    image: 'https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NjE1NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Digital Marketing', 'Adobe Premier Pro', 'Content Creation', 'Campaign Strategy'],
    category: 'design',
    timeline: 'June 2024 - July 2024',
    featured: false
  },
  {
    id: '5',
    title: 'DKU iOS Club Design System',
    description: 'Visual design and branding for Apple Innovation Lab collaboration',
    longDescription: 'Served as Graphic Designer for DKU iOS club in collaboration with University Corporation Innovation Lab @Apple. Designed over 20 posters for advertisements, events, and presentations. Organized 4 creative challenges and workshops involving Apple technologies, including Swift workshops, guest talks, and hackathons.',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTc2MjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Graphic Design', 'Apple Technologies', 'Event Planning', 'Swift'],
    category: 'design',
    timeline: 'Aug 2023 - May 2024',
    featured: false
  },
  {
    id: '6',
    title: 'AI Research Assistant Platform',
    description: 'Data collection and analysis tool for AI-generated content research',
    longDescription: 'Developed tools and methodologies for collecting data on AI-generated content as Student Research Assistant for DKU Innovation and Entrepreneurship Initiative. The project involves analyzing trends in AI content generation and building systems to support research in this rapidly evolving field.',
    image: 'https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NjE1NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'Data Analysis', 'AI Research', 'Machine Learning'],
    category: 'ai',
    timeline: 'June 2025 - Present',
    githubUrl: 'https://github.com/nemuulen/ai-research-assistant',
    featured: false
  }
];