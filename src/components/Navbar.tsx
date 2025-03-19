
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 backdrop-blur-md",
        scrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-eecp-blue fill-eecp-blue" />
            <span className="text-xl font-medium tracking-tight">Zenkardia</span>
          </a>

          {isMobile ? (
            <>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-eecp-darkGray"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Mobile menu */}
              {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur-md animate-fade-in">
                  <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
                    <a 
                      href="#about" 
                      className="hover:text-eecp-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                    <a 
                      href="#benefits" 
                      className="hover:text-eecp-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Benefits
                    </a>
                    <a 
                      href="#process" 
                      className="hover:text-eecp-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Process
                    </a>
                    <a 
                      href="#testimonials" 
                      className="hover:text-eecp-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Results
                    </a>
                    <a 
                      href="#contact" 
                      className="hover:text-eecp-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                    <Button 
                      onClick={() => {
                        document.getElementById("booking")?.scrollIntoView();
                        setIsMenuOpen(false);
                      }}
                    >
                      Book Now
                    </Button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Desktop menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <a 
                  href="#about" 
                  className="text-eecp-darkGray hover:text-eecp-blue transition-colors"
                >
                  About
                </a>
                <a 
                  href="#benefits" 
                  className="text-eecp-darkGray hover:text-eecp-blue transition-colors"
                >
                  Benefits
                </a>
                <a 
                  href="#process" 
                  className="text-eecp-darkGray hover:text-eecp-blue transition-colors"
                >
                  Process
                </a>
                <a 
                  href="#testimonials" 
                  className="text-eecp-darkGray hover:text-eecp-blue transition-colors"
                >
                  Results
                </a>
                <a 
                  href="#contact" 
                  className="text-eecp-darkGray hover:text-eecp-blue transition-colors"
                >
                  Contact
                </a>
              </nav>

              <Button 
                onClick={() => document.getElementById("booking")?.scrollIntoView()}
              >
                Book Appointment
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
