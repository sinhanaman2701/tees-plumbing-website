import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Menu, X, ArrowRight, Star } from 'lucide-react';

const businessName = "Tee's Plumbing";
const businessType = "Plumber";
const phone = "+1 (213) 587-3796";
const address = "Los Angeles CA 90016";
const cityState = "the Greater Area";
const services = ["Emergency Plumbing Repairs","Drain Cleaning & Unclogging","Water Heater Installation & Repair","Leak Detection & Pipe Repair","Fixture Installation","Sewer Line Services"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">{businessName}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
              <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Get Quote
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional {businessType} Services in {cityState}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Reliable, efficient, and affordable {businessType.toLowerCase()} services. {businessName} has been serving the community with quality workmanship and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="tel:+1 (213) 587-3796" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all border border-gray-200">
                <Phone className="mr-2" size={20} />
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted {businessType} Professionals
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At {businessName}, we take pride in delivering exceptional {businessType.toLowerCase()} services to our community. Our team of experienced professionals is dedicated to solving your problems efficiently and effectively.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" size={24} />
                  <span className="text-gray-700 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" size={24} />
                  <span className="text-gray-700 font-medium">Free Estimates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" size={24} />
                  <span className="text-gray-700 font-medium">Same Day Service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" size={24} />
                  <span className="text-gray-700 font-medium">Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                  <Star className="text-primary-600" size={40} />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">5.0</p>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600">Based on customer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive {businessType.toLowerCase()} solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">Professional {service.toLowerCase()} services with quality workmanship and attention to detail.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to get started? Contact us today for a free consultation and estimate.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <a href="tel:+1 (213) 587-3796" className="text-lg font-semibold text-gray-900 hover:text-primary-600">{phone}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-lg font-semibold text-gray-900">{address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Service Hours</p>
                    <p className="text-lg font-semibold text-gray-900">Mon - Sat: 7:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Emergency services available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We have received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{businessName}</h3>
            <p className="text-gray-400 mb-6">Professional {businessType} Services in {cityState}</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+1 (213) 587-3796" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2026 Tee's Plumbing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
