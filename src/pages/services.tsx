import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Filter, Droplet, Droplets, Construction, Gauge, Zap, Beaker, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/utils/seo';
import { getCanonicalUrl } from '../lib/meta-utils';

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

export function ServicesPage() {
  // Services data
  const services = [
    {
      id: 'water-treatment',
      title: 'Water Treatment Systems',
      description: 'Comprehensive water treatment solutions designed for industrial, commercial, and residential applications.',
      longDescription: 'Our water treatment systems are designed to remove contaminants, improve water quality, and ensure regulatory compliance. We design, install, and maintain systems of all sizes, from small residential units to large industrial plants.',
      benefits: [
        'Improved water quality and safety',
        'Compliance with Nigerian water quality standards',
        'Reduced maintenance costs and system downtime',
        'Customized solutions based on specific water conditions',
        'Expert installation and ongoing maintenance support'
      ],
      icon: Filter,
      image: 'assets/rb-series-2.webp',
      caseStudy: {
        title: 'Industrial Water Treatment System for Textile Manufacturer',
        challenge: 'A textile factory in Lagos needed to treat highly contaminated wastewater to meet environmental regulations.',
        solution: 'We designed and implemented a comprehensive water treatment system with advanced filtration and chemical treatment processes.',
        result: 'The system successfully reduced contaminants by 95%, bringing the wastewater within regulatory limits and allowing for safe discharge.'
      }
    },
    {
      id: 'borehole-drilling',
      title: 'Borehole Drilling & Maintenance',
      description: 'Expert borehole drilling services using state-of-the-art equipment and advanced techniques.',
      longDescription: 'Our professional borehole drilling services provide reliable access to groundwater for various needs. We utilize modern drilling equipment and techniques to ensure efficiency, durability, and water quality. We also provide maintenance services to keep your borehole systems functioning optimally.',
      benefits: [
        'Access to clean, reliable groundwater sources',
        'Professional site assessment and water quality testing',
        'Modern drilling techniques for minimal environmental impact',
        'Comprehensive maintenance programs to extend system lifespan',
        'Emergency repair services'
      ],
      icon: Construction,
      image: '/assets/rb-machines-4.webp',
      caseStudy: {
        title: 'Community Borehole Project in Rural Kano',
        challenge: 'A village in rural Kano had limited access to clean water, with residents walking several kilometers daily to fetch water.',
        solution: 'We drilled a 150-meter deep borehole and installed a solar-powered pumping system with distribution points throughout the village.',
        result: 'The community now has reliable access to clean water, improving health outcomes and quality of life for over 2,000 residents.'
      }
    },
    {
      id: 'irrigation-systems',
      title: 'Irrigation System Design & Installation',
      description: 'Efficient irrigation solutions for agricultural projects of all sizes across Nigeria.',
      longDescription: 'Our irrigation systems are designed to maximize water efficiency while ensuring optimal crop growth. We provide custom solutions for farms of all sizes, from small holdings to large commercial operations, incorporating advanced technologies like drip irrigation, sprinklers, and automated control systems.',
      benefits: [
        'Water conservation through efficient distribution',
        'Increased crop yields and quality',
        'Reduced labor costs through automation',
        'Customized designs based on crop types and soil conditions',
        'Integration with existing farming operations'
      ],
      icon: Droplets,
      image: 'assets/rb-machines-6.webp',
      caseStudy: {
        title: 'Large-Scale Drip Irrigation for Commercial Farm',
        challenge: 'A 500-acre commercial farm in northern Nigeria needed to maximize water efficiency in a region with inconsistent rainfall.',
        solution: 'We designed and installed a comprehensive drip irrigation system with weather monitoring and automated controls.',
        result: 'The farm reduced water usage by 40% while increasing crop yields by 35% in the first growing season after installation.'
      }
    },
    {
      id: 'water-management',
      title: 'Water Resource Management Consultancy',
      description: 'Expert consulting services for sustainable water resource planning and management.',
      longDescription: 'Our water resource management consultancy helps organizations develop sustainable water strategies. We conduct comprehensive assessments, develop management plans, and provide ongoing guidance to optimize water usage, ensure regulatory compliance, and promote conservation.',
      benefits: [
        'Comprehensive water resource assessments',
        'Sustainable water usage strategies',
        'Regulatory compliance guidance',
        'Reduced operational costs through efficiency',
        'Expert knowledge of Nigerian water challenges and regulations'
      ],  
      icon: Gauge,
      image: 'assets/rb-machines-4.webp',
      caseStudy: {
        title: 'Municipal Water Management Plan',
        challenge: 'A growing municipality needed to optimize its water distribution system to accommodate population growth while conserving resources.',
        solution: 'We conducted a comprehensive assessment and developed a 10-year water management plan with phased implementation.',
        result: 'The municipality reduced water losses by 30% through infrastructure improvements and implemented conservation measures that extended supply capacity by 15 years.'
      }
    },
    {
      id: 'water-quality',
      title: 'Water Quality Testing & Monitoring',
      description: 'Comprehensive water testing services using advanced laboratory techniques.',
      longDescription: 'Our water quality testing and monitoring services provide accurate analysis of water sources for various parameters. We use advanced laboratory equipment and techniques to test for physical, chemical, and biological contaminants, ensuring compliance with Nigerian and international standards.',
      benefits: [
        'Accurate identification of contaminants and quality issues',
        'Compliance with regulatory standards',
        'Regular monitoring to maintain water quality',
        'Detailed reports with actionable recommendations',
        'Quick turnaround times for critical testing needs'
      ],
      icon: Beaker,
      image: 'assets/rb-machine-test.webp',
      caseStudy: {
        title: 'Comprehensive Water Quality Program for Hospital',
        challenge: 'A major hospital needed to ensure consistent water quality throughout its facility, particularly for sensitive medical applications.',
        solution: 'We implemented a comprehensive water quality monitoring program with regular testing and an early warning system for contamination.',
        result: 'The hospital has maintained perfect compliance with health standards and prevented potential contamination incidents through early detection.'
      }
    },
    {
      id: 'wastewater-management',
      title: 'Wastewater Management Solutions',
      description: 'Innovative wastewater treatment and management systems for various applications.',
      longDescription: 'Our wastewater management solutions address the complete cycle of collection, treatment, and safe disposal or reuse. We design and implement systems for residential, commercial, and industrial clients, focusing on efficiency, regulatory compliance, and environmental protection.',
      benefits: [
        'Effective removal of contaminants from wastewater',
        'Compliance with environmental regulations',
        'Water recycling opportunities',
        'Reduced environmental impact',
        'Lower long-term operational costs'
      ],
      icon: Zap,
      image: 'assets/rb-machine-7.webp',
      caseStudy: {
        title: 'Industrial Wastewater Recycling System',
        challenge: 'A manufacturing facility needed to reduce its water consumption and minimize wastewater discharge to meet new environmental regulations.',
        solution: 'We designed and implemented a closed-loop wastewater treatment and recycling system that allowed for water reuse in non-critical processes.',
        result: 'The facility reduced fresh water consumption by 60% and wastewater discharge by 75%, saving costs and achieving full regulatory compliance.'
      }
    },
    {
      id: 'bottled-water',
      title: 'Bottled Water Production Systems',
      description: 'Complete engineering solutions for bottled water production facilities.',
      longDescription: 'Our bottled water production systems provide end-to-end solutions for entrepreneurs and companies entering the bottled water market. We design, supply, install, and commission complete production lines, from water treatment to bottling, labeling, and packaging, ensuring compliance with NAFDAC and SON standards.',
      benefits: [
        'Turnkey solutions from design to commissioning',
        'Compliance with Nigerian regulatory standards',
        'Quality assurance throughout the production process',
        'Scalable systems to grow with your business',
        'Ongoing technical support and maintenance'
      ],
      icon: Factory,
      image: 'assets/rb-machine-6.webp',
      caseStudy: {
        title: 'New Bottled Water Production Facility',
        challenge: 'An entrepreneur wanted to establish a premium bottled water brand but lacked technical expertise in water production facilities.',
        solution: 'We designed and implemented a complete bottled water production line, including water treatment, bottling, capping, and packaging systems.',
        result: 'The facility was successfully commissioned and now produces 20,000 bottles per day, with all regulatory approvals and certifications in place.'
      }
    },
    {
      id: 'pure-water',
      title: 'Pure Water (Sachet) Production Engineering',
      description: 'Specialized engineering services for sachet water production systems in Nigeria.',
      longDescription: 'Our pure water (sachet) production engineering services cater specifically to the Nigerian market\'s demand for affordable packaged water. We provide complete system design, equipment selection, installation, and commissioning for sachet water production lines, ensuring quality, efficiency, and compliance with NAFDAC standards.',
      benefits: [
        'Tailored solutions for the Nigerian market',
        'NAFDAC compliance from day one',
        'High-efficiency production systems',
        'Quality control measures throughout the process',
        'Scalable operations with growth potential'
      ],
      icon: Droplet,
      image: 'assets/rb-industry.jpg',
      caseStudy: {
        title: 'Sachet Water Production Upgrade',
        challenge: 'An existing sachet water producer needed to increase capacity and improve quality to meet growing demand and stricter regulations.',
        solution: 'We redesigned their production system with advanced water treatment and a high-speed automated packaging line.',
        result: 'Production capacity increased by 300%, quality improved to exceed regulatory standards, and operational costs per unit decreased by 25%.'
      }
    },
  ];

  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive water engineering services including water treatment, borehole drilling, irrigation systems, water quality testing, and production systems in Nigeria."
        keywords="water treatment systems, borehole drilling, irrigation systems, water management, water quality testing, wastewater management, bottled water production, sachet water production, Nigeria"
        ogUrl={getCanonicalUrl('services')}
      />
      
      {/* Modern Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
          <img 
            src="/assets/rb-machines-4.webp" 
            alt="Water Services"
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
                <span className="text-sm font-medium">Comprehensive Water Solutions</span>
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
                variants={fadeIn}
              >
                Our <span className="text-primary-200">Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-2xl mb-8"
                variants={fadeIn}
              >
                Tailored water engineering solutions designed to address Nigeria's unique 
                challenges with innovation, expertise, and sustainability.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="rounded-full px-8 max-small:px-0" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <a href="#water-treatment">Explore Services</a>
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Filter className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Water Treatment</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Droplets className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Irrigation Systems</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Construction className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Borehole Drilling</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Droplet className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Pure Water Production</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>
      
      {/* Services Overview */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              At Rehoboth Glow Technology, we provide a comprehensive range of water engineering services 
              designed to address Nigeria's unique water challenges. Whether you need industrial water treatment, 
              borehole drilling, irrigation systems, or water production facilities, our expert team delivers 
              innovative and sustainable solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                </div>
                  <CardFooter>
                  <Button variant="link" className="px-0" asChild>
                    <a href={`#${service.id}`}>Learn More &rarr;</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Individual Service Sections */}
      {services.map((service) => (
        <Section 
          key={service.id} 
          id={service.id} 
          className={`${services.indexOf(service) % 2 === 1 ? 'bg-gray-50' : 'bg-white'} scroll-mt-20`}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${services.indexOf(service) % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.longDescription}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className=" flex gap-2 border border-primary-600 rounded-sm">
                  <Link to="/contact">Request a Consultation</Link>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className={`${services.indexOf(service) % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Case Study */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Case Study: {service.caseStudy.title}</h3>
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary-600">The Challenge</h4>
                    <p className="text-gray-600">{service.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary-600">Our Solution</h4>
                    <p className="text-gray-600">{service.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary-600">The Results</h4>
                    <p className="text-gray-600">{service.caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}
      
      {/* Call to Action */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Discuss Your Water Engineering Needs?
            </h2>
            <p className="text-xl mb-8">
              Our team of experts is ready to develop a customized solution for your specific water challenges.
              Contact us today for a consultation and discover how Rehoboth Glow Technology can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 