import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Calendar, ArrowRight, Filter as FilterIcon } from 'lucide-react';
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

// Project data
const projects = [
  {
    id: 'municipal-water-treatment',
    title: 'Municipal Water Treatment Plant',
    location: 'Lagos, Nigeria',
    date: 'January 2022',
    category: 'water-treatment',
    description: 'Design and implementation of a 50,000 GPD municipal water treatment facility serving a community of 25,000 residents.',
    challenge: 'The rapidly growing community faced water quality issues with high turbidity and bacterial contamination. The existing infrastructure was outdated and insufficient for the population.',
    solution: 'We designed and built a modern water treatment plant utilizing a multi-stage filtration system, UV disinfection, and automated monitoring. The plant was designed for energy efficiency and future capacity expansion.',
    results: 'The new plant provides clean, safe drinking water for the entire community, meeting all Nigerian and WHO water quality standards. Operating costs were reduced by 30% compared to the previous system through energy efficiency measures.',
    image: 'https://via.placeholder.com/800x500?text=Municipal+Water+Treatment',
    images: [
      'https://via.placeholder.com/800x500?text=Municipal+Plant+1',
      'https://via.placeholder.com/800x500?text=Municipal+Plant+2',
      'https://via.placeholder.com/800x500?text=Municipal+Plant+3',
    ]
  },
  {
    id: 'agricultural-irrigation',
    title: 'Agricultural Irrigation System',
    location: 'Kano, Nigeria',
    date: 'March 2021',
    category: 'irrigation',
    description: 'Large-scale drip irrigation system for a 500-acre commercial farm growing vegetables and grains.',
    challenge: 'The farm was facing water scarcity issues and inconsistent rainfall patterns, affecting crop yields and profitability. Traditional irrigation methods were inefficient and labor-intensive.',
    solution: 'We designed and implemented a comprehensive drip irrigation system with soil moisture monitoring, automated controls, and weather-responsive scheduling. The system includes water harvesting and storage components.',
    results: 'The farm reduced water usage by 40% while increasing crop yields by 35% in the first growing season. Labor costs decreased significantly, and the system\'s ROI was achieved within 18 months of operation.',
    image: 'https://via.placeholder.com/800x500?text=Agricultural+Irrigation',
    images: [
      'https://via.placeholder.com/800x500?text=Irrigation+1',
      'https://via.placeholder.com/800x500?text=Irrigation+2',
      'https://via.placeholder.com/800x500?text=Irrigation+3',
    ]
  },
  {
    id: 'bottled-water-facility',
    title: 'Bottled Water Production Facility',
    location: 'Abuja, Nigeria',
    date: 'November 2020',
    category: 'bottled-water',
    description: 'Complete engineering and setup of a bottled water production facility with a capacity of 20,000 bottles per day.',
    challenge: 'The client wanted to enter the premium bottled water market but lacked expertise in production facility design, regulatory compliance, and quality control processes.',
    solution: 'We designed and implemented a complete bottled water production line, including water treatment (reverse osmosis, ozonation, UV), automated bottling, capping, labeling, and packaging systems.',
    results: 'The facility was successfully commissioned and now produces 20,000 bottles per day, with all NAFDAC and SON approvals. The water quality consistently exceeds industry standards, establishing the brand as a premium option in the market.',
    image: 'https://via.placeholder.com/800x500?text=Bottled+Water+Facility',
    images: [
      'https://via.placeholder.com/800x500?text=Bottled+Water+1',
      'https://via.placeholder.com/800x500?text=Bottled+Water+2',
      'https://via.placeholder.com/800x500?text=Bottled+Water+3',
    ]
  },
  {
    id: 'industrial-wastewater',
    title: 'Industrial Wastewater Recycling System',
    location: 'Port Harcourt, Nigeria',
    date: 'August 2021',
    category: 'wastewater',
    description: 'Design and implementation of a closed-loop wastewater treatment and recycling system for a manufacturing facility.',
    challenge: 'The manufacturing facility needed to reduce its water consumption and minimize wastewater discharge to meet new environmental regulations and reduce operational costs.',
    solution: 'We designed and implemented a comprehensive wastewater treatment and recycling system that includes physical, chemical, and biological treatment stages, allowing treated water to be reused in non-critical manufacturing processes.',
    results: 'The facility reduced fresh water consumption by 60% and wastewater discharge by 75%, saving costs and achieving full regulatory compliance. The project received recognition for environmental stewardship from local authorities.',
    image: 'https://via.placeholder.com/800x500?text=Industrial+Wastewater',
    images: [
      'https://via.placeholder.com/800x500?text=Wastewater+1',
      'https://via.placeholder.com/800x500?text=Wastewater+2',
      'https://via.placeholder.com/800x500?text=Wastewater+3',
    ]
  },
  {
    id: 'community-borehole',
    title: 'Community Borehole Project',
    location: 'Rural Kano, Nigeria',
    date: 'February 2022',
    category: 'borehole',
    description: 'Installation of a solar-powered borehole water system for a rural community with limited water access.',
    challenge: 'The village had limited access to clean water, with residents walking several kilometers daily to fetch water. Waterborne diseases were common, and agricultural activities were limited by water scarcity.',
    solution: 'We drilled a 150-meter deep borehole, installed a solar-powered pumping system, constructed a 10,000-liter elevated storage tank, and created multiple distribution points throughout the village.',
    results: 'The community now has reliable access to clean water, improving health outcomes and quality of life for over 2,000 residents. Incidence of waterborne diseases decreased by 85% within six months of project completion.',
    image: 'https://via.placeholder.com/800x500?text=Community+Borehole',
    images: [
      'https://via.placeholder.com/800x500?text=Borehole+1',
      'https://via.placeholder.com/800x500?text=Borehole+2',
      'https://via.placeholder.com/800x500?text=Borehole+3',
    ]
  },
  {
    id: 'sachet-water-upgrade',
    title: 'Sachet Water Production Upgrade',
    location: 'Ibadan, Nigeria',
    date: 'May 2021',
    category: 'pure-water',
    description: 'Comprehensive upgrade of an existing sachet water production facility to increase capacity and improve quality.',
    challenge: 'An existing sachet water producer needed to increase capacity and improve quality to meet growing demand and stricter NAFDAC regulations. The facility was using outdated equipment with frequent breakdowns.',
    solution: 'We redesigned the production system with advanced multi-stage water treatment (including ultrafiltration and UV disinfection) and installed a high-speed automated packaging line with real-time quality monitoring.',
    results: 'Production capacity increased by 300%, quality improved to exceed regulatory standards, and operational costs per unit decreased by 25%. The facility now operates 24/7 with minimal downtime.',
    image: 'https://via.placeholder.com/800x500?text=Sachet+Water+Upgrade',
    images: [
      'https://via.placeholder.com/800x500?text=Sachet+Water+1',
      'https://via.placeholder.com/800x500?text=Sachet+Water+2',
      'https://via.placeholder.com/800x500?text=Sachet+Water+3',
    ]
  },
  {
    id: 'hospital-water-quality',
    title: 'Hospital Water Quality System',
    location: 'Abuja, Nigeria',
    date: 'December 2021',
    category: 'water-quality',
    description: 'Implementation of a comprehensive water quality monitoring and treatment system for a major hospital.',
    challenge: 'A major hospital needed to ensure consistent water quality throughout its facility, particularly for sensitive areas like operating rooms, dialysis units, and laboratories.',
    solution: 'We implemented a multi-tiered water treatment system with specialized filtration for different hospital areas, real-time monitoring with alerts for quality parameters, and emergency backup systems.',
    results: 'The hospital has maintained perfect compliance with health standards and prevented potential contamination incidents through early detection. The system has been recognized as a model for healthcare water quality management in Nigeria.',
    image: 'https://via.placeholder.com/800x500?text=Hospital+Water+Quality',
    images: [
      'https://via.placeholder.com/800x500?text=Hospital+1',
      'https://via.placeholder.com/800x500?text=Hospital+2',
      'https://via.placeholder.com/800x500?text=Hospital+3',
    ]
  },
  {
    id: 'hotel-water-treatment',
    title: 'Luxury Hotel Water Treatment System',
    location: 'Lagos, Nigeria',
    date: 'July 2020',
    category: 'water-treatment',
    description: 'Design and installation of a comprehensive water treatment system for a 5-star hotel with 300 rooms.',
    challenge: 'The hotel required consistent, high-quality water for guest rooms, restaurants, swimming pools, and laundry services, while operating in an area with unreliable municipal water supply.',
    solution: 'We designed and implemented a complete water treatment plant with primary, secondary, and tertiary treatment stages, water storage, and distribution systems tailored to the specific needs of each hotel department.',
    results: 'The hotel now enjoys uninterrupted supply of high-quality water for all operations, meeting international hospitality standards. Guest satisfaction scores for water quality increased from 65% to 98%.',
    image: 'https://via.placeholder.com/800x500?text=Hotel+Water+Treatment',
    images: [
      'https://via.placeholder.com/800x500?text=Hotel+1',
      'https://via.placeholder.com/800x500?text=Hotel+2',
      'https://via.placeholder.com/800x500?text=Hotel+3',
    ]
  },
];

// Filter categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'water-treatment', name: 'Water Treatment' },
  { id: 'irrigation', name: 'Irrigation Systems' },
  { id: 'borehole', name: 'Borehole Drilling' },
  { id: 'bottled-water', name: 'Bottled Water' },
  { id: 'pure-water', name: 'Pure Water (Sachet)' },
  { id: 'wastewater', name: 'Wastewater Management' },
  { id: 'water-quality', name: 'Water Quality' },
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <SEO 
        title="Our Projects"
        description="Explore Rehobothglow Technology's portfolio of successful water engineering projects across Nigeria, including water treatment plants, irrigation systems, and production facilities."
        keywords="water engineering projects, Nigeria, municipal water treatment, agricultural irrigation, borehole drilling, water production, case studies"
      />
      
      {/* Modern Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
          <img 
            src="https://via.placeholder.com/1920x600?text=Projects" 
            alt="Our Projects"
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
                <span className="text-sm font-medium">Our Portfolio</span>
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
                variants={fadeIn}
              >
                Water Engineering <span className="text-primary-200">Projects</span>
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-2xl mb-8"
                variants={fadeIn}
              >
                Explore our diverse portfolio of completed water engineering solutions 
                across Nigeria, showcasing innovation and sustainable impact.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white hover:bg-white/20">
                  <a href="#featured-project">View Featured Project</a>
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
                  <div className="grid grid-cols-2 gap-3">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Project+1" 
                      alt="Project showcase 1"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <img 
                      src="https://via.placeholder.com/300x200?text=Project+2" 
                      alt="Project showcase 2"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <img 
                      src="https://via.placeholder.com/300x200?text=Project+3" 
                      alt="Project showcase 3"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <img 
                      src="https://via.placeholder.com/300x200?text=Project+4" 
                      alt="Project showcase 4"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>
      
      {/* Projects Filter */}
      <Section className="bg-gray-50 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Project Portfolio</h2>
            
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FilterIcon className="h-4 w-4" />
              <span>Filter Projects</span>
            </Button>
          </div>
          
          <div className={`md:flex ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button 
                  key={category.id} 
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Projects Grid */}
      <Section>
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Please try another filter category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Card key={project.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='border border-primary-600 rounded-sm'>
                      <Link className=" flex gap-2 items-center " to={`/projects/${project.id}`}>
                        View Project Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>
      
      {/* Feature Project */}
      <Section className="bg-primary-50">
        <Container>
          <SectionTitle 
            title="Featured Project"
            subtitle="Learn more about one of our most impactful water engineering projects"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/800x600?text=Featured+Project" 
                alt="Featured water engineering project"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Municipal Water Treatment Plant</h3>
              <p className="text-gray-500 mb-6">Lagos, Nigeria • January 2022</p>
              
              <p className="text-gray-600 mb-4">
                This comprehensive water treatment facility serves a community of 25,000 residents, addressing 
                previously critical water quality issues including high turbidity and bacterial contamination.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary-600">The Challenge</h4>
                  <p className="text-gray-600">
                    The rapidly growing community faced water quality issues with outdated infrastructure 
                    insufficient for the expanding population.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary-600">Our Solution</h4>
                  <p className="text-gray-600">
                    We designed and built a modern water treatment plant utilizing multi-stage filtration, 
                    UV disinfection, and automated monitoring with future expansion capacity.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary-600">The Results</h4>
                  <p className="text-gray-600">
                    The new plant provides clean drinking water meeting all Nigerian and WHO standards, 
                    with 30% lower operating costs through energy efficiency measures.
                  </p>
                </div>
              </div>
              
              <Button asChild className=" border border-primary-600 rounded-sm">
                <Link to="/projects/municipal-water-treatment">
                    <span className="flex items-center gap-2">
                      View Complete Case Study
                      <ArrowRight className="h-4 w-4" />
                    </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Start Your Own Water Project?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how Rehoboth Glow Technology can help solve your water engineering challenges
              with innovative, sustainable solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Contact Our Experts</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 