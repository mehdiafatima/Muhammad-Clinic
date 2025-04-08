
import { Baby, Heart, Activity, Stethoscope, Pill, Clipboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    title: "Paediatric Care",
    description: "Specialized healthcare for infants, children, and adolescents focusing on growth, development, and illness prevention.",
    icon: Baby,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "General Consultation",
    description: "Comprehensive medical evaluations, diagnostic services, and treatment plans for patients of all ages.",
    icon: Stethoscope,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Emergency Care",
    description: "Prompt medical attention for urgent conditions requiring immediate care and treatment.",
    icon: Clipboard,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Women's Health",
    description: "Specialized care addressing the unique health needs and concerns of women throughout all life stages.",
    icon: Heart,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Preventive Medicine",
    description: "Proactive healthcare focused on disease prevention through regular check-ups, screenings, and healthy lifestyle guidance.",
    icon: Activity,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Medication Management",
    description: "Professional guidance on prescription medications, dosage adjustment, and monitoring for effectiveness.",
    icon: Pill,
    color: "bg-amber-50 text-amber-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-secondary-light">
      <div className="section-container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px] fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", service.color)}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 rounded-full bg-primary-dark/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-dark to-primary-light flex items-center justify-center text-white">
                  <Award size={32} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Advanced Specialization</h3>
              <p className="text-gray-700 mb-2">
                Dr. Zoya Mustafa holds a Diploma in Paediatrics from the prestigious
              </p>
              <p className="font-bold text-primary-dark">Royal College of Physicians, Ireland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Award = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

export default Services;
