import AdminSidebar from "@/components/AdminSidebar";
import { orders, formatPHP, statusColors, statusLabels } from "@/lib/data";
import { Search, Filter, MoreVertical, Eye, MessageSquare, Download } from "lucide-react";

export default function AdminOrders() {
  return (
    <div className="flex bg-[var(--background)] min-h-screen">
      <AdminSidebar active="/admin/orders" />

      <div className="flex-1 min-w-0">
        <header className="bg-white border-b border-[var(--border)] px-6 py-4 sticky top-0 z-30 flex items-center gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-xl">Orders</h1>
            <div className="text-xs text-[var(--muted-foreground)]">Manage at i-track ang lahat ng customer orders</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--muted)]">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </header>

        <div className="p-6 space-y-4">
          {/* Status summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Pending", count: 8, color: "bg-amber-100 text-amber-700" },
              { label: "Confirmed", count: 12, color: "bg-blue-100 text-blue-700" },
              { label: "Preparing", count: 5, color: "bg-purple-100 text-purple-700" },
              { label: "Shipped", count: 24, color: "bg-indigo-100 text-indigo-700" },
              { label: "Delivered", count: 93, color: "bg-emerald-100 text-emerald-700" },
            ].map((s) => (
              <div key={s.label} className={`rounded-2xl p-4 ${s.color}`}>
                <div className="text-xs font-medium opacity-80">{s.label}</div>
                <div className="text-2xl font-bold mt-1">{s.count}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl p-4 border border-[var(--border)] flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search by order ID or customer..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] text-sm"
              />
            </div>
            <select className="text-sm border border-[var(--border)] rounded-lg px-3 py-2 bg-white">
              <option>All Status</option>
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <select className="text-sm border border-[var(--border)] rounded-lg px-3 py-2 bg-white">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Today</option>
            </select>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--muted)]">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>

          {/* Orders table */}
          <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[var(--muted)]/50">
                  <tr className="text-left text-xs text-[var(--muted-foreground)] uppercase">
                    <th className="px-4 py-3 font-medium w-10"><input type="checkbox" /></th>
                    <th className="px-4 py-3 font-medium">Order ID</th>
                    <th className="px-4 py-3 font-medium">Customer</th>
                    <th className="px-4 py-3 font-medium">Items</th>
                    <th className="px-4 py-3 font-medium">Payment</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium text-right">Total</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-[var(--border)] hover:bg-[var(--muted)]/30">
                      <td className="px-4 py-3"><input type="checkbox" /></td>
                      <td className="px-4 py-3 font-mono text-xs font-medium">{order.id}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-sm">{order.customer}</div>
                        <div className="text-xs text-[var(--muted-foreground)] truncate max-w-[150px]">{order.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className="flex -space-x-2">
                            {order.items.slice(0, 3).map((item, i) => (
                              <div key={i} className="w-7 h-7 rounded-full bg-[var(--muted)] border border-white flex items-center justify-center text-sm">
                                {item.emoji}
                              </div>
                            ))}
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)]">{order.items.length} item{order.items.length > 1 ? "s" : ""}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs">{order.paymentMethod}</td>
                      <td className="px-4 py-3">
                        <select className={`px-2 py-1 rounded-full text-[10px] font-semibold border bg-transparent cursor-pointer ${statusColors[order.status]}`} defaultValue={order.status}>
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Preparing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-xs text-[var(--muted-foreground)]">{order.date}</td>
                      <td className="px-4 py-3 text-right font-semibold">{formatPHP(order.total)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="View"><Eye className="w-4 h-4" /></button>
                          <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="Message"><MessageSquare className="w-4 h-4" /></button>
                          <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="More"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-3 bg-[var(--muted)]/30 border-t border-[var(--border)] flex items-center justify-between text-sm">
              <div className="text-[var(--muted-foreground)]">Showing {orders.length} of 142 orders</div>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">Previous</button>
                <button className="px-3 py-1 rounded-lg bg-[var(--primary)] text-white text-xs font-semibold">1</button>
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">2</button>
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">3</button>
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
