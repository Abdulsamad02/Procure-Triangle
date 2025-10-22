import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Droplet, Droplets, Filter, Construction, Users, Gauge, ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
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

export function HomePage() {
  // State for video controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isVideoInView = useInView(videoContainerRef, { once: false, amount: 0.3 });
  
  // Play/pause video based on visibility
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isVideoInView && isPlaying) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isVideoInView, isPlaying]);
  
  // Handle video controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };
  
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Services data
  const services = [
    {
      title: 'Project Planning & Feasibility Studies',
      description: 'Conducting technical and economic assessments to determine project viability',
      icon: Filter,
      href: '/services#water-treatment'
    },
    {
      title: 'Urban & Rural Development Projects',
      description: 'Supporting sustainable development initiatives in both urban and rural areas..',
      icon: Construction,
      href: '/services#borehole-drilling'
    },
    {
      title: 'Environmental & Safety Compliance',
      description: 'Integrating environmental impact assessments and safety standards into every project.',
      icon: Droplets,
      href: '/services#irrigation-systems'
    },
    {
      title: 'Procurement & Contract Management',
      description: 'Ensuring transparency and efficiency in project procurement and contract execution',
      icon: Gauge,
      href: '/services#water-management'
    },
  ];

  // Projects data
  const projects = [
    {
      title: 'Health Consultancy Services',
      location: 'Kaduna, Nigeria',
      description: 'Providing expert advisory and implementation support in public health planning, hospital management, and healthcare policy development — ensuring efficient, sustainable, and high-quality health systems for communities and government institutions.',
      imageSrc: '/assets/Project-3.jpg',
      href: '/projects/municipal-water-treatment'
    },
    {
      title: 'Environmental Management & Advocacy',
      location: 'Abuja, Nigeria',
      description: 'Delivering sustainable environmental solutions through impact assessments, waste management strategies, and eco-friendly project planning while promoting awareness and advocacy for a cleaner, greener, and more resilient environment.',
      imageSrc: '/assets/Project-4.jpg',
      href: '/projects/agricultural-irrigation'
    },
    {
      title: 'Infrastructure Development Consulting',
      location: 'Abuja, Nigeria',
      description: 'Providing expert guidance in the planning, design, and execution of infrastructure projects ensuring quality, sustainability, and efficiency in roads, buildings, and public utilities for both government and private sectors',
      imageSrc: '/assets/Project-9.jpeg',
      href: '/projects/bottled-water-facility'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      content: "Procure Triangle transformed our agricultural operations with their system design. We've seen a 40% increase in crop yield since implementation.",
      author: "Ibrahim Mohammed",
      position: "Operations Director, Green Fields Farms"
    },
    {
      content: "The water treatment system Procure Triangle installed at our hospital has been critical to our operations. Their maintenance service is prompt and professional.",
      author: "Dr. Amina Okafor",
      position: "Chief Medical Director, Central Hospital"
    },
    {
      content: "Our  business has thrived thanks to Procure Traingle's engineering expertise. Their team provided end-to-end solutions that exceed industry standards.",
      author: "Chief James Adeniyi",
      position: "CEO, Crystal Clear Ltd"
    },
  ];

  // Stats data
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Industry Awards' },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Procure Triangle is a multidisciplinary consultancy and project execution firm dedicated to delivering innovative, efficient, and sustainable solutions across multiple sectors. The company specializes in procurement, infrastructure development, environmental management, health consultancy, and capacity building services. With a strong commitment to quality and excellence, Procure Triangle partners with government institutions, private organizations, and development agencies to design, implement, and manage projects that create lasting impact. Leveraging a team of experienced professionals, the firm ensures transparency, compliance, and value-driven outcomes in every engagement  positioning itself as a trusted partner in driving sustainable growth and development."
        keywords="Procure Triangle, Procurement and Consulting Firm, Infrastructure Development Consultants, Environmental Management & Advocacy, Health Consultancy Services, Project Execution and Management, Sustainable Development Solutions, Capacity Building and Training, Contract Execution Services Nigeria, Technical and Management Consultancy, Procurement Solutions Provider, Construction and Engineering Consulting, Environmental Compliance Experts, Public and Private Sector Projects, Corporate Growth and Development Consulting"
        ogUrl={getCanonicalUrl('')}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
          <img 
            src="/assets/rb-industry.jpg" 
            alt="Water engineering" 
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
                <span className="text-sm font-medium">Nigeria's Premium Contultancy and Contracting Services</span>
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
                variants={fadeIn}
              >
                Innovative Consultancy Solutions for a Better <span className="text-primary-200">Tomorrow</span>
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-2xl mb-8"
                variants={fadeIn}
              >
                The organization is a multidisciplinary consultancy and capacity-building firm offering services in management training, research, ICT,  business development, and strategy. It also engages in general contracting, construction, agriculture, health research and trade providing comprehensive solutions that support institutional growth and development across various sectors.

              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="rounded-full px-8 max-small:px-0" asChild>
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <Link to="/projects">View Our Projects</Link>
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
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl">
                  <img 
                    src="/assets/Project-10.jpeg" 
                    alt="Water solutions"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>
      
      {/* About Section */}
      <Section className="bg-white max-sm:pb-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Nigeria's Leading Consultancy Company
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Procure Triangle, we combine technical expertise with deep understanding of Client's unique  challenges to deliver sustainable and efficient solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our founding, we've completed over 100 projects across Nigeria, from small residential systems to large industrial installations. Our team of experienced engineers and technicians is dedicated to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that innovative problem solving is fundamental to our clients and economic growth. That's why we're committed to providing reliable, cost-effective innovative solutions for all sectors.
              </p>
              <Button className="mt-2 flex gap-2 border border-primary-600 rounded-sm" asChild>
                <Link to="/about">Learn More About Us</Link> 
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/assets/rb-worker-iband-co.jpg" 
                alt="Rehoboth Glow Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 rounded-lg p-6 shadow-lg max-sm:hidden">
                <p className="text-white font-bold text-lg mb-2">13+ Years</p>
                <p className="text-white text-sm">Of Water Engineering Excellence</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
  
      
      {/* Services Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive innovative  solutions tailored to specific needs"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
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
                  <Button variant="link" asChild className="w-full flex gap-2 ">
                    <Link to={service.href}>Learn More</Link>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center w-full">
            <Button className="border border-primary-600 rounded-sm" asChild>
              <Link to="/services">View All Services</Link>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore some of our recent  projects across Nigeria"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary-600 mb-2">{project.location}</div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                  
                </div>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={project.href}>View Project Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="border border-primary-600 rounded-sm" asChild>
              <Link to="/projects">View All Projects</Link>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Solve Your  Challenges?</h2>
              <p className="text-xl opacity-90 mb-8">
                Get in touch with our expert team for a consultation on your innovative needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/about#team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-500 p-6 rounded-lg">
                  <Droplet className="h-10 w-10 text-white/80 mb-2" />
                  <h3 className="text-xl font-bold mb-2">Project Planning & Feasibility Studies</h3>
                  <p className="text-white/90">Conducting technical and economic assessments to determine project viability.</p>
                </div>
                <div className="bg-primary-500 p-6 rounded-lg">
                  <Droplets className="h-10 w-10 text-white/80 mb-2" />
                  <h3 className="text-xl font-bold mb-2">Design & Engineering Solutions</h3>
                  <p className="text-white/90">Offering architectural, structural, and civil engineering design services..</p>
                </div>
                <div className="bg-primary-500 p-6 rounded-lg">
                  <Filter className="h-10 w-10 text-white/80 mb-2" />
                  <h3 className="text-xl font-bold mb-2">Construction Supervision & Management</h3>
                  <p className="text-white/90">Overseeing project implementation to ensure quality, timelines, and cost control.</p>
                </div>
                <div className="bg-primary-500 p-6 rounded-lg">
                  <Users className="h-10 w-10 text-white/80 mb-2" />
                  <h3 className="text-xl font-bold mb-2">Consultancy</h3>
                  <p className="text-white/90">Expert resource management.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it - here's what our clients have to say about our services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl text-primary-300 mb-4">"</div>
                  <p className="italic text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-primary-600 font-semibold">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Stats Section */}
      <Section className="bg-primary-700 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Latest Blog Posts
      <Section>
        <Container>
          <SectionTitle 
            title="Latest Water Engineering Insights" 
            subtitle="Stay updated with our blog on water engineering trends and solutions in Nigeria"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400?text=Water+Blog" 
                  alt="Blog post"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">June 15, 2023</div>
                <CardTitle>Modern Water Treatment Technologies for Nigerian Industries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Exploring the latest water treatment technologies suitable for Nigerian industrial applications...</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">Read More &rarr;</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400?text=Water+Blog" 
                  alt="Blog post"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">May 22, 2023</div>
                <CardTitle>Sustainable Irrigation Practices for Nigerian Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>How modern irrigation techniques are helping Nigerian farmers conserve water while improving yields...</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">Read More &rarr;</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400?text=Water+Blog" 
                  alt="Blog post"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">April 10, 2023</div>
                <CardTitle>Quality Standards for Bottled Water Production in Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Understanding the regulations and best practices for producing bottled water that meets Nigerian standards...</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">Read More &rarr;</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </Container>
      </Section> */}
      
      {/* Newsletter */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest news, trends, and insights in water engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow max-w-md"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 