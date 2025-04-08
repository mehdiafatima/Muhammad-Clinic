
import { Award, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Our Clinic</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Muhammad Clinic was established with a vision to provide high-quality healthcare services to the community. 
              Under the leadership of Dr. Zoya Mustafa, we specialize in general medicine and pediatric emergency care.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our clinic is equipped with modern facilities and our team is committed to providing comprehensive healthcare 
              with a focus on preventive care, accurate diagnosis, and effective treatment plans.
            </p>
            <div className="bg-secondary-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-700 italic">
                "We are dedicated to providing compassionate and professional medical care to patients of all ages, 
                with special attention to pediatric and women's health needs."
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
                    Our clinic maintains high standards of medical care with qualified professionals and modern equipment.
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
                    We believe in treating every patient with dignity, respect, and personalized attention.
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
                    With extensive training and experience, our physicians provide reliable healthcare you can trust.
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
