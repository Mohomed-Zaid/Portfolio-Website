import React from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaRocket } from 'react-icons/fa';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2024 - Present',
      title: 'Freelance Graphic Designer',
      description: 'Delivering custom design projects for startups and local businesses. Created 10+ projects including logos, branding kits, and social media content.',
      icon: <FaBriefcase />,
      color: 'from-blue-500 to-cyan-500',
      type: 'work'
    },
    {
      year: '2024 - Present',
      title: 'HND in Software Engineering',
      description: 'Currently pursuing Higher National Diploma at ICBT Campus (Cardiff Metropolitan), focusing on Object-Oriented Programming, Web Technologies, and Database Systems.',
      icon: <FaGraduationCap />,
      color: 'from-purple-500 to-pink-500',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Diploma in Information Technology',
      description: 'Completed comprehensive IT diploma covering Computer Fundamentals, Networking, Office Tools, and Programming Basics at ICBT Campus.',
      icon: <FaGraduationCap />,
      color: 'from-green-500 to-emerald-500',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Professional Certificate in Graphic Design',
      description: 'Mastered Adobe Suite, Visual Communication, Branding Principles, and Typography at VISTA Academy.',
      icon: <FaAward />,
      color: 'from-orange-500 to-red-500',
      type: 'achievement'
    },
    {
      year: '2023',
      title: 'Started Freelance Journey',
      description: 'Began freelance career, working with multiple clients on diverse design projects, building portfolio and client relationships.',
      icon: <FaRocket />,
      color: 'from-pink-500 to-rose-500',
      type: 'milestone'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional and educational milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${event.color} mb-3`}>
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {event.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
