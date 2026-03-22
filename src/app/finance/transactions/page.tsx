"use client";

import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
  CreditCard,
  Landmark,
  Calendar,

  Upload,
  CheckCircle2,
  TrendingUp,
  History,
  Minus,
  Plus
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CashInOutForm() {
  const [type, setType] = useState<"IN" | "OUT">("IN");

  return (
    <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32">
      {/* Sol Sütun: Form */}
      <div className="lg:col-span-8 space-y-8">
        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white mb-2">Kasa Giriş/Çıkış İşlemi</h2>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Atölye finansal hareketlerini hassasiyetle kaydedin.</p>
        </div>

        {/* Seçici */}
        <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl inline-flex w-full md:w-auto mb-4 border border-slate-200 dark:border-slate-800 shadow-xl">
          <button
            onClick={() => setType("IN")}
            className={cn(
              "flex-1 md:w-48 py-3 px-8 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-3",
              type === "IN" ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            )}
          >
            <ArrowDownCircle className="w-4 h-4" />
            Gelir (Giriş)
          </button>
          <button
            onClick={() => setType("OUT")}
            className={cn(
              "flex-1 md:w-48 py-3 px-8 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-3",
              type === "OUT" ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            )}
          >
            <ArrowUpCircle className="w-4 h-4" />
            Gider (Çıkış)
          </button>
        </div>

        {/* Ana Form Kartı */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="p-10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Tür */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">İşlem Kategorisi</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border-none ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 rounded-2xl py-4 px-5 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none transition-all">
                  <option>Kira</option>
                  <option>Faturalar</option>
                  <option>Personel Maaşı</option>
                  <option>Parça Alımı</option>
                  <option selected>Diğer</option>
                </select>
              </div>

              {/* Tutar */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tutar</label>
                <div className="relative group">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-lg group-focus-within:text-blue-600 transition-colors">₺</span>
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border-none ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 rounded-2xl py-4 pl-10 pr-6 text-slate-900 dark:text-white text-xl font-black outline-none placeholder:text-slate-300 dark:placeholder:text-slate-800 transition-all" placeholder="0,00" type="number" />
                </div>
              </div>

              {/* Yöntem */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Ödeme Yöntemi</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'cash', icon: Wallet },
                    { id: 'card', icon: CreditCard },
                    { id: 'bank', icon: Landmark },
                  ].map(m => (
                    <button key={m.id} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-blue-500 transition-all">
                      <m.icon className="w-5 h-5 text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Kasa */}
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Hesap / Kasa</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border-none ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 rounded-2xl py-4 px-5 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none transition-all">
                  <option selected>Ana Kasa</option>
                  <option>Ön Büro Çekmecesi</option>
                </select>
              </div>

              {/* Tarih */}
              <div className="space-y-3 md:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tarih & Saat</label>
                <div className="relative">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border-none ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none transition-all" type="datetime-local" />
                </div>
              </div>

              {/* Açıklama */}
              <div className="space-y-3 md:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Açıklama / Dahili Notlar</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-950 border-none ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 rounded-2xl py-4 px-5 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none transition-all min-h-[100px] resize-none" placeholder="İşlem detaylarını girin..." rows={3}></textarea>
              </div>
            </div>

            {/* Dosya Yükleme */}
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Ek / Makbuz</label>
              <div className="border-4 border-dashed border-slate-100 dark:border-slate-800/50 rounded-3xl p-12 flex flex-col items-center justify-center hover:border-blue-500/20 hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-all cursor-pointer group">
                <Upload className="w-12 h-12 text-slate-300 group-hover:text-blue-500 group-hover:scale-110 transition-all mb-4" />
                <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Dosyayı sürükleyin veya <span className="text-blue-600">göz atın</span></p>
                <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase tracking-widest">PNG, JPG, PDF (Maks 10MB)</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/50 p-8 flex items-center justify-end gap-6 border-t border-slate-100 dark:border-slate-800">
            <button className="px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">İptal</button>
            <button className="px-12 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30 active:scale-95 transition-all flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5" /> Kaydı Kaydet
            </button>
          </div>
        </div>
      </div>

      {/* Sağ Sütun: Analiz Kenar Çubuğu */}
      <div className="lg:col-span-4 space-y-8">
        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">Canlı Hesap Bakiyeleri</h3>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ana Kasa</p>
            <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">42.850,00 ₺</h4>
            <div className="mt-6 flex items-center gap-2 text-[9px] font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 w-fit px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              <TrendingUp className="w-3 h-3" /> Bugün +%4,2
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ön Büro</p>
            <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">3.120,50 ₺</h4>
            <div className="mt-6 flex items-center gap-2 text-[9px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1.5 rounded-full uppercase tracking-widest">
              Stabil Seviye
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/30">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Son Hareketler</h3>
            <History className="w-4 h-4 text-slate-400" />
          </div>
          <div className="divide-y divide-slate-50 dark:divide-slate-800">
            {[
              { label: "Ekran Onarımı", sub: "14:20 • Büro", val: "+1.450 ₺", color: "text-emerald-500", in: true },
              { label: "Öğle Yemeği", sub: "12:15 • Kasa", val: "-240 ₺", color: "text-red-500", in: false },
              { label: "iPhone 14 Satışı", sub: "11:05 • Kasa", val: "+32.000 ₺", color: "text-emerald-500", in: true },
              { label: "Kurye Ücreti", sub: "09:30 • Büro", val: "-85 ₺", color: "text-red-500", in: false },
            ].map((m, i) => (
              <div key={i} className="p-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all cursor-pointer group">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-inner", m.in ? "bg-emerald-50 text-emerald-500" : "bg-red-50 text-red-500")}>
                  {m.in ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-slate-900 dark:text-white truncate">{m.label}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{m.sub}</p>
                </div>
                <div className="text-right">
                  <p className={cn("text-sm font-black tracking-tighter", m.color)}>{m.val}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="p-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/30">Tüm Hareketleri Gör</button>
        </div>
      </div>
    </div>
  );
}
