import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm a
              </h1>
              <TypeAnimation
                sequence={[
                  'Graphic Designer',
                  2000,
                  'Web Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
                repeat={Infinity}
              />
              <h2 className="text-3xl md:text-4xl font-semibold">
                Creating Beautiful Digital Experiences
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Multidisciplinary creative professional combining design expertise with programming skills to build beautiful and functional digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors transform hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors transform hover:scale-110">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:Zaidn2848@gmail.com" className="text-white hover:text-yellow-300 transition-colors transform hover:scale-110">
                <FaEnvelope size={28} />
              </a>
              <a href="tel:0777-531-318" className="text-white hover:text-yellow-300 transition-colors transform hover:scale-110">
                <FaPhone size={28} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-300 to-pink-300 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 px-6 py-3 rounded-full shadow-xl font-semibold">
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
