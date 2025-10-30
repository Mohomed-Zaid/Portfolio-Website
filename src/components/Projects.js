import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'GreenLife Wellness Center',
      description: 'Developed a dynamic web application for holistic health management, including secure login, appointment scheduling, client record management, and therapist communication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      color: 'from-green-500 to-emerald-600',
      category: 'Web Application',
      github: 'https://github.com/Mohomed-Zaid/greenlife_wellness-Web'
    },
    {
      title: 'LuxeVista Resort',
      description: 'Built a native Android application for a luxury beachfront hotel, enabling room booking, service reservations, user profiles, and local attractions features with SQLite database integration.',
      technologies: ['Android', 'Java', 'SQLite', 'UI Components'],
      color: 'from-blue-500 to-cyan-600',
      category: 'Mobile Application',
      github: 'https://github.com/Mohomed-Zaid/LuxeVista-App'
    },
    {
      title: 'GreenGrid',
      description: 'Developed a full-stack web application for energy management and monitoring, implementing interactive maps, dynamic data visualization, and server-side APIs using modern web technologies.',
      technologies: ['Full-Stack', 'Web APIs', 'Data Visualization', 'Interactive Maps'],
      color: 'from-teal-500 to-green-600',
      category: 'Web Application',
      github: 'https://github.com/Mohomed-Zaid/GreenGrid'
    },
    {
      title: 'Movie Web Application',
      description: 'Built an interactive movie web application featuring movie browsing, search functionality, detailed movie information, and a modern responsive user interface.',
      technologies: ['React', 'JavaScript', 'API Integration', 'Responsive Design'],
      color: 'from-red-500 to-orange-600',
      category: 'Web Application',
      github: 'https://github.com/Mohomed-Zaid/Movie-Web-Application'
    },
    {
      title: 'BrainWave AI Pricing Web App',
      description: 'Created a modern AI pricing website with sleek design, showcasing AI services and pricing plans with beautiful animations and user-friendly interface.',
      technologies: ['React', 'Tailwind CSS', 'Modern UI', 'Animations'],
      color: 'from-purple-500 to-pink-600',
      category: 'Web Application',
      github: 'https://github.com/Mohomed-Zaid/Brainwave-main-Ai-pricing-Website-'
    }
  ];

  const categories = ['All', 'Web Application', 'Mobile Application'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selected projects showcasing my development skills
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${project.color} rounded-full`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
