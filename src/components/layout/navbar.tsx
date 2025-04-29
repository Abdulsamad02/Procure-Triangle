import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <Container>
        <motion.nav 
          className="flex items-center justify-between py-4" 
          aria-label="Global"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 relative overflow-hidden group">
              <span className="sr-only">Rehoboth Glow Technology</span>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-lg">RG</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary-700 group-hover:text-primary-600 transition-colors">Rehoboth Glow</div>
                  <div className="text-xs text-primary-500">Technology Nigeria</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-primary-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-1.5">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/' && location.pathname.startsWith(item.href));
                
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    isActive 
                      ? "text-primary-600" 
                      : "text-gray-700 hover:text-primary-600"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      className="absolute inset-0 bg-primary-50 rounded-full -z-10"
                      layoutId="navbar-active-pill"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              size="sm" 
              className="rounded-full px-5 shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-1.5">
                Get a Quote
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </Link>
            </Button>
          </div>
        </motion.nav>
      </Container>
      
      {/* Mobile menu */}
      <motion.div 
        className={cn("lg:hidden fixed inset-0 z-50 bg-black/30 backdrop-blur-sm", mobileMenuOpen ? "block" : "hidden")}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <motion.div 
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm"
          initial={{ x: "100%" }}
          animate={{ x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rehoboth Glow Technology</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RG</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary-700">Rehoboth Glow</div>
                  <div className="text-xs text-primary-500">Technology Nigeria</div>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-1 py-6">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href !== '/' && location.pathname.startsWith(item.href));
                    
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 text-base font-medium rounded-lg transition-all",
                        isActive 
                          ? "bg-primary-50 text-primary-600" 
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Button 
                  className="w-full rounded-full"
                  asChild
                >
                  <Link to="/contact">
                    Get a Quote
                  </Link>
                </Button>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2">Need assistance?</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+2341234567890">+234 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
} 