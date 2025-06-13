
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "Node.js / Express", level: 90, category: "Backend" },
    { name: "Flutter / Dart", level: 88, category: "Mobile" },
    { name: "TypeScript", level: 92, category: "Language" },
    { name: "Python", level: 85, category: "Language" },
    { name: "AWS / Cloud", level: 82, category: "DevOps" },
    { name: "MongoDB / PostgreSQL", level: 87, category: "Database" },
    { name: "Docker / Kubernetes", level: 80, category: "DevOps" },
    { name: "GraphQL", level: 78, category: "API" },
    { name: "React Native", level: 83, category: "Mobile" }
  ];

  const categories = ["All", "Frontend", "Backend", "Mobile", "Language", "DevOps", "Database", "API"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-light">Skills & <span className="text-gradient">Expertise</span></h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card p-6 section-transition"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                  <span className="text-xs text-white/50 px-2 py-1 bg-white/5 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                {isVisible && (
                  <div 
                    className="absolute top-0 h-2 bg-primary/30 rounded-full blur-sm transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20">
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-light text-primary">5+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-primary">50+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-primary">15+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-primary">100%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
