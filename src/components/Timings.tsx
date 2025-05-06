
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const Timings = () => {
  return (
    <section id="timings" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Clinic Hours</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regular Hours Card */}
            <div className="bg-secondary-light rounded-lg shadow-md p-6 fade-in">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-dark rounded-full mr-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">Regular Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="font-medium">Monday - Saturday</div>
                  <div className="text-primary-dark font-semibold">
                    10:00 AM – 2:00 PM
                  </div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="font-medium">Monday - Saturday</div>
                  <div className="text-primary-dark font-semibold">
                    6:00 PM – 11:00 PM
                  </div>
                </div>
                <br></br>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="font-medium">Sunday</div>
                  <div className="text-primary-dark font-semibold">
                    11:00 AM – 1:00 PM
                  </div>
                </div>
               
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="font-medium">Sunday</div>
                  <div className="text-primary-dark font-semibold">
                    6:00 PM – 8:00 PM
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appointments Card */}
            <div className="bg-primary-dark text-white rounded-lg shadow-md p-6 fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-full mr-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Appointments</h3>
              </div>
              
              <p className="mb-6">
                We recommend scheduling an appointment in advance to minimize waiting times. 
                Walk-ins are also welcome during regular clinic hours.
              </p>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="text-white mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Priority Care</h4>
                    <p className="text-sm text-white/80">
                      Emergency cases are given immediate attention. If you're experiencing a medical emergency, 
                      please call ahead if possible so we can prepare for your arrival.
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-6 w-full py-3 bg-white text-primary-dark rounded-lg font-medium hover:bg-white/90 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Appointment
              </button>
            </div>
          </div>
          
          {/* Holiday Notice */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
              <Calendar className="text-primary-dark mr-3" size={20} />
              <h3 className="text-lg font-medium text-primary-dark">Holiday Schedule</h3>
            </div>
            <p className="text-gray-600">
              The clinic remains closed on national holidays. For any schedule changes during 
              religious holidays or special occasions, announcements will be made in advance. 
              Please check our notice board or contact us for the most current information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timings;
