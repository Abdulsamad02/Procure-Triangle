import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Hero } from '../components/ui/hero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Blog posts data
const blogPosts = [
  {
    id: 'modern-water-treatment',
    title: 'Modern Water Treatment Technologies for Nigerian Industries',
    excerpt: 'Exploring the latest water treatment technologies suitable for Nigerian industrial applications, with focus on cost-effectiveness and sustainability.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Eng. Adebayo Johnson',
    date: 'June 15, 2023',
    category: 'Technology',
    image: 'https://via.placeholder.com/800x500?text=Water+Treatment+Technologies'
  },
  {
    id: 'sustainable-irrigation',
    title: 'Sustainable Irrigation Practices for Nigerian Agriculture',
    excerpt: 'How modern irrigation techniques are helping Nigerian farmers conserve water while improving yields in the face of climate change.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Dr. Fatima Ibrahim',
    date: 'May 22, 2023',
    category: 'Agriculture',
    image: 'https://via.placeholder.com/800x500?text=Sustainable+Irrigation'
  },
  {
    id: 'bottled-water-standards',
    title: 'Quality Standards for Bottled Water Production in Nigeria',
    excerpt: 'Understanding the regulations and best practices for producing bottled water that meets Nigerian standards and consumer expectations.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Mrs. Chioma Adeleke',
    date: 'April 10, 2023',
    category: 'Regulations',
    image: 'https://via.placeholder.com/800x500?text=Bottled+Water+Standards'
  },
  {
    id: 'water-challenges-nigeria',
    title: "Addressing Nigeria's Water Challenges Through Engineering Solutions",
    excerpt: 'An in-depth look at the unique water challenges facing different regions of Nigeria and the engineering approaches to solve them.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Eng. Samuel Okonkwo',
    date: 'March 5, 2023',
    category: 'Research',
    image: 'https://via.placeholder.com/800x500?text=Water+Challenges'
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation Strategies for Nigerian Businesses',
    excerpt: 'Practical water conservation methods that Nigerian businesses can implement to reduce costs and environmental impact.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Dr. Fatima Ibrahim',
    date: 'February 18, 2023',
    category: 'Conservation',
    image: 'https://via.placeholder.com/800x500?text=Water+Conservation'
  },
  {
    id: 'pure-water-business',
    title: 'Starting a Pure Water (Sachet) Business in Nigeria: Technical Considerations',
    excerpt: 'A technical guide to the equipment, processes, and regulations involved in establishing a successful sachet water business.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tincidunt nisi, in sagittis libero. Donec fermentum tortor sit amet enim faucibus rutrum.',
    author: 'Eng. Adebayo Johnson',
    date: 'January 25, 2023',
    category: 'Business',
    image: 'https://via.placeholder.com/800x500?text=Sachet+Water+Business'
  },
];

// Categories for filtering
const categories = [
  'All',
  'Technology',
  'Agriculture',
  'Regulations',
  'Research',
  'Conservation',
  'Business',
];

export function BlogPage() {
  return (
    <>
      <Hero 
        title="Water Engineering Insights"
        subtitle="Stay updated with the latest trends, technologies, and best practices in water engineering"
        backgroundImage="https://via.placeholder.com/1920x600?text=Blog"
      />
      
      {/* Featured Article */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-primary-600 mb-2">{blogPosts[0].category}</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {blogPosts[0].title}
              </h2>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                {blogPosts[0].excerpt}
              </p>
              
              <Button asChild>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <span className="flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
            
            <div>
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Category Filter */}
      <Section className="py-8 bg-gray-50">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Blog Posts Grid */}
      <Section>
        <Container>
          <SectionTitle 
            title="Latest Articles"
            subtitle="Explore our collection of water engineering insights and expertise"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm font-medium text-primary-600 mb-1">{post.category}</div>
                  <CardTitle>{post.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.id}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Newsletter */}
      <Section className="bg-primary-50">
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