"use client";

import React from "react";
import {
  TrendingUp,
  BarChart3,
  Wallet,
  Wrench,
  Package,
  Users,
  Search,
  Calendar,
  FileUp,
  SlidersHorizontal,
  Star,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "AYLIK TOPLAM CİRO", val: "₺842.500", trend: "+12%", icon: Wallet, color: "bg-blue-600", border: "border-blue-600" },
  { label: "TAMİR BAŞARI ORANI", val: "94.8%", trend: "+2.4%", icon: Wrench, color: "bg-emerald-500", border: "border-emerald-500" },
  { label: "EN ÇOK SATAN KATEGORİ", val: "Ekran Panel", sub: "Mobil", icon: Package, color: "bg-orange-500", border: "border-orange-500" },
  { label: "AKTİF MÜŞTERİ SAYISI", val: "1.248", trend: "+85", icon: Users, color: "bg-purple-500", border: "border-purple-500" },
];

const technicians = [
  { name: "Ahmet Yılmaz", role: "Kıdemli Teknisyen", jobs: 142, time: "45 dk", rating: 4.9 },
  { name: "Mehmet Kaya", role: "Teknisyen", jobs: 128, time: "52 dk", rating: 4.7 },
  { name: "Canan Demir", role: "Kıdemli Teknisyen", jobs: 115, time: "38 dk", rating: 5.0 },
];

const bestSellers = [
  { name: "iPhone 13 OLED Ekran Paneli", sales: 85, revenue: "₺212,500", margin: "%45.2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjMSrNMUp-9tzwNGw-am3HIVSeXR4bcc2feH5JMDiMPybx37ade4ni9Ks6sWKq8A9KEq-8RdglcpoNKi4zIk3M_niUrEOo7Jajujys_yQjqCofmrjFZGHpuVYjtd_cDD1O8bgUQCNLbP-Vd8rwc_6NpwXINmrRmrYNn6SXy_HgMsuWFAn423RfcDQijalLMbhYFcJ2xlSubCNgOZCLBsGYd72GJuMcqIT2wiTD17hT6Q7vHxEkButXi4Trie1PXES1knXLCD1HrIc" },
  { name: "Samsung S22 Ultra Batarya (Orijinal)", sales: 112, revenue: "₺89,600", margin: "%28.5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0C_qj59_WF6mzbFaJ1kXAnda73106x79UXhH43GiosoVk0SZZwxvGHWWtQn93c__B_QS-3eiEZtj4eh5EBOa0m3LGUQ1FpmHdNf8VdDfZvORaTfiucrm5Ol_rDHpEGmZwDxW8weZIUhjirpls_3016ezE5OU3szy00cfRC8dzV_iN4_d84Kx-EG5lTPhyADv0iwfVLf80AYPCjDGdA5hIxqVHgrux-p-EMcdOmEuk7V94Ui6z2NlOQu1yuA2x4G_KFanL5g6yF1U" },
];

export default function ReportsPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Raporlar ve Analitik</h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Operasyonel Veri ve Performans İzleme</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-10 pr-4 py-2 text-xs w-48 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Raporlarda ara..." type="text"/>
          </div>
          <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:text-blue-600 transition-colors shadow-sm">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:text-blue-600 transition-colors shadow-sm">
            <FileUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((k, i) => (
          <div key={i} className={cn("bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border-l-4 flex flex-col gap-2 transition-all hover:scale-[1.02]", k.border)}>
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{k.label}</span>
              <k.icon className="w-5 h-5 opacity-20" />
            </div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">{k.val}</h2>
              {k.trend && (
                <span className="text-[10px] font-black text-emerald-600 flex items-center bg-emerald-50 px-1.5 py-0.5 rounded">
                  <TrendingUp className="w-3 h-3 mr-1" /> {k.trend}
                </span>
              )}
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 mt-2 rounded-full overflow-hidden">
              <div className={cn("h-full rounded-full w-3/4", k.color)}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Sales Trend */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Satış ve Gelir Grafiği</span>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">Operasyonel Performans Karşılaştırması</h3>
            </div>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800 p-1 rounded-xl">
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg bg-white dark:bg-slate-700 text-blue-600 shadow-sm">Aylık</button>
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg text-slate-400">Haftalık</button>
            </div>
          </div>
          <div className="h-72 flex items-end justify-between gap-4 px-2">
            {["Oca", "Şub", "Mar", "Nis", "May", "Haz"].map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full flex justify-center items-end gap-1 h-48">
                  <div className="w-1/2 bg-blue-600/80 rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: `${40 + i * 10}%`}}></div>
                  <div className="w-1/2 bg-blue-400/30 rounded-t-lg transition-all group-hover:bg-blue-400/50" style={{height: `${30 + i * 12}%`}}></div>
                </div>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{m}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-8 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Tamir Geliri</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400/40"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ürün Satışı</span>
            </div>
          </div>
        </div>

        {/* Issue Distribution */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">Arıza İstatistikleri</span>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Sık Karşılaşılan Sorunlar</h3>
          <div className="relative aspect-square w-full max-w-[240px] mx-auto mb-8 group cursor-pointer">
            <div className="absolute inset-0 rounded-full border-[20px] border-slate-50 dark:border-slate-800/50"></div>
            <div className="absolute inset-0 rounded-full border-[20px] border-emerald-500 border-t-transparent border-r-transparent rotate-45 transition-transform group-hover:rotate-90"></div>
            <div className="absolute inset-0 rounded-full border-[20px] border-blue-600 border-l-transparent border-b-transparent -rotate-12 transition-transform group-hover:rotate-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 dark:text-white">42%</span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ekran Arızası</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { l: "Ekran Kırılması", v: "42%", c: "bg-emerald-500" },
              { l: "Batarya Değişimi", v: "28%", c: "bg-blue-600" },
              { l: "Sıvı Teması", v: "18%", c: "bg-orange-500" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", s.c)}></div>
                  <span className="text-slate-500">{s.l}</span>
                </div>
                <span className="text-slate-900 dark:text-white">{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technician Performance */}
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">Teknisyen Performans Analizi</h3>
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Tümünü Gör</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">
                  <th className="pb-4">Teknisyen</th>
                  <th className="pb-4 text-center">İş Sayısı</th>
                  <th className="pb-4">Ort. Süre</th>
                  <th className="pb-4 text-right">Memnuniyet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {technicians.map((t, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 text-center text-sm font-black text-slate-900 dark:text-white">{t.jobs}</td>
                    <td className="py-5 text-sm font-bold text-slate-500">{t.time}</td>
                    <td className="py-5 text-right">
                      <div className="flex items-center justify-end gap-1 text-emerald-600">
                        <span className="text-sm font-black">{t.rating}</span>
                        <Star className="w-3 h-3 fill-emerald-600" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products Report */}
        <div className="col-span-12 lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl shadow-xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none transition-all group-hover:bg-blue-600/20"></div>
          <div className="flex justify-between items-end mb-8 relative z-10">
            <div>
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">Envanter Analitiği</span>
              <h3 className="text-2xl font-black tracking-tight mt-1">En Çok Satanlar ve Kar Raporu</h3>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Kar Marjı Ort:</span>
              <span className="ml-2 text-sm font-black text-blue-400">%32.4</span>
            </div>
          </div>
          <div className="space-y-6 relative z-10">
            {bestSellers.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                  <div className="min-w-0 max-w-[160px]">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{item.sales} Adet Satıldı</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-blue-400">{item.revenue}</p>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-black">{item.margin} Kar</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
            Detaylı Envanter Raporu <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
