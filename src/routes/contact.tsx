import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact PawsWholesale — Wholesale Pet Supply Inquiries | Houston, TX",
      description:
        "Talk to our wholesale team. Open a Net 30 retail account, request custom orders, or get bulk pricing. Call +1 (346) 507-6275 or email orders@pawswholesale.com.",
      path: "/contact",
      keywords: "contact pet wholesaler, Net 30 pet account, wholesale pet quote, Houston pet distributor contact",
    }),
    links: [canonicalLink("/contact")],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please share a few details").max(1000),
});
type FormVals = z.infer<typeof schema>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<FormVals>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", company: "", message: "" } });

  const submit = (v: FormVals) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent!", { description: "Our team will get back to you within 1 business day." });
      form.reset();
    }, 700);
  };

  return (
    <div className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get in Touch</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Talk to our wholesale team</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Questions, custom orders, or ready to open a Net 30 account? We respond within 1 business day.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={form.handleSubmit(submit)} className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8" noValidate>
            <h2 className="font-display text-xl font-semibold">Send us a message</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *" error={form.formState.errors.name?.message}>
                <Input {...form.register("name")} placeholder="Jane Smith" />
              </Field>
              <Field label="Email *" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} placeholder="jane@petstore.com" />
              </Field>
              <Field label="Phone" error={form.formState.errors.phone?.message}>
                <Input type="tel" {...form.register("phone")} placeholder="(555) 555-5555" />
              </Field>
              <Field label="Company" error={form.formState.errors.company?.message}>
                <Input {...form.register("company")} placeholder="Your Pet Store" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message *" error={form.formState.errors.message?.message}>
                <Textarea rows={5} {...form.register("message")} placeholder="Tell us about your store and what you're looking to source..." />
              </Field>
            </div>
            <Button type="submit" variant="cta" size="lg" className="mt-5 w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold">Reach us directly</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Visit our warehouse</p>
                    <p className="text-muted-foreground">9894 Bissonnet St, Suite 745<br />Houston, TX 77036</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+13465076275" className="text-muted-foreground hover:text-primary">+1 (346) 507-6275</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:orders@pawswholesale.com" className="block text-muted-foreground hover:text-primary">orders@pawswholesale.com</a>
                    <a href="mailto:support@pawswholesale.com" className="block text-muted-foreground hover:text-primary">support@pawswholesale.com</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Mon–Fri 8am–6pm CST<br />Sat 9am–2pm CST</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="PawsWholesale warehouse map"
                src="https://www.google.com/maps?q=9894+Bissonnet+St,+Houston,+TX+77036&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
