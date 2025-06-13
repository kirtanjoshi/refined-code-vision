
import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, MessageSquare, HelpCircle, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card px-6 py-3 relative overflow-hidden">
            <div className="absolute inset-0 animated-bg"></div>
            <div className="relative flex items-center justify-between">
              <div className="text-xl font-light text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                   onClick={() => handleNavClick('hero')}>
                <span className="text-gradient">ALEX</span> DEVELOPER
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item group relative px-4 py-2 text-sm font-light transition-all duration-300 rounded-lg ${
                      activeSection === item.id 
                        ? 'text-primary bg-white/10' 
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
                      <div className="absolute bottom-0 left-0 right-0 nav-indicator" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-6 h-6">
                  <Menu size={24} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`} />
                  <X size={24} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`} />
                </div>
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
        
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full glass-card rounded-l-3xl border-r-0 relative overflow-hidden">
            <div className="absolute inset-0 animated-bg"></div>
            <div className="relative p-6 pt-20">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'bg-white/20 text-primary scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-102'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isOpen ? 'slideIn 0.5s ease-out backwards' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
