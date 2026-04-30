import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, PawPrint, Phone, Twitter } from "lucide-react";
import { categories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <PawPrint className="h-5 w-5" />
              </span>
              PawsWholesale
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              Your trusted wholesale pet supply partner. Bulk dog & cat supplies shipped fast from Houston, TX.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com/pawswholesale" aria-label="Instagram" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/pawswholesale" aria-label="Facebook" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/pawswholesale" aria-label="Twitter" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              <li><Link to="/shop" className="hover:text-accent">Shop All Products</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Categories</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              {categories.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link to="/shop" search={{ category: c.slug } as never} className="hover:text-accent">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>9894 Bissonnet St, Suite 745<br />Houston, TX 77036</span></li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="tel:+13465076275" className="hover:text-accent">+1 (346) 507-6275</a></li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="mailto:orders@pawswholesale.com" className="hover:text-accent">orders@pawswholesale.com</a></li>
              <li className="text-xs text-primary-foreground/60 pt-2">Mon–Fri 8am–6pm CST<br />Sat 9am–2pm CST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} PawsWholesale LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
