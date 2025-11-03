import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaPalette, FaRocket, FaUsers, FaAward, FaBrain } from 'react-icons/fa';

const About = () => {
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

  const highlights = [
    {
      icon: <FaPalette />,
      title: 'Creative Design',
      description: 'Expert in Adobe Suite, creating visually stunning designs'
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building modern web applications with latest technologies'
    },
    {
      icon: <FaRocket />,
      title: 'Problem Solver',
      description: 'Passionate about merging design thinking with technology'
    },
    {
      icon: <FaUsers />,
      title: 'Team Player',
      description: 'Excellent at remote collaboration and communication'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full">
              Get To Know Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Professional Summary */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
              <div className="pl-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white">
                      <FaBrain size={24} />
                    </span>
                    Professional Summary
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Multidisciplinary and self-driven creative professional with over a year of experience as a freelance graphic designer and a strong foundation in software engineering.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Currently pursuing a Higher National Diploma in Software Engineering at ICBT Campus (Cardiff Metropolitan). I combine creative design expertise with programming, web development, and database skills.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Adept at remote collaboration, time management, and delivering polished, on-brand digital solutions. Passionate about merging design-thinking with technology to build beautiful and functional user experiences.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl border border-primary-200">
                    <div className="text-3xl font-bold text-primary-600 mb-1">1+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-4 rounded-xl border border-accent-200">
                    <div className="text-3xl font-bold text-accent-600 mb-1">5+</div>
                    <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl mb-4 bg-gradient-to-br from-primary-500 to-accent-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Card */}
        <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white">
              <FaAward size={24} />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-900">Additional Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold">🌐</span>
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Languages</h4>
              </div>
              <ul className="space-y-3">
                {['English (Fluent)', 'Tamil', 'Sinhala'].map((lang, idx) => (
                  <li key={idx} className="flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span className="text-accent-600 font-bold">💡</span>
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-accent-600 to-purple-600 bg-clip-text text-transparent">Interests</h4>
              </div>
              <ul className="space-y-3">
                {['UI/UX Design', 'Front-End Development', 'Digital Branding', 'Technology Trends', 'Backend Development'].map((interest, idx) => (
                  <li key={idx} className="flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
