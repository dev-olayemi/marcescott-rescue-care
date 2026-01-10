import { Link } from "react-router-dom";
import { Heart, Stethoscope, Package, Truck, Home, Users, ArrowRight, CheckCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import heroImage from "@/assets/hero-dog.jpg";

const fundUses = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Vaccinations, spay/neuter surgeries, medical treatments, and emergency care for rescued animals."
  },
  {
    icon: Package,
    title: "Food & Supplies",
    description: "High-quality food, bedding, toys, and essential supplies for animals in foster care."
  },
  {
    icon: Truck,
    title: "Transport & Rescue",
    description: "Transportation for rescues, veterinary appointments, and moving animals to their new homes."
  },
  {
    icon: Home,
    title: "Foster Support",
    description: "Supplies and resources to support our network of dedicated foster families."
  }
];

const donationAmounts = [25, 50, 100, 250, 500];

const Donate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Volunteer caring for a dog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-sanctuary relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium mb-6">
              <Heart className="w-4 h-4" fill="currentColor" />
              Support Our Mission
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Generosity Saves Lives
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Every donation directly supports the care, rehabilitation, and rehoming of 
              animals in need. Together, we can give them a second chance.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Give Today"
            title="Make a Donation"
            description="Choose an amount that works for you. Every gift, no matter the size, makes a difference."
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 rounded-lg border-2 border-border hover:border-primary hover:bg-sage-light transition-colors font-semibold text-foreground"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Or enter a custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
              </Link>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Secure payment processing. Your donation may be tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Transparency"
            title="How Your Donation Helps"
            description="We are committed to using your generous contributions responsibly and effectively."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundUses.map((use) => (
              <div key={use.title} className="card-sanctuary text-center">
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <use.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{use.title}</h3>
                <p className="text-muted-foreground">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              badge="Your Impact"
              title="What Your Gift Provides"
              description=""
            />
            
            <div className="space-y-4">
              {[
                { amount: "$25", impact: "Provides food for a foster animal for one month" },
                { amount: "$50", impact: "Covers vaccinations for one rescued pet" },
                { amount: "$100", impact: "Funds a microchip and basic medical exam" },
                { amount: "$250", impact: "Supports a spay/neuter surgery" },
                { amount: "$500", impact: "Covers comprehensive veterinary care for a rescued animal" }
              ].map((item) => (
                <div key={item.amount} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-xl font-bold text-primary">{item.amount}</span>
                  </div>
                  <p className="text-foreground">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-secondary">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Other Ways to Help"
            title="Beyond Financial Donations"
            description="There are many ways to support our mission beyond monetary contributions."
          />
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-sanctuary">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Donate Supplies</h3>
              <p className="text-muted-foreground mb-4">
                We always need food, bedding, toys, cleaning supplies, and other essentials.
              </p>
              <Link to="/contact" className="text-primary font-medium inline-flex items-center gap-1">
                View Wish List <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="card-sanctuary">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Volunteer Time</h3>
              <p className="text-muted-foreground mb-4">
                Help with events, transport, photography, social media, and more.
              </p>
              <Link to="/contact" className="text-primary font-medium inline-flex items-center gap-1">
                Get Involved <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="card-sanctuary">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Spread the Word</h3>
              <p className="text-muted-foreground mb-4">
                Share our mission with friends and family. Awareness helps us rescue more animals.
              </p>
              <Link to="/contact" className="text-primary font-medium inline-flex items-center gap-1">
                Share Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              Marcescott Animal Sanctuary LLC is committed to the ethical use of all donations. 
              We operate as a nonprofit rescue and do not generate profits for personal gain. 
              All funds received are used exclusively to support animal welfare and operational
              expenses.
            </p>
            <Link to="/transparency">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Our Transparency Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
