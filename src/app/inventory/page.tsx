"use client";

import {
  Filter,
  Plus,
  FileUp,
  Smartphone,
  BatteryCharging,
  Cable,
  Edit,
  PlusCircle,
  History,
  ChevronLeft,
  ChevronRight,
  X,
  Save,
  Barcode,
  MapPin,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const stockItems = [
  {
    name: "iPhone 13 OLED Ekran",
    category: "Ekran Paneli",
    barcode: "8690012234",
    models: ["iPhone 13", "iPhone 13 Pro"],
    stock: 4,
    location: "A-12 / D-04",
    buyPrice: "₺1.850.00",
    sellPrice: "₺3.400.00",
    status: "critical",
    icon: Smartphone
  },
  {
    name: "Samsung S22 Ultra Batarya",
    category: "Batarya",
    barcode: "8690045512",
    models: ["Samsung S22 Ultra"],
    stock: 28,
    location: "B-04 / D-01",
    buyPrice: "₺620.00",
    sellPrice: "₺1.200.00",
    status: "optimal",
    icon: BatteryCharging
  },
  {
    name: "Xiaomi 67W Hızlı Şarj Başlığı",
    category: "Aksesuar",
    barcode: "8690078823",
    models: ["Evrensel Type-C"],
    stock: 8,
    location: "C-02 / D-05",
    buyPrice: "₺450.00",
    sellPrice: "₺950.00",
    status: "warning",
    icon: Cable
  }
];

export default function InventoryManagement() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen relative">
      {/* Background Content */}
      <div className={cn("space-y-8 transition-all duration-300", isAddModalOpen && "blur-md pointer-events-none opacity-40")}>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">Envanter Genel Bakış</span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Stok ve Ürün Yönetimi</h1>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
          >
            Yeni Ürün Ekle
          </button>
        </div>

        {/* Summary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "TOPLAM STOK DEĞERİ", value: "₺482.500,00", trend: "+12%", color: "text-blue-600", bg: "bg-blue-500/10" },
            { label: "STOKTA OLMAYANLAR", value: "14 Kalem", color: "text-red-600", bg: "bg-red-500/10" },
            { label: "KRİTİK UYARILAR", value: "32 Kalem", color: "text-amber-600", bg: "bg-amber-500/10" },
            { label: "HAFTALIK GELENLER", value: "128 Adet", color: "text-emerald-600", bg: "bg-emerald-500/10" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-2 rounded-xl", stat.bg)}>
                  <Plus className={cn("w-5 h-5", stat.color)} />
                </div>
                {stat.trend && <span className="text-[10px] font-black bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-lg">{stat.trend}</span>}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-black mt-1 text-white">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Data Table */}
        <div className="bg-slate-900 rounded-3xl shadow-sm overflow-hidden border border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">Ürün Bilgisi</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">Uyumluluk</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800 text-center">Stok</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">Konum</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">Satış Fiyatı</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {stockItems.map((item, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center text-blue-500">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white leading-tight">{item.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">{item.category} • {item.barcode}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1">
                      {item.models.map(m => (
                        <span key={m} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-lg">{m}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className={cn(
                        "text-sm font-black",
                        item.status === 'critical' ? "text-red-500" : item.status === 'warning' ? "text-amber-500" : "text-emerald-500"
                      )}>{item.stock} Adet</span>
                      <div className="w-20 h-1.5 bg-slate-950 rounded-full overflow-hidden shadow-inner">
                        <div className={cn(
                          "h-full rounded-full transition-all",
                          item.status === 'critical' ? "bg-red-500 w-1/4" : item.status === 'warning' ? "bg-amber-500 w-1/2" : "bg-emerald-500 w-3/4"
                        )}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-slate-950 text-slate-400 text-[10px] font-black rounded-lg border border-slate-800">{item.location}</span>
                  </td>
                  <td className="px-6 py-5 text-sm font-black text-blue-500">{item.sellPrice}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-xl transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-emerald-500/10 text-emerald-400 rounded-xl transition-colors"><PlusCircle className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-slate-800 text-slate-500 rounded-xl transition-colors"><History className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL OVERLAY: ADD STOCK */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <div className="bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-800">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between bg-slate-800/50">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">Yeni Stok Ekle</h3>
                <p className="text-sm text-slate-500">Atölye envanterini yeni teknik parçalarla güncelleyin</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors text-slate-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <form className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Row 1: Category & Brand */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Ürün Kategorisi</label>
                  <select className="w-full bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none cursor-pointer appearance-none">
                    <option>Yedek Parça</option>
                    <option>Aksesuar</option>
                    <option>Telefon / Cihaz</option>
                    <option>Sarf Malzeme</option>
                    <option>Özel Ekipman</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Marka</label>
                  <input className="w-full bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="Örn: Samsung, Apple, iFixit" type="text" />
                </div>
              </div>

              {/* Row 2: Product Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Ürün Adı</label>
                <input className="w-full bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="OLED Ekran Paneli - Çerçeveli" type="text" />
              </div>

              {/* Row 3: Compatibility Tags */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Model Uyumluluğu</label>
                <div className="bg-slate-950 p-4 rounded-xl flex flex-wrap gap-2 border border-slate-800">
                  <div className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2">
                    iPhone 13 Pro <X className="w-3 h-3 cursor-pointer" />
                  </div>
                  <div className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2">
                    iPhone 13 <X className="w-3 h-3 cursor-pointer" />
                  </div>
                  <button className="border border-dashed border-slate-700 text-slate-500 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-slate-800 transition-colors" type="button">
                    <Plus className="w-3 h-3" /> Model Ekle
                  </button>
                </div>
              </div>

              {/* Row 4: Pricing & Quantity */}
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Adet</label>
                  <div className="relative">
                    <input className="w-full bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" type="number" defaultValue="1" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                      <ChevronUp className="w-3 h-3 text-slate-600 cursor-pointer hover:text-blue-500" />
                      <ChevronDown className="w-3 h-3 text-slate-600 cursor-pointer hover:text-blue-500" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Alış Fiyatı</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-medium text-sm">₺</span>
                    <input className="w-full bg-slate-950 border-none rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="0.00" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Satış Fiyatı</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-medium text-sm">₺</span>
                    <input className="w-full bg-slate-950 border-none rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="0.00" type="text" />
                  </div>
                </div>
              </div>

              {/* Row 5: Storage & Barcode */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Raf / Stok Konumu</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
                    <input className="w-full bg-slate-950 border-none rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="A1-R4-B12" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Barkod / SKU</label>
                  <div className="relative">
                    <Barcode className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
                    <input className="w-full bg-slate-950 border-none rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500/30 transition-all text-white outline-none" placeholder="Tarayın veya girin" type="text" />
                  </div>
                </div>
              </div>
            </form>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-slate-800/50 flex items-center justify-end gap-4 border-t border-slate-800">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-6 py-2.5 text-slate-400 font-semibold hover:bg-slate-800 rounded-xl transition-all"
              >
                İptal
              </button>
              <button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-10 py-2.5 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 active:scale-95 transition-all flex items-center gap-2">
                <Save className="w-5 h-5" />
                Ürünü Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
