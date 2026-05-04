export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    title: string;
    color: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        color: "#00E5FF", // Cyan accent
        skills: [
            { name: "React.js", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "JavaScript", icon: "javascript" },
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Three.js", icon: "threejs" },
            { name: "TypeScript", icon: "typescript" },
        ]
    },
    {
        title: "Backend",
        color: "#10B981", // Green accent
        skills: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "REST APIs", icon: "api" },
            { name: "JWT Authentication", icon: "auth" },
            { name: "GraphQL", icon: "graphql" },
            { name: "PostgreSQL", icon: "postgresql" },
        ]
    },
    {
        title: "Tools & Ecosystem",
        color: "#A855F7", // Purple accent
        skills: [
            { name: "Git & GitHub", icon: "github" },
            { name: "VS Code", icon: "vscode" },
            { name: "Postman", icon: "postman" },
            { name: "Figma", icon: "figma" },
            { name: "Vercel", icon: "vercel" },
            { name: "Firebase", icon: "firebase" },
            { name: "Docker", icon: "docker" },
        ]
    },
    {
        title: "Mobile Development",
        color: "#F59E0B", // Amber accent
        skills: [
            { name: "React Native", icon: "react" },
            { name: "Expo", icon: "expo" },
            { name: "Flutter", icon: "flutter" },
        ]
    }
            { name: "Kubernetes", icon: "code" },
]
