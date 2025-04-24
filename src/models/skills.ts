export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "MySql", "MonogoDB", "Java", "SpringBoot"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
  },
  {
    category: "Tools",
    items: ["VS Code", "GitHub", "Postman", "Swagger", "Jira"],
  },
]; 