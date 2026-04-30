import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, PackageCheck, ShieldCheck, Star, Truck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";
import { canonicalLink, pageMeta, SITE } from "@/lib/seo";

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/shop?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "PawsWholesale — Bulk Pet Supplies for Dogs & Cats | Houston, TX",
      description:
        "Houston's #1 wholesale pet supply distributor. 150+ bulk dog & cat products from top brands. Net 30 terms, same-day dispatch, free shipping over $500. Open a wholesale account today.",
      path: "/",
    }),
    links: [canonicalLink("/")],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(websiteLd) }],
  }),
  component: HomePage,
});

const featured = products.filter((p) => p.isBestSeller).slice(0, 8);

const stats = [
  { v: "500+", l: "Wholesale Products" },
  { v: "1,000+", l: "Retailers Served" },
  { v: "Same Day", l: "Dispatch" },
  { v: "30 Days", l: "Returns" },
];

const reasons = [
  { icon: PackageCheck, t: "Bulk Pricing", d: "Up to 60% off retail. Volume discounts on every case." },
  { icon: Truck, t: "Fast Shipping", d: "Same-day dispatch from Houston. Free shipping over $500." },
  { icon: ShieldCheck, t: "Quality Guarantee", d: "Direct from top brands. 30-day no-questions returns." },
  { icon: Award, t: "Net 30 Terms", d: "Approved retailers can pay by invoice. Apply in minutes." },
];

const testimonials = [
  { n: "Sarah M.", r: "Bayou City Pet Co.", q: "PawsWholesale completely changed our supply chain. Reliable, fast, and the pricing is unmatched." },
  { n: "Mike R.", r: "Lone Star Pet Supply", q: "Same-day dispatch is a game changer. Our shelves are never empty anymore." },
  { n: "Jenna T.", r: "Whisker & Wag Boutique", q: "The Net 30 terms made it possible for us to scale. Plus the team genuinely cares." },
];

const trust = [
  "USDA Compliant Warehouse",
  "BBB A+ Accredited",
  "ASTA Member",
  "PIDA Certified Partner",
  "Pet Industry Distributors Association",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(1 0 0) 1px, transparent 1px), radial-gradient(circle at 80% 70%, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 48px 48px",
        }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit bg-accent text-accent-foreground hover:bg-accent">
              <Zap className="mr-1 h-3 w-3" /> Same-Day Dispatch from Houston, TX
            </Badge>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Wholesale Pet Supplies, <span className="text-accent">Built for Retailers</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
              Stock your shelves with 500+ premium dog & cat products from the brands your customers trust. Bulk pricing, fast shipping, Net 30 terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop">
                <Button variant="cta" size="xl">Shop Wholesale <ArrowRight className="h-5 w-5" /></Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">Get a Custom Quote</Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              {["Free shipping over $500", "Net 30 available", "30-day returns"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&h=900&fit=crop&auto=format&q=80"
              alt="Wholesale pet supplies warehouse"
              className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-bold text-primary lg:text-4xl">{s.v}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Shop by Category</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Featured Categories</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium text-primary hover:underline sm:inline">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 10).map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug } as never}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-display text-sm font-semibold text-primary-foreground sm:text-base">{c.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Top Sellers</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Bestselling Wholesale Products</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-medium text-primary hover:underline sm:inline">Shop all →</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why PawsWholesale</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Built for Pet Retailers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Everything you need to keep your store stocked and your customers happy.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trusted & Certified</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
            {trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Retailer Stories</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Loved by 1,000+ Pet Retailers</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.n} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground">"{t.q}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.n.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Open a Wholesale Account Today</h2>
              <p className="mt-3 text-primary-foreground/80">Join 1,000+ pet retailers stocking with PawsWholesale. Get bulk pricing, Net 30 terms, and same-day dispatch.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                required
                type="email"
                placeholder="your@business.com"
                className="h-12 flex-1 rounded-md border-0 bg-white/10 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" size="lg" type="submit">
                <Users className="h-5 w-5" /> Get Wholesale Access
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
