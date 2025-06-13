
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { users: "10K+", revenue: "$2M+", performance: "98%" }
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app developed with Flutter, featuring personalized workout plans, progress tracking, and social features for fitness enthusiasts.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "Dart", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { downloads: "50K+", rating: "4.8/5", retention: "75%" }
    },
    {
      title: "AI Dashboard",
      description: "Modern dashboard for AI model management and monitoring, built with React and Python backend, featuring real-time metrics and interactive visualizations.",
      image: "/placeholder.svg",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { models: "100+", accuracy: "94%", uptime: "99.9%" }
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management platform with real-time updates, team communication, and advanced reporting capabilities for growing teams.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Prisma", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { teams: "500+", projects: "5K+", satisfaction: "96%" }
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-light">Featured <span className="text-gradient">Projects</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover:bg-white/10 transition-all duration-500 cursor-pointer section-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="aspect-video flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">P</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-medium text-primary">{value}</div>
                      <div className="text-xs text-white/60 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-primary hover:bg-primary/30 transition-all duration-300 group">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 inline-block">
            <h3 className="text-2xl font-light mb-4">Want to see more?</h3>
            <p className="text-white/70 mb-6">Check out my GitHub for additional projects and contributions</p>
            <button className="glass-button glow-green group">
              <span className="flex items-center gap-2">
                View All Projects
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
