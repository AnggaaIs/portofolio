import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface PalestineBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export function PalestineBanner({ onVisibilityChange }: PalestineBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("palestine-banner-dismissed");
    const dismissTime = localStorage.getItem("palestine-banner-dismiss-time");

    if (dismissed && dismissTime) {
      const daysSince =
        (Date.now() - parseInt(dismissTime)) / (1000 * 60 * 60 * 24);
      if (daysSince >= 7) {
        localStorage.removeItem("palestine-banner-dismissed");
        localStorage.removeItem("palestine-banner-dismiss-time");
        setIsVisible(true);
        onVisibilityChange?.(true);
      } else {
        setIsVisible(false);
        onVisibilityChange?.(false);
      }
    } else {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }
  }, [onVisibilityChange]);

  const handleDismiss = () => {
    setIsVisible(false);
    onVisibilityChange?.(false);

    localStorage.setItem("palestine-banner-dismissed", "true");
    localStorage.setItem(
      "palestine-banner-dismiss-time",
      Date.now().toString()
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-4 py-4 flex items-center justify-between min-h-[4rem]">
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          <img
            src="/palestine.png"
            alt="Palestine Flag"
            className="w-6 h-4 md:w-8 md:h-6 object-cover rounded shadow-sm border border-border flex-shrink-0"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <p className="text-xs md:text-sm font-medium text-foreground truncate">
              🕊️ Stand with Palestine - Free Palestine
            </p>
            <p className="text-xs text-muted-foreground hidden md:block">
              Supporting peace, justice, and human rights for all
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0 ml-2">
          <a
            href="https://www.pcrf.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2 md:px-3 py-1 bg-accent/20 hover:bg-accent/30 text-accent rounded-full transition-colors duration-200 font-medium whitespace-nowrap"
          >
            <span className="hidden sm:inline">Donate</span>
            <span className="sm:hidden">💝</span>
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground hover:bg-muted p-1 h-7 w-7 md:h-8 md:w-8 flex-shrink-0"
            aria-label="Dismiss banner"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
