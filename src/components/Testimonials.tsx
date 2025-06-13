
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      company: 'TechStart Inc.',
      content: 'Alex delivered our Flutter app in just 3 weeks. The quality exceeded our expectations and user retention increased by 2x within the first month.',
      rating: 5,
      highlight: 'Delivered in 3 weeks'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO, GrowthLab',
      company: 'GrowthLab',
      content: 'The React dashboard Alex built handles our 10k+ daily users flawlessly. Clean code, perfect documentation, and ongoing support has been exceptional.',
      rating: 5,
      highlight: '10k+ daily users'
    },
    {
      name: 'Emily Watson',
      role: 'Founder, MindfulApp',
      company: 'MindfulApp',
      content: 'Working with Alex was a game-changer. The cross-platform solution saved us months of development time and the app performance is incredible.',
      rating: 5,
      highlight: 'Saved months of time'
    },
    {
      name: 'David Park',
      role: 'Product Manager, FinanceFlow',
      company: 'FinanceFlow',
      content: 'Alex transformed our complex requirements into an elegant solution. The Node.js backend handles our payment processing with 99.9% uptime.',
      rating: 5,
      highlight: '99.9% uptime'
    }
  ];

  const featuredLogos = [
    'TechStart',
    'GrowthLab',
    'MindfulApp',
    'FinanceFlow',
    'DevCorp',
    'StartupX'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured In Section */}
        <div className="text-center mb-20">
          <h3 className="text-lg font-light text-white/60 mb-8 uppercase tracking-wider">
            Featured In
          </h3>
          <div className="glass-card p-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {featuredLogos.map((logo) => (
                <div 
                  key={logo}
                  className="text-white/40 font-light text-lg hover:text-white/60 transition-colors duration-300"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-primary" />
                ))}
              </div>
              
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                {testimonials[currentIndex].highlight}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                <span className="text-black font-medium">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{testimonials[currentIndex].name}</div>
                <div className="text-white/60">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="glass-button p-3 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="glass-button p-3 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
