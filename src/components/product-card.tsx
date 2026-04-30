import { Link } from "@tanstack/react-router";
import { Star, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, formatPrice } from "@/context/cart-context";
import type { Product } from "@/data/products";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    toast.success(`Added to cart`, {
      description: `${product.name} (MOQ ${product.moq} ${product.unitLabel})`,
    });
  };

  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {product.isBestSeller && (
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">Bestseller</Badge>
          )}
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground hover:bg-primary">New</Badge>
          )}
        </div>
        {product.inStock ? (
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-success/95 px-2 py-1 text-[11px] font-semibold text-success-foreground">
            <CheckCircle2 className="h-3 w-3" /> In Stock
          </span>
        ) : (
          <span className="absolute right-2 top-2 rounded-full bg-destructive/95 px-2 py-1 text-[11px] font-semibold text-destructive-foreground">
            Out of Stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
        <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-foreground group-hover:text-primary">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-xl font-bold text-primary">{formatPrice(product.price)}</span>
            <span className="text-xs text-muted-foreground">/{product.unitLabel.replace("per ", "")}</span>
          </div>
          <p className="mt-0.5 text-[11px] text-muted-foreground">MOQ: {product.moq} cases</p>
          <Button
            type="button"
            onClick={handleAdd}
            disabled={!product.inStock}
            variant="cta"
            size="sm"
            className="mt-3 w-full"
          >
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
