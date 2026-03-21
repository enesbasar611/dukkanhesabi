"use client";

import React from "react";
import {
  ShieldCheck,
  CloudSync,
  History,
  Database,
  Download,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileJson,
  Table as TableIcon,
  ChevronRight,
  RefreshCcw,
  ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const backupHistory = [
  { date: "24 Mayıs 2024", time: "03:00", size: "142.5 MB", status: "Başarılı", color: "text-emerald-500" },
  { date: "23 Mayıs 2024", time: "03:00", size: "141.2 MB", status: "Başarılı", color: "text-emerald-500" },
  { date: "22 Mayıs 2024", time: "03:00", size: "139.8 MB", status: "Hata", color: "text-red-500" },
];

export default function BackupSecurityPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Yedekleme ve Güvenlik</h1>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Veri Bütünlüğü ve Sistem Güvenliği Yapılandırması</p>
      </header>

      {/* Main Security Card */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bulut Yedekleme</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Otomatik Senkronizasyon Durumu</p>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Bulut Bağlantısı Aktif
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frequency */}
          <div className="space-y-6">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Otomatik Yedekleme Sıklığı</label>
            <div className="grid grid-cols-3 gap-3">
              {["Günlük", "Haftalık", "Aylık"].map((freq, i) => (
                <button key={freq} className={cn(
                  "py-4 rounded-2xl text-xs font-black uppercase transition-all active:scale-95 border-2",
                  i === 0 ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-slate-50 dark:bg-slate-950 text-slate-500 border-transparent hover:border-blue-200"
                )}>
                  {freq}
                </button>
              ))}
            </div>
          </div>

          {/* Data Types */}
          <div className="space-y-6">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Yedeklenecek Veri Türleri</label>
            <div className="flex flex-wrap gap-3">
              {["Stok", "Servis Kayıtları", "Müşteriler", "Finans"].map((type, i) => (
                <label key={type} className="flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-950 rounded-2xl cursor-pointer hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group">
                  <input defaultChecked={i < 3} className="w-5 h-5 rounded-lg text-blue-600 border-slate-200 focus:ring-blue-600 cursor-pointer" type="checkbox"/>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Manual Actions */}
        <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Anlık İşlemler</h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Hemen bir yedek oluşturun veya verileri dışa aktarın.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 active:scale-95">
              <UploadCloud className="w-4 h-4" /> Hemen Yedekle
            </button>
            <button className="flex-1 py-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl font-black text-xs uppercase tracking-widest border border-blue-100 dark:border-blue-800 hover:bg-blue-100 transition-all flex items-center justify-center gap-3 active:scale-95">
              <Download className="w-4 h-4" /> Dışa Aktar
            </button>
          </div>
        </div>

        {/* History Table */}
        <div className="mt-12 space-y-6">
          <div className="flex justify-between items-end px-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Geçmiş Yedeklemeler</label>
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Tümünü Gör</button>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100/50 dark:bg-slate-900/50">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Tarih</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Boyut</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {backupHistory.map((h, i) => (
                  <tr key={i} className="hover:bg-white/50 transition-colors">
                    <td className="px-8 py-5 text-sm font-bold text-slate-700 dark:text-slate-300">{h.date}, <span className="text-slate-400 font-medium">{h.time}</span></td>
                    <td className="px-8 py-5 text-sm font-black text-slate-500">{h.size}</td>
                    <td className="px-8 py-5 text-right">
                      <span className={cn("inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter", h.color)}>
                        {h.status === 'Başarılı' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                        {h.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security Settings Section */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">İki Faktörlü Doğrulama (2FA)</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Yönetici Girişleri İçin Ek Güvenlik</p>
        </div>
        <div className="flex items-center justify-between p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-500/20">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight leading-tight">SMS ve Uygulama Doğrulaması</p>
              <p className="text-xs font-bold text-blue-100 mt-1 uppercase tracking-widest">Şu an aktif değil</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all active:scale-95 shadow-lg">
            Etkinleştir
          </button>
        </div>
      </section>
    </div>
  );
}
