import { Link } from "react-router-dom";
import { Heart, Home, Users, Stethoscope, HandHeart, ArrowRight, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CTACard from "@/components/shared/CTACard";
import StatCard from "@/components/shared/StatCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import heroImage from "@/assets/hero-dog.jpg";
import fosterCat from "@/assets/foster-cat.jpg";
import adoptionFamily from "@/assets/adoption-family.jpg";
import volunteers from "@/assets/volunteers.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Volunteer caring for a golden retriever" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        
        <div className="container-sanctuary relative z-10 py-20">
          <div className="max-w-2xl text-white animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 text-white">
              <Heart className="w-4 h-4" fill="currentColor" />
              Foster-Based Animal Rescue
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Every Animal Deserves a Second Chance
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Marcescott Animal Sanctuary LLC is dedicated to rescuing, rehabilitating, and 
              rehoming animals in need through compassionate foster care in Houston, Texas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Donate Now
                </Button>
              </Link>
              <Link to="/foster">
                <Button size="lg" variant="hero">
                  Become a Foster
                </Button>
              </Link>
              <Link to="/adopt">
                <Button size="lg" variant="hero">
                  Adopt a Pet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 border-y border-border">
        <div className="container-sanctuary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="250+" label="Animals Rescued" />
            <StatCard value="200+" label="Successful Adoptions" />
            <StatCard value="25+" label="Active Foster Homes" />
            <StatCard value="4+" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                badge="Our Mission"
                title="Providing Hope Through Compassionate Care"
                description=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Marcescott Animal Sanctuary, we believe every animal deserves safety, love, and 
                a chance at a better life. As a foster-based rescue, we work with a dedicated network 
                of private foster homes and licensed veterinary partners to provide individualized 
                care for each animal in our program.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ethical and transparent rescue operations",
                  "Professional veterinary care partnerships",
                  "Thorough adoption screening process",
                  "Ongoing support for adopters and fosters"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={fosterCat} 
                alt="Woman caring for a foster cat" 
                className="rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-soft border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Fully Compliant</div>
                    <div className="text-sm text-muted-foreground">Texas Animal Welfare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="See Our Work"
            title="Making a Difference Every Day"
            description="Watch how our dedicated team and volunteers work together to give animals a second chance at life."
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Video 1 - Dog Care */}
            <div className="rounded-2xl overflow-hidden shadow-medium bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/215426163?h=8a8c1e6c84&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Dog care video"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold text-foreground">Caring for Our Rescue Dogs</h3>
                <p className="text-sm text-muted-foreground">See how we rehabilitate and prepare dogs for their forever homes.</p>
              </div>
            </div>

            {/* Video 2 - Cat Care */}
            <div className="rounded-2xl overflow-hidden shadow-medium bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/298864351?h=6f8e3f8d4b&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Cat care video"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold text-foreground">Foster Cat Success Stories</h3>
                <p className="text-sm text-muted-foreground">Witness the transformation of cats in loving foster care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Get Involved"
            title="How You Can Help"
            description="Every act of kindness makes a difference. Discover the many ways you can support our mission and help animals in need."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CTACard 
              icon={HandHeart}
              title="Donate"
              description="Your generosity directly supports animal care, medical treatment, and rescue operations."
              linkText="Make a Donation"
              linkTo="/donate"
              variant="accent"
            />
            <CTACard 
              icon={Home}
              title="Foster"
              description="Open your home temporarily to help an animal heal and prepare for their forever family."
              linkText="Become a Foster"
              linkTo="/foster"
              variant="primary"
            />
            <CTACard 
              icon={Heart}
              title="Adopt"
              description="Give a rescued animal their forever home and experience the joy of unconditional love."
              linkText="View Adoptable Pets"
              linkTo="/adopt"
              variant="secondary"
            />
            <CTACard 
              icon={Users}
              title="Volunteer"
              description="Share your time and skills to help with events, transport, and community outreach."
              linkText="Join Our Team"
              linkTo="/contact"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Our Animals"
            title="Meet Some of Our Rescues"
            description="Every animal has a story. These are just a few of the wonderful animals we've helped find loving homes."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop" 
                alt="Happy golden retriever" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" 
                alt="Curious orange cat" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop" 
                alt="Playful puppy" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop" 
                alt="Cute kitten" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop" 
                alt="Fluffy rabbit" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=400&fit=crop" 
                alt="Dog playing in park" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop" 
                alt="Cat relaxing" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop" 
                alt="Happy dog portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={adoptionFamily} 
                alt="Happy family with their adopted dog" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                badge="Success Stories"
                title="Creating Forever Families"
                description=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every adoption is a new beginning. Our careful matching process ensures that each 
                animal finds a home where they will thrive. We provide ongoing support to both 
                our adopted animals and their new families to ensure successful, lasting placements.
              </p>
              <Link to="/adopt">
                <Button className="bg-primary hover:bg-primary/90">
                  Start Your Adoption Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Testimonials"
            title="What Our Community Says"
            description="Hear from the families and volunteers who have been part of our mission."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Fostering through Marcescott has been incredibly rewarding. The support and resources they provide make it easy to help animals in need."
              author="Sarah M."
              role="Foster Parent"
            />
            <TestimonialCard 
              quote="We adopted our sweet dog Max through Marcescott, and we couldn't be happier. The adoption process was thorough and caring."
              author="The Johnson Family"
              role="Adopters"
            />
            <TestimonialCard 
              quote="As a veterinary partner, I'm impressed by their commitment to animal welfare and their ethical, transparent operations."
              author="Dr. Emily Chen"
              role="Partner Veterinarian"
            />
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={volunteers} 
            alt="Volunteers at an animal rescue event" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container-sanctuary relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Our Community of Compassion
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you donate, foster, adopt, or volunteer, you become part of a 
              community dedicated to giving animals a second chance at life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Donate Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="hero">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
