
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: <Mail size={24} />, href: 'mailto:alex@example.com', label: 'Email' },
    { icon: <Github size={24} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to turn your idea into reality? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-light mb-8 text-white">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass-button glow-green group"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-light mb-6 text-white">Let's Connect</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Whether you need a quick consultation or want to start a full project, 
                I'm here to help bring your vision to life.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-xl font-medium text-white mb-4">Quick Response</h4>
              <p className="text-white/70 mb-4">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to mention it in your message.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
