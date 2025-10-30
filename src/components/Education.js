import React from 'react';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Higher National Diploma (HND) in Software Engineering',
      institution: 'ICBT Campus (Cardiff Metropolitan)',
      period: '2024 - Present',
      location: 'Cardiff Metropolitan',
      modules: [
        'Object-Oriented Programming',
        'Web Technologies',
        'Database Systems',
        'Agile Development'
      ],
      color: 'from-blue-600 to-blue-800'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'ICBT Campus (Cardiff Metropolitan)',
      period: 'Mar 2023 - Sep 2023',
      location: 'Cardiff Metropolitan',
      coursework: [
        'Computer Fundamentals',
        'Networking',
        'Office Tools',
        'Basics of Programming'
      ],
      color: 'from-purple-600 to-purple-800'
    },
    {
      degree: 'Professional Certificate in Graphic Design',
      institution: 'VISTA Academy',
      period: 'Feb 2023 - Aug 2023',
      location: 'VISTA Academy',
      mastery: [
        'Adobe Suite Mastery',
        'Visual Communication',
        'Branding Principles',
        'Typography'
      ],
      color: 'from-pink-600 to-rose-800'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className={`bg-gradient-to-r ${edu.color} text-white p-4 rounded-xl mr-4`}>
                        <FaGraduationCap size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-gray-700 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center">
                            <FaCalendar className="mr-2" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {edu.modules ? 'Key Modules:' : edu.coursework ? 'Coursework:' : 'Mastery:'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {(edu.modules || edu.coursework || edu.mastery).map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 text-center hover:bg-gray-100 transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
