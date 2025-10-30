import React from 'react';
import { FaPalette, FaCode, FaMobile, FaPencilRuler, FaBullhorn, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design and development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`text-5xl mb-6 bg-gradient-to-r ${service.color} text-white p-4 rounded-xl inline-block group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
