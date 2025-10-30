import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const achievements = [
    'Delivered 10+ custom design projects for startups, personal brands, and local businesses, consistently meeting client objectives and deadlines',
    'Created logos, social media content, posters, and branding kits that visually aligned with clients\' goals and brand identities',
    'Utilized Adobe Photoshop, Illustrator, and Canva to produce high-quality digital assets',
    'Managed end-to-end client communication, revisions, and feedback loops independently, ensuring high client satisfaction',
    'Demonstrated strong time management and remote collaboration skills while balancing multiple projects simultaneously'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world experience delivering quality design solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="p-8 md:p-12">
              <div className="flex items-start mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl mr-6">
                  <FaBriefcase size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Freelance Graphic Designer
                  </h3>
                  <p className="text-xl text-gray-700 font-semibold mb-3">
                    Remote
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span className="font-medium">2024 - 2025</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Remote Work</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Achievements & Responsibilities
                </h4>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-green-500 text-xl" />
                      </div>
                      <p className="ml-4 text-gray-700 text-lg leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Tools & Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Client Communication', 'Time Management', 'Remote Collaboration'].map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-shadow"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
