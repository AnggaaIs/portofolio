import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useState, useEffect, useRef } from "react";

interface NavbarProps {
  isBannerVisible?: boolean;
}

export function Navbar({ isBannerVisible = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-500 ease-in-out ${
        isBannerVisible ? "top-[4rem]" : "top-0"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex items-center space-x-3">
            <img
              src="/me.jpg"
              alt="Angga Islami Pasya"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary/20"
            />
            <a
              href="/"
              className="text-xl font-bold text-foreground font-serif hover:text-primary transition-colors duration-300"
            >
              Angga<span className="text-primary"> Pasya</span>
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA Buttons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/AnggaaIs/portofolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
              aria-label="View source code on GitHub"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Portfolio
            </Button>
            <Button
              size="sm"
              className="hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" className="animate-pulse" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ScrollArea className="max-h-80 w-full">
            <div className="pb-4">
              {/* Navigation Links */}
              <div className="px-4 pt-3 pb-3 space-y-1 border-t border-border/30">
                <a
                  href="#about"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
                <a
                  href="https://github.com/AnggaaIs/portofolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </div>

              <div className="px-4 pt-4 pb-2 border-t border-border/30 mt-2">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs h-9"
                    onClick={() => scrollToSection("projects")}
                  >
                    Portfolio
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 text-xs h-9"
                    onClick={() => {
                      scrollToSection("contact");
                    }}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </nav>
  );
}
