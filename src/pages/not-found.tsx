import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/utils/seo';
import { getCanonicalUrl } from '../lib/meta-utils';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Sorry, the page you're looking for can't be found. Navigate back to Rehobothglow Technology's main site."
        ogType="website"
        ogUrl={getCanonicalUrl('404')}
      >
        {/* Additional meta tags for 404 page */}
        <meta name="robots" content="noindex, nofollow" />
      </SEO>
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary-50 p-3">
              <div className="rounded-full bg-primary-100 p-4">
                <div className="rounded-full bg-primary-200 p-5">
                  <div className="rounded-full bg-primary-300 p-6 text-primary-600">
                    404
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or the URL may have been mistyped.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact support
              </Link>
            </Button>
          </div>
          
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Looking for something else?</h2>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary-600">
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
} 