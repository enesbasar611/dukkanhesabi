"use client";

import React from "react";
import {
  CreditCard,
  Banknote,
  ArrowLeftRight,
  Receipt,
  Landmark,
  TrendingUp,
  Wrench,
  ShoppingCart,
  Plus,
  Minus,
  Lock,
  Printer,
  Info,
  Calculator,
  ArrowDownLeft,
  ArrowUpRight,
  MoreVertical,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const breakdown = [
  { label: "Nakit", val: "7.200 ₺", icon: Banknote, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Kredi Kartı", val: "5.800 ₺", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Havale/EFT", val: "1.500 ₺", icon: Landmark, color: "text-purple-500", bg: "bg-purple-50" },
];

const transactions = [
  { time: "17:45", type: "Tamir Teslim", icon: Wrench, desc: "iPhone 13 Ekran Değişimi", method: "Kredi Kartı", amount: "2.400 ₺", color: "text-blue-500", bg: "bg-blue-50" },
  { time: "17:20", type: "Satış", icon: ShoppingCart, desc: "Samsung Galaxy Buds 2 Pro", method: "Nakit", amount: "3.100 ₺", color: "text-amber-500", bg: "bg-amber-50" },
  { time: "16:55", type: "Gider", icon: ArrowUpRight, desc: "Teknik Servis Parça Alımı", method: "Havale", amount: "1.200 ₺", color: "text-red-500", bg: "bg-red-50" },
];

export default function DailyClosurePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-8 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black tracking-tighter text-blue-500 uppercase">TechAtelier POS</span>
          <div className="h-6 w-px bg-slate-800"></div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-white leading-tight">Günlük Kasa Kapanış Raporu</h1>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">24 Mayıs 2024 • Kasa 01</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-black uppercase tracking-widest hover:bg-slate-700 transition-all active:scale-95">
            <Printer className="w-4 h-4" /> Raporu Yazdır
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-red-600/10 text-red-500 text-xs font-black uppercase tracking-widest hover:bg-red-600/20 transition-all active:scale-95 border border-red-500/20">
            <Lock className="w-4 h-4" /> Kasayı Kapat
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto space-y-8 pb-32">
        {/* Summary Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-40 group hover:border-blue-500/30 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Toplam Gelir</span>
              <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500"><TrendingUp className="w-4 h-4" /></div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white tracking-tighter">14.500 ₺</h3>
              <div className="flex justify-between text-[10px] font-bold mt-2 text-slate-500">
                <span>TAMİR: 8.500 ₺</span>
                <span>SATIŞ: 6.000 ₺</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Toplam Gider</span>
              <div className="p-2 bg-red-500/10 rounded-xl text-red-500"><ArrowUpRight className="w-4 h-4" /></div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-red-500 tracking-tighter">1.200 ₺</h3>
              <p className="text-[9px] text-slate-600 font-bold uppercase mt-2">Parça alımı ve teknik sarf.</p>
            </div>
          </div>

          <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Beklenen Nakit</span>
              <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400"><Landmark className="w-4 h-4" /></div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white tracking-tighter">13.300 ₺</h3>
              <div className="flex items-center gap-1.5 text-[9px] font-bold mt-2 text-blue-400/60 uppercase">
                <Info className="w-3 h-3" /> Sistem kayıtlı net bakiye
              </div>
            </div>
          </div>

          <div className="bg-emerald-600/5 border border-emerald-500/20 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Sayım Farkı</span>
              <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500"><Plus className="w-4 h-4" /></div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-emerald-400 tracking-tighter">+50 ₺</h3>
              <div className="inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase mt-2 tracking-widest">
                Fazla Tespit Edildi
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Methods & Counting */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] px-2">Ödeme Yöntemleri Dağılımı</h4>
            <div className="space-y-3">
              {breakdown.map((b, i) => (
                <div key={i} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-slate-600 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110", b.bg, b.color)}>
                      <b.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-300">{b.label}</span>
                  </div>
                  <span className="text-xl font-black text-white tracking-tighter">{b.val}</span>
                </div>
              ))}
            </div>

            {/* Cash Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8 shadow-inner">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-5 h-5 text-blue-500" />
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Fiziksel Kasa Sayımı</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "200 ₺ x Adet", val: 20 },
                  { label: "100 ₺ x Adet", val: 25 },
                  { label: "50 ₺ x Adet", val: 14 },
                  { label: "Bozuk Para", val: 50 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-[9px] text-slate-500 font-black uppercase tracking-widest ml-1">{item.label}</label>
                    <input className="w-full bg-slate-800 border-none rounded-xl py-3 px-4 text-sm font-black text-white focus:ring-2 focus:ring-blue-600 transition-all outline-none" type="number" defaultValue={item.val}/>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-900/40 active:scale-[0.98]">
                Gün Sonunu Onayla
              </button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
              <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Son İşlem Hareketleri</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                  <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Canlı Kayıtlar</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-600 uppercase tracking-widest border-b border-slate-800/50">
                      <th className="px-8 py-5">Saat</th>
                      <th className="px-8 py-5">Tür</th>
                      <th className="px-8 py-5">Açıklama</th>
                      <th className="px-8 py-5">Ödeme</th>
                      <th className="px-8 py-5 text-right">Tutar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/30">
                    {transactions.map((t, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-8 py-6 text-slate-500 text-xs font-bold">{t.time}</td>
                        <td className="px-8 py-6">
                          <span className={cn("px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter", t.bg, t.color)}>
                            {t.type}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-slate-300 text-sm font-bold truncate max-w-[200px]">{t.desc}</td>
                        <td className="px-8 py-6 text-slate-500 text-xs font-medium uppercase tracking-widest">{t.method}</td>
                        <td className="px-8 py-6 text-right font-black text-white tracking-tighter text-base">{t.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 border-t border-slate-800 flex justify-center bg-slate-950/20">
                <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline decoration-2 transition-all">Tüm Günlük Hareketleri Gör</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
