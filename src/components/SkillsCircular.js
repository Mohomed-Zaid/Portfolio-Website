import React, { useState, useEffect, useRef } from 'react';

const SkillsCircular = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const topSkills = [
    { name: 'Adobe Photoshop', level: 95, color: '#31A8FF' },
    { name: 'Adobe Illustrator', level: 90, color: '#FF9A00' },
    { name: 'React', level: 72, color: '#61DAFB' },
    { name: 'JavaScript', level: 70, color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'UI/UX Design', level: 88, color: '#FF6B6B' },
    { name: 'MySQL', level: 75, color: '#4479A1' },
    { name: 'Java', level: 65, color: '#007396' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const CircularProgress = ({ skill, index }) => {
    const [progress, setProgress] = useState(0);
    const size = 140;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={skill.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <p className="mt-4 text-center font-semibold text-gray-900">
          {skill.name}
        </p>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My strongest technical and creative abilities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {topSkills.map((skill, index) => (
            <CircularProgress key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCircular;
