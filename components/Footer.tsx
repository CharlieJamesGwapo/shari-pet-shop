import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--muted)] border-t border-[var(--border)] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-xl">🐾</div>
            <div className="font-bold text-lg">Shari Pet Shop</div>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Trusted na pet shop sa Pilipinas. Lahat ng kailangan ng alaga mo, andito.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-3">Shop</div>
          <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
            <li><Link href="/products" className="hover:text-[var(--primary)]">All Products</Link></li>
            <li><Link href="/products?category=dogs" className="hover:text-[var(--primary)]">Dogs</Link></li>
            <li><Link href="/products?category=cats" className="hover:text-[var(--primary)]">Cats</Link></li>
            <li><Link href="/products?category=food" className="hover:text-[var(--primary)]">Pet Food</Link></li>
            <li><Link href="/products?category=accessories" className="hover:text-[var(--primary)]">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Customer Care</div>
          <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
            <li><Link href="/orders" className="hover:text-[var(--primary)]">Order Tracking</Link></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Shipping Info</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">FAQ</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Get in Touch</div>
          <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>123 Sampaguita St., Quezon City, Metro Manila</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+63 917 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>hello@sharipetshop.ph</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-5 text-center text-xs text-[var(--muted-foreground)]">
        © 2026 Shari Pet Shop. All rights reserved. • Made with 🐾 in the Philippines
      </div>
    </footer>
  );
}
