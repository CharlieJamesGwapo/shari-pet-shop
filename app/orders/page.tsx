import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { orders, formatPHP, statusColors, statusLabels } from "@/lib/data";
import { Package, Search, ChevronRight } from "lucide-react";

export default function OrdersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-[var(--muted-foreground)]">Track at i-monitor ang lahat ng orders mo</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl p-4 border border-[var(--border)] mb-6 flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search by order ID..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] text-sm"
            />
          </div>
          <button className="px-5 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform">Search</button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {["All", "Pending", "Confirmed", "Preparing", "Shipped", "Delivered"].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? "bg-foreground text-background" : "bg-white border border-[var(--border)] hover:bg-[var(--muted)]"}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Orders list */}
        <div className="space-y-4">
          {orders.map((order) => (
            <Link
              key={order.id}
              href={`/orders/${order.id}`}
              className="block bg-white rounded-2xl p-5 border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center">
                    <Package className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold">{order.id}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">Placed on {order.date}</div>
                  </div>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusColors[order.status]}`}>
                  {statusLabels[order.status]}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {order.items.slice(0, 3).map((item, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[var(--muted)] border-2 border-white flex items-center justify-center text-xl">
                      {item.emoji}
                    </div>
                  ))}
                  {order.items.length > 3 && (
                    <div className="w-10 h-10 rounded-full bg-foreground text-background border-2 border-white flex items-center justify-center text-xs font-bold">
                      +{order.items.length - 3}
                    </div>
                  )}
                </div>
                <div className="text-sm text-[var(--muted-foreground)] flex-1 truncate">
                  {order.items.map((i) => i.name).join(", ")}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                <div>
                  <div className="text-xs text-[var(--muted-foreground)]">Total</div>
                  <div className="font-bold text-lg text-[var(--primary)]">{formatPHP(order.total)}</div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                  View Details <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
