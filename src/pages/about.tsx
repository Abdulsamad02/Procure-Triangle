import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Hero } from '../components/ui/hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Clock, Users, Target, Award, CheckCircle, MapPin, ArrowRight } from 'lucide-react';

export function AboutPage() {
  // Core values data
  const coreValues = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in all aspects of our work, from engineering design to customer service.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical conduct in all our business dealings.',
      icon: Shield,
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new and better solutions to water engineering challenges.',
      icon: Target,
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices and water conservation.',
      icon: CheckCircle,
    },
    {
      title: 'Community',
      description: 'We recognize our role in supporting local communities through access to clean water.',
      icon: Users,
    },
    {
      title: 'Reliability',
      description: 'We deliver projects on time, within budget, and to specification, every time.',
      icon: Clock,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Eng. Adebayo Johnson',
      position: 'Founder & CEO',
      bio: 'With over 25 years in water engineering, Adebayo founded Rehoboth Glow Technology to address Nigeria\'s water challenges through innovative solutions.',
      imageSrc: 'https://via.placeholder.com/400x400?text=CEO',
    },
    {
      name: 'Dr. Fatima Ibrahim',
      position: 'Technical Director',
      bio: 'A PhD in Environmental Engineering, Fatima oversees all technical aspects of our projects, ensuring they meet international standards.',
      imageSrc: 'https://via.placeholder.com/400x400?text=Technical+Director',
    },
    {
      name: 'Eng. Samuel Okonkwo',
      position: 'Operations Manager',
      bio: 'Samuel brings 15 years of experience in project management to ensure smooth execution of all water engineering projects.',
      imageSrc: 'https://via.placeholder.com/400x400?text=Operations+Manager',
    },
    {
      name: 'Mrs. Chioma Adeleke',
      position: 'Business Development Manager',
      bio: 'Chioma leads our client relationship management and business growth strategies across Nigeria.',
      imageSrc: 'https://via.placeholder.com/400x400?text=Business+Development',
    },
  ];

  // Certifications data
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management System',
    },
    {
      name: 'NAFDAC Certified',
      description: 'National Agency for Food and Drug Administration and Control',
    },
    {
      name: 'SON Certified',
      description: 'Standards Organization of Nigeria',
    },
    {
      name: 'COREN Registered',
      description: 'Council for the Regulation of Engineering in Nigeria',
    },
    {
      name: 'IWWA Member',
      description: 'International Water Works Association',
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: '2012',
      title: 'Company Founded',
      description: 'Rehoboth Glow Technology was established in Abuja, Nigeria.',
    },
    {
      year: '2013',
      title: 'First Major Project',
      description: 'Completed our first large-scale municipal water treatment plant.',
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Opened additional offices in Lagos and Port Harcourt.',
    },
    {
      year: '2017',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 and 14001 certifications.',
    },
    {
      year: '2018',
      title: 'Pure Water Division',
      description: 'Launched specialized division for bottled and sachet water production systems.',
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received National Innovation Award for water conservation technology.',
    },
  ];

  return (
    <>
      <Hero 
        title="About Rehoboth Glow Technology"
        subtitle="Delivering innovative water engineering solutions across Nigeria since 2012"
        backgroundImage="https://via.placeholder.com/1920x600?text=About+Us"
      />
      
      {/* Mission and Vision */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide innovative, sustainable, and reliable water engineering solutions 
                    that improve access to clean water and enhance quality of life across Nigeria.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Vision</h3>
                  <p className="text-gray-600">
                    To be Nigeria's leading water engineering company, recognized for excellence, 
                    innovation, and commitment to solving the country's water challenges.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild className=" flex gap-2 border border-primary-600 rounded-sm">
                    <Link to="/contact">Work With Us</Link>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://via.placeholder.com/600x400?text=Our+Mission" 
                alt="Rehoboth Glow mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Company History */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our History"
            subtitle="The journey of Rehoboth Glow Technology from inception to becoming a leading water engineering company in Nigeria"
          />
          
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary-200 transform md:translate-x-0 translate-x-5"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-12">
                    <div className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="absolute top-2 left-[-2.5rem] md:left-auto md:right-[-2.5rem] rounded-full h-10 w-10 bg-primary-500 flex items-center justify-center text-white font-bold z-10">
                        {item.year}
                      </div>
                      <Card className="max-w-md">
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{item.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Core Values */}
      <Section>
        <Container>
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Team Section */}
      <Section id="team" className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The experts behind Rehoboth Glow Technology's innovative water solutions"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <div className="text-sm text-primary-600">{member.position}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Certifications */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Certifications"
                subtitle="Quality and standards you can trust"
              />
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                      <Award className="h-4 w-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/600x400?text=Certifications" 
                    alt="Rehoboth Glow certifications"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">
                    Our certifications and partnerships reflect our commitment to maintaining the highest standards
                    in water engineering. We adhere to both Nigerian and international standards to ensure the quality
                    and safety of all our projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Office Location */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Office"
            subtitle="Visit us at our headquarters in Abuja, Nigeria"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-full min-h-[400px]">
                {/* Placeholder for Google Maps - would be replaced with actual embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">
                    Google Maps Embed would be here
                  </span>
                </div>
              </div>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-gray-600">123 Water Way, Abuja, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Lagos Office</h4>
                    <p className="text-gray-600">456 Marina Street, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Port Harcourt Office</h4>
                    <p className="text-gray-600">789 Ada George Road, Port Harcourt, Nigeria</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" asChild className=" flex gap-2 border border-primary-600 rounded-sm">
                    <Link to="/contact">Contact Us</Link>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Partner with Rehoboth Glow Technology
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied clients who trust us with their water engineering needs.
              Let's work together to create sustainable water solutions for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/projects">Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 