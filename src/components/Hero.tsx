
import { Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-secondary-light to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4">
              MUHAMMAD CLINIC
            </h1>
            <div className="mb-6 flex items-center">
              <div className="h-1 w-20 bg-primary-dark mr-4"></div>
              <span className="text-gray-600 font-medium">Healthcare Excellence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Dr. Zoya Mustafa
            </h2>
            <p className="text-lg text-gray-600 mb-3">
              General Physician & Paediatric Emergency Physician
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                M.B.B.S, DUHS
              </span>
              <span className="bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                PEMC
              </span>
              <span className="bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                Dip. Paediatrics, RCPI Ireland
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                className="px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-light transition-colors shadow-md"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Appointment
              </button>
              <button 
                className="px-6 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </button>
            </div>
          </div>
          
          {/* Image/Icon */}
          <div className="w-full md:w-1/2 flex justify-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-primary-dark/10 rounded-full mx-auto flex items-center justify-center">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-primary-dark/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-primary-dark rounded-full flex items-center justify-center text-white">
                    <Stethoscope size={100} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-right font-semibold text-primary-dark">
                  <span className="block mb-1 text-sm">ماں اور بچے کی صحت ہماری ترجیح ہے</span>
                  <span className="block text-xs text-gray-600">Mother & child health is our priority</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
