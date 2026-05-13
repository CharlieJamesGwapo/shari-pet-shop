import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { orders, products, stats, formatPHP, statusColors, statusLabels } from "@/lib/data";
import { TrendingUp, TrendingDown, ShoppingBag, Users, Package, DollarSign, ArrowUpRight, Bell, Search, MoreVertical, AlertTriangle } from "lucide-react";

export default function AdminDashboard() {
  const lowStock = products.filter((p) => p.stock < 10).slice(0, 4);
  const maxSales = Math.max(...stats.dailySales.map((d) => d.sales));

  return (
    <div className="flex bg-[var(--background)] min-h-screen">
      <AdminSidebar active="/admin" />

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-[var(--border)] px-6 py-4 sticky top-0 z-30 flex items-center gap-4">
          <div>
            <h1 className="font-bold text-xl">Dashboard</h1>
            <div className="text-xs text-[var(--muted-foreground)]">Welcome back, Shari! 👋 Here&rsquo;s your store today.</div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 rounded-full border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] text-sm w-56"
              />
            </div>
            <button className="relative p-2 rounded-full bg-[var(--muted)] hover:bg-[var(--border)]" aria-label="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">5</span>
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={DollarSign}
              label="Total Sales"
              value={formatPHP(stats.totalSales)}
              change="+23.5%"
              positive
              accent="from-emerald-400 to-green-500"
            />
            <StatCard
              icon={ShoppingBag}
              label="Total Orders"
              value={stats.totalOrders.toString()}
              change="+12.3%"
              positive
              accent="from-blue-400 to-indigo-500"
            />
            <StatCard
              icon={Users}
              label="Customers"
              value={stats.totalCustomers.toString()}
              change="+8.1%"
              positive
              accent="from-purple-400 to-pink-500"
            />
            <StatCard
              icon={Package}
              label="Products"
              value={stats.totalProducts.toString()}
              change="-2.4%"
              positive={false}
              accent="from-orange-400 to-rose-500"
            />
          </div>

          {/* Sales chart + recent orders */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Sales chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-semibold text-lg">Weekly Sales</h2>
                  <div className="text-xs text-[var(--muted-foreground)]">Last 7 days performance</div>
                </div>
                <select className="text-sm border border-[var(--border)] rounded-lg px-3 py-1.5 bg-white">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>

              <div className="flex items-end gap-3 h-56">
                {stats.dailySales.map((d) => {
                  const height = (d.sales / maxSales) * 100;
                  return (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{formatPHP(d.sales)}</div>
                      <div className="w-full flex-1 flex items-end">
                        <div
                          className="w-full bg-gradient-to-t from-[var(--primary)] to-orange-300 rounded-t-lg group-hover:from-rose-500 group-hover:to-rose-300 transition-colors"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)]">{d.day}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[var(--border)] text-sm">
                <div>
                  <div className="text-[var(--muted-foreground)] text-xs">This Week</div>
                  <div className="font-bold">{formatPHP(stats.dailySales.reduce((s, d) => s + d.sales, 0))}</div>
                </div>
                <div className="h-10 w-px bg-[var(--border)]" />
                <div>
                  <div className="text-[var(--muted-foreground)] text-xs">Avg Order Value</div>
                  <div className="font-bold">{formatPHP(3232)}</div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" /> +{stats.monthlyGrowth}% from last week
                </div>
              </div>
            </div>

            {/* Top products */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-lg">Top Products</h2>
                <button className="text-xs text-[var(--primary)] font-medium hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {stats.topProducts.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm ${["bg-amber-400", "bg-slate-400", "bg-orange-600", "bg-zinc-300"][i]}`}>
                      #{i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{p.sold} sold</div>
                    </div>
                    <div className="text-sm font-semibold text-[var(--primary)]">{formatPHP(p.revenue)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent orders + Low stock */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-semibold text-lg">Recent Orders</h2>
                  <div className="text-xs text-[var(--muted-foreground)]">Latest 5 orders</div>
                </div>
                <Link href="/admin/orders" className="text-xs text-[var(--primary)] font-medium hover:underline inline-flex items-center gap-1">
                  View All <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-[var(--muted-foreground)] uppercase">
                      <th className="px-2 py-2 font-medium">Order ID</th>
                      <th className="px-2 py-2 font-medium">Customer</th>
                      <th className="px-2 py-2 font-medium">Status</th>
                      <th className="px-2 py-2 font-medium text-right">Total</th>
                      <th className="px-2 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-[var(--border)] hover:bg-[var(--muted)]/40">
                        <td className="px-2 py-3 font-mono text-xs">{order.id}</td>
                        <td className="px-2 py-3">
                          <div className="font-medium text-sm">{order.customer}</div>
                          <div className="text-xs text-[var(--muted-foreground)]">{order.date}</div>
                        </td>
                        <td className="px-2 py-3">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${statusColors[order.status]}`}>
                            {statusLabels[order.status]}
                          </span>
                        </td>
                        <td className="px-2 py-3 text-right font-semibold">{formatPHP(order.total)}</td>
                        <td className="px-2 py-3 text-right">
                          <button className="p-1 hover:bg-[var(--muted)] rounded" aria-label="More"><MoreVertical className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Low stock alert */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Low Stock
                </h2>
                <Link href="/admin/products" className="text-xs text-[var(--primary)] font-medium hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {lowStock.map((p) => (
                  <div key={p.id} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.bgColor} flex items-center justify-center text-xl`}>
                      {p.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{formatPHP(p.price)}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${p.stock < 5 ? "text-rose-600" : "text-amber-600"}`}>{p.stock}</div>
                      <div className="text-[10px] text-[var(--muted-foreground)]">left</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-90">
                Restock Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  positive,
  accent,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  change: string;
  positive: boolean;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[var(--border)] hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-xs font-semibold inline-flex items-center gap-1 px-2 py-1 rounded-full ${positive ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"}`}>
          {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-[var(--muted-foreground)] mt-1">{label}</div>
    </div>
  );
}
