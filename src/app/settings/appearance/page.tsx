"use client";

import React from "react";
import {
  Palette,
  Sun,
  Moon,
  Monitor,
  Droplet,
  Layout,
  Type,
  ChevronRight,
  Check,
  Pipette,
  Layers,
  Sparkles,
  Save
} from "lucide-react";
import { cn } from "@/lib/utils";

const brandColors = [
  { hex: "#0058BE", active: true },
  { hex: "#4F46E5", active: false },
  { hex: "#334155", active: false },
  { hex: "#059669", active: false },
  { hex: "#E11D48", active: false },
  { hex: "#D97706", active: false },
];

export default function AppearanceSettingsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 bg-slate-50 dark:bg-slate-950 min-h-screen pb-32">
      {/* Header */}
      <header>
        <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase block mb-1">CİHAZ AYARLARI</span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Görünüm</h2>
        <p className="text-slate-500 mt-1 text-sm font-medium uppercase tracking-tight">Arayüz teması, renkleri ve tipografi yapılandırması.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Settings Controls */}
        <div className="xl:col-span-7 space-y-8">

          {/* Appearance Mode */}
          <section className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Görünüm Modu</label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Aydınlık", icon: Sun },
                { label: "Karanlık", icon: Moon, active: true },
                { label: "Sistem", icon: Monitor },
              ].map((m) => (
                <button key={m.label} className={cn(
                  "bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 flex flex-col items-center gap-4 shadow-sm transition-all group active:scale-95",
                  m.active ? "border-blue-600 shadow-xl shadow-blue-500/10" : "border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                )}>
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                    m.active ? "bg-blue-600 text-white rotate-12" : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:rotate-6"
                  )}>
                    <m.icon className="w-7 h-7" />
                  </div>
                  <span className={cn("text-xs font-black uppercase tracking-widest", m.active ? "text-blue-600" : "text-slate-500")}>{m.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Brand Color */}
          <section className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Ana Renk</label>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
              <div className="flex flex-wrap gap-4">
                {brandColors.map((c, i) => (
                  <div key={i} className={cn(
                    "w-12 h-12 rounded-2xl cursor-pointer flex items-center justify-center transition-all hover:scale-110 active:scale-90 shadow-lg",
                    c.active && "ring-4 ring-blue-500/20 scale-110"
                  )} style={{ backgroundColor: c.hex }}>
                    {c.active && <Check className="text-white w-6 h-6" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 shadow-inner">
                  <span className="text-slate-400 font-mono mr-3 font-bold">#</span>
                  <input className="bg-transparent border-none focus:ring-0 text-sm font-mono font-bold w-full text-slate-700 dark:text-slate-200 outline-none" type="text" defaultValue="0058BE"/>
                </div>
                <button className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-blue-600 transition-all active:scale-95 shadow-sm">
                  <Pipette className="w-6 h-6" />
                </button>
              </div>
            </div>
          </section>

          {/* Grid Layout Density */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Vurgu Renkleri</label>
              <div className="space-y-3">
                {[
                  { label: "Başarı", color: "bg-emerald-500" },
                  { label: "Uyarı", color: "bg-amber-500" },
                  { label: "Hata", color: "bg-red-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                    <div className={cn("w-6 h-6 rounded-lg shadow-inner", item.color)}></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Arayüz Yoğunluğu</label>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-[2rem] shadow-sm flex flex-col gap-2">
                {["Kompakt", "Varsayılan", "Rahat"].map((d, i) => (
                  <label key={d} className="flex items-center gap-4 cursor-pointer group p-3.5 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-2xl transition-all">
                    <input defaultChecked={i === 1} className="w-5 h-5 text-blue-600 focus:ring-blue-600 border-slate-200 cursor-pointer" name="density" type="radio"/>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors">{d}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Typography */}
          <section className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Yazı Tipi</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-all">
                <span className="text-sm font-black text-slate-700 dark:text-slate-200">Inter (Modern & Clean)</span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex items-center gap-6">
                <span className="text-xs font-black text-slate-400">A</span>
                <input className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-600" type="range" defaultValue={50}/>
                <span className="text-xl font-black text-slate-900 dark:text-white">A</span>
              </div>
            </div>
          </section>
        </div>

        {/* Live Preview (Right) */}
        <div className="xl:col-span-5 relative">
          <div className="sticky top-12 space-y-8">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Canlı Önizleme</h3>
              <div className="flex gap-2">
                {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>)}
              </div>
            </div>

            {/* Dashboard Preview UI */}
            <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden scale-95 transition-transform">
              <div className="bg-slate-50/50 dark:bg-white/[0.02] p-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">DEVRE PANELİ</span>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-[1.5rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-slate-100 dark:bg-slate-900 rounded-lg w-3/4 shadow-inner"></div>
                    <div className="h-3.5 bg-slate-50 dark:bg-slate-900/50 rounded-lg w-1/2"></div>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/[0.01] border border-slate-100 dark:border-white/5 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Sistem Durumu</span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-black rounded-full uppercase">AKTİF</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2.5 bg-blue-600 rounded-full flex-1 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                    <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full w-16"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Birincil Eylem</button>
                  <button className="bg-slate-50 dark:bg-slate-900 text-slate-500 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-100 dark:border-white/5">İkincil</button>
                </div>
              </div>
            </div>

            {/* Context Tip */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] border border-blue-100 dark:border-blue-800/50 flex gap-5">
              <Sparkles className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <p className="text-xs leading-relaxed text-blue-800 dark:text-blue-300 font-bold uppercase tracking-tight">
                Önizleme, gerçek zamanlı olarak ayarlarınızı yansıtır. Değişiklikleri kaydederek tüm arayüze uygulayabilirsiniz.
              </p>
            </div>

            <button className="w-full py-5 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-3xl shadow-2xl shadow-blue-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
              <Save className="w-5 h-5" /> Ayarları Uygula
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
