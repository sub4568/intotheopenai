import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="group flex items-center"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative bg-white">
              <img 
                src="/into.png" 
                alt="intotheopen" 
                className="h-8 w-auto group-hover:opacity-90 transition-opacity duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 font-semibold hover:text-primary-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://intotheopen-144935016950.us-west1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#164B82] hover:bg-[#2F679F] text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent hover:translate-x-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;