"use client";

import Link from "next/link";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Product, formatPHP } from "@/lib/data";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  new: "bg-emerald-500",
  sale: "bg-rose-500",
  bestseller: "bg-amber-500",
  popular: "bg-violet-500",
};

const badgeLabels: Record<NonNullable<Product["badge"]>, string> = {
  new: "NEW",
  sale: "SALE",
  bestseller: "BESTSELLER",
  popular: "POPULAR",
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`relative aspect-square bg-gradient-to-br ${product.bgColor} flex items-center justify-center overflow-hidden`}>
        <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{product.emoji}</div>
        {product.badge && (
          <span className={`absolute top-3 left-3 ${badgeStyles[product.badge]} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
            {badgeLabels[product.badge]}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-white text-rose-600 text-[10px] font-bold px-2 py-1 rounded-full shadow">
            -{discount}%
          </span>
        )}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--primary)] hover:text-white"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
          {product.category}
        </div>
        <h3 className="font-semibold text-sm mb-2 line-clamp-1 group-hover:text-[var(--primary)] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3 text-xs">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-[var(--muted-foreground)]">({product.reviews})</span>
          <span className="ml-auto text-[var(--muted-foreground)]">
            {product.stock > 10 ? "In stock" : product.stock > 0 ? `${product.stock} left` : "Out"}
          </span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="font-bold text-lg text-[var(--primary)]">{formatPHP(product.price)}</div>
            {product.oldPrice && (
              <div className="text-xs text-[var(--muted-foreground)] line-through">{formatPHP(product.oldPrice)}</div>
            )}
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
