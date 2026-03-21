"use client";

import {
  User,
  Smartphone,
  AlertTriangle,
  Stars,
  Package,
  Calendar,
  Save,
  X,
  Plus,
  Search,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NewServiceRegistration() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Modal-style Container */}
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="px-8 py-6 bg-slate-800/50 flex items-center justify-between border-b border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-blue-400">Kabul İşlemi</span>
              <h2 className="text-2xl font-black tracking-tight text-white">Yeni Servis Kaydı Oluştur</h2>
            </div>
            <Link href="/technical-service" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors text-slate-400">
              <X className="w-6 h-6" />
            </Link>
          </div>

          <form className="p-8 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
            {/* Section: Customer Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <User className="w-4 h-4" />
                <h3 className="font-bold text-sm tracking-wide uppercase">Müşteri Bilgileri</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1">Ara veya Yeni Ekle</label>
                  <div className="flex items-center bg-slate-950 rounded-xl focus-within:ring-2 ring-blue-500/20 transition-all border border-slate-800">
                    <Search className="text-slate-600 ml-3 w-4 h-4" />
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 py-3 text-sm text-white placeholder:text-slate-700"
                      placeholder="Telefon, İsim veya E-posta..."
                      type="text"
                    />
                    <button className="mx-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors" type="button">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1">Müşteri Önceliği</label>
                  <select className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-xl py-3 px-4 text-sm focus:ring-2 ring-blue-500/20 outline-none">
                    <option>Standart</option>
                    <option>Kurumsal / VIP</option>
                    <option>Acil / Bekleyen</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Device Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Smartphone className="w-4 h-4" />
                <h3 className="font-bold text-sm tracking-wide uppercase">Cihaz Detayları</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1">Marka</label>
                  <input className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 ring-blue-500/20 outline-none" placeholder="Örn: Apple" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1">Model</label>
                  <input className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 ring-blue-500/20 outline-none" placeholder="Örn: iPhone 15 Pro" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1">IMEI / Seri No</label>
                  <input className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 ring-blue-500/20 outline-none" placeholder="15 haneli numara" type="text" />
                </div>
              </div>
            </div>

            {/* Section: Fault Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="font-bold text-sm tracking-wide uppercase">Arıza Açıklaması</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Kırık Ekran", "Pil Sağlığı", "Şarj Soketi", "Sıvı Teması",
                  "Kamera Sorunu", "Şebeke / Wi-Fi", "Ses Sorunu", "Yazılım / OS"
                ].map((fault) => (
                  <label key={fault} className="flex items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/20 cursor-pointer transition-all active:scale-95 group">
                    <input className="rounded border-slate-800 text-blue-600 focus:ring-blue-600 w-4 h-4 bg-slate-900" type="checkbox" />
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200">{fault}</span>
                  </label>
                ))}
              </div>
              <textarea
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 ring-blue-500/20 outline-none resize-none"
                placeholder="Teknisyen notları veya müşteri şikayetleri..."
                rows={3}
              ></textarea>
            </div>

            {/* Section: Cosmetic & Accessories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Stars className="w-4 h-4" />
                  <h3 className="font-bold text-sm tracking-wide uppercase">Kozmetik Durum</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Sıfır Ayarında", "İyi", "Orta", "Kötü"].map((condition, i) => (
                    <button
                      key={condition}
                      className={cn(
                        "py-2.5 text-xs font-bold rounded-xl border-2 transition-all",
                        i === 1 ? "border-blue-600 bg-blue-600/10 text-blue-400" : "border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300"
                      )}
                      type="button"
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Package className="w-4 h-4" />
                  <h3 className="font-bold text-sm tracking-wide uppercase">Teslim Alınan Parçalar</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Şarj Aleti", "Kılıf", "Kutu", "SIM Tepsisi", "Hafıza Kartı"].map((acc, i) => (
                    <label key={acc} className="px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-400 hover:bg-slate-800 transition-colors">
                      <input className="rounded border-slate-800 text-blue-600 w-3.5 h-3.5 bg-slate-900" type="checkbox" defaultChecked={i === 2} />
                      {acc}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Quotation */}
            <div className="bg-blue-600/5 p-6 rounded-2xl border border-blue-600/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-500">
                    <Calendar className="w-4 h-4" />
                    <h3 className="font-bold text-sm tracking-wide uppercase">Tahmini Teslimat</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Hedef Tarih</label>
                      <input className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-white focus:ring-2 ring-blue-500/20 outline-none" type="date" defaultValue="2024-05-27" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Zorluk</label>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 uppercase mt-1">Orta Seviye</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Tahmini Ücret</label>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-sm font-medium text-slate-400">₺</span>
                    <input className="w-32 bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-2xl font-black text-blue-500 text-right focus:ring-2 ring-blue-500/20 outline-none" type="number" defaultValue="1850" />
                  </div>
                  <p className="text-[10px] text-slate-600 mt-1 italic">*Kesin ücret teknisyen incelemesi sonrası belirlenir</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
              <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-300 rounded-xl transition-all active:scale-95" type="button">
                İptal Et
              </button>
              <button className="px-8 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all active:scale-95 flex items-center gap-2" type="submit">
                <Save className="w-4 h-4" />
                Kaydet ve Fiş Yazdır
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
