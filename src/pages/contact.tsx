import React, { useState } from 'react';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/utils/seo';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // This is just a simulation for the demo
    try {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormError(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError(true);
    }
  };
  
  // Project types
  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'water-treatment', label: 'Water Treatment System' },
    { value: 'borehole-drilling', label: 'Borehole Drilling' },
    { value: 'irrigation-system', label: 'Irrigation System' },
    { value: 'bottled-water', label: 'Bottled Water Production' },
    { value: 'pure-water', label: 'Pure Water (Sachet) Production' },
    { value: 'water-management', label: 'Water Resource Management' },
    { value: 'wastewater', label: 'Wastewater Management' },
    { value: 'water-quality', label: 'Water Quality Testing' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'other', label: 'Other' },
  ];
  
  // Office locations
  const offices = [
    // {
    //   name: 'Headquarters - Abuja',
    //   address: '123 Water Way, Central Business District, Abuja, Nigeria',
    //   phone: '+234 123 456 7890',
    //   email: 'abuja@rehobothglow.com',
    //   hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    // },
    {
      name: 'Lagos Office',
      address: '456 Marina Street, Victoria Island, Lagos, Nigeria',
      phone: '+234 987 654 3210',
      email: 'lagos@rehobothglow.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    },
    // {
    //   name: 'Port Harcourt Office',
    //   address: '789 Ada George Road, Port Harcourt, Rivers State, Nigeria',
    //   phone: '+234 345 678 9012',
    //   email: 'portharcourt@rehobothglow.com',
    //   hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    // },
  ];
  
  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // FAQs
  const faqs = [
    {
      question: 'What areas in Nigeria do you serve?',
      answer: 'We provide water engineering services throughout Nigeria, with offices in Abuja, Lagos, and Port Harcourt. Our projects span across all states and regions of the country.',
    },
    {
      question: 'How long does it typically take to complete a water treatment project?',
      answer: 'Project timelines vary based on scope and complexity. Small residential systems may take 1-2 weeks, while large industrial or municipal projects can range from 2-6 months. We provide detailed timelines during consultation.',
    },
    {
      question: 'Do you offer maintenance services for existing water systems?',
      answer: 'Yes, we provide comprehensive maintenance services for all types of water systems, including those not originally installed by us. We offer both scheduled maintenance plans and emergency repair services.',
    },
    {
      question: 'What certifications and standards do your water systems meet?',
      answer: 'Our systems comply with Nigerian standards (SON, NAFDAC) as well as international standards including WHO guidelines. We\'re ISO 9001 and ISO 14001 certified, ensuring quality and environmental responsibility.',
    },
    {
      question: 'Can you help with NAFDAC registration for bottled/sachet water production?',
      answer: 'Yes, we provide comprehensive support for NAFDAC registration, including facility design to meet requirements, documentation preparation, and guidance throughout the approval process.',
    },
    {
      question: 'Do you offer financing options for water projects?',
      answer: 'We work with several financial partners who offer financing options for qualified clients. During consultation, we can discuss available financing options tailored to your project needs.',
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Rehobothglow Technology's water engineering experts for consultations, quotes, or to discuss your specific water challenges."
        keywords="contact Rehobothglow, water engineering consultation, Nigeria water services, get a quote, water solutions contact"
      />
      
      {/* Modern Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
          <img 
            src="https://via.placeholder.com/1920x600?text=Contact+Us" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        
        <Container className="relative z-10 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                variants={fadeIn}
              >
                <span className="text-sm font-medium">Get In Touch</span>
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
                variants={fadeIn}
              >
                Contact <span className="text-primary-200">Us</span>
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-2xl mb-8"
                variants={fadeIn}
              >
                Reach out to our water engineering experts for consultations, quotes, 
                or to discuss your specific water challenges.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                  <a href="tel:+2341234567890" className='flex gap-2'>
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <a href="mailto:info@rehobothglow.com" className='flex gap-2'>
                    <Mail className="h-5 w-5" />
                    <span>Email Us</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-400/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-primary-300/20 rounded-full filter blur-3xl"></div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary-400/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Call Us</div>
                        <div className="font-semibold">+234 123 456 7890</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary-400/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Email Us</div>
                        <div className="font-semibold">info@rehobothglow.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary-400/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Office Location</div>
                        <div className="font-semibold">Lagos, Nigeria</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary-400/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Working Hours</div>
                        <div className="font-semibold">Mon-Fri: 8AM-5PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>
      
      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a specific project in mind or just want to learn more about our 
                water engineering services, our team is ready to help. Fill out the form below, 
                and one of our experts will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">+234 123 456 7890</p>
                    <p className="text-gray-600">+234 987 654 3210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">info@rehobothglow.com</p>
                    <p className="text-gray-600">projects@rehobothglow.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-gray-600">+234 123 456 7890</p>
                    <p className="text-gray-500 text-sm">(For quick inquiries and emergencies)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Emergency Water Services</h3>
                <p className="text-gray-600 mb-4">
                  For urgent water system issues or emergencies, please call our 24/7 emergency line:
                </p>
                <div className="text-xl font-bold text-primary-700">+234 800 WATER-911</div>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. One of our team members will get back to you shortly.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {formError && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                          <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                            <p className="text-red-800">
                              There was an error submitting your form. Please try again.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          id="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        >
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Please describe your project or inquiry"
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </p>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Office Locations */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Office"
            subtitle="Visit us at one of our locations across Nigeria"
            centered
          />
          
          <div className="flex justify-center flex-row gap-8 mt-12">
            {offices.map((office, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{office.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 h-36 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Google Maps Embed</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* FAQ Section */}
      <Section>
        <Container>
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our water engineering services"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <div className="flex-shrink-0 text-gray-500">
                      {openFaqIndex === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  
                  {openFaqIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center w-full">
              <p className="text-gray-600 mb-4">
                Don't see your question here? Contact us directly and we'll be happy to help.
              </p>
              <Button asChild className="flex gap-2 border border-primary-600 rounded-sm m-auto">
                <a href="mailto:info@rehobothglow.com">Email Us Your Question</a>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Water Systems?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how we can help with your water engineering needs.
              We're ready to provide expert consultation and innovative solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Call Us Now</p>
                <p className="text-xl font-bold">+234 123 456 7890</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Email Us</p>
                <p className="text-xl font-bold">info@rehobothglow.com</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 