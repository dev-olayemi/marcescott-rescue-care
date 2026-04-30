import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/cart-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-background px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/"><Button size="lg">Go home</Button></Link>
            <Link to="/shop"><Button variant="outline" size="lg">Browse shop</Button></Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="top-right" richColors closeButton />
    </CartProvider>
  );
}
