
import { Check, Star } from 'lucide-react';

const Services = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'per project',
      description: 'Perfect for MVPs and small applications',
      features: [
        'Single platform (Web or Mobile)',
        'Basic authentication',
        'Up to 5 screens/pages',
        'Database integration',
        '2 weeks delivery',
        '1 month support'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$5,000',
      period: 'per project',
      description: 'Ideal for growing startups and established businesses',
      features: [
        'Cross-platform solution',
        'Advanced authentication',
        'Up to 15 screens/pages',
        'API development',
        'Payment integration',
        'Admin dashboard',
        '4 weeks delivery',
        '3 months support'
      ],
      buttonText: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Large-scale applications with complex requirements',
      features: [
        'Full-stack development',
        'Microservices architecture',
        'Advanced analytics',
        'Third-party integrations',
        'DevOps & deployment',
        'Custom features',
        'Flexible timeline',
        '6 months support'
      ],
      buttonText: 'Contact Us',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Services & <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transparent pricing for high-quality development. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`glass-card p-8 relative group hover:bg-white/10 transition-all duration-300 ${
                plan.popular ? 'border-primary/50 glow-green' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-2 rounded-full flex items-center gap-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium text-black">Recommended</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light text-primary">{plan.price}</span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-white/70">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-black hover:shadow-lg hover:shadow-primary/25' 
                    : 'glass-button hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-white mb-4">Need something custom?</h3>
            <p className="text-white/70 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <button className="glass-button glow-green">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
