
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 — Present",
      location: "San Francisco, CA",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and delivered 15+ successful projects for Fortune 500 clients.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
    },
    {
      title: "Mobile App Developer",
      company: "Startup Hub",
      period: "2019 — 2021",
      location: "Austin, TX",
      description: "Developed cross-platform mobile applications using Flutter and React Native. Built apps that achieved 100K+ downloads and 4.8+ app store ratings.",
      technologies: ["Flutter", "React Native", "Firebase", "Dart", "JavaScript"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2018 — 2019",
      location: "New York, NY",
      description: "Created responsive web interfaces and interactive user experiences for high-profile clients. Improved website performance by 40% through optimization techniques.",
      technologies: ["React", "Vue.js", "SASS", "Webpack", "Adobe Creative Suite"]
    }
  ];

  const education = [
    {
      title: "Master of Computer Science",
      institution: "Stanford University",
      period: "2016 — 2018",
      description: "Specialized in software engineering and artificial intelligence. Graduated magna cum laude with focus on distributed systems and machine learning."
    },
    {
      title: "Bachelor of Software Engineering",
      institution: "University of California, Berkeley",
      period: "2012 — 2016",
      description: "Comprehensive study of computer science fundamentals, algorithms, and software development methodologies. Active member of coding club and hackathon winner."
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-light">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover:bg-white/10 transition-all duration-300 section-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-light">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover:bg-white/10 transition-all duration-300 section-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">{edu.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
                      <span className="font-medium">{edu.institution}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
