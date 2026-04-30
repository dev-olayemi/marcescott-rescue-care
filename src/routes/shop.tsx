import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Filter, Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { brands, categories, products } from "@/data/products";
import { canonicalLink, pageMeta } from "@/lib/seo";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  pet: z.enum(["dog", "cat"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: pageMeta({
      title: "Shop Wholesale Pet Supplies — 150+ Products | PawsWholesale",
      description:
        "Browse 150+ wholesale pet supplies for dogs and cats. Filter by category, brand, pet type, and price. Bulk pricing on treats, food, kennels, leashes, collars, harnesses, beds, grooming and more.",
      path: "/shop",
      keywords: "wholesale dog supplies, wholesale cat supplies, bulk pet products, pet retailer catalog, wholesale pet brands",
    }),
    links: [canonicalLink("/shop")],
  }),
  component: ShopPage,
});

const PAGE_SIZE = 16;
const MAX_PRICE = 1200;

function ShopPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [sort, setSort] = useState<string>("bestseller");
  const [page, setPage] = useState(1);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, MAX_PRICE]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [query, setQuery] = useState(search.q ?? "");

  const filtered = useMemo(() => {
    let list = products.slice();
    if (search.category) list = list.filter((p) => p.category === search.category);
    if (search.pet) list = list.filter((p) => p.petType === search.pet);
    const q = (query || "").trim().toLowerCase();
    if (q) list = list.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q)
    );
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedBrands.length) list = list.filter((p) => selectedBrands.includes(p.brand));
    if (inStockOnly) list = list.filter((p) => p.inStock);

    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "newest": list.sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
      case "bestseller":
      default: list.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
    }
    return list;
  }, [search.category, search.pet, query, priceRange, selectedBrands, inStockOnly, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const toggleBrand = (b: string) =>
    setSelectedBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  const FilterPanel = (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Pet Type</h3>
        <div className="mt-3 flex gap-2">
          {(["dog", "cat"] as const).map((p) => (
            <Button
              key={p}
              size="sm"
              variant={search.pet === p ? "default" : "outline"}
              onClick={() => navigate({ to: "/shop", search: { ...search, pet: search.pet === p ? undefined : p } })}
              className="capitalize"
            >
              {p}s
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Category</h3>
        <div className="mt-3 space-y-1.5">
          <button
            onClick={() => navigate({ to: "/shop", search: { ...search, category: undefined } })}
            className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${!search.category ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary"}`}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => navigate({ to: "/shop", search: { ...search, category: c.slug } })}
              className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${search.category === c.slug ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary"}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Price Range</h3>
        <div className="mt-3">
          <Slider
            min={0}
            max={MAX_PRICE}
            step={10}
            value={priceRange}
            onValueChange={(v) => setPriceRange([v[0], v[1]] as [number, number])}
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>${priceRange[0]}</span><span>${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Brand</h3>
        <div className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1">
          {brands.map((b) => (
            <label key={b} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Checkbox checked={selectedBrands.includes(b)} onCheckedChange={() => toggleBrand(b)} />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="instock" checked={inStockOnly} onCheckedChange={(v) => setInStockOnly(!!v)} />
        <Label htmlFor="instock" className="cursor-pointer">In stock only</Label>
      </div>
    </div>
  );

  return (
    <div className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Wholesale Shop</h1>
          <p className="mt-1 text-muted-foreground">{filtered.length} products available · Bulk pricing · Same-day dispatch</p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search products, brands, categories..."
              className="h-11 pl-9"
            />
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="h-11 w-full sm:w-56"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="bestseller">Bestsellers</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="h-11 lg:hidden"><Filter className="h-4 w-4" /> Filters</Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
              <div className="mt-6">{FilterPanel}</div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-20 rounded-xl border border-border bg-card p-5 shadow-card">
              {FilterPanel}
            </div>
          </aside>

          <div>
            {visible.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border bg-card p-16 text-center">
                <p className="font-display text-lg font-semibold">No products match your filters</p>
                <p className="mt-2 text-sm text-muted-foreground">Try removing a filter or clearing your search.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {visible.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
                {pageCount > 1 && (
                  <div className="mt-10 flex items-center justify-center gap-2">
                    <Button variant="outline" size="sm" disabled={safePage === 1} onClick={() => setPage(safePage - 1)}>Prev</Button>
                    {Array.from({ length: pageCount }).map((_, i) => (
                      <Button key={i} size="sm" variant={safePage === i + 1 ? "default" : "outline"} onClick={() => setPage(i + 1)}>{i + 1}</Button>
                    ))}
                    <Button variant="outline" size="sm" disabled={safePage === pageCount} onClick={() => setPage(safePage + 1)}>Next</Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
