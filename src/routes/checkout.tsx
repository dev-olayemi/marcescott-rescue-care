import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ChevronLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart, formatPrice } from "@/context/cart-context";
import { toast } from "sonner";

import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [...pageMeta({ title: "Secure Checkout | PawsWholesale", description: "Complete your wholesale pet supply order. Pay by Invoice or Net 30 terms available.", path: "/checkout" }), { name: "robots", content: "noindex, follow" }],
    links: [canonicalLink("/checkout")],
  }),
  component: CheckoutPage,
});

const infoSchema = z.object({
  businessName: z.string().trim().min(2, "Business name is required").max(100),
  contactName: z.string().trim().min(2, "Contact name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone number required").max(30),
  street: z.string().trim().min(3, "Street address required").max(200),
  city: z.string().trim().min(2, "City required").max(80),
  state: z.string().trim().min(2, "State required").max(40),
  zip: z.string().trim().min(4, "ZIP required").max(20),
});
type InfoForm = z.infer<typeof infoSchema>;

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal, shipping, total, shippingMethod, setShippingMethod, clear } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [info, setInfo] = useState<InfoForm | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<InfoForm>({
    resolver: zodResolver(infoSchema),
    defaultValues: { businessName: "", contactName: "", email: "", phone: "", street: "", city: "", state: "", zip: "" },
  });

  if (items.length === 0 && step !== 3) {
    return (
      <div className="mx-auto max-w-md p-16 text-center">
        <h1 className="font-display text-2xl font-bold">Your cart is empty</h1>
        <Button className="mt-4" variant="cta" onClick={() => navigate({ to: "/shop" })}>Browse shop</Button>
      </div>
    );
  }

  const submitInfo = (values: InfoForm) => {
    setInfo(values);
    setStep(2);
  };

  const placeOrder = () => {
    setSubmitting(true);
    setTimeout(() => {
      const orderNumber = `PW-${Math.floor(100000 + Math.random() * 900000)}`;
      const summary = { orderNumber, info, items: items.map((i) => ({ id: i.product.id, name: i.product.name, qty: i.quantity, price: i.product.price })), subtotal, shipping, total, shippingMethod };
      try { sessionStorage.setItem("pawswholesale.lastOrder", JSON.stringify(summary)); } catch {}
      clear();
      setSubmitting(false);
      toast.success("Order placed successfully!");
      navigate({ to: "/order-confirmation" });
    }, 800);
  };

  return (
    <div className="bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Checkout</h1>

        <div className="mt-6 flex items-center gap-2 text-sm">
          {[
            { n: 1, label: "Business Info" },
            { n: 2, label: "Shipping" },
            { n: 3, label: "Review" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step >= s.n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {step > s.n ? <CheckCircle2 className="h-4 w-4" /> : s.n}
              </div>
              <span className={`hidden sm:inline ${step >= s.n ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
              {i < 2 && <div className={`h-px w-8 sm:w-12 ${step > s.n ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            {step === 1 && (
              <form onSubmit={form.handleSubmit(submitInfo)} className="space-y-5" noValidate>
                <h2 className="font-display text-xl font-semibold">Business & Contact Info</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Business Name" error={form.formState.errors.businessName?.message}>
                    <Input {...form.register("businessName")} placeholder="Acme Pet Supply LLC" />
                  </Field>
                  <Field label="Contact Name" error={form.formState.errors.contactName?.message}>
                    <Input {...form.register("contactName")} placeholder="Jane Smith" />
                  </Field>
                  <Field label="Email" error={form.formState.errors.email?.message}>
                    <Input type="email" {...form.register("email")} placeholder="orders@yourbusiness.com" />
                  </Field>
                  <Field label="Phone" error={form.formState.errors.phone?.message}>
                    <Input type="tel" {...form.register("phone")} placeholder="(555) 555-5555" />
                  </Field>
                </div>
                <Field label="Street Address" error={form.formState.errors.street?.message}>
                  <Input {...form.register("street")} placeholder="123 Main St, Suite 100" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="City" error={form.formState.errors.city?.message}>
                    <Input {...form.register("city")} placeholder="Houston" />
                  </Field>
                  <Field label="State" error={form.formState.errors.state?.message}>
                    <Input {...form.register("state")} placeholder="TX" />
                  </Field>
                  <Field label="ZIP" error={form.formState.errors.zip?.message}>
                    <Input {...form.register("zip")} placeholder="77036" />
                  </Field>
                </div>
                <div className="flex justify-end pt-2">
                  <Button type="submit" variant="cta" size="lg">Continue to Shipping</Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-display text-xl font-semibold">Shipping Method</h2>
                <RadioGroup value={shippingMethod} onValueChange={(v) => setShippingMethod(v as "standard" | "express")} className="space-y-3">
                  <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors ${shippingMethod === "standard" ? "border-accent bg-accent/5" : "border-border hover:border-muted-foreground"}`}>
                    <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-foreground">Standard Shipping</p>
                        <p className="font-display font-bold text-primary">{subtotal >= 500 ? "FREE" : "$35"}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">5–7 business days · Free on orders over $500</p>
                    </div>
                  </label>
                  <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors ${shippingMethod === "express" ? "border-accent bg-accent/5" : "border-border hover:border-muted-foreground"}`}>
                    <RadioGroupItem value="express" id="express" className="mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-foreground">Express Shipping</p>
                        <p className="font-display font-bold text-primary">$25</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">2–3 business days · Same-day dispatch from Houston</p>
                    </div>
                  </label>
                </RadioGroup>
                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" onClick={() => setStep(1)}><ChevronLeft className="h-4 w-4" /> Back</Button>
                  <Button variant="cta" size="lg" onClick={() => setStep(3)}>Review Order</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">Review Your Order</h2>
                {info && (
                  <div className="rounded-lg bg-muted/50 p-4 text-sm">
                    <p className="font-semibold">{info.businessName}</p>
                    <p>{info.contactName} · {info.email} · {info.phone}</p>
                    <p className="mt-1 text-muted-foreground">{info.street}, {info.city}, {info.state} {info.zip}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      <FileText className="h-3.5 w-3.5" /> Payment: Pay by Invoice / Net 30 Terms
                    </p>
                  </div>
                )}
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-3 text-sm">
                      <img src={product.image} alt="" className="h-14 w-14 rounded-md object-cover" />
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{quantity} × {formatPrice(product.price)}</p>
                      </div>
                      <p className="font-semibold">{formatPrice(product.price * quantity)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" onClick={() => setStep(2)}><ChevronLeft className="h-4 w-4" /> Back</Button>
                  <Button variant="cta" size="lg" disabled={submitting} onClick={placeOrder}>
                    {submitting ? "Placing order..." : `Place Order (${formatPrice(total)})`}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-20 lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold">Order Summary</h2>
              <p className="mt-1 text-sm text-muted-foreground">{items.length} item{items.length === 1 ? "" : "s"}</p>
              <Separator className="my-4" />
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-semibold">{formatPrice(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd className="font-semibold">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd></div>
              </dl>
              <Separator className="my-4" />
              <div className="flex justify-between"><span className="font-semibold">Total</span><span className="font-display text-2xl font-bold text-primary">{formatPrice(total)}</span></div>
              <p className="mt-3 text-xs text-muted-foreground">By placing your order you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
