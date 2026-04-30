import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, ShieldCheck, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About PawsWholesale — Houston's Trusted Wholesale Pet Distributor",
      description:
        "Since 2014, PawsWholesale has supplied 1,000+ independent pet retailers from our 28,000 sq ft Houston warehouse. BBB A+ accredited, USDA compliant, PIDA certified.",
      path: "/about",
      keywords: "PawsWholesale about, Houston pet distributor, wholesale pet supply company, BBB accredited pet wholesaler",
    }),
    links: [canonicalLink("/about")],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Heart, t: "Pet-First", d: "Every product is selected with the wellbeing of pets in mind." },
    { icon: ShieldCheck, t: "Quality Assured", d: "Direct from top brands. Every shipment is inspected." },
    { icon: Truck, t: "Reliability", d: "Same-day dispatch and consistent stock you can plan around." },
    { icon: Users, t: "Partnership", d: "We grow when our retailers grow. Net 30 terms, dedicated support." },
  ];

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About PawsWholesale</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Helping pet retailers stock the brands their customers love.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Since 2014, PawsWholesale has been Houston's go-to wholesale supplier for independent pet stores, boutiques, and groomers across the United States.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&h=700&fit=crop&auto=format&q=80"
            alt="PawsWholesale Houston warehouse"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <h2 className="font-display text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              We started with a single warehouse and a simple idea: independent pet retailers deserve the same wholesale pricing, quality, and reliability as the big chains. Today we operate a 28,000 sq ft facility on Bissonnet Street, ship to all 50 states, and serve over 1,000 retail partners.
            </p>
            <p className="mt-3 text-muted-foreground">
              Every product is sourced direct from leading brands like Blue Buffalo, KONG, Royal Canin, Greenies, and Ruffwear — no middlemen, no surprises. Just clean wholesale economics that let your store thrive.
            </p>
            <Link to="/contact"><Button variant="cta" size="lg" className="mt-6">Open a Wholesale Account</Button></Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold">Our Values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">What guides every order, every shipment, every conversation.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { v: "10+ yrs", l: "in business" },
              { v: "28,000 sq ft", l: "Houston warehouse" },
              { v: "1,000+", l: "active retail partners" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-4xl font-bold text-accent">{s.v}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5"><Award className="h-4 w-4 text-accent" /> BBB A+ Accredited</span>
            <span className="inline-flex items-center gap-1.5"><Award className="h-4 w-4 text-accent" /> PIDA Certified</span>
            <span className="inline-flex items-center gap-1.5"><Award className="h-4 w-4 text-accent" /> USDA Compliant</span>
          </div>
        </div>
      </section>
    </div>
  );
}
