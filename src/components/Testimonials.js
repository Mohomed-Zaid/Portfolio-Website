import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      company: 'TechVenture',
      image: '👩‍💼',
      rating: 5,
      text: 'Outstanding work! The logo and branding materials exceeded our expectations. Professional, creative, and delivered on time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthHub',
      image: '👨‍💼',
      rating: 5,
      text: 'Excellent designer with great attention to detail. Created stunning social media content that significantly boosted our engagement.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      company: 'Local Café',
      image: '👩‍🍳',
      rating: 5,
      text: 'Very talented and easy to work with. Understood our vision perfectly and brought it to life with beautiful designs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Kumar',
      role: 'Product Manager',
      company: 'InnovateLabs',
      image: '👨‍💻',
      rating: 5,
      text: 'Great communication and quick turnaround. The web application was exactly what we needed. Highly recommended!',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Lisa Anderson',
      role: 'Event Coordinator',
      company: 'EventPro',
      image: '👩‍🎨',
      rating: 5,
      text: 'Creative, professional, and reliable. Delivered high-quality posters and promotional materials for our events.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'James Wilson',
      role: 'E-commerce Owner',
      company: 'ShopSmart',
      image: '👨‍🏫',
      rating: 5,
      text: 'Fantastic experience working together. The branding kit was comprehensive and perfectly captured our brand identity.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} rounded-t-2xl`}></div>
              
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
