"use client";

import React from "react";
import {
  Building2,
  Mail,
  MapPin,
  Edit3,
  Camera,
  Settings2,
  Bell,
  ShieldCheck,
  Palette,
  ChevronRight,
  Save,
  Trash2,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function StoreProfilePage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Mağaza Profili</h1>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Kurumsal Kimlik ve İletişim Bilgileri</p>
      </header>

      {/* Main Form Section */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Genel Bilgiler</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Birincil Marka Kimliği</p>
          </div>

          {/* Logo Upload */}
          <div className="relative group">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 overflow-hidden group-hover:border-blue-500 transition-all">
              <img alt="Store Logo" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44OAosj699szxR7mv7aHB6ydAzxE6Dlz0MIZP-jfxu5wrmnh_9zJwxDSu0Cl8wH58WP6b_FdiUOqJpHoMwuzKi9-08rvINOkiTJHqirfP-wfR7zKuOVHTj1XErBVZM-Bv_5HAtdKug9yDUEOZDx-abRnKbump_kQkAFFzcLjEN5Bb6w-mCe1lSVOVlt5f0XUN9NgLx3zJ2D4k2HRi4jdCMG91HpIs10d27xvdOwaUQqgu9_QS4m14ROYO-WF_-j173yl6Nax7_RM"/>
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all cursor-pointer">
                <Camera className="w-6 h-6 text-white mb-1" />
                <span className="text-[8px] font-black text-white uppercase">Düzenle</span>
              </div>
            </div>
            <p className="text-[10px] text-center mt-3 font-black text-blue-600 uppercase tracking-widest">Logo Güncelle</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mağaza Adı</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-600 text-sm font-bold shadow-inner outline-none transition-all" type="text" defaultValue="Tech Atelier - İstanbul Merkez"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kurumsal E-posta</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-600 text-sm font-bold shadow-inner outline-none transition-all" type="email" defaultValue="operasyon@tech-atelier.com"/>
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Açık Adres</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 w-4 h-4 text-slate-300" />
              <textarea className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-600 text-sm font-bold shadow-inner outline-none transition-all min-h-[100px]" defaultValue="Levent Plaza, No: 42, Kat: 8, Beşiktaş, İstanbul, Türkiye"/>
            </div>
          </div>
        </div>
      </section>

      {/* Business Settings */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Operasyonel Kurallar</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hizmet ve Garanti Şartları</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Standart Hizmet Türleri</label>
            <div className="flex flex-wrap gap-2">
              {["Ekran Onarımı", "Anakart Tamiri", "Batarya Değişimi"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-black flex items-center gap-2 border border-blue-100 dark:border-blue-800">
                  {tag} <X className="w-3.5 h-3.5 cursor-pointer hover:text-red-500 transition-colors" />
                </span>
              ))}
              <button className="px-4 py-2 border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all uppercase tracking-widest">+ Yeni Ekle</button>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Varsayılan Garanti Süresi</label>
            <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 shadow-inner outline-none">
              <option>90 Gün</option>
              <option defaultValue={180}>180 Gün (Standart)</option>
              <option>365 Gün (Premium)</option>
              <option>Özel...</option>
            </select>
          </div>
        </div>
      </section>

      {/* Action Bar */}
      <div className="sticky bottom-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/20 flex items-center justify-between">
        <div className="flex items-center gap-3 ml-4">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Son senkronizasyon: 2 dakika önce</span>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 text-slate-500 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all">Vazgeç</button>
          <button className="px-10 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-black text-sm rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-3">
            <Save className="w-4 h-4" /> Değişiklikleri Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
