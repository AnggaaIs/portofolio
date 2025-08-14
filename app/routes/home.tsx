import type { Route } from "./+types/home";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ContactModal } from "../components/contact-modal";
import { PalestineBanner } from "../components/palestine-banner";
import { useState, useEffect } from "react";
import { fetchProjects, type Project } from "../lib/projects";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Angga Islami Pasya - Software Engineer & Creative Developer | Portfolio",
    },
    {
      name: "description",
      content:
        "Angga Islami Pasya - Software Engineering Technology student at Politeknik Negeri Padang. Creative developer specializing in Next.js, React, TypeScript, and modern web development. Crafting innovative digital solutions.",
    },
    {
      name: "keywords",
      content:
        "Angga Islami Pasya, Software Engineer, Web Developer, Creative Developer, Full Stack Developer, Next.js Developer, React Developer, TypeScript, Politeknik Negeri Padang, Software Engineering Technology, Frontend Developer, Backend Developer, Portfolio, Indonesia Developer",
    },
    {
      name: "author",
      content: "Angga Islami Pasya",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    },
    {
      name: "bingbot",
      content: "index, follow",
    },
    // Open Graph tags
    {
      property: "og:title",
      content: "Angga Islami Pasya - Software Engineer & Creative Developer",
    },
    {
      property: "og:description",
      content:
        "Software Engineering Technology student at Politeknik Negeri Padang. Creative developer specializing in Next.js, React, TypeScript, and modern web development.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://anggaais.me",
    },
    {
      property: "og:image",
      content: "https://anggaais.me/me.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:type",
      content: "image/jpeg",
    },
    {
      property: "og:image:alt",
      content: "Angga Islami Pasya - Software Engineer & Creative Developer",
    },
    {
      property: "og:site_name",
      content: "Angga Islami Pasya Portfolio",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    // Twitter Card tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Angga Islami Pasya - Software Engineer & Creative Developer",
    },
    {
      name: "twitter:description",
      content:
        "Software Engineering Technology student at Politeknik Negeri Padang. Creative developer specializing in Next.js, React, TypeScript, and modern web development.",
    },
    {
      name: "twitter:image",
      content: "https://anggaais.me/me.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Angga Islami Pasya - Software Engineer & Creative Developer",
    },
    {
      name: "twitter:creator",
      content: "@AnggaaIs",
    },
    {
      name: "twitter:site",
      content: "@AnggaaIs",
    },
    {
      name: "geo.region",
      content: "ID-SB",
    },
    {
      name: "geo.placename",
      content: "Padang, Sumatera Barat, Indonesia",
    },
    {
      name: "geo.position",
      content: "-0.9471;100.4172",
    },
    {
      name: "ICBM",
      content: "-0.9471, 100.4172",
    },
    {
      rel: "canonical",
      href: "https://anggaais.me",
    },
  ];
}

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setIsLoadingProjects(false);
      }
    }

    loadProjects();
  }, []);

  const handleContactButtonClick = () => {
    setContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setContactModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angga Islami Pasya",
    jobTitle: "Software Engineer & Creative Developer",
    description:
      "Software Engineering Technology student at Politeknik Negeri Padang. Creative developer specializing in Next.js, React, TypeScript, and modern web development.",
    url: "https://anggaais.me",
    image: "https://anggaais.me/me.jpg",
    sameAs: [
      "https://github.com/AnggaaIs",
      "https://linkedin.com/in/anggaislamipasya",
      "https://instagram.com/angggaais",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Politeknik Negeri Padang",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Padang",
        addressRegion: "Sumatera Barat",
        addressCountry: "Indonesia",
      },
    },
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "UI/UX Design",
      "SvelteKit",
      "Tailwind CSS",
      "PostgreSQL",
      "API Development",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Diploma",
      name: "Software Engineering Technology",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Politeknik Negeri Padang",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padang",
      addressRegion: "Sumatera Barat",
      addressCountry: "Indonesia",
    },
    nationality: "Indonesian",
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Angga Islami Pasya Portfolio",
    description:
      "Portfolio website of Angga Islami Pasya - Software Engineer & Creative Developer",
    url: "https://anggaais.me",
    author: {
      "@type": "Person",
      name: "Angga Islami Pasya",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://anggaais.me/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />

      <PalestineBanner onVisibilityChange={setIsBannerVisible} />
      <Navbar isBannerVisible={isBannerVisible} />
      <ScrollArea className="h-screen w-full">
        <div
          className={`min-h-screen bg-background transition-all duration-500 ease-in-out ${
            isBannerVisible ? "pt-[8rem]" : "pt-16"
          }`}
        >
          {/* Hero Section */}
          <section className="relative py-16 md:py-20 px-6 md:px-4 animate-fade-in">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight font-serif text-shadow-warm animate-slide-up">
                  <span itemProp="name">Angga Islami Pasya</span>
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium tracking-desert animate-slide-up animation-delay-200">
                  <span itemProp="jobTitle">Creative Developer & Designer</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
                  Crafting digital experiences in the vast landscape of
                  technology, where innovation meets artistry like an oasis in
                  the desert.
                </p>
                <div className="flex gap-4 justify-center flex-wrap animate-slide-up animation-delay-600">
                  <Button
                    size="lg"
                    className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </div>

            {/* Desert decorative elements */}
            <div className="absolute top-20 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-4 md:right-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 blur-xl animate-float-delayed"></div>
          </section>
          {/* About Section */}
          <section
            id="about"
            className="py-16 md:py-20 px-6 md:px-4 bg-card"
            itemScope
            itemType="https://schema.org/AboutPage"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="animate-slide-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 font-serif tracking-desert">
                    About Me
                  </h2>
                  <p
                    className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base"
                    itemProp="description"
                  >
                    As a student of{" "}
                    <span itemProp="alumniOf">
                      Software Engineering Technology at Politeknik Negeri
                      Padang
                    </span>
                    , I navigate the world of code with a spirit of exploration
                    and continuous learning. Like a nomad in the digital desert,
                    I embrace every challenge as an opportunity to grow and
                    innovate.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    My journey revolves around building purposeful digital
                    solutions—blending logic, design, and empathy. With a focus
                    on modern web development, I strive to craft experiences
                    that are both impactful and intuitive.
                  </p>
                </div>
                <div className="relative group animate-slide-right">
                  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl shadow-xl overflow-hidden">
                    <img
                      src="/me.jpg"
                      alt="Angga Islami Pasya - Software Engineer & Creative Developer"
                      itemProp="image"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-24 h-24 md:w-32 md:h-32 bg-secondary/40 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-accent/30 rounded-full blur-xl animate-bounce"></div>
                </div>
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-20 px-6 md:px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 md:mb-16 font-serif animate-slide-up">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Frontend Development",
                    skills: [
                      "Next.js",
                      "React",
                      "TypeScript",
                      "SvelteKit",
                      "Tailwind CSS",
                    ],
                    icon: "🎨",
                  },
                  {
                    title: "Backend Development",
                    skills: [
                      "Fastify",
                      "Node.js",
                      "Mikro-ORM",
                      "PostgreSQL",
                      "REST APIs",
                    ],
                    icon: "⚙️",
                  },
                  {
                    title: "Tools & Technologies",
                    skills: [
                      "Supabase",
                      "Spotify API",
                      "JWT Auth",
                      "Vercel",
                      "Git & GitHub",
                    ],
                    icon: "🛠️",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-3xl mb-4 animate-bounce">
                      {category.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-muted-foreground text-sm md:text-base"
                        >
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section
            id="projects"
            className="py-16 md:py-20 px-6 md:px-4 bg-card"
          >
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 md:mb-16 font-serif animate-slide-up">
                Featured Projects
              </h2>

              {isLoadingProjects ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="p-6 md:p-8 bg-background rounded-2xl shadow-lg border border-border animate-pulse"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-6 bg-muted rounded w-1/3"></div>
                        <div className="h-6 bg-muted rounded w-16"></div>
                      </div>
                      <div className="h-4 bg-muted rounded mb-4"></div>
                      <div className="h-4 bg-muted rounded mb-4 w-2/3"></div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 bg-muted rounded w-16"></div>
                        <div className="h-6 bg-muted rounded w-20"></div>
                        <div className="h-6 bg-muted rounded w-14"></div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <div className="h-9 bg-muted rounded w-20"></div>
                        <div className="h-9 bg-muted rounded w-24"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="p-6 md:p-8 bg-background rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            project.status === "Live"
                              ? "bg-accent/20 text-accent"
                              : "bg-secondary/20 text-secondary-foreground"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs md:text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3 pt-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-20 px-6 md:px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 font-serif">
                Let's Create Something Amazing
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Ready to embark on a digital journey together? Let's discuss
                your next project and bring your vision to life.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setContactModalOpen(true)}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </ScrollArea>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
}
