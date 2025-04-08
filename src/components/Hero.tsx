
import { Stethoscope, ArrowDown, Sparkles } from 'lucide-react';
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
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-100 via-white to-purple-50 overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-500/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-teal-300/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/15 to-sky-500/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Added new background elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-pink-300/10 to-rose-400/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-amber-300/15 to-yellow-400/10 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white shadow-md"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content with enhanced styling */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent drop-shadow-sm">MUHAMMAD CLINIC</span>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-blue-400 opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-indigo-500 opacity-50"></div>
                <Sparkles className="absolute -right-8 -top-8 text-amber-400 animate-pulse w-8 h-8" />
              </h1>
            </div>
            <div className="mb-6 flex items-center">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 mr-4"></div>
              <span className="text-gray-700 font-medium">Healthcare Excellence</span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-800 mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Dr. Zoya Mustafa
            </h2>
            <p className={`text-lg text-gray-700 mb-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              General Physician & Paediatric Emergency Physician
            </p>
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {['M.B.B.S, DUHS', 'PEMC', 'Dip. Paediatrics, RCPI Ireland'].map((qualification, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white px-3 py-1 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {qualification}
                </span>
              ))}
            </div>
            <div className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] relative overflow-hidden group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
              <button 
                className="px-6 py-3 border-2 border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors duration-300 relative overflow-hidden group shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-indigo-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>
          
          {/* Enhanced icon/image */}
          <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-75 blur-xl animate-pulse"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-400/30 to-indigo-600/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-full transform rotate-45"></div>
                    <Stethoscope size={100} className="drop-shadow-lg animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 right-0 bg-white p-4 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl border-t-2 border-l-2 border-indigo-400/30">
                <p className="text-right font-semibold text-indigo-900">
                  <span className="block mb-1 text-sm">ماں اور بچے کی صحت ہماری ترجیح ہے</span>
                  <span className="block text-xs text-indigo-700">Mother & child health is our priority</span>
                </p>
              </div>
              
              {/* Added circular accent elements */}
              <div className="absolute -left-4 top-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 animate-pulse"></div>
              <div className="absolute right-8 bottom-16 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToServices}
            className="flex flex-col items-center text-indigo-700 hover:text-indigo-500 transition-colors group"
          >
            <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Discover More</span>
            <div className="relative">
              <div className="absolute -inset-1 bg-indigo-300/30 rounded-full blur-sm group-hover:bg-indigo-400/40 transition-colors"></div>
              <ArrowDown className="relative animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
