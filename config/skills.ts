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
            { name: "AWS", icon: "code" },
            { name: "Azure", icon: "code" },
            { name: "GCP", icon: "code" },
            { name: "Redis", icon: "code" },
            { name: "Socket.io", icon: "code" },
            { name: "WebSockets", icon: "code" },
            { name: "WebRTC", icon: "code" },
            { name: "Terraform", icon: "code" },
            { name: "Ansible", icon: "code" },
            { name: "Jenkins", icon: "code" },
            { name: "CircleCI", icon: "code" },
            { name: "TravisCI", icon: "code" },
            { name: "GitHub Actions", icon: "code" },
            { name: "GitLab CI", icon: "code" },
            { name: "Bitbucket Pipelines", icon: "code" },
            { name: "Netlify", icon: "code" },
            { name: "Vercel", icon: "code" },
            { name: "Heroku", icon: "code" },
            { name: "DigitalOcean", icon: "code" },
            { name: "Linode", icon: "code" },
            { name: "Cloudflare", icon: "code" },
            { name: "Nginx", icon: "code" },
            { name: "Apache", icon: "code" },
            { name: "Docker Compose", icon: "code" },
            { name: "Docker Swarm", icon: "code" },
            { name: "Helm", icon: "code" },
            { name: "Prometheus", icon: "code" },
            { name: "Grafana", icon: "code" },
            { name: "ELK Stack", icon: "code" },
            { name: "Splunk", icon: "code" },
            { name: "New Relic", icon: "code" },
            { name: "Datadog", icon: "code" },
            { name: "Sentry", icon: "code" },
            { name: "LogRocket", icon: "code" },
            { name: "Mixpanel", icon: "code" },
            { name: "Amplitude", icon: "code" },
            { name: "Google Analytics", icon: "code" },
            { name: "Segment", icon: "code" },
            { name: "Optimizely", icon: "code" },
            { name: "LaunchDarkly", icon: "code" },
            { name: "Auth0", icon: "code" },
            { name: "Okta", icon: "code" },
            { name: "Firebase Auth", icon: "code" },
            { name: "Cognito", icon: "code" },
            { name: "Stripe", icon: "code" },
            { name: "PayPal", icon: "code" },
            { name: "Razorpay", icon: "code" },
            { name: "Braintree", icon: "code" },
            { name: "Adyen", icon: "code" },
            { name: "Square", icon: "code" },
            { name: "Shopify", icon: "code" },
            { name: "WooCommerce", icon: "code" },
            { name: "Magento", icon: "code" },
            { name: "BigCommerce", icon: "code" },
            { name: "Contentful", icon: "code" },
            { name: "Strapi", icon: "code" },
            { name: "Ghost", icon: "code" },
            { name: "WordPress", icon: "code" },
            { name: "Drupal", icon: "code" },
            { name: "Joomla", icon: "code" },
            { name: "Sitecore", icon: "code" },
            { name: "Adobe Experience Manager", icon: "code" },
            { name: "Prismic", icon: "code" },
            { name: "Sanity", icon: "code" },
            { name: "DatoCMS", icon: "code" },
            { name: "Storyblok", icon: "code" },
            { name: "Hygraph", icon: "code" },
            { name: "Agility CMS", icon: "code" },
]
