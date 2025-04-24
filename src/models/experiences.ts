export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "AWOKE India",
    role: "Senior Software Developer - Full Stack",
    period: "Sept 2023 - Present",
    description: "Leading the development of enterprise applications using modern web technologies.",
    technologies: ["React", "Next.js", "Node.js", "Python", "Frappe Framework", "MySQL", "MongoDB", "AWS"],
  },
  {
    company: "Global Webs Link",
    role: "Software Developer",
    period: "Sep 2019 - Jul 2021",
    description: "Developed and maintained multiple web applications for various clients.",
    technologies: ["React", "Python", "Django", "JavaScript", "MySQL", "AWS"],
  },
]; 