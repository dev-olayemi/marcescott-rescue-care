import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart, formatPrice } from "@/context/cart-context";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [...pageMeta({ title: "Your Cart | PawsWholesale", description: "Review your wholesale order before checkout.", path: "/cart" }), { name: "robots", content: "noindex, follow" }],
    links: [canonicalLink("/cart")],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, shipping, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Browse our wholesale catalog and find the products your store needs.</p>
        <Link to="/shop"><Button variant="cta" size="lg" className="mt-6">Shop Wholesale</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Your Cart</h1>
        <p className="mt-1 text-muted-foreground">{items.length} item{items.length === 1 ? "" : "s"} · Wholesale order</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-5">
                <Link to="/product/$id" params={{ id: product.id }} className="shrink-0">
                  <img src={product.image} alt={product.name} className="h-24 w-24 rounded-lg object-cover sm:h-28 sm:w-28" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">{product.brand}</p>
                      <Link to="/product/$id" params={{ id: product.id }} className="mt-1 line-clamp-2 font-display text-sm font-semibold hover:text-primary sm:text-base">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">{product.unitLabel} · MOQ {product.moq}</p>
                    </div>
                    <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-end justify-between pt-3">
                    <div className="inline-flex items-center rounded-md border border-border">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="flex h-9 w-9 items-center justify-center hover:text-primary" aria-label="Decrease">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="flex h-9 w-9 items-center justify-center hover:text-primary" aria-label="Increase">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-bold text-primary">{formatPrice(product.price * quantity)}</p>
                      <p className="text-xs text-muted-foreground">{formatPrice(product.price)} ea</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-20 lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-semibold">{formatPrice(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Shipping (est.)</dt><dd className="font-semibold">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd></div>
                {subtotal < 500 && (
                  <p className="text-xs text-accent">Add {formatPrice(500 - subtotal)} more for free standard shipping.</p>
                )}
              </dl>
              <Separator className="my-4" />
              <div className="flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-display text-2xl font-bold text-primary">{formatPrice(total)}</span>
              </div>
              <Link to="/checkout"><Button variant="cta" size="lg" className="mt-5 w-full">Proceed to Checkout</Button></Link>
              <Link to="/shop"><Button variant="outline" size="lg" className="mt-2 w-full">Continue Shopping</Button></Link>
              <p className="mt-3 text-center text-xs text-muted-foreground">Pay by Invoice · Net 30 available for approved retailers</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
