import { Link } from "react-router-dom";
import { Heart, Home, Stethoscope, Users, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import rescueDog from "@/assets/rescue-dog-portrait.jpg";
import fosterCat from "@/assets/foster-cat.jpg";
import vetCare from "@/assets/vet-care.jpg";
import adoptionFamily from "@/assets/adoption-family.jpg";
import volunteers from "@/assets/volunteers.jpg";

const services = [
  {
    icon: Heart,
    title: "Rescue & Intake",
    description: "We rescue animals from various situations including owner surrenders, stray situations, and partnerships with other rescue organizations. Each animal is carefully assessed upon intake to determine their immediate needs.",
    image: rescueDog
  },
  {
    icon: Home,
    title: "Foster Care",
    description: "Animals are placed in vetted foster homes where they receive individualized care, love, and socialization. Our foster families are trained and supported to help each animal thrive and prepare for adoption.",
    image: fosterCat
  },
  {
    icon: Stethoscope,
    title: "Veterinary Support",
    description: "We partner with licensed veterinary professionals to provide comprehensive medical care including vaccinations, spay/neuter services, treatment for illness or injury, and ongoing health monitoring.",
    image: vetCare
  },
  {
    icon: Users,
    title: "Adoption & Rehoming",
    description: "Our adoption process is designed to create successful, lasting matches. We thoroughly screen potential adopters and provide ongoing support to ensure both the animal and family thrive together.",
    image: adoptionFamily
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    description: "We work to educate our community about responsible pet ownership, the importance of spaying/neutering, and how everyone can play a role in reducing animal homelessness.",
    image: volunteers
  }
];

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              What We Do
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Rescue, Rehabilitate, Rehome
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive approach to animal welfare ensures every animal in our care 
              receives the support they need from rescue to forever home.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? "mb-20" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-2xl shadow-medium w-full h-[350px] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
                Our Commitment to Ethical Practice
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Marcescott Animal Sanctuary LLC is committed to ethical animal welfare practices. 
                We do not engage in commercial breeding, animal sales for profit, public 
                exhibition, or research. Our adoption fees are strictly cost-recovery and are 
                used solely to support ongoing animal care and operational expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-sanctuary text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Be Part of Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you foster, adopt, donate, or volunteer, your support makes our work possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/foster">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Become a Foster
              </Button>
            </Link>
            <Link to="/adopt">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Adopt a Pet
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
