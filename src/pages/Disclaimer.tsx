import Layout from "@/components/layout/Layout";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              Legal
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto prose prose-muted">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                General Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The information provided on the Marcescott Animal Sanctuary LLC website is for 
                general informational purposes only. While we strive to keep the information 
                accurate and up-to-date, we make no representations or warranties of any kind 
                about the completeness, accuracy, reliability, or availability of the information.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Animal Welfare Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide care for rescued animals to the best of our ability with the 
                resources available. While we work with licensed veterinary professionals, 
                we cannot guarantee the future health or behavior of any adopted animal. 
                Adopters assume full responsibility for the animal's care upon completion 
                of the adoption.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Donation Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Donations to Marcescott Animal Sanctuary LLC are used to support our animal 
                rescue operations, veterinary care, supplies, and operational expenses. 
                We are not a registered 501(c)(3) organization. Please consult with a tax 
                professional regarding the deductibility of your donation.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Adoption Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Adoption fees are cost-recovery fees designed to offset the expenses of 
                caring for animals in our program. These fees are not refundable once an 
                adoption is finalized. Adoption is subject to approval and completion of 
                our adoption process.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                External Links
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to external websites. We have no control over 
                the content or availability of these sites and do not endorse or assume 
                responsibility for their content.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Disclaimer, please contact us at 
                info@marcescottsanctuary.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
