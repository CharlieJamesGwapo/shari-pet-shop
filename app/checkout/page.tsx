import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, formatPHP } from "@/lib/data";
import { MapPin, CreditCard, Truck, Lock, Check } from "lucide-react";

export default function CheckoutPage() {
  const cart = [
    { product: products[3], qty: 2 },
    { product: products[5], qty: 1 },
    { product: products[9], qty: 1 },
  ];
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const shipping = 0;
  const discount = 145;
  const total = subtotal + shipping - discount;

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Link href="/cart" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">← Back to Cart</Link>
          <h1 className="text-3xl font-bold mt-2">Checkout</h1>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {[
            { num: 1, label: "Cart", done: true },
            { num: 2, label: "Checkout", active: true },
            { num: 3, label: "Confirmation" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-2 flex-1">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${s.done ? "bg-emerald-500 text-white" : s.active ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)]"}`}>
                {s.done ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <div className="text-sm font-medium">{s.label}</div>
              {i < 2 && <div className="flex-1 h-0.5 bg-[var(--border)] mx-2" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            {/* Shipping */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-[var(--primary)]" />
                <h2 className="font-semibold text-lg">Shipping Address</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" placeholder="Juan Dela Cruz" />
                <Field label="Phone Number" placeholder="+63 917 xxx xxxx" />
                <Field label="Email" placeholder="juan@email.com" className="sm:col-span-2" />
                <Field label="Address" placeholder="House #, Street, Brgy." className="sm:col-span-2" />
                <Field label="City" placeholder="Quezon City" />
                <Field label="Postal Code" placeholder="1100" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">Delivery Notes (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Landmark, special instructions, etc."
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-white focus:outline-none focus:border-[var(--primary)] text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Shipping method */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-5">
                <Truck className="w-5 h-5 text-[var(--primary)]" />
                <h2 className="font-semibold text-lg">Shipping Method</h2>
              </div>
              <div className="space-y-2">
                {[
                  { id: "std", label: "Standard Delivery", desc: "3-5 business days", price: 0, free: true, selected: true },
                  { id: "exp", label: "Express Delivery", desc: "1-2 business days", price: 250 },
                  { id: "sd", label: "Same Day Delivery", desc: "Within Metro Manila", price: 450 },
                ].map((m) => (
                  <label key={m.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer ${m.selected ? "border-[var(--primary)] bg-orange-50/50" : "border-[var(--border)] hover:border-[var(--muted-foreground)]"}`}>
                    <input type="radio" name="shipping" defaultChecked={m.selected} className="text-[var(--primary)]" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{m.label}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{m.desc}</div>
                    </div>
                    <div className="font-semibold text-sm">
                      {m.free ? <span className="text-emerald-600">FREE</span> : formatPHP(m.price)}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard className="w-5 h-5 text-[var(--primary)]" />
                <h2 className="font-semibold text-lg">Payment Method</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { id: "gcash", label: "GCash", emoji: "📱", selected: true },
                  { id: "maya", label: "Maya", emoji: "💸" },
                  { id: "bank", label: "Bank Transfer", emoji: "🏦" },
                  { id: "cod", label: "Cash on Delivery", emoji: "💵" },
                ].map((p) => (
                  <label key={p.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer ${p.selected ? "border-[var(--primary)] bg-orange-50/50" : "border-[var(--border)] hover:border-[var(--muted-foreground)]"}`}>
                    <input type="radio" name="payment" defaultChecked={p.selected} className="text-[var(--primary)]" />
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="font-medium text-sm">{p.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="font-semibold text-lg mb-5">Order Summary</div>

              <div className="space-y-3 mb-4 pb-4 border-b border-[var(--border)]">
                {cart.map(({ product, qty }) => (
                  <div key={product.id} className="flex gap-3 items-center">
                    <div className={`relative w-14 h-14 shrink-0 bg-gradient-to-br ${product.bgColor} rounded-lg flex items-center justify-center text-2xl`}>
                      {product.emoji}
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">{qty}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{product.name}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">Qty: {qty}</div>
                    </div>
                    <div className="text-sm font-semibold">{formatPHP(product.price * qty)}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm pb-4 border-b border-[var(--border)]">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Subtotal</span>
                  <span>{formatPHP(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Shipping</span>
                  <span className="text-emerald-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Promo (PETLOVE10)</span>
                  <span className="text-rose-600">-{formatPHP(discount)}</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg py-4">
                <span>Total</span>
                <span className="text-[var(--primary)]">{formatPHP(total)}</span>
              </div>

              <Link
                href="/orders"
                className="block w-full bg-[var(--primary)] text-white py-3.5 rounded-full font-semibold text-center hover:scale-[1.02] transition-transform shadow-lg shadow-orange-200"
              >
                Place Order
              </Link>

              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-[var(--muted-foreground)]">
                <Lock className="w-3 h-3" /> 100% secure checkout
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, placeholder, className }: { label: string; placeholder: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium mb-1.5 block">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-white focus:outline-none focus:border-[var(--primary)] text-sm"
      />
    </div>
  );
}
