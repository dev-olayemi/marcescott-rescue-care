import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/context/cart-context";

type Order = {
  orderNumber: string;
  info: { businessName: string; contactName: string; email: string; street: string; city: string; state: string; zip: string } | null;
  items: { id: string; name: string; qty: number; price: number }[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingMethod: "standard" | "express";
};

import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/order-confirmation")({
  head: () => ({
    meta: [...pageMeta({ title: "Order Confirmed | PawsWholesale", description: "Thank you for your wholesale order.", path: "/order-confirmation" }), { name: "robots", content: "noindex, nofollow" }],
    links: [canonicalLink("/order-confirmation")],
  }),
  component: ConfirmationPage,
});

function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("pawswholesale.lastOrder");
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  const eta = order?.shippingMethod === "express" ? "2–3 business days" : "5–7 business days";

  return (
    <div className="bg-secondary/30 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl">Thank you for your order!</h1>
          <p className="mt-2 text-muted-foreground">Your wholesale order has been received. We've emailed your invoice to your business email.</p>

          {order ? (
            <>
              <div className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-primary-foreground">
                <p className="text-xs uppercase tracking-wider opacity-75">Order Number</p>
                <p className="font-display text-2xl font-bold">{order.orderNumber}</p>
              </div>

              <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background p-4 text-left">
                  <div className="flex items-center gap-2 text-accent"><Truck className="h-4 w-4" /><p className="text-xs font-semibold uppercase tracking-wide">Estimated Delivery</p></div>
                  <p className="mt-1 font-display text-lg font-semibold">{eta}</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4 text-left">
                  <div className="flex items-center gap-2 text-accent"><Package className="h-4 w-4" /><p className="text-xs font-semibold uppercase tracking-wide">Items</p></div>
                  <p className="mt-1 font-display text-lg font-semibold">{order.items.reduce((s, i) => s + i.qty, 0)} cases</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-background p-5 text-left">
                <h2 className="font-display text-base font-semibold">Order Summary</h2>
                <ul className="mt-3 divide-y divide-border text-sm">
                  {order.items.map((it) => (
                    <li key={it.id} className="flex justify-between py-2">
                      <span>{it.qty} × {it.name}</span>
                      <span className="font-semibold">{formatPrice(it.qty * it.price)}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-3" />
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{order.shipping === 0 ? "Free" : formatPrice(order.shipping)}</span></div>
                  <div className="flex justify-between pt-2 text-base font-semibold"><span>Total</span><span className="text-primary">{formatPrice(order.total)}</span></div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Payment: Pay by Invoice · Net 30 Terms</p>
              </div>
            </>
          ) : (
            <p className="mt-6 text-muted-foreground">Your order details aren't available in this session.</p>
          )}

          <Link to="/shop"><Button variant="cta" size="lg" className="mt-8">Continue Shopping</Button></Link>
        </div>
      </div>
    </div>
  );
}
