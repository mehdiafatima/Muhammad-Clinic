

import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MUHAMMAD CLINIC</h3>
            <p className="mb-4 text-gray-300">
              Providing quality healthcare services with compassion and expertise.
            </p>
       
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Timings', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item === 'Home' ? 'hero' : item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Clinic Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Clinic Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Mon - Sat (Morning)</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Mon - Sat (Evening)</span>
                <span>18:00 - 21:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-300">
                R-621, Block-20 Ancholi Society<br />
                F.B. Area, Karachi
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Muhammad Clinic. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and developed with care for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, className }: { href: string; icon: React.ReactNode; className?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={cn(
      "p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors",
      className
    )}
  >
    {icon}
  </a>
);

export default Footer;
