
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Zap, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-black/80' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`glass-card px-6 py-3 relative overflow-hidden transition-all duration-500 ${
            scrolled ? 'bg-white/5 border-white/20' : 'bg-white/10 border-white/10'
          }`}>
            <div className="absolute inset-0 animated-bg"></div>
            <div className="relative flex items-center justify-between">
              <div 
                className="text-xl font-light text-white cursor-pointer hover:scale-105 transition-transform duration-300 group"
                onClick={() => handleNavClick('hero')}
              >
                <span className="text-gradient group-hover:animate-pulse">ALEX</span> 
                <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">DEVELOPER</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item group relative px-4 py-2 text-sm font-light transition-all duration-300 rounded-lg transform hover:scale-105 ${
                      activeSection === item.id 
                        ? 'text-primary bg-white/10 shadow-lg scale-105' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'slideIn 0.5s ease-out backwards'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>{item.label}</span>
                    </div>
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 nav-indicator animate-pulse" />
                    )}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <div className="relative w-6 h-6">
                  <Menu size={24} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                  <X size={24} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'}`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} onClick={() => setIsOpen(false)} />
        
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full glass-card rounded-l-3xl border-r-0 relative overflow-hidden">
            <div className="absolute inset-0 animated-bg opacity-50"></div>
            <div className="relative p-6 pt-20">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      activeSection === item.id
                        ? 'bg-white/20 text-primary scale-105 shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-102'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isOpen ? 'slideIn 0.5s ease-out backwards' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <item.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {activeSection === item.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 text-center">
                  <p className="text-white/70 text-sm mb-2">Ready to work together?</p>
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="glass-button glow-green w-full"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
