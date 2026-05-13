import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { orders, formatPHP, statusColors, statusLabels, OrderStatus } from "@/lib/data";
import { Package, Check, MapPin, CreditCard, Phone, Mail, Truck, Clock, MessageCircle, Download } from "lucide-react";

const timeline: { status: OrderStatus; label: string; icon: typeof Package; description: string }[] = [
  { status: "pending", label: "Order Placed", icon: Package, description: "Natanggap na namin ang order mo" },
  { status: "confirmed", label: "Order Confirmed", icon: Check, description: "Confirmed at being processed" },
  { status: "preparing", label: "Preparing", icon: Clock, description: "Ini-prepare ang package mo" },
  { status: "shipped", label: "Shipped", icon: Truck, description: "Nasa courier na, papunta sa iyo" },
  { status: "delivered", label: "Delivered", icon: Check, description: "Successfully delivered!" },
];

const statusOrder: OrderStatus[] = ["pending", "confirmed", "preparing", "shipped", "delivered"];

export default async function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orders.find((o) => o.id === id);
  if (!order) notFound();

  const currentIdx = statusOrder.indexOf(order.status);

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <Link href="/orders" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">← Back to Orders</Link>

        <div className="flex flex-wrap items-start justify-between gap-4 mt-3 mb-8">
          <div>
            <div className="text-sm text-[var(--muted-foreground)]">Order ID</div>
            <h1 className="text-3xl font-bold">{order.id}</h1>
            <div className="text-sm text-[var(--muted-foreground)] mt-1">Placed on {order.date}</div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusColors[order.status]}`}>
              {statusLabels[order.status]}
            </span>
            <button className="p-2.5 rounded-full bg-white border border-[var(--border)] hover:bg-[var(--muted)]" aria-label="Download invoice">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tracking timeline */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--border)] mb-6">
          <h2 className="font-semibold text-lg mb-6">Order Status</h2>
          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-[var(--border)] md:left-1/2 md:-translate-x-px md:top-7 md:bottom-7" />
            <div className="space-y-6">
              {timeline.map((step, i) => {
                const done = i <= currentIdx;
                const active = i === currentIdx;
                return (
                  <div key={step.status} className="relative flex items-start gap-4 md:grid md:grid-cols-2 md:gap-8">
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 ${done ? "bg-emerald-500 text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)]"} ${active ? "ring-4 ring-emerald-200" : ""}`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className={`flex-1 md:text-right ${i % 2 === 1 ? "md:order-2 md:text-left md:col-start-2" : ""}`}>
                      <div className={`font-semibold ${done ? "" : "text-[var(--muted-foreground)]"}`}>{step.label}</div>
                      <div className="text-sm text-[var(--muted-foreground)]">{step.description}</div>
                      {done && <div className="text-xs text-emerald-600 mt-1">{order.date} · 14:32</div>}
                    </div>
                    <div className="hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>

          {order.status === "shipped" && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3">
              <Truck className="w-5 h-5 text-blue-600" />
              <div className="text-sm">
                <div className="font-semibold">Tracking Number: <span className="font-mono">LBC-2026-XYZ789</span></div>
                <div className="text-[var(--muted-foreground)] text-xs">Carrier: LBC Express · Estimated delivery: tomorrow</div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Items */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
            <h2 className="font-semibold mb-4">Items Ordered ({order.items.length})</h2>
            <div className="space-y-3">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-[var(--border)] last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center text-2xl shrink-0">{item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{item.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">Qty: {item.qty}</div>
                  </div>
                  <div className="font-semibold text-sm">{formatPHP(item.price * item.qty)}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">Subtotal</span><span>{formatPHP(order.total)}</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">Shipping</span><span className="text-emerald-600">FREE</span></div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-[var(--border)]">
                <span>Total</span>
                <span className="text-[var(--primary)]">{formatPHP(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Customer + shipping */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <h2 className="font-semibold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--primary)]" /> Shipping Address</h2>
              <div className="text-sm space-y-1.5">
                <div className="font-medium">{order.customer}</div>
                <div className="text-[var(--muted-foreground)]">{order.address}</div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]"><Phone className="w-3.5 h-3.5" /> {order.phone}</div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]"><Mail className="w-3.5 h-3.5" /> {order.email}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <h2 className="font-semibold mb-4 flex items-center gap-2"><CreditCard className="w-4 h-4 text-[var(--primary)]" /> Payment Method</h2>
              <div className="text-sm font-medium">{order.paymentMethod}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Payment confirmed</div>
            </div>

            <button className="w-full py-3 rounded-full bg-foreground text-background font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90">
              <MessageCircle className="w-4 h-4" /> Contact Support
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
