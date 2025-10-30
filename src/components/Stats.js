import React, { useState, useEffect, useRef } from 'react';
import { FaProjectDiagram, FaUsers, FaCode, FaAward } from 'react-icons/fa';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: <FaProjectDiagram />,
      value: 15,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaUsers />,
      value: 10,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaCode />,
      value: 12,
      label: 'Technologies',
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaAward />,
      value: 2,
      label: 'Years Experience',
      suffix: '+',
      color: 'from-orange-500 to-red-500'
    }
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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return (
      <span className="text-5xl md:text-6xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Impact
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Numbers that showcase my journey and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-5xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent inline-block`}>
                {stat.icon}
              </div>
              <div className="text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
