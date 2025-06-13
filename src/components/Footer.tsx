
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-light text-white mb-4">
                <span className="text-gradient">ALEX</span> DEVELOPER
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Building powerful, scalable applications that drive growth and exceed expectations. 
                Let's create something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-white/60 text-sm">Email</div>
                  <a 
                    href="mailto:alex@example.com"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    alex@example.com
                  </a>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white/80">San Francisco, CA</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Availability</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary text-sm">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white/60 text-sm">
                © {currentYear} Alex Developer. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                Made with <Heart size={16} className="text-primary" fill="currentColor" /> 
                using React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
