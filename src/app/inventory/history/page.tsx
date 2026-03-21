"use client";

import React from "react";
import {
  History,
  ArrowDownLeft,
  ArrowUpRight,
  ArrowLeftRight,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Eye,
  Cpu,
  Battery,
  Cable,
  Settings2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Bugünkü Giriş", val: "124", unit: "Adet", trend: "+12%", trendType: "pos", icon: ArrowDownLeft, color: "text-emerald-600" },
  { label: "Bugünkü Çıkış", val: "86", unit: "Adet", trend: "-5%", trendType: "neg", icon: ArrowUpRight, color: "text-red-600" },
  { label: "Transferler", val: "42", unit: "İşlem", trend: "Sabit", trendType: "neutral", icon: ArrowLeftRight, color: "text-blue-600" },
  { label: "Kritik Stok", val: "12", unit: "Kalem", tag: "Dikkat", icon: AlertTriangle, color: "text-orange-600" },
];

const history = [
  { date: "14.05.2024", time: "14:32:05", type: "Giriş", icon: ArrowDownLeft, product: "iPhone 14 Pro Ekran", id: "PAR-9902", staff: "Ahmet Yılmaz", qty: "+24", prev: 12, next: 36, note: "Tedarikçi: Apple Global", typeColor: "text-emerald-600", bg: "bg-emerald-50" },
  { date: "14.05.2024", time: "12:15:44", type: "Çıkış", icon: ArrowUpRight, product: "Galaxy S23 Ultra Batarya", id: "PAR-4421", staff: "Mehmet Demir", qty: "-2", prev: 45, next: 43, note: "İş Emri: #44012", typeColor: "text-red-600", bg: "bg-red-50" },
  { date: "14.05.2024", time: "09:10:22", type: "Transfer", icon: ArrowLeftRight, product: "USB-C Şarj Kartı", id: "PAR-1102", staff: "Sistem / Admin", qty: "5", prev: 100, next: 95, note: "Depo A -> Depo B", typeColor: "text-blue-600", bg: "bg-blue-50" },
  { date: "13.05.2024", time: "17:55:00", type: "Sayım Farkı", icon: History, product: "Vida Seti (Karma)", id: "MIS-001", staff: "Caner Öz", qty: "-15", prev: 500, next: 485, note: "Aylık Rutin Sayım", typeColor: "text-slate-600", bg: "bg-slate-100" },
];

export default function StockHistoryPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 mb-1 block">Sistem Kayıtları</span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Stok Hareket Geçmişi</h1>
          <p className="text-slate-500 text-sm mt-1 max-w-lg font-medium">Depo içerisindeki tüm parça giriş, çıkış ve transfer hareketlerinin kronolojik dökümü.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-4 h-4 mr-2" /> Dışa Aktar
          </button>
          <button className="flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all active:scale-95">
            <Filter className="w-4 h-4 mr-2" /> Gelişmiş Filtrele
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
              <s.icon className="w-24 h-24" />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
            <div className="flex items-end justify-between relative z-10">
              <span className={cn("text-3xl font-black tracking-tighter text-slate-900 dark:text-white")}>{s.val} <small className="text-xs font-bold text-slate-400">{s.unit}</small></span>
              {s.trend && (
                <span className={cn(
                  "text-[10px] font-black px-2 py-0.5 rounded-full",
                  s.trendType === 'pos' ? "bg-emerald-50 text-emerald-600" :
                  s.trendType === 'neg' ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                )}>{s.trend}</span>
              )}
              {s.tag && <span className="text-[10px] font-black bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">{s.tag}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 ml-2" />
          <input className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full" placeholder="Hareketlerde ara..." />
        </div>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
        <div className="flex items-center gap-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">İşlem Türü:</label>
          <select className="bg-white dark:bg-slate-950 border-none rounded-xl text-xs font-bold py-2 px-4 focus:ring-2 focus:ring-blue-500/20 shadow-sm outline-none">
            <option>Tüm Hareketler</option>
            <option>Giriş</option>
            <option>Çıkış</option>
            <option>Transfer</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Tarih / Saat</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">İşlem Türü</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Ürün Adı</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Personel</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Miktar</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">Durum</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{row.date}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-tighter">{row.time}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-tighter border",
                      row.type === 'Giriş' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                      row.type === 'Çıkış' ? "bg-red-50 text-red-600 border-red-100" :
                      row.type === 'Transfer' ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-100 text-slate-600 border-slate-200"
                    )}>
                      <row.icon className="w-3 h-3 mr-1.5" /> {row.type}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-900 dark:text-white leading-tight">{row.product}</span>
                      <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">ID: {row.id}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-600 dark:text-slate-300">{row.staff}</td>
                  <td className={cn("px-8 py-6 text-sm font-black tracking-tighter", row.qty.startsWith('+') ? "text-emerald-600" : "text-red-600")}>{row.qty}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-black">
                      <span className="text-slate-400">{row.prev}</span>
                      <ArrowLeftRight className="w-3 h-3 text-slate-200" />
                      <span className="text-blue-600">{row.next}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-slate-300 group-hover:text-blue-600 transition-all shadow-sm">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950/50 px-8 py-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Toplam 1,248 kayıt arasından 1-4 gösteriliyor</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 transition-all"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs">1</button>
            <button className="w-8 h-8 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-500 font-bold text-xs transition-all">2</button>
            <button className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 transition-all"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
