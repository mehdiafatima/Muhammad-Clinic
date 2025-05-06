
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll contact you shortly.",
      });
      setLoading(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-secondary-light">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md fade-in">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                      placeholder="Your email (optional)"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-dark hover:bg-primary-light text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">Clinic Address</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-dark/10 rounded-full mr-4">
                    <MapPin className="text-primary-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      R-621, Block-20 Ancholi Society F.B. Area Karachi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-dark/10 rounded-full mr-4">
                    <Phone className="text-primary-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone Number</h4>
                    <a href="tel:+923002500225" className="text-primary-dark hover:underline">
                      +92 3333149565
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-dark/10 rounded-full mr-4">
                    <Mail className="text-primary-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Address</h4>
                    <a href="mailto:clinic@example.com" className="text-primary-dark hover:underline">
                      drzoyamustafa14@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-dark/10 rounded-full mr-4">
                    <MessageSquare className="text-primary-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/923002500225" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline">
                      Send us a message
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="bg-white p-4 rounded-lg shadow-md h-64 md:h-72">
  <iframe
    title="R-621 Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9523727770945!2d67.076712875124!3d24.945982584037204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc16dd374d3%3A0x4a0f00f31c6afc54!2sIncholi!5e0!3m2!1sen!2s!4v1714981345084!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
