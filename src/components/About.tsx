
import { Award, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Our Clinic</h2>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="fade-in">
    <p className="text-gray-700 mb-6 leading-relaxed">
      Muhammad Clinic is a community-focused medical center led by <strong>Dr. Zoya Mustafa</strong>, 
      a dedicated and experienced physician providing personalized care in general medicine and pediatric emergencies.
    </p>
    <p className="text-gray-700 mb-6 leading-relaxed">
      With state-of-the-art facilities and a warm, welcoming environment, the clinic is committed to accurate diagnosis, 
      preventive healthcare, and effective treatment plans — all delivered with compassion and integrity.
    </p>
    <div className="bg-secondary-light p-6 rounded-lg">
      <h3 className="text-xl font-bold text-primary-dark mb-4">
        Our Commitment
      </h3>
      <p className="text-gray-700 italic">
        "I am committed to delivering thoughtful, thorough, and reliable medical care to every patient, 
        especially focusing on children's and women's health."
      </p>
      <p className="mt-4 text-gray-700 text-sm text-right">
        - Dr. Zoya Mustafa
      </p>
    </div>
  </div>


          
          <div className="grid grid-cols-1 gap-6 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-dark">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary-dark/10 rounded-full">
                  <Award className="text-primary-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">Excellence in Care</h3>
                  <p className="text-gray-600">
                  At Muhammad Clinic, Dr. Zoya Mustafa delivers expert care with modern tools and a compassionate approach.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-dark">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary-dark/10 rounded-full">
                  <Heart className="text-primary-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">Compassionate Approach</h3>
                  <p className="text-gray-600">
                  Dr. Zoya Mustafa treats every patient with dignity, care, and personal attention at every step.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-dark">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary-dark/10 rounded-full">
                  <Shield className="text-primary-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">Trusted Experience</h3>
                  <p className="text-gray-600">
                  With years of medical experience, Dr. Zoya Mustafa offers care you can rely on with complete confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
