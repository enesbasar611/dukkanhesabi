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
  ChevronDown,
  History,
  X,
  PlusCircle,
  CheckCircle,
  Tag as Sell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/hooks/use-cart";
import { useState } from "react";

const categories = ["Tüm Ürünler", "Aksesuarlar", "Yedek Parçalar", "Yeni Telefonlar", "2. El", "Tamir Servisi"];

const products = [
  {
    id: "gpu-refurb",
    name: "GPU Yenileme",
    desc: "Derin temizlik, termal macun değişimi ve stres testi.",
    cat: "Servis",
    price: 129.00,
    stock: 99,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACU3MYcncu_dhHeJmagcSKptPcErHkuXjJnXaBXVIbTaHoSGqkKDjnCw1SXzwlppI1YWFsXfg7nyuPy4_kN2BbkYSa2E_A6pnmN1gr2No2Yzvs2IYcMYJlJkLX8kyo9ya0S-dv_asfe1WUsZ2iYjGm_qXyx8QPcSjngxSb6GJPZGL9zmsgn1s4qQjxHafi2f557sftqNiGcTy9n_Klo85n4kNT8Z9gZIJvYddTeWeImw_Vj8ldvmBGkc3lCV6yIp8PxPxDJxLWADw",
    featured: true
  },
  {
    id: "screen-repair",
    name: "Ekran Tamiri",
    cat: "Servis",
    price: 85.00,
    stock: 99,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2rSJDkwNhbIk1T6IY33aScJGyMle99Ci07KVosbOIM8D3J3yZt8ZQTOvgeAbDBzJEsSf0ncFRbxbv_oDf8tUgTSsnj8qjy8SL8w3uoYVRJId58JKQ8LGM0Ts-HUVBptlp704-WZfTSDGqMYrJOr4X2TDkGDgmElGqTM9caUPPN5ff0DRx3l39RNb7VFPjbPivIYuODUFPH1Ic_ocDUhyCXpTMMNEq_xLj2_UGrSHwhHsZIKmqrL3D8a1HLJ3Q4ehZD43E6qQRG10"
  },
  {
    id: "diag",
    name: "Arıza Tespiti",
    cat: "Servis",
    price: 45.00,
    stock: 99,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMMoGeiR8NNOWTSIkjM_2hlWJhg6AJMCXMWk2ffZ5dQVNBjedYC5boDMKlzxUrVILu1OMavttJJI4DDawgh95hfJH1a4jUEnOln05W3Dkd2p-XPREDZrEhgIh6TfS1KmZM8RToehIU4AJomr8AbfDrZwXO167Mx2yHaIuOKaR9R5bWm5VyLbMIG_1m4vLgzh0oLLQhhBXrzg6XCCvEsJC_L3ivB3uE3oLIZcPqQsqcu6BHjF_0vBVHJ9D8z40uj-n28hxFZbZHlPw"
  },
  { id: "batt", name: "Batarya Değişimi", cat: "Servis", price: 59.00, stock: 99 },
  { id: "os-install", name: "Yazılım Kurulumu", cat: "Servis", price: 75.00, stock: 99 },
];

export default function POSSystem() {
  const { items, addItem, removeItem, updateQuantity, total } = useCartStore();
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-950 overflow-hidden relative">
      {/* Main Content: Product Grid */}
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-950">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Satış Noktası (POS)</h1>
            <p className="text-slate-500">Kasa #04 • Terminal Alpha</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-slate-400 border border-slate-800 rounded-xl font-medium hover:bg-slate-800 transition-colors">
              <History className="w-4 h-4" /> Son İşlemler
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
              <Plus className="w-4 h-4" /> Yeni Satış
            </button>
          </div>
        </header>

        {/* Product Grid (Asymmetric Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              onClick={() => addItem({ id: p.id, name: p.name, price: p.price, quantity: 1, image: p.img, type: 'product' })}
              className={cn(
                "group bg-slate-900/50 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer",
                p.featured && "md:col-span-2 md:row-span-2 p-6"
              )}
            >
              {p.img ? (
                <div className={cn("bg-slate-950 rounded-xl mb-4 overflow-hidden relative", p.featured ? "h-64" : "aspect-square")}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ) : (
                <div className="aspect-square bg-slate-950 rounded-xl mb-4 flex items-center justify-center text-slate-700">
                  <Wrench className="w-12 h-12 opacity-20" />
                </div>
              )}

              <div className="space-y-1">
                <h3 className={cn("font-bold text-white", p.featured ? "text-xl" : "text-base")}>{p.name}</h3>
                {p.desc && <p className="text-slate-500 text-sm mb-4 line-clamp-2">{p.desc}</p>}
                <div className="flex justify-between items-center mt-auto">
                  <span className={cn("font-black text-blue-500", p.featured ? "text-2xl" : "text-lg")}>₺{p.price.toFixed(2)}</span>
                  <button className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Overlay / Drawer */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] ml-64 mt-16"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="fixed top-16 right-0 h-[calc(100vh-64px)] w-[440px] bg-slate-900 border-l border-slate-800 shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="px-8 pt-10 pb-6">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] text-blue-500 uppercase mb-1 block">Hızlı İşlem</span>
                  <h2 className="text-2xl font-extrabold tracking-tight text-white">Sepet Özeti</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                <input
                  className="w-full bg-slate-950 border-none focus:ring-1 focus:ring-blue-500 transition-all pl-12 pr-4 py-4 rounded-xl text-white placeholder:text-slate-600 shadow-inner"
                  placeholder="Ürün barkodu veya ismi..."
                  type="text"
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">
                  <Receipt className="w-20 h-20 mb-4" />
                  <p className="font-bold uppercase tracking-widest text-sm">Sepet Boş</p>
                </div>
              ) : items.map((item) => (
                <div key={item.id} className="group relative flex items-start gap-4 p-4 bg-slate-950 rounded-2xl transition-all border border-transparent hover:border-slate-800 hover:shadow-lg">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 flex-shrink-0 overflow-hidden border border-slate-800">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-blue-500/40">
                        <Wrench className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white truncate pr-2">{item.name}</h4>
                      <span className="font-bold text-white whitespace-nowrap">₺{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">S/N: 9823-TX-102</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center bg-slate-900 rounded-lg p-1 gap-4 border border-slate-800">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-bold w-4 text-center text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-rose-500 hover:underline text-xs font-semibold"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Discounts Area */}
              {items.length > 0 && (
                <div className="py-6 border-t border-slate-800 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-sm font-bold tracking-tight text-white">Uygulanan İndirimler</h5>
                    <button className="text-blue-500 text-xs font-bold uppercase tracking-wider hover:underline">+ Promo Ekle</button>
                  </div>
                  <div className="flex items-center justify-between bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <Tag className="text-emerald-500 w-4 h-4" />
                      <span className="text-sm font-medium text-emerald-500">İlk Servis İndirimi</span>
                    </div>
                    <span className="font-bold text-emerald-500">-₺15.00</span>
                  </div>
                </div>
              )}
            </div>

            {/* Checkout Summary */}
            <div className="bg-slate-950 p-8 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-slate-800">
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-slate-400">
                  <span className="text-sm">Ara Toplam</span>
                  <span className="font-medium text-white">₺{total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span className="text-sm">Vergi (8.5%)</span>
                  <span className="font-medium text-white">₺{(total() * 0.085).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white pt-4 border-t border-slate-800">
                  <span className="text-lg font-bold">Toplam Tutar</span>
                  <span className="text-2xl font-black text-blue-500">₺{(total() * 1.085 - 15).toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="flex flex-col items-center justify-center py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95">
                  <Banknote className="mb-1 text-slate-400 w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Nakit</span>
                </button>
                <button className="flex flex-col items-center justify-center py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95">
                  <CreditCard className="mb-1 text-slate-400 w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Kredi Kartı</span>
                </button>
              </div>

              {/* Complete Sale CTA */}
              <button className="w-full bg-gradient-to-br from-blue-600 to-blue-700 text-white py-5 rounded-2xl font-black text-lg tracking-tight shadow-xl shadow-blue-900/40 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Satışı Tamamla
                <CheckCircle className="w-6 h-6" fill="currentColor" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Floating Cart Button (if closed) */}
      {!isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 animate-bounce"
        >
          <Receipt className="w-8 h-8" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-950">
              {items.length}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
