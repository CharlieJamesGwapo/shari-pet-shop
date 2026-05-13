import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";
import { ArrowRight, Truck, Shield, HeartHandshake, Sparkles, Star } from "lucide-react";

export default function Home() {
  const featured = products.slice(0, 4);
  const bestsellers = products.filter((p) => p.badge === "bestseller" || p.badge === "popular").slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--secondary)] via-[var(--muted)] to-[var(--background)]">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl animate-float">🐾</div>
            <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: "1s" }}>🦴</div>
            <div className="absolute bottom-20 left-1/3 text-4xl animate-float" style={{ animationDelay: "2s" }}>🐟</div>
            <div className="absolute top-32 right-1/3 text-5xl animate-float" style={{ animationDelay: "0.5s" }}>🎾</div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-5 border border-[var(--border)]">
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                #1 Pet Shop sa Pinas
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
                Lahat para sa <span className="text-[var(--primary)]">alaga mo</span>, andito sa Shari! 🐾
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-lg">
                Mula sa cute na puppies, masustansyang pet food, hanggang sa mga toys at accessories — kompleto ang Shari Pet Shop para sa pamilya mong may balahibo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-200"
                >
                  Mag-shop Na <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 bg-white border border-[var(--border)] px-7 py-3.5 rounded-full font-semibold hover:bg-[var(--muted)] transition-colors"
                >
                  Admin Dashboard
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10 text-sm">
                <div>
                  <div className="font-bold text-2xl">10K+</div>
                  <div className="text-[var(--muted-foreground)]">Happy Pets</div>
                </div>
                <div className="h-10 w-px bg-[var(--border)]" />
                <div>
                  <div className="font-bold text-2xl">500+</div>
                  <div className="text-[var(--muted-foreground)]">Products</div>
                </div>
                <div className="h-10 w-px bg-[var(--border)]" />
                <div>
                  <div className="font-bold text-2xl flex items-center gap-1">
                    4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-[var(--muted-foreground)]">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-[3rem] flex items-center justify-center text-9xl shadow-2xl">
                <span className="animate-float">🐶</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">✓</div>
                <div>
                  <div className="font-semibold text-sm">Vaccinated</div>
                  <div className="text-xs text-[var(--muted-foreground)]">100% Healthy</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">🚚</div>
                <div>
                  <div className="font-semibold text-sm">Free Delivery</div>
                  <div className="text-xs text-[var(--muted-foreground)]">₱2,000 pataas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features bar */}
        <section className="bg-white border-y border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "Nationwide shipping" },
              { icon: Shield, title: "Secure Payment", desc: "GCash, Maya, COD" },
              { icon: HeartHandshake, title: "Pet Insurance", desc: "Health guaranteed" },
              { icon: Sparkles, title: "Quality Assured", desc: "Vet-approved" },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--primary)]">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
              <p className="text-[var(--muted-foreground)]">Pumili ng kategorya para sa alaga mo</p>
            </div>
            <Link href="/products" className="text-sm font-medium text-[var(--primary)] hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group bg-white rounded-2xl p-4 border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="text-xs font-medium">{cat.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Bagong Dating 🌟</h2>
              <p className="text-[var(--muted-foreground)]">Fresh arrivals na pwede mong i-check</p>
            </div>
            <Link href="/products" className="text-sm font-medium text-[var(--primary)] hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* Promo banner */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="relative bg-gradient-to-r from-[var(--primary)] to-rose-400 rounded-3xl overflow-hidden p-10 md:p-14 text-white">
            <div className="absolute right-0 top-0 text-[20rem] opacity-10 leading-none select-none">🦴</div>
            <div className="relative max-w-xl">
              <div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-4">
                LIMITED OFFER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Hanggang 50% OFF!</h2>
              <p className="mb-6 opacity-90">Sa lahat ng pet food at accessories ngayong buwan. Wag palampasin ang sale na ito!</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Shop Sale <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Customer Favorites 💖</h2>
              <p className="text-[var(--muted-foreground)]">Pinakamabilis maubos ng customers natin</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {bestsellers.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Anong sabi ng mga Pet Parents?</h2>
            <p className="text-[var(--muted-foreground)]">Totoong reviews mula sa happy customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria S.", emoji: "👩", review: "Sobrang bait ng staff at healthy talaga yung Shih Tzu na nabili ko. Highly recommended!", rating: 5 },
              { name: "Juan D.", emoji: "👨", review: "Mura at mabilis mag-deliver. Yung Royal Canin food ko, dumating same day!", rating: 5 },
              { name: "Ana R.", emoji: "👧", review: "First time bumili online ng pet, pero okay naman pala. Ang ganda ng packaging.", rating: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center text-xl">{t.emoji}</div>
                  <div className="font-semibold text-sm">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-[var(--muted)] rounded-3xl p-10 text-center">
            <div className="text-5xl mb-4">📬</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe sa Newsletter</h2>
            <p className="text-[var(--muted-foreground)] mb-6 max-w-md mx-auto">
              Make sure na first kang maka-alam ng mga promos, new arrivals at pet care tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-[var(--border)] bg-white focus:outline-none focus:border-[var(--primary)]"
              />
              <button
                type="button"
                className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
