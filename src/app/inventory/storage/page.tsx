"use client";

import {
  Package,
  Layers,
  AlertCircle,
  Zap,
  Plus,
  Printer,
  ArrowLeftRight,
  Smartphone,
  Filter,
  CheckCircle2,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const unitA_Slots = [
  { id: "A1", type: "screen", status: "full" },
  { id: "A2", type: "screen", status: "full", highlighted: true },
  { id: "A3", type: "screen", status: "low" },
  { id: "A4", type: "empty" },
  { id: "A5", type: "screen", status: "full" },
  { id: "A6", type: "empty", status: "restricted" },
  { id: "A7", type: "screen", status: "full" },
  { id: "A8", type: "screen", status: "full" },
];

export default function StorageUnits() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-100 pb-32">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-white">Depo Birimleri</h1>
          <p className="text-slate-500 mt-1">Donanım depolama alanlarının interaktif fiziksel haritası.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 shadow-xl">
            <button className="px-5 py-2 text-xs font-black bg-blue-600 text-white rounded-lg shadow-sm uppercase tracking-tighter">Ana Depo</button>
            <button className="px-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-300 uppercase tracking-tighter transition-colors">Ön Banko</button>
            <button className="px-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-300 uppercase tracking-tighter transition-colors">Teknik Oda</button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Ürün", value: "14.282", trend: "+12%", icon: Package, color: "text-blue-500", progress: 75 },
          { label: "Boş Slotlar", value: "24", sub: "/ 450", icon: Layers, color: "text-red-500", error: true },
          { label: "Düşük Stok", value: "18", sub: "İşlem gerekli", icon: AlertCircle, color: "text-amber-500" },
          { label: "Devir Hızı", value: "4.2", sub: "gün ort.", icon: Zap, color: "text-emerald-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className="w-24 h-24" />
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white tracking-tighter">{stat.value}</span>
              {stat.trend && <span className="text-xs font-bold text-emerald-400">{stat.trend}</span>}
              {stat.sub && <span className="text-xs font-bold text-slate-500">{stat.sub}</span>}
            </div>
            <div className="mt-4 flex gap-1 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              {stat.error ? <div className="h-full bg-red-500 w-1/4" /> : <div className={cn("h-full bg-blue-600")} style={{width: `${stat.progress}%`}} />}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Unit Mapping */}
        <div className="xl:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unit A */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-black text-slate-200 tracking-tight">Ünite A</h3>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Ana Ekran Deposu</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 font-black border border-emerald-500/20 uppercase">Optimal</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {unitA_Slots.map((slot) => (
                  <div
                    key={slot.id}
                    className={cn(
                      "aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group",
                      slot.type === 'empty' ? "bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50" :
                      slot.status === 'low' ? "bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 shadow-lg shadow-amber-900/10" :
                      "bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 shadow-lg shadow-blue-900/10",
                      slot.highlighted && "ring-4 ring-blue-600/50 border-white border-2"
                    )}
                  >
                    <span className={cn(
                      "text-[10px] font-black mb-1",
                      slot.type === 'empty' ? "text-slate-600" :
                      slot.status === 'low' ? "text-amber-500" : "text-blue-400"
                    )}>{slot.id}</span>
                    {slot.type === 'screen' ? <Smartphone className={cn("w-5 h-5", slot.status === 'low' ? "text-amber-500" : "text-blue-500")} /> :
                     slot.type === 'empty' ? <Plus className="w-5 h-5 text-slate-700 group-hover:text-slate-400" /> : null}
                    {slot.status === 'restricted' && <X className="w-5 h-5 text-red-600" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Unit B Mock */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-black text-slate-200 tracking-tight">Ünite B</h3>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Batarya & Enerji</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-500 font-black border border-amber-500/20 uppercase">Dikkat</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {unitA_Slots.map((slot) => (
                  <div key={`B-${slot.id}`} className="aspect-square rounded-2xl bg-slate-800/20 border border-slate-800/50 flex flex-col items-center justify-center opacity-40">
                    <span className="text-[8px] font-black text-slate-700">B{slot.id.slice(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Shelf Contents */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 flex items-center justify-between border-b border-slate-800 bg-slate-900/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black shadow-xl">A2</div>
                <div>
                  <h3 className="font-bold text-white">Raf İçeriği: Ünite A - Slot 2</h3>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Ekran Montaj Deposu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-tighter">
                  <Printer className="w-4 h-4" /> Etiketler
                </button>
                <button className="flex items-center gap-2 px-5 py-2 text-xs font-black text-blue-400 bg-blue-600/10 rounded-xl hover:bg-blue-600/20 transition-all border border-blue-500/20 uppercase tracking-tighter">
                  <ArrowLeftRight className="w-4 h-4" /> Öğeleri Taşı
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-800/50 bg-slate-950/30">
                    <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Ürün Adı</th>
                    <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Kategori</th>
                    <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Stok Seviyesi</th>
                    <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    { name: "iPhone 14 OLED Panel", sku: "SKU-IP14-OL-BK", cat: "Ekranlar", qty: 42, max: 50, status: "Optimal", color: "text-emerald-500", bg: "bg-emerald-500" },
                    { name: "iPhone 13 Ön Kamera", sku: "SKU-IP13-FC-01", cat: "Modüller", qty: 4, max: 15, status: "Düşük Stok", color: "text-amber-500", bg: "bg-amber-500" },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-200">{item.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5 tracking-tighter">{item.sku}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 text-[10px] font-black uppercase">{item.cat}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-baseline gap-1">
                          <span className={cn("font-black", item.color)}>{item.qty}</span>
                          <span className="text-[10px] text-slate-600 font-bold">/ {item.max}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn("flex items-center gap-1.5 font-black text-[10px] uppercase tracking-widest", item.color)}>
                          <span className={cn("w-1.5 h-1.5 rounded-full shadow-sm", item.bg)}></span>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Filters/AI Sidebar */}
        <div className="xl:col-span-4 space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <h3 className="font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter text-sm">
              <Filter className="w-4 h-4 text-blue-500" />
              Envanter Filtreleri
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block">Uyumluluk</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-300 focus:ring-2 focus:ring-blue-600/50 appearance-none outline-none transition-all">
                  <option>Tüm Üreticiler</option>
                  <option>Apple</option>
                  <option>Samsung</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block">Stok Eşiği</label>
                <div className="flex items-center gap-4">
                  <input type="range" className="flex-1 accent-blue-600 h-1.5 bg-slate-800 rounded-full cursor-pointer" />
                  <span className="text-xs font-black font-mono text-blue-500">20%</span>
                </div>
              </div>
              <button className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all border border-slate-700 shadow-lg shadow-black/50 active:scale-95">
                Analizi Uygula
              </button>
            </div>
          </div>

          {/* AI RESTOCK */}
          <div className="bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-black tracking-tight text-white">Akıllı Tedarik</h3>
              </div>
              <p className="text-xs text-blue-200/70 mb-8 leading-relaxed font-medium">Circuit Pro AI, son tamir hacmine göre 4 ürünün kritik seviyeye yaklaştığını tespit etti.</p>
              <div className="space-y-4 mb-8">
                {[
                  { name: "iP12 Batarya", eta: "2 gün kaldı" },
                  { name: "S21 Ekran Seti", eta: "Kritik: 2 kaldı", danger: true }
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <AlertCircle className={cn("w-4 h-4", r.danger ? "text-red-500" : "text-amber-500")} />
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest">{r.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold">{r.eta}</p>
                      </div>
                    </div>
                    <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Sipariş</button>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-2xl shadow-blue-900/50">
                Tam Rapor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
