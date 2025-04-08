
import { Stethoscope, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-secondary-light to-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-light/5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-dark/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-primary-light/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 relative">
              <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">MUHAMMAD CLINIC</span>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-primary-light opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-primary-dark opacity-50"></div>
            </h1>
            <div className="mb-6 flex items-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary-dark to-primary-light mr-4"></div>
              <span className="text-gray-600 font-medium">Healthcare Excellence</span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-700 mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Dr. Zoya Mustafa
            </h2>
            <p className={`text-lg text-gray-600 mb-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              General Physician & Paediatric Emergency Physician
            </p>
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {['M.B.B.S, DUHS', 'PEMC', 'Dip. Paediatrics, RCPI Ireland'].map((qualification, index) => (
                <span 
                  key={index}
                  className="bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-dark hover:text-white transition-colors duration-300"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {qualification}
                </span>
              ))}
            </div>
            <div className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-primary-dark to-primary-light text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Appointment
              </button>
              <button 
                className="px-6 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors duration-300 relative overflow-hidden group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-primary-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>
          
          {/* Image/Icon */}
          <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-primary-dark/10 rounded-full mx-auto flex items-center justify-center animate-pulse">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-primary-dark/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-primary-dark to-primary-light rounded-full flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 animate-spin-slow"></div>
                    <Stethoscope size={100} className="drop-shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 right-0 bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
                <p className="text-right font-semibold text-primary-dark">
                  <span className="block mb-1 text-sm">ماں اور بچے کی صحت ہماری ترجیح ہے</span>
                  <span className="block text-xs text-gray-600">Mother & child health is our priority</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <button 
            onClick={scrollToServices}
            className="flex flex-col items-center text-primary-dark hover:text-primary-light transition-colors"
          >
            <span className="text-sm mb-2 opacity-80">Discover More</span>
            <ArrowDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
