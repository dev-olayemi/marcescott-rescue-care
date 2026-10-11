import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta({
      title: "Terms of Service | PawsWholesale",
      description: "Terms governing use of PawsWholesale's wholesale platform, ordering, payment, and shipping.",
      path: "/terms",
    }),
    links: [canonicalLink("/terms")],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2025</p>
      <div className="prose prose-slate mt-8 max-w-none text-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
        <p>These Terms of Service ("Terms") govern your access to and use of pawswholesale.com (the "Site") and any wholesale services provided by PawsWholesale LLC ("PawsWholesale", "we", "us"). By placing an order or using the Site, you agree to these Terms.</p>

        <h2>1. Eligibility</h2>
        <p>The Site is for businesses purchasing wholesale quantities for resale. You must be at least 18 years old, hold a valid business license or resale certificate, and provide accurate information when registering.</p>

        <h2>2. Orders & Pricing</h2>
        <p>All prices are listed in USD and are subject to change without notice. Each product has a minimum order quantity. We reserve the right to refuse or cancel any order, including orders that contain pricing or stock errors.</p>

        <h2>3. Payment Terms</h2>
        <p>We accept ACH, wire transfer, and major credit cards. Approved retailers may pay by invoice on Net 30 terms. Late payments accrue 1.5% interest per month. Disputed charges must be raised within 30 days of invoice date.</p>

        <h2>4. Shipping</h2>
        <p>Standard orders ship in 5–7 business days; express in 2–3. Risk of loss transfers to you upon delivery to the carrier. We are not liable for carrier delays.</p>

        <h2>5. Returns & Refunds</h2>
        <p>Unopened cases may be returned within 30 days for a refund (less restocking fee). Damaged or defective products are replaced or credited free of charge — report within 7 days of delivery.</p>

        <h2>6. Resale Restrictions</h2>
        <p>Products may not be relabeled, repackaged, or sold in violation of brand MAP (Minimum Advertised Price) policies. Repeated violations may result in account termination.</p>

        <h2>7. Intellectual Property</h2>
        <p>All Site content — including logos, product imagery, and copy — is owned by PawsWholesale or our brand partners. You may not reproduce or redistribute without written permission.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, PawsWholesale's total liability for any claim arising from these Terms or your use of the Site is limited to the amount paid by you in the 12 months preceding the claim.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify and hold PawsWholesale harmless from any claims arising from your breach of these Terms or your resale activities.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Texas. Any dispute will be resolved in the state or federal courts located in Harris County, Texas.</p>

        <h2>11. Changes to Terms</h2>
        <p>We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance.</p>

        <h2>12. Contact</h2>
        <p>Questions? Contact us at <a href="mailto:legal@pawswholesale.com" className="text-primary underline">legal@pawswholesale.com</a> or PawsWholesale LLC, 10803 Greencreek Dr, #109, Houston, TX 77070.</p>
      </div>
    </div>
  );
}
