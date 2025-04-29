import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/container';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Water Treatment Systems', href: '/services#water-treatment' },
    { name: 'Borehole Drilling', href: '/services#borehole-drilling' },
    { name: 'Irrigation Systems', href: '/services#irrigation-systems' },
    { name: 'Water Resource Management', href: '/services#water-management' },
    { name: 'Bottled Water Production', href: '/services#bottled-water' },
    { name: 'Pure Water Production', href: '/services#pure-water' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/blog' },
    { name: 'Client Portal', href: '/client-portal' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-800 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="py-12 xl:py-16">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">RG</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Rehoboth Glow</div>
                  <div className="text-xs text-primary-200">Technology Nigeria</div>
                </div>
              </div>
              <p className="text-sm leading-6 text-primary-100">
                Innovative water engineering solutions for Nigeria's future. Providing high-quality water treatment systems and services since 2012.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-primary-200 hover:text-white">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm leading-6 text-primary-100 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm leading-6 text-primary-100 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm leading-6 text-primary-100 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0 w-full">
                  <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="flex gap-x-3">
                      <MapPin className="h-5 w-5 flex-none text-primary-200" aria-hidden="true" />
                      <span className="text-sm leading-6 text-primary-100">123 Water Way, Abuja, Nigeria</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Phone className="h-5 w-5 flex-none text-primary-200" aria-hidden="true" />
                      <span className="text-sm leading-6 text-primary-100">+234 123 456 7890</span>
                    </li>
                    <li className="flex gap-x-3 flex-wrap">
                      <Mail className="h-5 w-5 flex-none text-primary-200" aria-hidden="true" />
                      <span className="text-sm leading-6 text-primary-100 wrap">info@rehobothglow.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs max-md:text-center text-primary-200">
              &copy; {new Date().getFullYear()} Rehoboth Glow Technology Nigeria. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              {navigation.legal.map((item) => (
                <Link key={item.name} to={item.href} className="text-primary-200 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 