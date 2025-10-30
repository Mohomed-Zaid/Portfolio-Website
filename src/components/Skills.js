import React from 'react';
import { FaPalette, FaCode, FaTools, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaPalette />,
      title: 'Design & Creative Tools',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Canva', level: 85 },
        { name: 'UI Design Principles', level: 88 },
        { name: 'Color Theory', level: 90 },
        { name: 'Branding', level: 85 },
        { name: 'Visual Communication', level: 92 },
        { name: 'Typography', level: 88 }
      ]
    },
    {
      icon: <FaCode />,
      title: 'Programming & Web Technologies',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 88 },
        { name: 'JavaScript (Learning)', level: 70 },
        { name: 'Java (OOP - Beginner)', level: 65 },
        { name: 'MySQL', level: 75 },
        { name: 'React', level: 72 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Relational Database Concepts', level: 75 }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Productivity & Collaboration',
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Microsoft Word', level: 90 },
        { name: 'Microsoft Excel', level: 85 },
        { name: 'Microsoft PowerPoint', level: 88 },
        { name: 'Google Drive', level: 92 },
        { name: 'Remote Collaboration', level: 90 },
        { name: 'Time Management', level: 88 },
        { name: 'Client Communication', level: 90 }
      ]
    },
    {
      icon: <FaGitAlt />,
      title: 'Version Control',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'GitHub', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse skill set combining creative design with technical development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`text-4xl bg-gradient-to-r ${category.color} text-white p-4 rounded-xl mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
