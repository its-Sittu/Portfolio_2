export type Project = {
    title: string
    description: string
    techStack: string[]
    image?: string
    github?: string
    demo?: string
}

export const projects: Project[] = [
    {
        title: "AI-Powered BRD Generator",
        description: "An advanced AI-driven system that transforms unstructured business requirements into comprehensive, structured documentation. Features a robust backend validation pipeline and high-performance REST APIs.",
        techStack: ["React", "FastAPI", "Python"],
        image: "/projects/brd-generator.png",
        demo: "https://formulatebrd-production.up.railway.app/",
    },
    {
        title: "PhishGuard",
        description: "A sophisticated real-time malicious URL detection system. Implements advanced heuristics and machine learning patterns to identify phishing attempts through secure API integration.",
        techStack: ["Python", "Flask"],
        image: "/projects/phishguard.png",
        demo: "https://phishguard-e38r.onrender.com/",
    },
    {
        title: "Movie Motion Shot",
        description: "Implemented authentication, product management, and cart functionality. Integrated Redux Toolkit for structured state management.",
        techStack: ["MERN Stack"],
        image: "/projects/movie-platform.png",
    },
]
