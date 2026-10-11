import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta({
      title: "Wholesale FAQ — Orders, Shipping, Net 30 | PawsWholesale",
      description:
        "Answers to common wholesale pet supply questions: minimum order quantities, shipping, returns, Net 30 terms, dropshipping, and more.",
      path: "/faq",
      keywords: "wholesale pet supply FAQ, MOQ pet products, Net 30 application, pet wholesale shipping",
    }),
    links: [canonicalLink("/faq")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

const faqs = [
  ["Do I need a business license to order?", "Yes. PawsWholesale is a B2B wholesaler. We require a valid resale certificate or business license to activate your account. You can submit it on the Contact page."],
  ["What is the minimum order quantity (MOQ)?", "Each product has its own MOQ, typically 2–5 cases. The MOQ is shown on every product page. There is no minimum for total order value."],
  ["Is there a minimum order amount?", "No order minimum, but standard shipping is free for orders over $500."],
  ["What payment methods do you accept?", "We accept ACH, wire transfer, and major credit cards. Approved retailers can also pay by invoice on Net 30 terms."],
  ["How do I apply for Net 30 terms?", "Submit a credit application via the Contact page or email Orders@Marcescottwholesale.com. Approval typically takes 2–3 business days."],
  ["How fast do orders ship?", "Orders placed before 2pm CST Mon–Fri ship the same day from our Houston warehouse. Express orders typically arrive in 2–3 business days."],
  ["Do you ship outside the US?", "We currently ship within the contiguous United States, Alaska, and Hawaii. International shipping is available for select wholesale accounts on request."],
  ["What is your return policy?", "We offer 30-day returns on unopened cases. Damaged or defective items are replaced free of charge — just contact support within 7 days of delivery."],
  ["Can I get product samples?", "Yes. We offer paid sample packs to verified retailers. Contact our sales team to request specific products."],
  ["Do you offer dropshipping?", "Yes. We support blind dropshipping for approved retail partners. Reach out to discuss your requirements."],
  ["Are your products authentic?", "100%. We source directly from brand manufacturers and authorized distributors. Every shipment includes lot tracking."],
  ["Can I get custom or private label products?", "We work with select retailers on private label dog and cat treats. Minimum production runs apply — contact our team to discuss."],
  ["Do you sell to e-commerce sellers (Amazon, Chewy, etc.)?", "Yes. Many of our partners sell on online marketplaces. We provide UPC codes, dimensional data, and bulk image assets on request."],
  ["What if I receive damaged products?", "Photograph the damage and email support@pawswholesale.com within 7 days. We'll replace the items at no cost or issue a credit."],
  ["How do I update my shipping address?", "Log in to your account or contact us before your order is dispatched. Address changes after dispatch may incur a re-routing fee from the carrier."],
  ["Do you have a sales rep I can talk to?", "Absolutely. Every wholesale account is assigned a dedicated account manager. Call +1 (346) 605-7433 or email Orders@Marcescottwholesale.com to get connected."],
];

function FAQPage() {
  return (
    <div className="bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
        <h1 className="mt-2 text-center font-display text-4xl font-bold sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Everything you need to know about ordering wholesale from PawsWholesale.</p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-2 shadow-card sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 rounded-xl bg-primary p-6 text-center text-primary-foreground">
          <p className="font-display text-lg font-semibold">Still have questions?</p>
          <p className="mt-1 text-sm text-primary-foreground/80">Email <a className="underline hover:text-accent" href="mailto:support@pawswholesale.com">support@pawswholesale.com</a> or call <a className="underline hover:text-accent" href="tel:+13466057433">+1 (346) 605-7433</a>.</p>
        </div>
      </div>
    </div>
  );
}
