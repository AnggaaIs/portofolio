export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  category: string;
  features: string[];
  links: {
    live?: string;
    github?: string;
  };
  year: number;
  type: string;
}

export interface ProjectsData {
  projects: Project[];
  last_updated: string;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/AnggaaIs/porto-gallery/main/projects.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects data");
    }

    const data: ProjectsData = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [
      {
        id: 1,
        title: "PicPop",
        description:
          "Web app for taking selfies and applying beautiful templates with real-time camera integration",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
        status: "Live",
        category: "Web Application",
        features: [
          "Real-time camera integration",
          "Beautiful templates",
          "Selfie capture",
          "Template application",
        ],
        links: {
          live: "https://picapop.vercel.app/",
          github: "https://github.com/AnggaaIs/picapop",
        },
        year: 2024,
        type: "Frontend",
      },
      {
        id: 2,
        title: "Statify",
        description:
          "Beautiful Spotify analytics dashboard with real-time music data and comprehensive insights",
        technologies: ["Next.js 15", "TypeScript", "Supabase", "Spotify API"],
        status: "Live",
        category: "Dashboard",
        features: [
          "Spotify analytics",
          "Real-time music data",
          "Comprehensive insights",
          "Beautiful dashboard design",
        ],
        links: {
          live: "https://statify-one-ochre.vercel.app/",
          github: "https://github.com/AnggaaIs/statify",
        },
        year: 2024,
        type: "Full Stack",
      },
      {
        id: 3,
        title: "Kisara API",
        description:
          "High-performance backend API with Fastify, JWT authentication, and comprehensive logging",
        technologies: ["Fastify", "TypeScript", "Mikro-ORM", "PostgreSQL"],
        status: "Live",
        category: "Backend API",
        features: [
          "High-performance backend",
          "JWT authentication",
          "Comprehensive logging",
          "RESTful API design",
        ],
        links: {
          live: "https://kisara.my.id/",
          github: "https://github.com/AnggaaIs/kisara-api",
        },
        year: 2024,
        type: "Backend",
      },
      {
        id: 4,
        title: "TRPL1A",
        description:
          "Modern web application built with SvelteKit and TypeScript for academic project",
        technologies: ["SvelteKit", "TypeScript", "Tailwind CSS"],
        status: "Live",
        category: "Academic Project",
        features: [
          "Modern web application",
          "Academic focused",
          "Clean design",
          "Responsive layout",
        ],
        links: {
          live: "https://trpl1a.vercel.app/",
          github: "https://github.com/AnggaaIs/trpl1a",
        },
        year: 2024,
        type: "Frontend",
      },
    ];
  }
}
