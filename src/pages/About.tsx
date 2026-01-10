import { Link } from "react-router-dom";
import { Heart, Shield, Users, Eye, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import fosterHome from "@/assets/foster-home.jpg";
import vetCare from "@/assets/vet-care.jpg";

const values = [
  {
    icon: Heart,
    title: "Animal Welfare First",
    description: "Every decision we make prioritizes the health, safety, and wellbeing of the animals in our care."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We operate with complete openness about our processes, finances, and animal care practices."
  },
  {
    icon: Shield,
    title: "Ethical Operations",
    description: "We comply with all local and state regulations and maintain the highest ethical standards."
  },
  {
    icon: Users,
    title: "Community Trust",
    description: "We build lasting relationships with donors, adopters, and partners based on trust and integrity."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A Foster-Based Rescue with Heart
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Marcescott Animal Sanctuary LLC operates as a foster-based animal rescue dedicated 
              to the care, rehabilitation, and responsible rehoming of animals in need.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                badge="Who We Are"
                title="Compassion in Action"
                description=""
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Based in Houston, Texas, Marcescott Animal Sanctuary LLC was founded with a 
                  simple but powerful mission: to give rescued animals the care they deserve 
                  and the second chance they need.
                </p>
                <p>
                  Unlike traditional shelters, we operate through a network of dedicated foster 
                  homes. This approach allows us to provide individualized attention to each 
                  animal, helping them heal from past trauma and prepare for life with their 
                  forever families.
                </p>
                <p>
                  Our team works closely with licensed veterinary professionals to ensure every 
                  animal receives proper medical care, vaccinations, and treatment before adoption.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={fosterHome} 
                alt="A foster cat in a loving home environment" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={vetCare} 
                alt="Veterinarian examining a puppy" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                badge="Why We Exist"
                title="Because Every Life Matters"
                description=""
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                <p>
                  Every year, millions of animals find themselves without homes, facing uncertain 
                  futures. Many are surrendered due to circumstances beyond their control, while 
                  others are rescued from neglect or abandonment.
                </p>
                <p>
                  We exist to bridge the gap between these animals and the loving families waiting 
                  to welcome them. Through careful rehabilitation and responsible placement, we 
                  give each animal the opportunity to thrive.
                </p>
              </div>
              <Link to="/what-we-do">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn What We Do
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Our Values"
            title="What Guides Us"
            description="Our core values shape every aspect of our work and define who we are as an organization."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-sanctuary text-center">
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foster Model Explanation */}
      <section className="section-padding bg-secondary">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              badge="Our Model"
              title="Foster-Based Rescue: A Better Approach"
              description=""
            />
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our foster-based model means we do not operate a physical shelter facility. 
                Instead, animals in our care live in private foster homes where they receive:
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "One-on-one attention and socialization",
                  "A calm, home environment for recovery",
                  "Assessment of personality and needs in a real-world setting",
                  "Better preparation for life in their forever home",
                  "Reduced stress compared to traditional shelter environments"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                This approach allows us to be highly selective in our placements and ensures 
                each animal is truly ready for adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-sanctuary text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to give every animal a second chance at a happy life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/foster">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Become a Foster
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Support Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
