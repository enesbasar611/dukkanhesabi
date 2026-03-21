"use client";

import React from "react";
import {
  Barcode,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Save,
  History as HistoryIcon,
  Search,
  Filter,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Scan
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Toplam Beklenen", val: "1,482", unit: "Adet", color: "text-slate-500" },
  { label: "Sayılan", val: "842", sub: "/ 1,482", progress: 56, color: "text-blue-600" },
  { label: "Tespit Edilen Fark", val: "-14", tag: "Kritik", color: "text-red-600" },
  { label: "Aktif Terminal", val: "Scanner-04", sub: "(Terminal)", color: "text-slate-900" },
];

const scanItems = [
  { loc: "RAF-A-012", barcode: "8690123456789", name: "Pro-Controller X1", cat: "Elektronik / Kontrol Ünitesi", system: 120, counted: 124, diff: "+4", diffType: "pos" },
  { loc: "RAF-A-042", barcode: "8681234900122", name: "Heatsink Module V3", cat: "Mekanik / Soğutma", system: 45, counted: 38, diff: "-7", diffType: "neg" },
  { loc: "RAF-B-001", barcode: "8699988776655", name: "Optical Sensor L-4", cat: "Elektronik / Sensör", system: 210, counted: 210, diff: "EŞLEŞTİ", diffType: "match" },
];

export default function PhysicalCountPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen pb-32">
      {/* Editorial Header */}
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 mb-1 block">Envanter Operasyonu</p>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Fiziksel Sayım Modülü</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 font-bold text-sm shadow-sm transition-all">
            <Save className="w-4 h-4" /> Taslağı Kaydet
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all active:scale-95 text-sm font-black uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4" /> Sayımı Onayla
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
            <div className="flex items-baseline gap-2">
              <span className={cn("text-3xl font-black tracking-tighter", s.color)}>{s.val}</span>
              {s.sub && <span className="text-[10px] font-bold text-slate-400">{s.sub}</span>}
              {s.unit && <span className="text-[10px] font-bold text-slate-400">{s.unit}</span>}
              {s.tag && <span className="text-[10px] font-black bg-red-50 text-red-600 px-2 py-0.5 rounded-full ml-auto">{s.tag}</span>}
            </div>
            {s.progress && (
              <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${s.progress}%` }}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Scanning Indicator */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-blue-500/20 shadow-lg flex items-center justify-between group overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -mr-32 -mt-32"></div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-500">
            <Scan className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Barkod Okutma Modu Aktif</h3>
            <p className="text-sm font-medium text-slate-500 italic">Sistem yeni girişleri Raf A için bekliyor...</p>
          </div>
        </div>
        <div className="flex gap-4 relative z-10">
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mevcut Raf</span>
            <span className="text-sm font-black tracking-widest text-slate-700 dark:text-slate-300">RAF-A-042</span>
          </div>
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Son Okutulan</span>
            <span className="text-sm font-black tracking-widest text-blue-600">8690123456789</span>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/30">
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-xl bg-white dark:bg-slate-800 font-black text-[10px] uppercase tracking-widest shadow-sm border border-slate-200 dark:border-slate-700 text-blue-600">Tümü</button>
            <button className="px-6 py-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-bold text-[10px] uppercase tracking-widest text-slate-400 transition-all">Raf A (342)</button>
            <button className="px-6 py-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-bold text-[10px] uppercase tracking-widest text-slate-400 transition-all">Raf B (128)</button>
          </div>
          <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
            <Filter className="w-4 h-4" /> Detaylı Filtrele
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">Raf Konumu</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">Barkod / Ürün</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800 text-center">Sistem</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">Sayılan Miktar</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800 text-right">Fark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {scanItems.map((item, i) => (
                <tr key={i} className={cn("group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors", item.diffType === 'neg' && "bg-red-50/30 dark:bg-red-900/5")}>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-tighter border border-slate-200 dark:border-slate-700">{item.loc}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-900 dark:text-white leading-tight">{item.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{item.barcode} • {item.cat}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center text-sm font-black text-slate-500">{item.system}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <input className="w-20 h-10 text-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-black focus:ring-2 focus:ring-blue-600 transition-all outline-none" type="number" defaultValue={item.counted}/>
                      <Edit className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 transition-colors cursor-pointer" />
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      item.diffType === 'pos' ? "bg-emerald-50 text-emerald-600" :
                      item.diffType === 'neg' ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-400 italic"
                    )}>
                      {item.diffType === 'pos' && <ArrowUp className="w-3 h-3" />}
                      {item.diffType === 'neg' && <ArrowDown className="w-3 h-3" />}
                      {item.diff}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Scanner Action */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4 z-50">
        <div className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          Okutmaya Hazır...
        </div>
        <button className="h-16 w-16 rounded-3xl bg-blue-600 text-white shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-90 transition-all flex items-center justify-center group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Scan className="w-8 h-8 relative z-10" />
        </button>
      </div>
    </div>
  );
}
