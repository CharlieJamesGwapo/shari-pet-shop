import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="bg-[var(--primary)] text-white text-xs py-2 px-4 text-center">
        🎉 FREE SHIPPING para sa orders na ₱2,000 pataas! • Tara na sa Shari Pet Shop!
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-xl shadow-md">
            🐾
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-lg leading-tight">Shari Pet Shop</div>
            <div className="text-[10px] text-[var(--muted-foreground)]">Lahat para sa alaga mo</div>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search aso, pusa, food, accessories..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--muted)]/40 focus:bg-white focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
        </div>

        <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <Link href="/products" className="hover:text-[var(--primary)] transition-colors">Products</Link>
          <Link href="/orders" className="hover:text-[var(--primary)] transition-colors">My Orders</Link>
          <Link href="/admin" className="hover:text-[var(--primary)] transition-colors">Admin</Link>
        </div>

        <div className="flex items-center gap-2 ml-auto lg:ml-0">
          <button className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors hidden sm:block" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </button>
          <Link href="/cart" className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--primary)] text-white text-xs flex items-center justify-center font-bold">3</span>
          </Link>
          <button className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors lg:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
