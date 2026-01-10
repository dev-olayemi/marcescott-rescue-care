import { Link } from "react-router-dom";
import { Shield, FileCheck, Building2, Heart, CheckCircle, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";

const compliancePoints = [
  {
    icon: Building2,
    title: "Foster-Based Operations",
    description: "Marcescott Animal Sanctuary LLC operates as a foster-based animal rescue. We do not operate a physical shelter facility. All animals in our care are placed in private, vetted foster homes."
  },
  {
    icon: FileCheck,
    title: "No Commercial Activity",
    description: "We do not engage in commercial breeding, animal sales for profit, public animal exhibition, or animal research. All activities are focused exclusively on rescue, rehabilitation, and responsible rehoming."
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "We operate in full compliance with Houston and Texas animal welfare ordinances. Our operations are exempt from USDA Animal Welfare Act licensing due to our non-commercial, rescue-only model."
  },
  {
    icon: Heart,
    title: "Cost-Recovery Fees",
    description: "Any adoption fees charged are strictly cost-recovery. These fees help offset veterinary care, food, supplies, and other expenses incurred while caring for animals."
  }
];

const Transparency = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Compliance & Transparency
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Operating with Integrity
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in complete transparency about our operations, compliance, and 
              use of funds. This page provides clear information for donors, partners, 
              and regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Compliance Points */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <SectionHeader 
            badge="Our Operations"
            title="How We Operate"
            description="Clear and factual information about our organizational structure and practices."
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {compliancePoints.map((point) => (
              <div key={point.title} className="card-sanctuary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Statement */}
      <section className="section-padding bg-cream">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
                Official Compliance Statement
              </h3>
              
              <div className="prose prose-muted max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Marcescott Animal Sanctuary LLC is a foster-based animal rescue organization 
                  operating in Houston, Texas. Our mission is to rescue, rehabilitate, and 
                  responsibly rehome animals in need through a network of private foster homes 
                  and licensed veterinary partners.
                </p>
                
                <p>
                  <strong className="text-foreground">Organizational Structure:</strong> We operate 
                  exclusively as a foster-based rescue. We do not maintain a physical shelter 
                  facility. All animals in our program are placed in private foster homes where 
                  they receive individualized care until adoption.
                </p>
                
                <p>
                  <strong className="text-foreground">Activities We DO NOT Engage In:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Commercial breeding or animal sales for profit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Public exhibition of animals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Animal research or experimentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Animal trading or commercial exchange</span>
                  </li>
                </ul>
                
                <p>
                  <strong className="text-foreground">Regulatory Status:</strong> Due to our 
                  non-commercial, rescue-only operations, we are exempt from USDA Animal Welfare 
                  Act licensing requirements. We operate in accordance with all applicable local 
                  and state animal welfare ordinances.
                </p>
                
                <p>
                  <strong className="text-foreground">Financial Practices:</strong> Marcescott 
                  Animal Sanctuary LLC is committed to ethical financial practices. All donations 
                  and adoption fees are used exclusively to support animal care, veterinary 
                  services, supplies, and operational expenses. We do not generate profits for 
                  personal gain. Adoption fees are set at cost-recovery levels and are not 
                  intended to generate revenue beyond covering care expenses.
                </p>
                
                <p>
                  <strong className="text-foreground">Veterinary Partnerships:</strong> We work 
                  with licensed veterinary professionals to provide comprehensive medical care 
                  for all animals in our program. This includes vaccinations, spay/neuter 
                  surgeries, treatment for illness or injury, and ongoing health monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Reviewers */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              badge="For Reviewers"
              title="Information for Financial Partners"
              description=""
            />
            
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  If you are a bank, payment processor, or platform conducting a review of 
                  our organization, we welcome your inquiry. Below is a summary of our 
                  operations for compliance purposes.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">We are a legitimate animal rescue organization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">We operate as a foster-based rescue (no physical shelter)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">We do not engage in any commercial animal activities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">All funds are used for animal welfare purposes only</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">We are compliant with local and state regulations</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-6">
                For additional documentation or to speak with a representative, please 
                contact us directly.
              </p>
              
              <Link to="/contact" className="mt-4 inline-block">
                <Button className="bg-primary hover:bg-primary/90">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-sanctuary text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Questions About Our Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We are happy to provide additional information or documentation upon request. 
            Transparency is core to our values.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Transparency;
