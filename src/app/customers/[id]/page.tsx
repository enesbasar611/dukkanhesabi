"use client";

import { use } from "react";
import {
  PhoneForwarded,
  MessageSquare,
  Edit3,
  Wallet,
  Wrench,
  CreditCard,
  Calendar,
  Smartphone,
  Watch,
  Laptop,
  CheckCircle2,
  Clock,
  XCircle,
  Plus,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const history = [
  { id: "#TR-8921", date: "12.09.2023 14:30", device: "iPhone 14 Pro Max", problem: "Ekran Değişimi & Sıvı Teması", status: "Tamamlandı", cost: "8.400 ₺", type: "smartphone" },
  { id: "#TR-9045", date: "05.09.2023 10:15", device: "Apple Watch Ultra", problem: "Batarya Değişimi", status: "Devam Ediyor", cost: "2.250 ₺", type: "watch" },
  { id: "#TR-9112", date: "28.08.2023 16:45", device: "MacBook Pro 16\" M2", problem: "Klavye Aydınlatma Sorunu", status: "İptal Edildi", cost: "0 ₺", type: "laptop" },
];

export default function CustomerProfile({ params }: { params: Promise<{ id: string }> }) {
  use(params);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 pb-32">
      {/* Profil Başlığı */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8 border border-slate-200 dark:border-slate-800 relative">
        <div className="relative group">
          <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-50 dark:ring-blue-900/20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV7O4uW0Ur4dnw3K8_f_Sd34hf6Ze5vXrz2QV2Ou4IzByLbgwd0e3E54biyMAF0JWQRTV6yLD0pW9avJCndNe8qmRforChcq85CRfhYpQWKl6tUIGH0UYgHBWIY5WcwbP1-6qjmnSMRAjKBANNW2q1HtZxxZVwi8d0OM-u2pl9tcUn3I2UV0-pLKksLjzEsBm2sRfxBgCzTeNd8YP0q4kSq1YVn8ubADQBcpaAH5hnmuBq0LwibxdVv3P6-xbIWiqU71CuzZV3lX4"
              alt="Müşteri"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-xl shadow-lg border-4 border-white dark:border-slate-900">
            <CheckCircle2 className="w-4 h-4 fill-current" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Burak Yılmaz</h2>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800">VIP Müşteri</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-slate-500 font-bold text-sm">
            <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-500 transition-colors">
              <PhoneForwarded className="w-4 h-4 text-blue-500" />
              <span>+90 532 123 45 67</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-500 transition-colors">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <span>burak.yilmaz@example.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95">
            <PhoneForwarded className="w-4 h-4" />
            Ara
          </button>
          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-black text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-all active:scale-95">
            <MessageSquare className="w-4 h-4" />
            Mesaj
          </button>
          <button className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl hover:bg-slate-200 transition-all border border-slate-200 dark:border-slate-700">
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* İstatistik Izgarası */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Toplam Harcama", val: "14.250 ₺", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Aktif Kayıtlar", val: "2 Adet", icon: Wrench, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Toplam Borç", val: "1.450 ₺", icon: CreditCard, color: "text-red-500", bg: "bg-red-500/10", alert: true },
          { label: "Son Ziyaret", val: "12 Eyl", icon: Calendar, color: "text-amber-500", bg: "bg-amber-500/10" },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-all">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <h3 className={cn("text-2xl font-black tracking-tighter", s.alert ? "text-red-600" : "text-slate-900 dark:text-white")}>{s.val}</h3>
            </div>
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner", s.bg)}>
              <s.icon className={cn("w-7 h-7", s.color)} />
            </div>
          </div>
        ))}
      </section>

      {/* İçerik Alanı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Servis Geçmişi */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex border-b border-slate-100 dark:border-slate-800 px-4">
            <button className="px-8 py-5 text-xs font-black text-blue-600 border-b-4 border-blue-600 uppercase tracking-widest">Servis Geçmişi</button>
            <button className="px-8 py-5 text-xs font-bold text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-colors">Satın Almalar</button>
            <button className="px-8 py-5 text-xs font-bold text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-colors flex items-center gap-2">
              Borçlar <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full">3</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/50">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">ID / Tarih</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Cihaz</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Arıza</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Maliyet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {history.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-900 dark:text-white">{row.id}</span>
                        <span className="text-xs text-slate-400 font-bold">{row.date}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                          {row.type === 'smartphone' ? <Smartphone className="w-5 h-5 text-blue-500" /> :
                           row.type === 'watch' ? <Watch className="w-5 h-5 text-blue-500" /> : <Laptop className="w-5 h-5 text-blue-500" />}
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{row.device}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{row.problem}</span>
                        <span className={cn(
                          "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest",
                          row.status === 'Tamamlandı' ? "text-emerald-500" : row.status === 'Devam Ediyor' ? "text-blue-500" : "text-slate-500"
                        )}>
                          {row.status === 'Tamamlandı' ? <CheckCircle2 className="w-3 h-3" /> :
                           row.status === 'Devam Ediyor' ? <Clock className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {row.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="text-sm font-black text-slate-900 dark:text-white">{row.cost}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kenar Çubuğu */}
        <div className="lg:col-span-4 space-y-8">
          {/* Aktif Borçlar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Aktif Borçlar</h3>
              <AlertCircle className="w-4 h-4 text-red-500" />
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/20 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">#TR-8921 Kalan</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">iPhone Ekran Onarımı</p>
                  </div>
                  <span className="text-xl font-black text-red-600 tracking-tighter">850 ₺</span>
                </div>
                <button className="w-full py-2.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 dark:shadow-none flex items-center justify-center gap-2">
                  <Wallet className="w-3.5 h-3.5" /> Ödeme Al
                </button>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">POS Satışı</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">MagSafe Kılıf Şeffaf</p>
                  </div>
                  <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">600 ₺</span>
                </div>
                <button className="w-full py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none">
                  Tahsil Et
                </button>
              </div>
            </div>
          </div>

          {/* Dahili Notlar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Dahili Notlar</h3>
              <Plus className="w-4 h-4 text-blue-500 cursor-pointer" />
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                  &quot;Müşteri ürünleri her zaman orijinal ambalajında getirir. Ekstra özen gösterilmeli.&quot;
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>14 Ağu 2023</span>
                  <span className="text-blue-500">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yüzen Eylem Butonu */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-3xl shadow-2xl shadow-blue-600/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group border-4 border-white dark:border-slate-900">
        <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
