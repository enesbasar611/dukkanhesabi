"use client";

import React from "react";
import {
  Bell,
  Search,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Package,
  Truck,
  Wallet,
  UserSearch,
  MoreVertical,
  PlusCircle,
  ShieldCheck,
  Settings,
  HelpCircle,
  Phone,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  { id: 1, type: "Kritik Stok", msg: "iPhone 13 Ekran Paneli stoğu 3 adetin altına düştü.", sub: "Stok kodu: DISP-IP13-ORG. Acil tedarik gerekiyor.", time: "Şimdi", icon: Package, color: "text-red-600", bg: "bg-red-50", border: "border-red-600", urgent: true },
  { id: 2, type: "Teslimat Zamanı", msg: "Samsung S22 teslimat tarihi bugün.", sub: "Müşteri: Serkan Aydın. İşlem: Anakart Onarımı Tamamlandı.", time: "2 Saat Önce", icon: Truck, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-600" },
  { id: 3, type: "Finansal Gecikme", msg: "Ahmet Yılmaz'ın 1.250 TL ödemesi 3 gün geçti.", sub: "Veresiye Kaydı: #V-902. Son ödeme tarihi: 20 Mayıs.", time: "Dün", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-600", actions: ["Call"] },
  { id: 4, type: "Tamamlandı", msg: "Xiaomi Mi 11 Batarya Değişimi Onaylandı.", sub: "İşlem sıraya alındı ve teknisyene atandı.", time: "3 Gün Önce", icon: CheckCircle2, color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-300", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2 block">Sistem Durumu</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Bildirimler ve Hatırlatmalar</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all">Tümünü Temizle</button>
          <button className="px-8 py-3.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
            <PlusCircle className="w-4 h-4" /> Hatırlatıcı Ekle
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3">
        {["Tümü (12)", "Stok", "Servis", "Finans", "Garanti"].map((label, i) => (
          <button key={label} className={cn(
            "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
            i === 0 ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10" : "bg-white dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-blue-600 hover:border-blue-100"
          )}>
            {label}
          </button>
        ))}
      </div>

      {/* Notifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Critical Alerts Column */}
        <div className="lg:col-span-8 space-y-6">
          {notifications.map((n) => (
            <div key={n.id} className={cn(
              "group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border-l-[6px]",
              n.border,
              n.read && "opacity-60 border-slate-200"
            )}>
              <div className="flex items-start justify-between">
                <div className="flex gap-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-500", n.bg, n.color)}>
                    <n.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", n.color)}>{n.type}</span>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{n.time}</span>
                    </div>
                    <h3 className={cn("text-lg font-black leading-tight", n.read ? "text-slate-500" : "text-slate-900 dark:text-white")}>{n.msg}</h3>
                    <p className="text-sm font-medium text-slate-500">{n.sub}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {n.urgent && (
                    <button className="px-6 py-2.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/20">Sipariş Ver</button>
                  )}
                  {n.actions?.includes("Call") && (
                    <button className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Phone className="w-4 h-4" /></button>
                  )}
                  {n.type === "Teslimat Zamanı" && (
                    <button className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/20">Teslim Et</button>
                  )}
                  {n.read && <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-4">Okundu</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">

          {/* Warranty Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 opacity-20 transform group-hover:rotate-12 transition-transform duration-700">
              <ShieldCheck className="w-32 h-32" />
            </div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <ShieldCheck className="w-8 h-8 opacity-50" />
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-md">Garanti</span>
            </div>
            <h4 className="text-xl font-black mb-2 tracking-tight relative z-10">Garanti Bitiş Uyarısı</h4>
            <p className="text-sm font-medium text-white/70 mb-8 leading-relaxed relative z-10">Apple iPhone 14 Pro garantisi 7 gün sonra bitiyor. Müşteriye bakım teklifi gönderilebilir.</p>
            <button className="w-full py-4 bg-white text-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-xl">Teklif Hazırla</button>
          </div>

          {/* Approvals Widget */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Onay Bekleyenler</h4>
              <span className="w-6 h-6 bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-full text-[10px] font-black">2</span>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0">
                  <UserSearch className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-slate-900 dark:text-white">Can Özcan</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">Tamir maliyet onayı bekleniyor (4.500 TL)</p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase rounded-lg">Ara</button>
                    <button className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-black uppercase rounded-lg">Detay</button>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-50 dark:bg-slate-800"></div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-slate-900 dark:text-white">TS-2024-001 Servis</p>
                  <p className="text-[11px] font-black text-red-600 uppercase tracking-tighter mt-0.5">2 GÜN GECİKTİ!</p>
                  <button className="mt-3 px-6 py-1.5 bg-red-50 text-red-600 text-[9px] font-black uppercase rounded-lg border border-red-100">Hızlandır</button>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Tracker */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-48 group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent)]"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Cihaz Takibi</span>
              <div>
                <p className="text-2xl font-black tracking-tight">32 Cihaz Onarımda</p>
                <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-3/4 group-hover:w-4/5 transition-all duration-700"></div>
                </div>
              </div>
            </div>
            <ArrowRight className="absolute bottom-8 right-8 w-5 h-5 text-white/30 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
