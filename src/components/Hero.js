import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-accent-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{
            top: '50%',
            left: '50%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Freelance Work
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 bg-clip-text text-transparent">
                    Zaid
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary-500/50 to-accent-500/50 blur-sm"></span>
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-2xl md:text-4xl font-display font-semibold text-white/90">
                <span>I'm a</span>
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
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Multidisciplinary creative professional combining design expertise with programming skills to build beautiful and functional digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:Zaidn2848@gmail.com', label: 'Email' },
                { icon: FaPhone, href: 'tel:0777-531-318', label: 'Phone' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-dark-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-dark-900"></div>
                </div>
                
                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-dark-900 shadow-2xl">
                  <img 
                    src="/profile.png" 
                    alt="Zaid - Professional Profile" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">1+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Exp.</div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <FaArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
