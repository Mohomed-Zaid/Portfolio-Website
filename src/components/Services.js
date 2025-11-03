import React, { useEffect, useRef, useState } from 'react';
import { FaPalette, FaCode, FaMobile, FaPencilRuler, FaBullhorn, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Creating stunning visual designs including logos, posters, social media content, and branding materials.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building modern, responsive websites and web applications using latest technologies and best practices.',
      features: ['React Development', 'Responsive Design', 'Database Integration', 'API Development'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaPencilRuler />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces with focus on user experience and accessibility.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Developing native Android applications with modern UI components and seamless user experience.',
      features: ['Android Development', 'Java/Kotlin', 'SQLite Integration', 'Material Design'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Branding',
      description: 'Creating cohesive brand identities that resonate with your target audience across all platforms.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Materials'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services from database design to front-end implementation.',
      features: ['Database Design', 'Backend APIs', 'Frontend Development', 'Deployment'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full">
              What I Do
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Services I <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design and development services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient Border Top */}
              <div className={`h-1.5 bg-gradient-to-r ${service.color} group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <div className="text-3xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700 group/item">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover/item:scale-150 transition-transform`}></div>
                      <span className="text-sm group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
