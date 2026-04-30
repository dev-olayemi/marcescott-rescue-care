// Centralized SEO config — single source of truth for site-wide metadata.
export const SITE = {
  name: "PawsWholesale",
  legalName: "PawsWholesale LLC",
  url: "https://pawswholesale.com",
  tagline: "Your Trusted Wholesale Pet Supply Partner",
  description:
    "Houston's #1 wholesale pet supply distributor. 150+ bulk dog & cat products from top brands like Blue Buffalo, KONG, Royal Canin & Greenies. Net 30 terms, same-day dispatch, free shipping over $500.",
  shortDescription:
    "Wholesale dog & cat supplies for retailers — bulk pricing, Net 30, same-day dispatch from Houston, TX.",
  ogImage:
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=630&fit=crop&auto=format&q=80",
  twitter: "@pawswholesale",
  phone: "+1 (346) 507-6275",
  phoneE164: "+13465076275",
  email: "orders@pawswholesale.com",
  supportEmail: "support@pawswholesale.com",
  address: {
    street: "9894 Bissonnet St, Suite 745",
    city: "Houston",
    region: "TX",
    postalCode: "77036",
    country: "US",
  },
  hours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  social: {
    instagram: "https://instagram.com/pawswholesale",
    facebook: "https://facebook.com/pawswholesale",
    twitter: "https://twitter.com/pawswholesale",
  },
  keywords:
    "wholesale pet supplies, bulk dog treats, wholesale cat food, pet retailer supply, bulk pet products Houston, Net 30 pet wholesale, pet store distributor, wholesale Blue Buffalo, wholesale KONG, wholesale Greenies",
};

/** Build a canonical URL for a given path (always leading slash, no trailing). */
export function canonical(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const trimmed = clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
  return `${SITE.url}${trimmed}`;
}

/**
 * Standard meta block for a page. Returns a TanStack Router-compatible
 * `meta` array with title, description, canonical-equivalent OG URL,
 * Open Graph, Twitter card, and keyword tags.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  keywords?: string;
}) {
  const url = canonical(opts.path);
  const image = opts.image ?? SITE.ogImage;
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "keywords", content: opts.keywords ?? SITE.keywords },
    { name: "author", content: SITE.legalName },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE.twitter },
    { name: "twitter:creator", content: SITE.twitter },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
    { name: "geo.region", content: "US-TX" },
    { name: "geo.placename", content: "Houston" },
    { name: "theme-color", content: "#1a3a6b" },
  ];
}

/** Returns canonical link tag for use in `head().links` */
export function canonicalLink(path: string) {
  return { rel: "canonical", href: canonical(path) };
}
