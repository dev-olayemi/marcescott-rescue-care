import Layout from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-light to-background py-16 md:py-24">
        <div className="container-sanctuary">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
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
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Marcescott Animal Sanctuary LLC ("we," "our," or "us") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, and safeguard 
                your personal information when you visit our website or interact with our services.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Contact information (name, email, phone number)</li>
                <li>Adoption and foster application information</li>
                <li>Donation and payment information</li>
                <li>Website usage data (cookies, analytics)</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>To process adoption and foster applications</li>
                <li>To process donations and send receipts</li>
                <li>To communicate about our programs and animals</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information with trusted service providers who assist in our 
                operations, such as payment processors, but only as necessary to provide 
                our services.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure, and we 
                cannot guarantee absolute security.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at 
                info@marcescottsanctuary.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
