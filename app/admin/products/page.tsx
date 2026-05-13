import AdminSidebar from "@/components/AdminSidebar";
import { products, formatPHP } from "@/lib/data";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, Download, Upload } from "lucide-react";

export default function AdminProducts() {
  return (
    <div className="flex bg-[var(--background)] min-h-screen">
      <AdminSidebar active="/admin/products" />

      <div className="flex-1 min-w-0">
        <header className="bg-white border-b border-[var(--border)] px-6 py-4 sticky top-0 z-30 flex items-center gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-xl">Products</h1>
            <div className="text-xs text-[var(--muted-foreground)]">Manage your inventory · {products.length} total</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)]" aria-label="Export">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)]" aria-label="Import">
              <Upload className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform shadow-md shadow-orange-200">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </header>

        <div className="p-6 space-y-4">
          {/* Filters */}
          <div className="bg-white rounded-2xl p-4 border border-[var(--border)] flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] text-sm"
              />
            </div>
            <select className="text-sm border border-[var(--border)] rounded-lg px-3 py-2 bg-white">
              <option>All Categories</option>
              <option>Dogs</option>
              <option>Cats</option>
              <option>Food</option>
              <option>Accessories</option>
            </select>
            <select className="text-sm border border-[var(--border)] rounded-lg px-3 py-2 bg-white">
              <option>All Status</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--muted)]">
              <Filter className="w-4 h-4" /> More Filters
            </button>
          </div>

          {/* Products table */}
          <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[var(--muted)]/50">
                  <tr className="text-left text-xs text-[var(--muted-foreground)] uppercase">
                    <th className="px-4 py-3 font-medium w-10"><input type="checkbox" /></th>
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium text-right">Price</th>
                    <th className="px-4 py-3 font-medium text-center">Stock</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-center">Rating</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    const stockStatus =
                      p.stock === 0 ? "Out of Stock" : p.stock < 10 ? "Low Stock" : "In Stock";
                    const stockColor =
                      p.stock === 0
                        ? "text-rose-700 bg-rose-50"
                        : p.stock < 10
                        ? "text-amber-700 bg-amber-50"
                        : "text-emerald-700 bg-emerald-50";

                    return (
                      <tr key={p.id} className="border-t border-[var(--border)] hover:bg-[var(--muted)]/30">
                        <td className="px-4 py-3"><input type="checkbox" /></td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.bgColor} flex items-center justify-center text-2xl`}>
                              {p.emoji}
                            </div>
                            <div>
                              <div className="font-medium">{p.name}</div>
                              <div className="text-xs text-[var(--muted-foreground)]">SKU: {p.id.toUpperCase()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 capitalize">{p.category}</td>
                        <td className="px-4 py-3 text-right font-semibold">{formatPHP(p.price)}</td>
                        <td className="px-4 py-3 text-center font-medium">{p.stock}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${stockColor}`}>
                            {stockStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-amber-500">★</span> {p.rating}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="View"><Eye className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="Edit"><Edit className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-rose-50 hover:text-rose-600 rounded-lg" aria-label="Delete"><Trash2 className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-[var(--muted)] rounded-lg" aria-label="More"><MoreVertical className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-3 bg-[var(--muted)]/30 border-t border-[var(--border)] flex items-center justify-between text-sm">
              <div className="text-[var(--muted-foreground)]">Showing 1-{products.length} of {products.length} products</div>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">Previous</button>
                <button className="px-3 py-1 rounded-lg bg-[var(--primary)] text-white text-xs font-semibold">1</button>
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">2</button>
                <button className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs hover:bg-white">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
