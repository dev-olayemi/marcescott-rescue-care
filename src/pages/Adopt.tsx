import { Link } from "react-router-dom";
import { Heart, Search, FileCheck, Home, HandHeart, ArrowRight, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import adoptionFamily from "@/assets/adoption-family.jpg";
import rescueDog from "@/assets/rescue-dog-portrait.jpg";
import rescueRabbit from "@/assets/rescue-rabbit.jpg";
import fosterCat from "@/assets/foster-cat.jpg";

const adoptablePets = [
  {
    name: "Max",
    type: "Dog",
    breed: "Mixed Breed",
    age: "2 years",
    description: "Friendly and playful, great with families",
    image: rescueDog
  },
  {
    name: "Luna",
    type: "Cat",
    breed: "Tabby",
    age: "1 year",
    description: "Affectionate lap cat, loves to cuddle",
    image: fosterCat
  },
  {
    name: "Biscuit",
    type: "Rabbit",
    breed: "Holland Lop",
    age: "8 months",
    description: "Gentle and curious, perfect for families",
    image: rescueRabbit
  }
];

const process = [
  {
    icon: Search,
    title: "Browse Available Pets",
    description: "View our current adoptable animals and find one that might be a good fit for your family."
  },
  {
    icon: FileCheck,
    title: "Submit Application",
    description: "Complete our adoption application with information about your home, lifestyle, and experience."
  },
  {
    icon: Heart,
    title: "Meet & Greet",
    description: "Schedule a meeting with the animal to ensure it's a good match for everyone involved."
  },
  {
    icon: Home,
    title: "Home Visit",
    description: "We'll verify that your home is safe and suitable for the specific animal you're adopting."
  },
  {
    icon: HandHeart,
    title: "Adoption Day",
    description: "Complete the adoption, receive all records and supplies, and welcome your new family member home!"
  }
];

const Adopt = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Adopt
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect Companion
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every adoption creates a forever family. Our animals are looking for loving 
              homes where they can thrive. Could you be the one they've been waiting for?
            </p>
          </div>
        </div>
      </section>

      {/* Adoption Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                badge="Our Approach"
                title="Thoughtful Placements for Lasting Bonds"
                description=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe adoption is about finding the right match, not just any match. 
                Our adoption process is designed to ensure that each animal is placed in a 
                home where they will thrive and that each family receives an animal that 
                fits their lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Because our animals live in foster homes, we have detailed knowledge of 
                their personalities, habits, and needs. This allows us to make informed 
                recommendations and set everyone up for success.
              </p>
              <ul className="space-y-3">
                {[
                  "All animals are spayed/neutered and vaccinated",
                  "Complete medical and behavioral records provided",
                  "Ongoing support for new adopters",
                  "30-day adjustment period with guidance"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={adoptionFamily} 
                alt="Happy family with their adopted dog" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Meet Our Animals"
            title="Currently Available for Adoption"
            description="These wonderful animals are ready to find their forever homes. Contact us to learn more about any of them."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {adoptablePets.map((pet) => (
              <div key={pet.name} className="card-sanctuary overflow-hidden p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pet.image} 
                    alt={pet.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-semibold text-foreground">{pet.name}</h3>
                    <span className="px-2 py-1 bg-sage-light text-primary text-xs font-medium rounded-full">
                      {pet.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{pet.breed} • {pet.age}</p>
                  <p className="text-muted-foreground">{pet.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Inquire About Adoption
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="The Process"
            title="How Adoption Works"
            description="Our adoption process is thorough but straightforward. Here's what to expect."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Step {index + 1}</div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Fees */}
      <section className="section-padding bg-secondary">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              badge="Adoption Fees"
              title="Cost-Recovery Fees"
              description=""
            />
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Our adoption fees are strictly cost-recovery and help cover the expenses of 
                  caring for animals in our program. These fees include spay/neuter surgery, 
                  vaccinations, microchipping, and any medical treatment received while in our care.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-sage-light rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-primary">$150-250</div>
                  <div className="text-sm text-muted-foreground">Dogs</div>
                </div>
                <div className="bg-sage-light rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-primary">$100-150</div>
                  <div className="text-sm text-muted-foreground">Cats</div>
                </div>
                <div className="bg-sage-light rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-primary">$50-100</div>
                  <div className="text-sm text-muted-foreground">Small Animals</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Actual fees may vary based on individual animal needs and care received.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-sanctuary text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Adopt?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your adoption journey today. Contact us to learn more about our available 
            animals or to submit an adoption application.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Adopt;
