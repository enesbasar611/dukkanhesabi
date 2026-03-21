"use client";

import {
  FileUp,
  Trash2,
  Barcode,
  Plus,
  Save,
  Scan,
  Database,
  CreditCard,
  LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "01", barcode: "123456789", name: "iPhone 14 Pro Ekran - OEM", category: "Yedek Parça", model: "iPhone 14 Pro", shelf: "A-12", qty: 10, buy: "₺1.450,00", sell: "₺2.200,00", profit: "51%" },
  { id: "02", barcode: "987654321", name: "Samsung S23 Batarya", category: "Yedek Parça", model: "S23 Ultra", shelf: "B-04", qty: 25, buy: "₺450,00", sell: "₺750,00", profit: "66%" },
];

export default function BulkStockEntry() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      {/* Page Header */}
      <section className="px-8 pt-8 pb-6 flex justify-between items-end">
        <div>
          <nav className="flex text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2">
            <span>Envanter</span>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-400">Toplu Stok Girişi</span>
          </nav>
          <h2 className="text-3xl font-extrabold tracking-tighter text-white">Toplu Stok Girişi</h2>
          <p className="text-slate-400 text-sm mt-1">Envanterinizi hızla güncelleyin ve yeni parçaları sisteme dahil edin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 transition-colors group">
            <FileUp className="w-4 h-4 group-hover:text-blue-400" />
            CSV İçe Aktar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 transition-colors group text-red-400 hover:text-red-300">
            <Trash2 className="w-4 h-4" />
            Tümünü Temizle
          </button>
        </div>
      </section>

      {/* Bulk Entry Table */}
      <div className="px-8 flex-1 overflow-auto no-scrollbar pb-32">
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/50 overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900 sticky top-0 z-10 border-b border-slate-800">
              <tr>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 w-12 text-center">#</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 min-w-[160px]">Barkod</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 min-w-[240px]">Ürün Adı</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Kategori</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Uyumluluk</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Raf</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 w-24 text-center">Adet</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Alış Fiyatı</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Satış Fiyatı</th>
                <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Kar %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/20 transition-colors group">
                  <td className="px-4 py-3 text-xs text-slate-600 font-mono text-center">{item.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Barcode className="w-4 h-4 text-slate-500" />
                      <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 p-0 w-full" type="text" defaultValue={item.barcode} />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 p-0 w-full font-semibold" type="text" defaultValue={item.name} />
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-wide border border-blue-500/20">{item.category}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">{item.model}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{item.shelf}</td>
                  <td className="px-4 py-3">
                    <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 p-0 w-12 text-center font-bold" type="number" defaultValue={item.qty} />
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-200 font-bold">{item.buy}</td>
                  <td className="px-4 py-3 text-sm text-blue-400 font-black">{item.sell}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-xs font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">{item.profit}</span>
                  </td>
                </tr>
              ))}
              {/* Empty Row */}
              <tr className="hover:bg-slate-800/20 transition-colors bg-blue-500/5">
                <td className="px-4 py-3 text-xs text-slate-700 font-mono text-center">03</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 relative group">
                    <Scan className="w-4 h-4 text-blue-500 animate-pulse" />
                    <input className="bg-slate-800/50 border border-blue-500/30 rounded-lg px-2 py-1 focus:ring-1 focus:ring-blue-500 text-xs text-slate-200 w-full placeholder-slate-600 transition-all outline-none" placeholder="Barkod okutun..." type="text" />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-500 p-0 w-full italic" placeholder="Ürün adı girin..." type="text" />
                </td>
                <td className="px-4 py-3" colSpan={7}>
                  <button className="text-xs font-black text-slate-500 hover:text-blue-500 flex items-center gap-2 uppercase tracking-tighter transition-colors">
                    <Plus className="w-4 h-4" /> Satır Ekle
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Floating Metrics */}
        <div className="mt-8 flex gap-6">
          {[
            { label: "Bekleyen Ürünler", value: "35", unit: "Adet", icon: Database, color: "text-blue-500", bg: "bg-blue-500/10" },
            { label: "Toplam Maliyet", value: "₺25.750,00", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { label: "Tahmini Kar", value: "₺14.250,00", icon: LineChart, color: "text-amber-500", bg: "bg-amber-500/10" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1 shadow-sm">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", m.bg)}>
                <m.icon className={cn("w-6 h-6", m.color)} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{m.label}</p>
                <p className="text-2xl font-black text-white">{m.value} {m.unit && <span className="text-xs font-medium text-slate-400">{m.unit}</span>}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <footer className="fixed bottom-0 left-64 right-0 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 p-6 z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Sistem Durumu</span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <span className="text-xs font-bold text-slate-300">Okuyucu Aktif: COM4</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500">Hatalar</p>
                <p className="text-sm font-bold text-red-400">0</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500">Doğrulandı</p>
                <p className="text-sm font-bold text-slate-200">2 Yeni Kayıt</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-xs font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Vazgeç</button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-3 rounded-2xl shadow-xl shadow-blue-900/30 transition-all active:scale-95 flex items-center gap-3 text-sm">
              <Save className="w-5 h-5" />
              Envantere Kaydet
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
