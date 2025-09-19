export interface Education {
  institution: string;
  degree: string;
  location: string;
  timeline: string;
  gpa: string;
  honors?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  timeline: string;
  responsibilities: string[];
}

export interface Leadership {
  organization: string;
  position: string;
  timeline: string;
  achievements: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  placement?: string;
}

export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  languages: { language: string; proficiency: string }[];
  skills: {
    programming: string[];
    frameworks: string[];
    design: string[];
    other: string[];
  };
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Nemuulen",
  nickname: "Nemka",
  title: "Computer Science & Design Student",
  location: "Kunshan, China & Durham, USA",
  email: "nt152@duke.edu",
  phone: "+86 19984930324",
  languages: [
    { language: "Mongolian", proficiency: "Native" },
    { language: "English", proficiency: "Proficient" },
    {
      language: "Mandarin Chinese",
      proficiency: "Intermediate",
    },
    { language: "Japanese", proficiency: "Beginner" },
  ],
  skills: {
    programming: [
      "Java",
      "Python",
      "C++",
      "HTML",
      "JavaScript",
    ],
    frameworks: ["React Native"],
    design: ["Adobe Premier Pro", "Canva", "Figma"],
    other: [
      "Critical thinking",
      "Creativity",
      "Responsibility",
      "Leadership",
      "Event Planning",
    ],
  },
  interests: [
    "Calligraphy",
    "Cooking",
    "Photography",
    "Traveling",
    "Cultural Exchange",
  ],
};

export const education: Education = {
  institution:
    "Duke Kunshan University (DKU) & Duke University",
  degree:
    "Bachelor of Science in Computation & Design; Computer Science Track",
  location: "Kunshan, China & Durham, USA",
  timeline: "Expected May 2027",
  gpa: "3.6/4.0",
  honors: ["Dean's List (2 semesters)"],
};

export const workExperience: WorkExperience[] = [
  {
    company: "DKU Intersections Club",
    position: "Student Website Developer & Graphic Designer",
    location: "Kunshan, China",
    timeline: "Aug 2024 - Present",
    responsibilities: [
      "Edited and updated over 20 website content and student written articles edited by professors",
      "Organized showcases to attract new members, and designed posters",
    ],
  },
  {
    company: "DKU Innovation and Entrepreneurship Initiative",
    position: "Student Research Assistant",
    location: "Kunshan, China",
    timeline: "June 2025 - Present",
    responsibilities: [
      "Collected data on AI generated contents",
    ],
  },
  {
    company: "Viral Agency",
    position: "Intern, Production & Marketing Department",
    location: "Ulaanbaatar, Mongolia",
    timeline: "June 2024 - July 2024",
    responsibilities: [
      "Produced 5 digital contents for major Mongolian corporations using Adobe Premier Pro",
      "Assisted on brainstorming and drafting marketing campaign proposals for major projects",
    ],
  },
  {
    company: "DKU Athletics Department",
    position:
      "Media Associate, Senior Sports Complex Associate",
    location: "Kunshan, China",
    timeline: "Mar 2025 - May 2025, Aug 2023 - Dec 2024",
    responsibilities: [
      "Managed 3-4 associates per shift to ensure safe environments and quality service",
      "Assigned and recorded shifts for over 40 fellow associates to ensure great logistics",
      "Communicated with department's head and took meeting minutes weekly",
      "Shot photos and videos at athletics' events to promote the athletics department on Instagram",
    ],
  },
];

export const leadership: Leadership[] = [
  {
    organization: "DKU Mongolian Students' Association",
    position: "President",
    timeline: "August 2024 - May 2025",
    achievements: [
      "Organized 8 monthly events with over 50+ participants each to promote Mongolian culture",
      "Collaborated with clubs to facilitate major campus events",
    ],
  },
  {
    organization:
      "DKU iOS club by University - Corporation Innovation Lab @Apple",
    position: "Graphic Designer",
    timeline: "Aug 2023 - May 2024",
    achievements: [
      "Designed over 20 posters for advertisements, events, and presentations",
      "Organized 4 creative challenges and workshops involving Apple, such as Swift workshops, guest talks, and a hackathon",
    ],
  },
  {
    organization: "DKU International Enrollment Management",
    position: "Student Ambassador",
    timeline: "Dec 2023 - Present",
    achievements: [
      "Guided over 50 prospective international students about admissions and onboarding",
      "Organized 5 online and in-person meetings with incoming Mongolian freshmen to promote DKU",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "DKU Hackathon 2024",
    organization: "Duke Kunshan University",
    year: "2024",
    placement: "2nd Prize",
  },
  {
    title: "Creative Campus Marketing Competition",
    organization: "Viral Agency",
    year: "2024",
    placement: "3rd Place",
  },
];

export const volunteering = [
  {
    organization: "Mongolian Red Cross Society Youth",
    timeline: "Aug 2020 - Aug 2023",
    description:
      "Community service and humanitarian aid activities",
  },
];