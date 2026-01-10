import { Link } from "react-router-dom";
import { Heart, Home, Clock, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import fosterHome from "@/assets/foster-home.jpg";
import fosterCat from "@/assets/foster-cat.jpg";

const benefits = [
  "Save lives without the permanent commitment of adoption",
  "Help animals heal and prepare for their forever homes",
  "Experience the joy of companionship on a temporary basis",
  "All supplies and veterinary care provided by us",
  "Ongoing support from our experienced team",
  "First right of refusal if you fall in love"
];

const expectations = [
  {
    title: "Provide a Safe Space",
    description: "A quiet, secure area where your foster animal can decompress and feel safe."
  },
  {
    title: "Basic Care",
    description: "Daily feeding, fresh water, and maintaining a clean environment."
  },
  {
    title: "Socialization",
    description: "Gentle interaction to help the animal adjust to home life and build confidence."
  },
  {
    title: "Medication Administration",
    description: "If needed, administering prescribed medications as directed by our veterinary partners."
  },
  {
    title: "Communication",
    description: "Regular updates on how your foster is doing and prompt reporting of any concerns."
  },
  {
    title: "Transport",
    description: "Occasional transport to veterinary appointments or adoption events when possible."
  }
];

const process = [
  {
    step: "1",
    title: "Apply Online",
    description: "Complete our foster application form with information about your home and experience."
  },
  {
    step: "2",
    title: "Home Check",
    description: "We'll verify that your home environment is safe and suitable for fostering."
  },
  {
    step: "3",
    title: "Orientation",
    description: "Receive training on our processes, animal care, and what to expect as a foster."
  },
  {
    step: "4",
    title: "Get Matched",
    description: "We'll match you with a foster animal based on your home setup and preferences."
  },
  {
    step: "5",
    title: "Welcome Home",
    description: "Pick up your foster, along with all necessary supplies, and begin the rewarding journey."
  }
];

const Foster = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Foster Program
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Open Your Home, Save a Life
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fostering is one of the most impactful ways you can help animals in need. 
              By providing temporary care, you give them a safe place to heal and prepare 
              for their forever families.
            </p>
          </div>
        </div>
      </section>

      {/* What is Fostering */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                badge="What is Fostering?"
                title="A Temporary Home with Lasting Impact"
                description=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fostering means opening your home to temporarily care for a rescued animal 
                until they find their permanent family. As a foster, you provide love, 
                socialization, and a stable environment that helps animals thrive.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide all necessary supplies including food, medications, and veterinary 
                care. Your role is simply to provide a safe, loving environment where the 
                animal can decompress and show their true personality.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Apply to Foster
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={fosterHome} 
                alt="A foster cat relaxing in a home environment" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={fosterCat} 
                alt="Woman caring for a foster cat" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                badge="Benefits"
                title="Why Foster?"
                description=""
                centered={false}
              />
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="What to Expect"
            title="Foster Responsibilities"
            description="Here's what we ask of our foster families to ensure every animal receives the care they need."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((item) => (
              <div key={item.title} className="card-sanctuary">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="The Process"
            title="How to Become a Foster"
            description="Getting started is easy. Here's what to expect when you apply to join our foster network."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <div className={`flex-1 pb-6 ${index !== process.length - 1 ? "border-b border-border" : ""}`}>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-sanctuary text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Apply today to become a foster parent and help give animals a second chance at happiness.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Apply to Foster
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Foster;
