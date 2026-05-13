import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, formatPHP } from "@/lib/data";
import { Minus, Plus, Trash2, Tag, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const cart = [
    { product: products[3], qty: 2 },
    { product: products[5], qty: 1 },
    { product: products[9], qty: 1 },
  ];
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const shipping = subtotal >= 2000 ? 0 : 120;
  const discount = 145;
  const total = subtotal + shipping - discount;

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-7 h-7 text-[var(--primary)]" />
          <h1 className="text-3xl font-bold">My Cart</h1>
          <span className="text-[var(--muted-foreground)]">({cart.length} items)</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Cart items */}
          <div className="space-y-4">
            {cart.map(({ product, qty }) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 border border-[var(--border)] flex gap-4">
                <Link href={`/products/${product.slug}`} className={`w-24 h-24 shrink-0 bg-gradient-to-br ${product.bgColor} rounded-xl flex items-center justify-center text-5xl`}>
                  {product.emoji}
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-0.5">{product.category}</div>
                      <Link href={`/products/${product.slug}`} className="font-semibold hover:text-[var(--primary)] block truncate">{product.name}</Link>
                      <div className="text-xs text-emerald-600 mt-1">✓ In stock</div>
                    </div>
                    <button className="p-2 text-[var(--muted-foreground)] hover:text-rose-600 hover:bg-rose-50 rounded-lg shrink-0" aria-label="Remove">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-[var(--muted)]/50 rounded-full">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-[var(--muted)] rounded-l-full" aria-label="Decrease">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-[var(--muted)] rounded-r-full" aria-label="Increase">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-bold text-lg text-[var(--primary)]">{formatPHP(product.price * qty)}</div>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/products" className="block text-center py-3 text-sm text-[var(--primary)] font-medium hover:underline">
              ← Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="font-semibold text-lg mb-4">Order Summary</div>

              <div className="space-y-2.5 text-sm pb-4 border-b border-[var(--border)]">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Subtotal</span>
                  <span className="font-medium">{formatPHP(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? <span className="text-emerald-600">FREE</span> : formatPHP(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Discount</span>
                  <span className="font-medium text-rose-600">-{formatPHP(discount)}</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg py-4">
                <span>Total</span>
                <span className="text-[var(--primary)]">{formatPHP(total)}</span>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-[var(--primary)] text-white py-3 rounded-full font-semibold text-center hover:scale-[1.02] transition-transform shadow-lg shadow-orange-200 mb-3"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>

              <div className="text-xs text-center text-[var(--muted-foreground)]">
                Secure checkout · GCash · Maya · COD
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="font-semibold mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[var(--primary)]" /> Promo Code
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--primary)]"
                />
                <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90">Apply</button>
              </div>
              <div className="text-xs text-emerald-600 mt-2">✓ PETLOVE10 applied (₱145 off)</div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
