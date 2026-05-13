import AdminSidebar from "@/components/AdminSidebar";
import { Mail, MessageSquare, Bell, Smartphone, Settings, Check, Clock, X } from "lucide-react";

export default function AdminNotifications() {
  return (
    <div className="flex bg-[var(--background)] min-h-screen">
      <AdminSidebar active="/admin/notifications" />

      <div className="flex-1 min-w-0">
        <header className="bg-white border-b border-[var(--border)] px-6 py-4 sticky top-0 z-30">
          <h1 className="font-bold text-xl">Notifications & Automation</h1>
          <div className="text-xs text-[var(--muted-foreground)]">Manage automated email at SMS notifications</div>
        </header>

        <div className="p-6 grid lg:grid-cols-3 gap-4">
          {/* Activity log */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <h2 className="font-semibold text-lg mb-5">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { icon: Mail, type: "email", title: "Order confirmation sent", desc: "ORD-2026-0142 → maria.santos@gmail.com", time: "2 mins ago", status: "sent" },
                  { icon: MessageSquare, type: "sms", title: "Shipping notification SMS", desc: "ORD-2026-0142 → +63 917 234 5678", time: "5 mins ago", status: "sent" },
                  { icon: Mail, type: "email", title: "Low stock alert", desc: "Golden Retriever — 2 left in stock", time: "1 hour ago", status: "sent" },
                  { icon: Bell, type: "push", title: "New review notification", desc: "New 5-star review on Persian Kitten", time: "3 hours ago", status: "sent" },
                  { icon: Mail, type: "email", title: "Order delivered", desc: "ORD-2026-0140 → ana.reyes@gmail.com", time: "5 hours ago", status: "sent" },
                  { icon: MessageSquare, type: "sms", title: "Payment reminder", desc: "ORD-2026-0138 → +63 912 333 7788", time: "1 day ago", status: "pending" },
                  { icon: Mail, type: "email", title: "Welcome email", desc: "New customer: pedro.g@gmail.com", time: "2 days ago", status: "sent" },
                  { icon: Bell, type: "push", title: "Restock alert sent", desc: "5 customers notified about Royal Canin", time: "3 days ago", status: "failed" },
                ].map((n, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--muted)]/40">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      n.type === "email" ? "bg-blue-100 text-blue-600" :
                      n.type === "sms" ? "bg-emerald-100 text-emerald-600" :
                      "bg-purple-100 text-purple-600"
                    }`}>
                      <n.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{n.title}</div>
                      <div className="text-xs text-[var(--muted-foreground)] truncate">{n.desc}</div>
                      <div className="text-[10px] text-[var(--muted-foreground)] mt-1">{n.time}</div>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full inline-flex items-center gap-1 ${
                      n.status === "sent" ? "bg-emerald-50 text-emerald-700" :
                      n.status === "pending" ? "bg-amber-50 text-amber-700" :
                      "bg-rose-50 text-rose-700"
                    }`}>
                      {n.status === "sent" ? <Check className="w-3 h-3" /> : n.status === "pending" ? <Clock className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      {n.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-lg">Channels</h2>
                <Settings className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", count: "1,432 sent", enabled: true, color: "blue" },
                  { icon: MessageSquare, label: "SMS", count: "892 sent", enabled: true, color: "emerald" },
                  { icon: Smartphone, label: "Push", count: "445 sent", enabled: false, color: "purple" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${c.color}-100 text-${c.color}-600`}>
                        <c.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{c.label}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{c.count}</div>
                      </div>
                    </div>
                    <button className={`w-11 h-6 rounded-full relative transition-colors ${c.enabled ? "bg-emerald-500" : "bg-zinc-300"}`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${c.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <h2 className="font-semibold text-lg mb-5">Auto-Triggers</h2>
              <div className="space-y-3 text-sm">
                {[
                  { name: "Order confirmation", enabled: true },
                  { name: "Shipping update", enabled: true },
                  { name: "Order delivered", enabled: true },
                  { name: "Low stock alert", enabled: true },
                  { name: "Abandoned cart", enabled: false },
                  { name: "Birthday discount", enabled: false },
                  { name: "Review reminder", enabled: true },
                ].map((t) => (
                  <label key={t.name} className="flex items-center justify-between cursor-pointer">
                    <span>{t.name}</span>
                    <input type="checkbox" defaultChecked={t.enabled} className="rounded text-[var(--primary)]" />
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90">
              Send Broadcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
