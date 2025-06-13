
import { Code, Settings, ArrowRight } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Flutter',
      description: 'Cross-platform mobile apps with native performance',
      technologies: ['Dart', 'Firebase', 'Provider', 'Bloc']
    },
    {
      icon: <Settings size={32} />,
      title: 'React',
      description: 'Modern web applications with cutting-edge UX',
      technologies: ['TypeScript', 'Next.js', 'Tailwind', 'Zustand']
    },
    {
      icon: <Code size={32} />,
      title: 'Node.js',
      description: 'Scalable backend systems and APIs',
      technologies: ['Express', 'MongoDB', 'PostgreSQL', 'Docker']
    },
    {
      icon: <Settings size={32} />,
      title: 'Cloud & DevOps',
      description: 'AWS infrastructure and CI/CD pipelines',
      technologies: ['AWS', 'GitHub Actions', 'Terraform', 'Docker']
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery & Goals',
      description: 'Deep dive into your business needs, target audience, and technical requirements'
    },
    {
      step: '02',
      title: 'Design & Build',
      description: 'Rapid prototyping and development using modern frameworks and best practices'
    },
    {
      step: '03',
      title: 'Launch & Iterate',
      description: 'Deployment, monitoring, and continuous improvement based on user feedback'
    }
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* About Me */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <p className="text-xl text-white/80 leading-relaxed">
              I'm a senior full-stack developer with 5+ years of experience building 
              high-performance applications for startups and scale-ups. My passion lies 
              in transforming complex ideas into elegant, user-friendly solutions that 
              drive business growth and exceed user expectations.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-32">
          <h3 className="text-3xl font-light text-center mb-16">
            Skills & <span className="text-gradient">Stack</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="glass-card p-8 group hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-medium mb-3 text-white">{skill.title}</h4>
                <p className="text-white/70 mb-4 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How I Work */}
        <div>
          <h3 className="text-3xl font-light text-center mb-16">
            How I <span className="text-gradient">Work</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <div 
                key={process.step}
                className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-light text-primary mb-4">{process.step}</div>
                <h4 className="text-xl font-medium mb-4 text-white">{process.title}</h4>
                <p className="text-white/70">{process.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-primary mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-32">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center border border-primary/20 glow-green">
            <h3 className="text-2xl font-light mb-6 text-gradient">My Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To empower startups and growing businesses with technology that doesn't just work—
              it scales, performs, and delights users. Every line of code I write is crafted 
              with precision, scalability, and user experience at its core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
