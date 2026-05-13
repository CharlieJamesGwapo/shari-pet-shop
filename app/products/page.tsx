import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;
  const filtered = activeCategory ? products.filter((p) => p.category === activeCategory) : products;
  const activeCat = categories.find((c) => c.slug === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <div className="bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-sm text-[var(--muted-foreground)] mb-2">
              Home / Products {activeCat ? `/ ${activeCat.name}` : ""}
            </div>
            <h1 className="text-4xl font-bold mb-2">{activeCat ? activeCat.name : "All Products"}</h1>
            <p className="text-[var(--muted-foreground)]">
              {activeCat?.description ?? "Browse our complete selection for your fur babies"}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar filters */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="font-semibold mb-3">Search</div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="font-semibold mb-3">Categories</div>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="/products" className={`flex items-center justify-between px-3 py-2 rounded-lg ${!activeCategory ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)]"}`}>
                    <span>All Products</span>
                    <span className={`text-xs ${!activeCategory ? "opacity-80" : "text-[var(--muted-foreground)]"}`}>{products.length}</span>
                  </a>
                </li>
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.slug).length;
                  const isActive = activeCategory === cat.slug;
                  return (
                    <li key={cat.id}>
                      <a
                        href={`/products?category=${cat.slug}`}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)]"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cat.icon}</span>
                          <span>{cat.name}</span>
                        </span>
                        <span className={`text-xs ${isActive ? "opacity-80" : "text-[var(--muted-foreground)]"}`}>{count}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="font-semibold mb-3">Price Range</div>
              <div className="space-y-2 text-sm">
                {["Below ₱500", "₱500 - ₱2,000", "₱2,000 - ₱10,000", "₱10,000+"].map((r) => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-[var(--primary)]" />
                    <span>{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="font-semibold mb-3">Rating</div>
              <div className="space-y-2 text-sm">
                {[5, 4, 3].map((r) => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-[var(--primary)]" />
                    <span>{"⭐".repeat(r)} & up</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <div className="flex items-center justify-between mb-5 bg-white rounded-2xl px-5 py-3 border border-[var(--border)]">
              <div className="text-sm">
                Showing <span className="font-semibold">{filtered.length}</span> products
              </div>
              <div className="flex items-center gap-2">
                <button className="lg:hidden p-2 rounded-lg border border-[var(--border)]" aria-label="Filters">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--muted)]">
                  Sort: Featured <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[var(--border)]">
                <div className="text-5xl mb-3">😿</div>
                <p className="font-semibold">Walang nahanap na products</p>
                <p className="text-sm text-[var(--muted-foreground)]">Try ibang category</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
