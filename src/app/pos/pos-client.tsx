"use client";

import {
  Search,
  Scan,
  Filter,
  Plus,
  Minus,
  Trash2,
  UserSearch,
  UserPlus,
  Tag,
  CreditCard,
  Banknote,
  ArrowLeftRight,
  Receipt,
  Wrench,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/hooks/use-cart";
import { Product } from "@prisma/client";
import { useState } from "react";

const categories = ["Tüm Ürünler", "SCREEN", "BATTERY", "ACCESSORY", "MOTHERBOARD", "DEVICE_NEW", "DEVICE_2ND_HAND"];

interface POSClientProps {
  initialProducts: Product[];
}

export default function POSClient({ initialProducts }: POSClientProps) {
  const { items, addItem, removeItem, updateQuantity, total } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState("Tüm Ürünler");

  const filteredProducts = selectedCategory === "Tüm Ürünler"
    ? initialProducts
    : initialProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Catalog */}
        <section className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar gap-8">
          {/* Header & Filter */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Kasa Açık • İstasyon 01</span>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  className="w-full pl-12 pr-12 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none text-sm font-bold"
                  placeholder="Ürün ara, IMEI veya barkod tara..."
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:scale-110 transition-transform">
                  <Scan className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all",
                    selectedCategory === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-blue-400"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => addItem({ id: p.id, name: p.name, price: p.salePrice, quantity: 1, type: 'product' })}
                className="group bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 cursor-pointer"
              >
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                  <Wrench className="w-12 h-12 text-slate-200 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-black px-2 py-1 rounded-lg shadow-lg">
                    {p.stock} STOKTA
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{p.category}</span>
                  <h3 className="font-bold leading-tight line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black tracking-tighter">{p.salePrice.toLocaleString('tr-TR')} ₺</span>
                    <button className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center text-slate-400 italic font-bold">Bu kategoride satışa uygun ürün bulunamadı.</div>
            )}
          </div>
        </section>

        {/* Right Side: Cart */}
        <section className="w-[450px] bg-white dark:bg-slate-900 shadow-2xl flex flex-col border-l border-slate-100 dark:border-slate-800 z-10">
          {/* Customer Selection */}
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Müşteri Profili</label>
            <div className="relative group">
              <UserSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none text-sm font-bold shadow-sm"
                placeholder="Müşteri ara veya ekle..."
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:scale-110 transition-transform">
                <UserPlus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6 custom-scrollbar">
            <div className="flex justify-between items-end">
              <h3 className="text-lg font-black tracking-tight uppercase tracking-widest">Mevcut Sipariş</h3>
              <span className="text-[10px] font-black text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-lg">{items.length} KALEM</span>
            </div>

            <div className="flex flex-col gap-4">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center py-20 opacity-20">
                  <Receipt className="w-20 h-20 mb-4" />
                  <p className="font-black uppercase tracking-widest text-sm text-center">Sepet boş</p>
                </div>
              ) : items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 group animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-blue-500"><Wrench className="w-8 h-8" /></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-black leading-tight truncate pr-2">{item.name}</h4>
                      <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 rounded-xl px-2 py-1 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-400 hover:text-blue-600"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-400 hover:text-blue-600"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="font-black text-lg tracking-tighter">{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Footer */}
          <div className="p-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-400 uppercase tracking-widest">Ara Toplam</span>
                <span className="font-black">{total().toLocaleString('tr-TR')} ₺</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-400 uppercase tracking-widest">İndirimler</span>
                <button className="text-blue-600 hover:underline flex items-center gap-1 uppercase tracking-tighter"><Tag className="w-3 h-3" /> Kod Uygula</button>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span className="text-base font-black uppercase tracking-widest">Toplam Tutar</span>
                <span className="text-3xl font-black tracking-tighter">{total().toLocaleString('tr-TR')} ₺</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Nakit", icon: Banknote },
                { label: "Kart", icon: CreditCard, active: true },
                { label: "Havale", icon: Receipt },
                { label: "Parçalı", icon: ArrowLeftRight },
              ].map((m) => (
                <button
                  key={m.label}
                  className={cn(
                    "flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all group active:scale-95",
                    m.active ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-blue-400"
                  )}
                >
                  <m.icon className={cn("w-6 h-6 mb-2 transition-transform group-hover:scale-110", m.active ? "text-white" : "text-slate-400")} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{m.label}</span>
                </button>
              ))}
            </div>

            <button className="w-full py-5 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
              <Receipt className="w-6 h-6" />
              İşlemi Tamamla
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
