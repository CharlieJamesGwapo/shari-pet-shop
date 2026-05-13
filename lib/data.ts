export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  stock: number;
  badge?: "new" | "sale" | "bestseller" | "popular";
  emoji: string;
  bgColor: string;
  description: string;
  features: string[];
};

export type OrderStatus = "pending" | "confirmed" | "preparing" | "shipped" | "delivered" | "cancelled";

export type Order = {
  id: string;
  customer: string;
  email: string;
  phone: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: { productId: string; name: string; emoji: string; qty: number; price: number }[];
  address: string;
  paymentMethod: string;
};

export const categories: Category[] = [
  { id: "1", name: "Aso", slug: "dogs", icon: "🐕", description: "Mga aso na puno ng energy at pagmamahal" },
  { id: "2", name: "Pusa", slug: "cats", icon: "🐈", description: "Mga maamong pusa para sa iyong tahanan" },
  { id: "3", name: "Isda", slug: "fish", icon: "🐠", description: "Iba't ibang species ng aquarium fish" },
  { id: "4", name: "Ibon", slug: "birds", icon: "🦜", description: "Kakaibang klase ng pet birds" },
  { id: "5", name: "Hamster & Bunny", slug: "small-pets", icon: "🐹", description: "Maliliit na alaga para sa lahat" },
  { id: "6", name: "Pet Food", slug: "food", icon: "🍖", description: "Masustansiyang pagkain para sa alaga mo" },
  { id: "7", name: "Accessories", slug: "accessories", icon: "🎀", description: "Toys, collars, beds, at iba pa" },
  { id: "8", name: "Pet Care", slug: "care", icon: "🧴", description: "Shampoo, vitamins, at health products" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Shih Tzu Puppy",
    slug: "shih-tzu-puppy",
    category: "dogs",
    price: 15000,
    oldPrice: 18000,
    rating: 4.9,
    reviews: 124,
    stock: 3,
    badge: "bestseller",
    emoji: "🐶",
    bgColor: "from-orange-200 to-pink-200",
    description: "Cute at healthy Shih Tzu puppy, vaccinated at dewormed. 2 months old, kasama ang papers.",
    features: ["2 months old", "Vaccinated", "Dewormed", "Papers included", "Health certificate"],
  },
  {
    id: "p2",
    name: "Persian Kitten",
    slug: "persian-kitten",
    category: "cats",
    price: 12000,
    rating: 4.8,
    reviews: 89,
    stock: 5,
    badge: "popular",
    emoji: "😺",
    bgColor: "from-purple-200 to-pink-200",
    description: "Pure breed Persian kitten with long fluffy fur. Vaccinated at trained sa litter box.",
    features: ["3 months old", "Litter trained", "Vaccinated", "Pure breed", "Indoor friendly"],
  },
  {
    id: "p3",
    name: "Golden Retriever",
    slug: "golden-retriever",
    category: "dogs",
    price: 25000,
    rating: 5.0,
    reviews: 67,
    stock: 2,
    badge: "new",
    emoji: "🦮",
    bgColor: "from-yellow-200 to-orange-200",
    description: "Pure breed Golden Retriever, perfect family dog. Maamo, matalino at active.",
    features: ["4 months old", "Pure breed", "Complete vaccines", "AKC papers", "Trainable"],
  },
  {
    id: "p4",
    name: "Royal Canin Adult Dog Food 3kg",
    slug: "royal-canin-adult",
    category: "food",
    price: 1450,
    oldPrice: 1650,
    rating: 4.7,
    reviews: 342,
    stock: 45,
    badge: "sale",
    emoji: "🥘",
    bgColor: "from-amber-200 to-yellow-200",
    description: "Complete nutrition para sa adult dogs. Made with premium ingredients.",
    features: ["3kg pack", "Adult formula", "High protein", "Omega 3 & 6", "Made in France"],
  },
  {
    id: "p5",
    name: "Whiskas Cat Food 1.2kg",
    slug: "whiskas-cat-food",
    category: "food",
    price: 380,
    rating: 4.6,
    reviews: 521,
    stock: 80,
    emoji: "🐟",
    bgColor: "from-blue-200 to-cyan-200",
    description: "Tuna flavor dry cat food, masarap at masustansya.",
    features: ["1.2kg pack", "Tuna flavor", "All life stages", "Taurine added", "Vitamin enriched"],
  },
  {
    id: "p6",
    name: "Pet Collar with Bell",
    slug: "pet-collar-bell",
    category: "accessories",
    price: 120,
    rating: 4.5,
    reviews: 198,
    stock: 120,
    emoji: "🎀",
    bgColor: "from-pink-200 to-rose-200",
    description: "Cute adjustable collar with bell. Available in multiple colors.",
    features: ["Adjustable size", "Soft material", "Quick release", "5 colors available", "Bell included"],
  },
  {
    id: "p7",
    name: "Goldfish (Pack of 5)",
    slug: "goldfish-pack",
    category: "fish",
    price: 250,
    rating: 4.4,
    reviews: 76,
    stock: 30,
    emoji: "🐠",
    bgColor: "from-orange-200 to-amber-200",
    description: "Healthy at colorful goldfish. Perfect para sa starter aquarium.",
    features: ["5 pieces", "Healthy stock", "1-2 inches", "Mixed colors", "Free water bag"],
  },
  {
    id: "p8",
    name: "African Love Bird",
    slug: "love-bird",
    category: "birds",
    price: 2500,
    rating: 4.7,
    reviews: 43,
    stock: 8,
    badge: "popular",
    emoji: "🦜",
    bgColor: "from-green-200 to-emerald-200",
    description: "Colorful at melodious love bird. Perfect pair available.",
    features: ["Healthy", "Vibrant colors", "Hand-tamed available", "Pair option", "Cage not included"],
  },
  {
    id: "p9",
    name: "Hamster (Syrian)",
    slug: "syrian-hamster",
    category: "small-pets",
    price: 350,
    rating: 4.5,
    reviews: 112,
    stock: 15,
    emoji: "🐹",
    bgColor: "from-amber-200 to-orange-200",
    description: "Healthy at cute Syrian hamster. Maamo at madaling alagaan.",
    features: ["Healthy", "Various colors", "Friendly", "2 months old", "Care guide included"],
  },
  {
    id: "p10",
    name: "Dog Shampoo 500ml",
    slug: "dog-shampoo",
    category: "care",
    price: 285,
    oldPrice: 350,
    rating: 4.8,
    reviews: 267,
    stock: 60,
    badge: "sale",
    emoji: "🧴",
    bgColor: "from-cyan-200 to-blue-200",
    description: "Anti-tick and flea shampoo. Mabango at malumanay sa balat.",
    features: ["500ml bottle", "Anti-tick & flea", "Coconut scent", "Vet approved", "All breeds"],
  },
  {
    id: "p11",
    name: "Pet Bed (Medium)",
    slug: "pet-bed-medium",
    category: "accessories",
    price: 850,
    rating: 4.6,
    reviews: 145,
    stock: 25,
    badge: "bestseller",
    emoji: "🛏️",
    bgColor: "from-purple-200 to-indigo-200",
    description: "Soft at comfortable pet bed. Washable at durable.",
    features: ["Medium size", "Soft cushion", "Machine washable", "Non-slip base", "Multiple colors"],
  },
  {
    id: "p12",
    name: "Multivitamins for Pets",
    slug: "pet-multivitamins",
    category: "care",
    price: 450,
    rating: 4.9,
    reviews: 198,
    stock: 40,
    badge: "new",
    emoji: "💊",
    bgColor: "from-emerald-200 to-teal-200",
    description: "Complete vitamins para sa dogs at cats. Vet recommended.",
    features: ["30 tablets", "All breeds", "Vet approved", "Easy to chew", "Boosts immunity"],
  },
];

export const orders: Order[] = [
  {
    id: "ORD-2026-0142",
    customer: "Maria Santos",
    email: "maria.santos@gmail.com",
    phone: "+63 917 234 5678",
    date: "2026-05-12",
    status: "shipped",
    total: 1830,
    items: [
      { productId: "p4", name: "Royal Canin Adult Dog Food 3kg", emoji: "🥘", qty: 1, price: 1450 },
      { productId: "p6", name: "Pet Collar with Bell", emoji: "🎀", qty: 1, price: 120 },
      { productId: "p10", name: "Dog Shampoo 500ml", emoji: "🧴", qty: 1, price: 285 },
    ],
    address: "123 Sampaguita St., Quezon City",
    paymentMethod: "GCash",
  },
  {
    id: "ORD-2026-0141",
    customer: "Juan Dela Cruz",
    email: "juan.dc@yahoo.com",
    phone: "+63 918 876 5432",
    date: "2026-05-12",
    status: "preparing",
    total: 12000,
    items: [{ productId: "p2", name: "Persian Kitten", emoji: "😺", qty: 1, price: 12000 }],
    address: "456 Mabini St., Makati City",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "ORD-2026-0140",
    customer: "Ana Reyes",
    email: "ana.reyes@gmail.com",
    phone: "+63 919 111 2233",
    date: "2026-05-11",
    status: "delivered",
    total: 730,
    items: [
      { productId: "p5", name: "Whiskas Cat Food 1.2kg", emoji: "🐟", qty: 1, price: 380 },
      { productId: "p10", name: "Dog Shampoo 500ml", emoji: "🧴", qty: 1, price: 285 },
    ],
    address: "789 Rizal Ave., Manila",
    paymentMethod: "Cash on Delivery",
  },
  {
    id: "ORD-2026-0139",
    customer: "Pedro Garcia",
    email: "pedro.g@gmail.com",
    phone: "+63 915 444 5566",
    date: "2026-05-11",
    status: "confirmed",
    total: 25000,
    items: [{ productId: "p3", name: "Golden Retriever", emoji: "🦮", qty: 1, price: 25000 }],
    address: "101 Bonifacio Ave., Pasig City",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "ORD-2026-0138",
    customer: "Liza Cruz",
    email: "liza.c@gmail.com",
    phone: "+63 912 333 7788",
    date: "2026-05-10",
    status: "pending",
    total: 1300,
    items: [
      { productId: "p9", name: "Hamster (Syrian)", emoji: "🐹", qty: 2, price: 350 },
      { productId: "p11", name: "Pet Bed (Medium)", emoji: "🛏️", qty: 1, price: 850 },
    ],
    address: "202 Aurora Blvd., Cubao",
    paymentMethod: "GCash",
  },
];

export const stats = {
  totalSales: 458920,
  totalOrders: 142,
  totalCustomers: 89,
  totalProducts: products.length,
  monthlyGrowth: 23.5,
  dailySales: [
    { day: "Lun", sales: 12500 },
    { day: "Mar", sales: 18200 },
    { day: "Mie", sales: 15800 },
    { day: "Hue", sales: 22400 },
    { day: "Bie", sales: 28900 },
    { day: "Sab", sales: 34500 },
    { day: "Lin", sales: 26700 },
  ],
  topProducts: [
    { name: "Royal Canin Adult", sold: 87, revenue: 126150 },
    { name: "Whiskas Cat Food", sold: 145, revenue: 55100 },
    { name: "Dog Shampoo", sold: 98, revenue: 27930 },
    { name: "Pet Bed Medium", sold: 56, revenue: 47600 },
  ],
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatPHP(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export const statusColors: Record<OrderStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-300",
  confirmed: "bg-blue-100 text-blue-800 border-blue-300",
  preparing: "bg-purple-100 text-purple-800 border-purple-300",
  shipped: "bg-indigo-100 text-indigo-800 border-indigo-300",
  delivered: "bg-emerald-100 text-emerald-800 border-emerald-300",
  cancelled: "bg-rose-100 text-rose-800 border-rose-300",
};

export const statusLabels: Record<OrderStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  preparing: "Preparing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};
