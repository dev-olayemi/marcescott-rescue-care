import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Use
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
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing or using the Marcescott Animal Sanctuary LLC website, you agree 
                to be bound by these Terms of Use. If you do not agree to these terms, please 
                do not use our website.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Use of Website
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You agree to use this website only for lawful purposes and in a way that does 
                not infringe upon the rights of others or restrict their use of the website. 
                You may not use this website to transmit any harmful, threatening, or illegal 
                content.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Donations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All donations made through our website are voluntary contributions to support 
                our animal rescue mission. Donations are non-refundable except as required by 
                law. We are committed to using all donations for the purpose of animal welfare 
                and operational expenses.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Adoption and Foster Agreements
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Adoption and foster placements are subject to separate agreements that will 
                be provided during the application process. We reserve the right to deny any 
                adoption or foster application at our discretion to ensure the welfare of our 
                animals.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on this website, including text, images, logos, and graphics, is 
                the property of Marcescott Animal Sanctuary LLC and is protected by copyright 
                laws. You may not reproduce, distribute, or use any content without our 
                written permission.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Marcescott Animal Sanctuary LLC is not liable for any damages arising from 
                your use of this website. We make no warranties about the accuracy or 
                completeness of the information provided.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update these Terms of Use at any time. Continued use of the website 
                after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Use, please contact us at 
                info@marcescottsanctuary.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
