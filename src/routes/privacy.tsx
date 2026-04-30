import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta({
      title: "Privacy Policy | PawsWholesale",
      description: "How PawsWholesale collects, uses, and protects your business and personal information.",
      path: "/privacy",
    }),
    links: [canonicalLink("/privacy")],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2025</p>
      <div className="prose prose-slate mt-8 max-w-none text-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
        <p>PawsWholesale LLC ("PawsWholesale", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit pawswholesale.com or place a wholesale order with us.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, including business name, contact name, email, phone number, shipping address, payment information, and resale certificates. We also automatically collect technical information such as IP address, browser type, and pages visited via cookies and analytics tools.</p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and fulfill wholesale orders</li>
          <li>To verify business eligibility and approve Net 30 accounts</li>
          <li>To communicate about orders, shipments, and account updates</li>
          <li>To send marketing emails (only with your consent — unsubscribe anytime)</li>
          <li>To detect and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell your personal information. We share data only with service providers (payment processors, shipping carriers, analytics platforms) who help us operate, and with authorities when required by law.</p>

        <h2>4. Data Security</h2>
        <p>We use industry-standard encryption (TLS 1.3), secure payment processors (PCI-DSS compliant), and restricted internal access. No system is 100% secure, but we work continuously to protect your data.</p>

        <h2>5. Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information at any time by emailing privacy@pawswholesale.com. Residents of California, Virginia, Colorado, and other applicable jurisdictions have additional rights under their state laws.</p>

        <h2>6. Cookies</h2>
        <p>We use first-party cookies for cart functionality and analytics cookies (Google Analytics) to understand site usage. You can control cookies in your browser settings.</p>

        <h2>7. Children</h2>
        <p>Our services are intended for businesses, not consumers. We do not knowingly collect data from individuals under 18.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy periodically. The "Last updated" date will reflect the most recent revision.</p>

        <h2>9. Contact</h2>
        <p>Questions? Email <a href="mailto:privacy@pawswholesale.com" className="text-primary underline">privacy@pawswholesale.com</a> or write to PawsWholesale LLC, 9894 Bissonnet St, Suite 745, Houston, TX 77036.</p>
      </div>
    </div>
  );
}
