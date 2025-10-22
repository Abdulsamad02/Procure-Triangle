import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Filter, Droplet, Droplets, Construction, Gauge, Zap, Beaker, Factory, ArrowRight, Leaf } from 'lucide-react';
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
  const services = [
    {
      id: 'water-treatment',
      title: 'Project & Contract Execution',
      description: 'Professional execution of government and private sector projects with transparency, efficiency, and accountability.',
      longDescription: 'We handle the full lifecycle of project execution  from proposal and contract management to implementation and monitoring. Our experienced team ensures that all projects meet client objectives, timelines, and regulatory standards while upholding integrity and quality at every stage.',
      benefits: [
      'Transparent project planning and reporting',
      'Efficient execution and supervision',
      'Regulatory and contractual compliance',
      'Risk assessment and mitigation strategies',
      'On-time and cost-effective project delivery'
      ],
      icon: Construction,
      image: 'assets/Project-1.jpg',
      caseStudy: {
      title: 'Healthcare Infrastructure Development for State Government',
      challenge: 'A state government required the construction and supervision of multiple primary healthcare centers across rural communities.',
      solution: 'We executed the full project lifecycle — from feasibility studies to site management and final handover — ensuring compliance with national health infrastructure standards.',
      result: 'All centers were delivered within 8 months, improving healthcare access for over 120,000 residents.'
      }
    },
    {
      id: 'borehole-drilling',
    title: 'Health Consultancy Services',
    description: 'Expert advisory services for public health programs, medical infrastructure, and government policy development.',
    longDescription: 'We provide professional consultancy for health-related projects — from healthcare facility planning to epidemiological studies. Our goal is to help governments and organizations design and implement effective, evidence-based health solutions.',
    benefits: [
      'Strategic health policy planning',
      'Healthcare facility design and feasibility studies',
      'Public health assessment and data analytics',
      'Regulatory guidance and quality assurance',
      'Support for donor-funded health initiatives'
    ],
      icon:Droplets,
      image: '/assets/Project-3.jpg',
          caseStudy: {
      title: 'Health System Strengthening for Local Government Areas',
      challenge: 'A local government needed expert support to improve primary healthcare coverage and efficiency in resource allocation.',
      solution: 'We conducted a comprehensive health needs assessment, developed a new facility management framework, and trained healthcare administrators.',
      result: 'Patient coverage increased by 42%, with improved operational transparency across all local health centers.'
    }
  },
  {
    id: 'environmental-consulting',
    title: 'Environmental Management & Advocacy',
    description: 'Comprehensive environmental consultancy and advocacy services for sustainable development and compliance.',
    longDescription: 'Our environmental consulting team provides Environmental Impact Assessments (EIA), audits, and sustainability planning for public and private projects. We also promote environmental advocacy to support green policies and responsible development.',
    benefits: [
      'Comprehensive EIA and audit reports',
      'Regulatory compliance with NESREA and FMEnv standards',
      'Pollution control and mitigation planning',
      'Sustainability and waste management programs',
      'Community awareness and advocacy initiatives'
    ],
      icon: Leaf,
      image: 'assets/Project-4.jpg',
     caseStudy: {
      title: 'Environmental Audit for Industrial Park Development',
      challenge: 'A new industrial park required a full environmental compliance audit before operation could begin.',
      solution: 'We conducted a detailed EIA, implemented waste management systems, and developed an environmental monitoring plan.',
      result: 'The project received full government approval and achieved a 30% reduction in environmental footprint compared to baseline levels.'
    }
  },
  {
    id: 'infrastructure-consulting',
    title: 'Infrastructure Development Consulting',
    description: 'Strategic consulting for sustainable infrastructure projects including roads, public buildings, and utilities.',
    longDescription: 'We advise government and private clients on infrastructure planning, engineering design, and project supervision. Our services ensure that every project aligns with technical, economic, and environmental best practices.',
    benefits: [
      'Comprehensive feasibility and design studies',
      'Supervision of civil and structural works',
      'Procurement and material verification support',
      'Adherence to national and international standards',
      'Efficient coordination of multi-sector projects'
    ],  
      icon: Gauge,
      image: 'assets/Project-9.jpeg',
      caseStudy: {
      title: 'Urban Road Rehabilitation Supervision Project',
      challenge: 'A metropolitan council needed technical supervision for major road rehabilitation works across three districts.',
      solution: 'We provided engineering consultancy, material testing, and project management oversight.',
      result: 'Road network upgrades were completed ahead of schedule, improving traffic flow and reducing maintenance costs by 25%.'
    }
  },
  {
    id: 'procurement-supervision',
    title: 'Procurement & Project Supervision',
    description: 'End-to-end procurement and supervision services ensuring quality and accountability in project execution.',
    longDescription: 'We specialize in transparent procurement and meticulous project oversight. Our team ensures that all materials, contractors, and workflows meet client expectations and statutory guidelines.',
    benefits: [
      'Transparent procurement and vendor evaluation',
      'Strict quality control during project execution',
      'Detailed progress and expenditure reporting',
      'Timely delivery and cost optimization',
      'Independent project auditing and verification'
    ],
      icon: Beaker,
      image: 'assets/Project-10.jpeg',
     caseStudy: {
      title: 'Procurement Oversight for Public Works Department',
      challenge: 'The Public Works Department required independent procurement and quality verification for multiple state-level construction contracts.',
      solution: 'We managed vendor selection, ensured compliance with procurement laws, and provided technical supervision during project execution.',
      result: 'Procurement integrity was strengthened, and project delivery time was reduced by 20%.'
    }
  },
  {
    id: 'training-development',
    title: 'Training & Capacity Building',
    description: 'Customized professional training programs to enhance capacity across government and private sectors.',
    longDescription: 'Our training and capacity development programs are designed to equip professionals with relevant skills in management, engineering, environmental sustainability, and health systems. We offer both on-site and virtual training solutions tailored to client needs.',
    benefits: [
      'Customized training modules for all sectors',
      'Expert facilitators with local and international experience',
      'Certification and post-training evaluation',
      'Improved institutional performance and accountability',
      'Hybrid (physical and online) training delivery options'
    ],
      icon: Zap,
      image: 'assets/Project-7.jpg',
     caseStudy: {
      title: 'Capacity Building for State Environmental Agency',
      challenge: 'An environmental agency needed to train officers in EIA compliance and monitoring.',
      solution: 'We conducted a five-day intensive workshop covering compliance, auditing, and data reporting best practices.',
      result: 'Over 100 officers were certified, improving environmental monitoring and enforcement efficiency across the state.'
    }
  },
  {
    id: 'community-development',
    title: 'Community Development & Social Projects',
    description: 'Design and implementation of community-centered programs that promote health, education, and sustainable livelihoods.',
    longDescription: 'We partner with government agencies, NGOs, and private organizations to execute impactful social projects. Our community development approach emphasizes inclusivity, local participation, and measurable impact.',
    benefits: [
      'Community-focused project design',
      'Stakeholder engagement and needs assessment',
      'Sustainable impact evaluation',
      'Integration with SDG-based development goals',
      'Enhanced community welfare and empowerment'
    ],
      icon: Factory,
      image: 'assets/Project-6.jpg',
      caseStudy: {
        title: 'New Bottled Water Production Facility',
        challenge: 'An entrepreneur wanted to establish a premium bottled water brand but lacked technical expertise in water production facilities.',
        solution: 'We designed and implemented a complete bottled water production line, including water treatment, bottling, capping, and packaging systems.',
        result: 'The facility was successfully commissioned and now produces 20,000 bottles per day, with all regulatory approvals and certifications in place.'
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
                Tailored consultancy solutions designed to address Nigeria's unique 
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
                      <div className="font-semibold">consultation</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Droplets className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Health Innovation</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Construction className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">Enviromental Advocate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                      <Droplet className="h-8 w-8 mb-2 text-primary-200" />
                      <div className="font-semibold">General Contract Implimentation</div>
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
              The organization is a multidisciplinary consultancy and capacity building firm that provides services across management training, research, ICT, business development, and corporate growth solutions. Its work spans from human resources and quality management to technical support, change management, and strategy development for institutions. Beyond consultancy, it is also engaged in general contracting, construction, agriculture, and trade, giving it a broad operational base that strengthens its relevance to diverse development initiatives.

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
              Ready to Discuss Your Consultancy Needs?
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