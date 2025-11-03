import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
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
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full flex items-center gap-2">
              <FaStar className="animate-pulse" />
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selected projects showcasing my development skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
              }`}
            >
              {activeFilter === category && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color} group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

              <div className="relative p-8">
                {/* Category Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r ${project.color} rounded-full shadow-md`}>
                    {project.category}
                  </span>
                  {hoveredProject === index && (
                    <div className="animate-bounce">
                      <FaStar className="text-yellow-400" size={20} />
                    </div>
                  )}
                </div>
                
                {/* Project Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-gray-100">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>View</span>
                  </a>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
