import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { ContactModal } from "./contact-modal";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex items-center">
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
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-all duration-300"
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
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ScrollArea className="max-h-64 w-full">
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
                      setIsContactModalOpen(true);
                      setIsOpen(false);
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

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </nav>
  );
}
