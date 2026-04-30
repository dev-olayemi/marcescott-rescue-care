import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Minus, Plus, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { useCart, formatPrice } from "@/context/cart-context";
import { toast } from "sonner";
import { canonical, canonicalLink, pageMeta, SITE } from "@/lib/seo";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    const path = `/product/${params.id}`;
    if (!p) {
      return { meta: pageMeta({ title: "Product not found — PawsWholesale", description: "This product is no longer available.", path }), links: [canonicalLink(path)] };
    }
    const title = `${p.name} — Wholesale ${p.brand} | PawsWholesale`;
    const description = `${p.name} by ${p.brand}. ${p.unitLabel} at wholesale pricing (${formatPrice(p.price)}). MOQ ${p.moq}. ${p.inStock ? "In stock — same-day dispatch from Houston, TX." : "Currently out of stock."}`;
    const productLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      sku: p.sku,
      description: p.description,
      image: p.images,
      brand: { "@type": "Brand", name: p.brand },
      category: p.categoryName,
      aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews, bestRating: 5, worstRating: 1 },
      offers: {
        "@type": "Offer",
        url: canonical(path),
        priceCurrency: "USD",
        price: p.price.toFixed(2),
        availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: SITE.legalName },
        shippingDetails: { "@type": "OfferShippingDetails", shippingRate: { "@type": "MonetaryAmount", value: "0.00", currency: "USD" }, shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" } },
      },
    };
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Shop", item: canonical("/shop") },
        { "@type": "ListItem", position: 3, name: p.categoryName, item: canonical(`/shop?category=${p.category}`) },
        { "@type": "ListItem", position: 4, name: p.name, item: canonical(path) },
      ],
    };
    return {
      meta: pageMeta({
        title,
        description,
        path,
        image: p.image,
        type: "product",
        keywords: `wholesale ${p.brand}, bulk ${p.categoryName.toLowerCase()}, ${p.name.toLowerCase()} wholesale, ${p.sku}`,
      }),
      links: [canonicalLink(path)],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(productLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
      ],
    };
  },
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-md p-12 text-center">
        <p className="text-destructive">{error.message}</p>
        <Button className="mt-4" onClick={() => { router.invalidate(); reset(); }}>Retry</Button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-md p-16 text-center">
      <h1 className="font-display text-3xl font-bold">Product not found</h1>
      <p className="mt-2 text-muted-foreground">This product may have been removed or is no longer available.</p>
      <Link to="/shop"><Button className="mt-6" variant="cta">Back to shop</Button></Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addItem } = useCart();
  const [qty, setQty] = useState(product.moq);
  const [activeImg, setActiveImg] = useState(product.image);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    toast.success("Added to cart", { description: `${qty} × ${product.name}` });
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <Link to="/shop" search={{ category: product.category } as never} className="hover:text-primary">{product.categoryName}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img src={activeImg} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(src)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${activeImg === src ? "border-accent" : "border-transparent hover:border-border"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{product.brand}</p>
              {product.isBestSeller && <Badge className="bg-accent text-accent-foreground hover:bg-accent">Bestseller</Badge>}
              {product.isNew && <Badge className="bg-primary text-primary-foreground hover:bg-primary">New</Badge>}
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">SKU: {product.sku}</span>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground">{product.unitLabel}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Approx. {formatPrice(product.price / product.unitQty)} per unit</p>

              {product.inStock ? (
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-success">
                  <CheckCircle2 className="h-4 w-4" /> In Stock — Ships same day
                </p>
              ) : (
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-destructive">
                  Currently out of stock
                </p>
              )}

              <div className="mt-5">
                <p className="text-sm font-medium text-foreground">Quantity (Min Order: {product.moq} cases)</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="inline-flex items-center rounded-md border border-border">
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground"
                      onClick={() => setQty((q) => Math.max(product.moq, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      value={qty}
                      onChange={(e) => setQty(Math.max(product.moq, Number(e.target.value) || product.moq))}
                      className="h-11 w-16 border-x border-border bg-background text-center font-semibold focus:outline-none"
                    />
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground"
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    onClick={handleAdd}
                    disabled={!product.inStock}
                    variant="cta"
                    size="lg"
                    className="flex-1"
                  >
                    <ShoppingCart className="h-5 w-5" /> Add to Cart
                  </Button>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Subtotal: <span className="font-semibold text-foreground">{formatPrice(product.price * qty)}</span>
                </p>
              </div>

              <Separator className="my-5" />

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <Truck className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Free Shipping</p>
                    <p className="text-muted-foreground">On orders over $500</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Quality Guaranteed</p>
                    <p className="text-muted-foreground">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-lg font-semibold text-foreground">Description</h2>
              <p className="mt-2 text-muted-foreground">{product.description}</p>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">Key Features</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground">Related Products</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
