
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="font-bold text-xl md:text-2xl cursor-pointer text-primary-dark"
          onClick={() => scrollToSection('hero')}
        >
          MUHAMMAD CLINIC
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'timings', 'contact'].map((item) => (
            <button
              key={item}
              className="capitalize font-medium text-gray-700 hover:text-primary-dark transition-colors"
              onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-primary-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4 p-4">
            {['home', 'about', 'services', 'timings', 'contact'].map((item) => (
              <button
                key={item}
                className="capitalize font-medium text-gray-700 hover:text-primary-dark transition-colors py-2 border-b border-gray-100"
                onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
