"use client";

import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Package,
  Send,
  Mail,
  Phone,
  User,
  Calendar,
  MoreVertical,
  Plus,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotificationsPage() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-blue-500 uppercase mb-1 block">Sistem Denetimi</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Bildirimler & Hatırlatmalar</h2>
          </div>
          <div className="flex space-x-2">
            <button className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800 transition-colors flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Tümünü Okundu İşaretle
            </button>
          </div>
        </div>

        {/* Bento Grid Layout for Critical Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Critical Alert: Low Stock */}
          <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500 text-white">
              <Package className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">Kritik Stok Uyarısı</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">iPhone 14 Pro Max Ekran Paneli</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-md">Şu an stokta sadece 2 adet kaldı. Günlük ortalama tüketiminiz 1.5 adet. Stok yenilenmezse iş akışı aksayabilir.</p>
              <div className="flex items-center space-x-3">
                <button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-blue-500/30 transition-all flex items-center">
                  <Plus className="w-4 h-4 mr-2" /> Sipariş Oluştur
                </button>
                <button className="text-blue-500 text-xs font-bold px-4 py-2.5 hover:bg-blue-500/10 rounded-xl transition-colors">Tedarikçi Listesi</button>
              </div>
            </div>
          </div>

          {/* Critical Alert: Ready Devices */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[24px] font-black text-emerald-500/20">08</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Teslime Hazır Cihazlar</h3>
              <p className="text-slate-500 text-xs mb-6">Müşteriler bilgilendirilmeyi bekliyor.</p>
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors flex justify-center items-center">
              <Send className="w-4 h-4 mr-2" /> Toplu SMS Gönder
            </button>
          </div>
        </div>

        {/* Feed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Son Aktivite</h4>
              <button className="text-xs text-blue-500 font-medium hover:underline">Filtrele</button>
            </div>

            {[
              {
                title: "Geciken Ödeme: Ahmet Yılmaz",
                sub: "Servis No: #TR-9821 | Tutar: 4.250 TL",
                time: "2s önce",
                icon: AlertTriangle,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
                actions: ["Hatırlatma Gönder", "Tahsilat Yap"]
              },
              {
                title: "Garanti Süresi Doluyor",
                sub: "Samsung S22 Ultra - Seri No: 882XJ... (Kalan: 3 Gün)",
                time: "5s önce",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                actions: ["Bakım Teklifi Sun"]
              },
              {
                title: "Onay Bekleyen İşlem",
                sub: "Macbook Pro - Anakart değişimi için müşteri onayı gerekiyor.",
                time: "Dün",
                icon: Clock,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                actions: ["Müşteriyi Ara", "Detayları Gör"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 p-5 rounded-3xl flex items-start space-x-4 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", item.bg, item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-white">{item.title}</h5>
                      <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                    </div>
                    <span className="text-[10px] font-medium text-slate-600 uppercase">{item.time}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.actions.map((act, j) => (
                      <button key={j} className="bg-slate-950 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-lg text-[11px] font-bold text-slate-300 transition-colors">
                        {act}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Info */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Stats Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Özet Durum</h4>
              <div className="space-y-6">
                {[
                  { label: "Gecikmiş İşlemler", val: "12", color: "bg-rose-500" },
                  { label: "Parça Bekleyenler", val: "05", color: "bg-blue-500" },
                  { label: "Tamamlananlar", val: "48", color: "bg-emerald-500" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={cn("w-1.5 h-1.5 rounded-full mr-3", stat.color)}></div>
                      <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{stat.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Haftalık Memnuniyet</p>
                  <div className="text-2xl font-black text-blue-500">%98.4</div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: "98.4%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Reminders List */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Yaklaşan Randevular</h4>
              <div className="space-y-4">
                {[
                  { title: "Kurumsal Bakım", sub: "Saat 10:30 | Arçelik A.Ş.", day: "14" },
                  { title: "Yerinde Servis", sub: "Saat 14:15 | Beşiktaş Şubesi", day: "14" },
                  { title: "Tedarikçi Görüşmesi", sub: "Saat 09:00 | Global Tech", day: "15" },
                ].map((rem, i) => (
                  <div key={i} className="flex items-center p-2 hover:bg-slate-800 rounded-2xl transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mr-3 text-xs font-bold text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {rem.day}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{rem.title}</p>
                      <p className="text-[10px] text-slate-500">{rem.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
          <Plus className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700">Yeni Hatırlatıcı</span>
        </button>
      </div>
    </div>
  );
}
