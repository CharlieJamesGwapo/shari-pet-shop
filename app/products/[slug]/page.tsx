import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProduct, products, formatPHP } from "@/lib/data";
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCcw, Check, Minus, Plus } from "lucide-react";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-[var(--muted-foreground)] mb-6">
          <Link href="/" className="hover:text-[var(--primary)]">Home</Link> /{" "}
          <Link href="/products" className="hover:text-[var(--primary)]">Products</Link> /{" "}
          <Link href={`/products?category=${product.category}`} className="hover:text-[var(--primary)] capitalize">{product.category}</Link> /{" "}
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image gallery */}
          <div>
            <div className={`aspect-square bg-gradient-to-br ${product.bgColor} rounded-3xl flex items-center justify-center text-[16rem] mb-4 shadow-lg`}>
              <span className="animate-float">{product.emoji}</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className={`aspect-square bg-gradient-to-br ${product.bgColor} rounded-xl flex items-center justify-center text-4xl border-2 ${i === 0 ? "border-[var(--primary)]" : "border-transparent hover:border-[var(--border)]"}`}>
                  {product.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {product.badge && (
                <span className="bg-[var(--primary)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {product.badge}
                </span>
              )}
              <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">{product.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                ))}
                <span className="font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-[var(--muted-foreground)]">{product.reviews} reviews</span>
              <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> {product.stock} in stock
              </span>
            </div>

            <div className="bg-[var(--muted)]/50 rounded-2xl p-5 mb-6">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-4xl font-bold text-[var(--primary)]">{formatPHP(product.price)}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-lg text-[var(--muted-foreground)] line-through pb-1">{formatPHP(product.oldPrice)}</span>
                    <span className="text-sm font-semibold text-rose-600 pb-1">Save {discount}%</span>
                  </>
                )}
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">VAT included • Free shipping ₱2,000 pataas</p>
            </div>

            <p className="text-[var(--muted-foreground)] mb-6">{product.description}</p>

            <div className="mb-6">
              <div className="font-semibold mb-3">Features</div>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to cart */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center bg-white border border-[var(--border)] rounded-full">
                <button className="w-10 h-10 flex items-center justify-center hover:bg-[var(--muted)] rounded-l-full" aria-label="Decrease">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">1</span>
                <button className="w-10 h-10 flex items-center justify-center hover:bg-[var(--muted)] rounded-r-full" aria-label="Increase">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 min-w-[200px] bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <button className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)]" aria-label="Wishlist">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <Link href="/checkout" className="block w-full text-center bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition-opacity mb-6">
              Buy Now
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
              {[
                { icon: Truck, title: "Fast Delivery", desc: "1-3 days" },
                { icon: Shield, title: "Authentic", desc: "100% genuine" },
                { icon: RefreshCcw, title: "Easy Return", desc: "7-day return" },
              ].map((f) => (
                <div key={f.title} className="text-center">
                  <f.icon className="w-5 h-5 mx-auto mb-2 text-[var(--primary)]" />
                  <div className="text-xs font-semibold">{f.title}</div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews preview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews ({product.reviews})</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Jenny L.", emoji: "👩", date: "May 10, 2026", stars: 5, text: "Sobrang nakakatuwa! Healthy at hindi takot. Smooth ang transaction. 10/10!" },
              { name: "Mark P.", emoji: "👨", date: "May 5, 2026", stars: 5, text: "Mabilis ang delivery at maganda ang packaging. Recommended!" },
              { name: "Cathy R.", emoji: "👧", date: "April 28, 2026", stars: 4, text: "Maganda overall. Konting issue lang sa size pero pwede na." },
            ].map((r, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center">{r.emoji}</div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">{r.date}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Pwede mo ring magustuhan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
