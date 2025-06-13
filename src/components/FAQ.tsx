
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Flutter for mobile apps, React/Next.js for web applications, and Node.js for backend development. I also work with modern databases like MongoDB and PostgreSQL, and have extensive experience with cloud platforms like AWS.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple MVPs typically take 2-4 weeks, while more complex applications can take 6-12 weeks. I provide detailed timelines during the discovery phase and keep you updated throughout the development process.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! All projects include initial support ranging from 1-6 months depending on the package. After that, I offer ongoing maintenance plans to ensure your application stays updated, secure, and performing optimally.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! I frequently collaborate with in-house teams, other developers, and agencies. I\'m comfortable working with your existing tools, processes, and can adapt to your team\'s workflow and communication preferences.'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow an agile approach with regular check-ins and demos. The process includes: Discovery & Planning → Design & Prototyping → Development & Testing → Launch & Support. You\'ll receive regular updates and have opportunities to provide feedback throughout.'
    },
    {
      question: 'Do you help with app store submissions?',
      answer: 'Yes! I handle the entire app store submission process for both iOS App Store and Google Play Store, including preparing all required assets, descriptions, and managing the review process to ensure smooth launches.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to know about working with me.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={20} 
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-white/10 mb-4"></div>
                  <p className="text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8">
            <h3 className="text-xl font-medium text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-6">
              I'm here to help! Feel free to reach out with any specific questions about your project.
            </p>
            <button className="glass-button glow-green">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
