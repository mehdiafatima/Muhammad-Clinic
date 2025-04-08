
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
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-[#0A2342] via-[#124072] to-[#1A5F7A] overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#0A2342]/30 to-[#124072]/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1A5F7A]/20 to-[#2C7DA0]/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles with blue tones */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-[#89C2D9]/30 shadow-md"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
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
          {/* Text Content with professional blue styling */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-[#89C2D9] via-[#61A5C2] to-[#2C7DA0] bg-clip-text text-transparent drop-shadow-sm">MUHAMMAD CLINIC</span>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#1A5F7A] opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#0A2342] opacity-50"></div>
                <Sparkles className="absolute -right-8 -top-8 text-[#61A5C2] animate-pulse w-8 h-8" />
              </h1>
            </div>
            <div className="mb-6 flex items-center">
              <div className="h-1 w-20 bg-gradient-to-r from-[#2C7DA0] via-[#1A5F7A] to-[#0A2342] mr-4"></div>
              <span className="text-[#89C2D9] font-medium">Healthcare Excellence</span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-semibold text-[#F0F3BD] mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Dr. Zoya Mustafa
            </h2>
            <p className={`text-lg text-[#89C2D9] mb-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              General Physician & Paediatric Emergency Physician
            </p>
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {['M.B.B.S, DUHS', 'PEMC', 'Dip. Paediatrics, RCPI Ireland'].map((qualification, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-[#1A5F7A]/80 to-[#0A2342]/80 text-[#89C2D9] px-3 py-1 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {qualification}
                </span>
              ))}
            </div>
            <div className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-[#2C7DA0] to-[#1A5F7A] text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] relative overflow-hidden group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#1A5F7A] to-[#0A2342] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
              <button 
                className="px-6 py-3 border-2 border-[#61A5C2] text-[#89C2D9] rounded-lg hover:bg-[#2C7DA0] hover:text-white transition-colors duration-300 relative overflow-hidden group shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-[#1A5F7A] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>
          
          {/* Enhanced icon/image with blue-toned design */}
          <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2C7DA0] to-[#1A5F7A] rounded-full opacity-75 blur-xl animate-pulse"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-[#61A5C2]/30 to-[#0A2342]/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-[#89C2D9]/30 to-[#2C7DA0]/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#2C7DA0] to-[#0A2342] rounded-full flex items-center justify-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#1A5F7A] opacity-20 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-full transform rotate-45"></div>
                    <Stethoscope size={100} className="drop-shadow-lg animate-pulse text-[#89C2D9]" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 right-0 bg-[#0A2342]/80 p-4 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl border-t-2 border-l-2 border-[#2C7DA0]/30">
                <p className="text-right font-semibold text-[#89C2D9]">
                  <span className="block mb-1 text-sm">ماں اور بچے کی صحت ہماری ترجیح ہے</span>
                  <span className="block text-xs text-[#61A5C2]">Mother & child health is our priority</span>
                </p>
              </div>
              
              {/* Added circular accent elements */}
              <div className="absolute -left-4 top-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-[#61A5C2] to-[#2C7DA0] animate-pulse"></div>
              <div className="absolute right-8 bottom-16 w-4 h-4 rounded-full bg-gradient-to-r from-[#1A5F7A] to-[#0A2342] animate-pulse" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToServices}
            className="flex flex-col items-center text-[#89C2D9] hover:text-[#61A5C2] transition-colors group"
          >
            <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Discover More</span>
            <div className="relative">
              <div className="absolute -inset-1 bg-[#2C7DA0]/30 rounded-full blur-sm group-hover:bg-[#1A5F7A]/40 transition-colors"></div>
              <ArrowDown className="relative animate-bounce text-[#89C2D9]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
