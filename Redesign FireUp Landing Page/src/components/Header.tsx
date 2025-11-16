import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  currentPage: 'home' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

export function Header({ cartCount, onCartClick, currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'contact', section?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    
    if (section) {
      // Scroll to section after navigation
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">F</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white uppercase tracking-wider">Fire Up</h1>
              <p className="text-xs text-orange-400 -mt-1">Energy Drink</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('home')}
              className={`${currentPage === 'home' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('home', 'product')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Product
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`${currentPage === 'about' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`${currentPage === 'contact' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              Contact
            </button>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={onCartClick}
              className="relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black hover:bg-yellow-400">
                  {cartCount}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-left ${currentPage === 'home' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('home', 'product')}
              className="text-left text-white hover:text-orange-400 transition-colors"
            >
              Product
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`text-left ${currentPage === 'about' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`text-left ${currentPage === 'contact' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors`}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
