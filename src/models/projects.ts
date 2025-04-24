export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Edtech - PrameyShala",
    description: "Project PrameyShala is a revolutionary Edtech platform designed to assist school students who are preparing for JEE Main and NEET examinations. This platform is equipped with advanced features that help students to focus and study their streams of subject with ease.",
    technologies: ["React", "Next.js", "Python", "Django", "JavaScript", "MySQL", "AWS"],
    link: "https://github.com/aapav01/prameyshala.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Xenium - Website & Fest Management System",
    description: "The Web App was Designed to Showcase the Content and events and get Participation Information specific to the event they want to participate in.",
    technologies: ["PHP", "Laravel", "MySQL", "IIS"],
  },
]; 