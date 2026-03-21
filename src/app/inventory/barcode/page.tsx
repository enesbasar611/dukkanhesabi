"use client";

import React from "react";
import {
  FileText,
  CheckSquare,
  LayoutGrid,
  Save,
  Printer,
  Settings2,
  Beaker,
  Image as ImageIcon,
  Info,
  ChevronDown,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BarcodeSettingsPage() {
  return (
    <div className="ml-0 p-8 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase mb-1 block">Sistem Yapılandırması</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Barkod Yazdırma Ayarları</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 font-bold text-sm hover:bg-white transition-all active:scale-95">
            Ayarları Sıfırla
          </button>
          <button className="px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-black text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-95 flex items-center gap-2">
            <Save className="w-4 h-4" /> Şablonu Kaydet
          </button>
        </div>
      </div>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Settings Panel (Left) */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          {/* Paper & Format Card */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kağıt ve Biçim</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kağıt Boyutu</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none outline-none">
                    <option>40 x 20 mm (Standart Etiket)</option>
                    <option>50 x 30 mm (Geniş Etiket)</option>
                    <option>80 x 40 mm (Koli Etiketi)</option>
                    <option>Özel Boyut...</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Barkod Tipi</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none outline-none">
                    <option>EAN-13 (Perakende)</option>
                    <option>QR Code (Hızlı Erişim)</option>
                    <option>Code 128 (Lojistik)</option>
                    <option>UPC-A</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Content Elements Card */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Görünür Alanlar</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Ürün Adı", checked: true },
                { label: "Fiyat Bilgisi", checked: true },
                { label: "Seri No", checked: false },
                { label: "Firma Logosu", checked: true },
                { label: "SKT Tarihi", checked: false },
                { label: "Depo Kodu", checked: false },
              ].map((item, i) => (
                <label key={i} className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group border border-transparent hover:border-blue-100">
                  <input defaultChecked={item.checked} className="w-5 h-5 rounded-lg text-blue-600 border-slate-200 focus:ring-blue-600 mr-4 cursor-pointer" type="checkbox"/>
                  <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors">{item.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Alignment & Layout Card */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hizalama ve Düzen</h3>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between mb-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Yatay Kenar Boşluğu</label>
                  <span className="text-xs font-black text-blue-600">2.5 mm</span>
                </div>
                <input className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-600" type="range" defaultValue={25}/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Metin Hizalama</label>
                  <div className="flex bg-slate-50 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <button className="flex-1 py-3 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><AlignLeft className="w-5 h-5 mx-auto" /></button>
                    <button className="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-blue-600 border border-slate-100 dark:border-slate-700"><AlignCenter className="w-5 h-5 mx-auto" /></button>
                    <button className="flex-1 py-3 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><AlignRight className="w-5 h-5 mx-auto" /></button>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Yoğunluk</label>
                  <div className="flex bg-slate-50 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <button className="flex-1 py-3 rounded-xl text-slate-400 text-[10px] font-black uppercase">Az</button>
                    <button className="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-blue-600 border border-slate-100 dark:border-slate-700 text-[10px] font-black uppercase">Orta</button>
                    <button className="flex-1 py-3 rounded-xl text-slate-400 text-[10px] font-black uppercase">Yüksek</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Preview & Device Panel (Right) */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          {/* Live Preview Card */}
          <section className="bg-slate-200 dark:bg-slate-900 rounded-3xl p-10 border border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden shadow-inner">
            <div className="absolute top-6 left-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Canlı Önizleme (1:1)
            </div>

            {/* Virtual Label */}
            <div className="w-[340px] h-[180px] bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center justify-between border-2 border-slate-50 relative group transition-transform hover:scale-105 duration-500">
              <div className="w-full flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Tech Atelier</span>
                  <h4 className="text-sm font-black text-slate-900 leading-tight">Mekanik Klavye MX-200</h4>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-200">
                  <ImageIcon className="w-6 h-6" />
                </div>
              </div>

              {/* Barcode Simulation */}
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full h-14 flex gap-1 items-end justify-center">
                  {[1,3,1,5,1,4,2,1,2,4,1,5,1,3,1,4,2].map((w, i) => (
                    <div key={i} className={cn("bg-slate-900 h-full rounded-full")} style={{width: `${w * 1.5}px`}}></div>
                  ))}
                </div>
                <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-slate-800">8680123456789</span>
              </div>

              <div className="w-full flex justify-between items-end border-t border-slate-100 pt-3">
                <span className="text-[9px] font-bold text-slate-400 uppercase">SN: MX200-BL-1024</span>
                <span className="text-xl font-black text-slate-900 tracking-tighter">₺1.499,00</span>
              </div>
            </div>

            {/* Label Meta Info */}
            <div className="mt-12 flex gap-10">
              <div className="text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Genişlik</p>
                <p className="text-sm font-black text-slate-600 dark:text-slate-300">40mm</p>
              </div>
              <div className="w-px h-8 bg-slate-300 dark:bg-slate-800"></div>
              <div className="text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Yükseklik</p>
                <p className="text-sm font-black text-slate-600 dark:text-slate-300">20mm</p>
              </div>
              <div className="w-px h-8 bg-slate-300 dark:bg-slate-800"></div>
              <div className="text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tip</p>
                <p className="text-sm font-black text-slate-600 dark:text-slate-300">EAN-13</p>
              </div>
            </div>
          </section>

          {/* Device Selector Card */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Yazıcı Yönetimi</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Varsayılan Yazıcı</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none outline-none">
                    <option>Zebra ZD420 (203 dpi) - Çevrimiçi</option>
                    <option>Honeywell PM43 - Beklemede</option>
                    <option>Godex RT700i - Çevrimdışı</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <button className="flex-1 px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 active:scale-95">
                  <Settings2 className="w-4 h-4" /> Yapılandır
                </button>
                <button className="flex-1 px-5 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 active:scale-95">
                  <Beaker className="w-4 h-4" /> Test Sayfası
                </button>
              </div>
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 flex items-start gap-4 mt-4">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <p className="text-xs leading-relaxed text-blue-800 dark:text-blue-300 font-medium">
                  <strong>Not:</strong> Termal transfer yazdırma modu seçili olduğunda ribbon durumu kontrol edilir. Rulo değişimi sonrası kalibrasyon yapmanız önerilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
