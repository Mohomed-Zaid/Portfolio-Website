import React from 'react';
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Professional Summary
            </h3>
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

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Languages</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  English (Fluent)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Tamil
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sinhala
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Interests</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Front-End Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Digital Branding
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Technology Trends
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Backend Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
