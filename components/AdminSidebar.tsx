import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users, BarChart3, Settings, Bell, LogOut, Tag } from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/promotions", label: "Promotions", icon: Tag },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/notifications", label: "Notifications", icon: Bell },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar({ active }: { active: string }) {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[var(--border)] min-h-screen sticky top-0">
      <div className="p-6 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-xl">🐾</div>
          <div>
            <div className="font-bold leading-tight">Shari Admin</div>
            <div className="text-[10px] text-[var(--muted-foreground)]">Management Console</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[var(--primary)] text-white shadow-md shadow-orange-200"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm">SP</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Shari Admin</div>
            <div className="text-xs text-[var(--muted-foreground)] truncate">admin@sharipet.ph</div>
          </div>
        </div>
        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--muted-foreground)] hover:text-rose-600 rounded-xl">
          <LogOut className="w-4 h-4" />
          <span>Back to Shop</span>
        </Link>
      </div>
    </aside>
  );
}
