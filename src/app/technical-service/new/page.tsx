"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Smartphone,
  AlertTriangle,
  Receipt,
  Camera,
  Upload,
  Plus,
  Image as ImageIcon,
  Printer,
  ChevronRight,
  Search,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewServiceTicket() {
  const router = useRouter();
  const [accessories, setAccessories] = useState<string[]>([]);

  const toggleAccessory = (item: string) => {
    setAccessories(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]
    );
  };

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto pb-32">
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
          <span>Servis İşlemleri</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Yeni Kayıt</span>
        </nav>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Yeni Cihaz Girişi</h2>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Sol Sütun */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Müşteri Bilgileri */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg">Müşteri Bilgileri</h3>
              </div>
              <button className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                <UserPlus className="w-3 h-3" />
                Yeni Müşteri Ekle
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">İsim Ara veya Seç</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="İsim yazmaya başlayın..." type="text" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Telefon Numarası</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="+90 5xx xxx xxxx" type="tel" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">E-posta Adresi (İsteğe Bağlı)</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="musteri@example.com" type="email" />
              </div>
            </div>
          </section>

          {/* Cihaz Detayları */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-lg">Cihaz Detayları</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Marka & Model</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none">
                  <option>Cihaz Seçin...</option>
                  <option>Apple iPhone 15 Pro</option>
                  <option>Samsung Galaxy S23 Ultra</option>
                  <option>Xiaomi 13 Pro</option>
                  <option>Diğer / Özel</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">IMEI / Seri Numarası</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="15 haneli IMEI veya Seri No" type="text" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Kozmetik Durum</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Çizik', 'Darbelere Sahip', 'Cam Kırık', 'Sıvı Teması'].map((condition) => (
                    <label key={condition} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl cursor-pointer border border-transparent hover:border-blue-500/20 transition-all">
                      <input className="rounded text-blue-600 focus:ring-blue-500/20" type="checkbox" />
                      <span className="text-xs font-medium">{condition}</span>
                    </label>
                  ))}
                </div>
                <textarea className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none h-20" placeholder="Ek kozmetik notlar..."></textarea>
              </div>
            </div>
          </section>

          {/* Arıza Açıklaması */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-lg">Arıza Açıklaması</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Detaylı Arıza Tanımı</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none h-32" placeholder="Arızayı detaylıca açıklayın..."></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Teslim Alınan Aksesuarlar</label>
                <div className="flex flex-wrap gap-4">
                  {['Şarj Cihazı', 'Kutu', 'Kılıf', 'SIM Kart', 'Hafıza Kartı'].map((item) => (
                    <label key={item} className="inline-flex items-center gap-2 group cursor-pointer">
                      <div
                        onClick={() => toggleAccessory(item)}
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                          accessories.includes(item) ? "bg-blue-600 border-blue-600" : "border-slate-300 dark:border-slate-700 group-hover:border-blue-500"
                        )}
                      >
                        {accessories.includes(item) && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                      </div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sağ Sütun */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Teklif Bölümü */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-lg">Servis Teklifi</h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Tahmini Fiyat</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">₺</span>
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-8 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="0,00" type="number" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Ön Ödeme / Kapora</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">₺</span>
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-8 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="0,00" type="number" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Beklenen Teslim Tarihi</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" type="datetime-local" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Atanan Teknisyen</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none">
                  <option>Teknisyen Seçin...</option>
                  <option selected>Alex Rivera (Ben)</option>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                </select>
              </div>
            </div>
          </section>

          {/* Fotoğraf Bölümü */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                <Camera className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-lg">Cihaz Fotoğrafları</h3>
            </div>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-blue-500 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Cihaz Fotoğraflarını Yükle</p>
              <p className="text-[10px] text-slate-500 uppercase">Mevcut hasarları fotoğraflayın</p>
              <input className="hidden" type="file" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800">
                <ImageIcon className="w-5 h-5 text-slate-400" />
              </div>
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800">
                <ImageIcon className="w-5 h-5 text-slate-400" />
              </div>
              <div className="aspect-square bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center group hover:border-blue-500 transition-colors">
                <Plus className="w-5 h-5 text-slate-300" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 right-0 left-64 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-8 py-4 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Kayıt Özeti</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">1 Cihaz • Tahmini 2.450,00 ₺</span>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => router.back()}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              İptal
            </button>
            <button className="flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2">
              <Printer className="w-4 h-4" />
              Kaydet ve Fiş Yazdır
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
