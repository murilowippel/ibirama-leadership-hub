
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navigationItems = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
    { name: "Associe-se", href: "/associe-se" },
    { name: "Notícias", href: "/noticias" },
    { name: "Contato", href: "/contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/affd7bc5-b805-4cd9-a5c1-fb403d50527f.png"
            alt="JCI Ibirama Logo"
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-jci-blue ${
                location.pathname === item.href
                  ? "text-jci-blue font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-jci-blue hover:bg-jci-darkBlue">
            <Link to="/associe-se">Associe-se</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`p-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-jci-gray text-jci-blue font-semibold"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-jci-blue hover:bg-jci-darkBlue">
              <Link to="/associe-se">Associe-se</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
