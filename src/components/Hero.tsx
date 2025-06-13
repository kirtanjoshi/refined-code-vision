
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card p-12 md:p-20 text-center section-transition">
          <div className="mb-8">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 mb-6 animate-pulse">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-black">A</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            I Build <span className="text-gradient">Powerful Apps</span>
            <br />
            Using Flutter, React & Node.js
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light">
            Helping startups go to market faster with modern, scalable codebases 
            that drive growth and user engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="glass-button glow-green group">
              <span className="flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="glass-button group">
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
          
          <div className="mt-16">
            <div className="glass-card p-8 inline-block hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-12">
                <div className="text-center">
                  <div className="text-3xl font-light text-primary mb-2">50+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Projects</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-light text-primary mb-2">5+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Years</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-light text-primary mb-2">100%</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
