"use client";

import {
  Cloud,
  Database,
  RefreshCcw,
  Download,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Filter,
  Monitor,
  MoreVertical,
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const history = [
  { date: "24 Mayıs 2024, 03:00", size: "1.2 GB", type: "Bulut", status: "success", icon: Cloud },
  { date: "23 Mayıs 2024, 03:00", size: "1.1 GB", type: "Bulut", status: "success", icon: Cloud },
  { date: "22 Mayıs 2024, 14:15", size: "850 MB", type: "Yerel", status: "success", icon: Monitor },
  { date: "21 Mayıs 2024, 03:00", size: "1.1 GB", type: "Bulut", status: "failed", icon: Cloud },
];

export default function BackupSecuritySettings() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex text-xs font-semibold text-slate-500 mb-2 uppercase tracking-widest">
              <span>Ayarlar</span>
              <span className="mx-2">/</span>
              <span className="text-blue-500">Güvenlik & Yedekleme</span>
            </nav>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">Veri Yedekleme ve Güvenlik Ayarları</h2>
          </div>
          <div className="flex space-x-3">
            <button className="px-6 py-2.5 rounded-xl border border-slate-800 text-slate-400 font-semibold text-sm hover:bg-slate-900 transition-colors">Vazgeç</button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-900/20 active:scale-95 transition-transform">Değişiklikleri Kaydet</button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Cloud Backup Status */}
          <div className="col-span-12 lg:col-span-8 bg-slate-900/50 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 p-10 opacity-5 text-white">
              <Cloud className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]"></span>
                <h3 className="text-xl font-bold text-white tracking-tight">Bulut Senkronizasyonu Aktif</h3>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">Sistem verileriniz TechAtelier Cloud sunucuları ile anlık olarak senkronize edilmektedir. Son başarılı senkronizasyon: 2 dakika önce.</p>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Depolama Alanı</span>
                <span className="text-2xl font-mono text-white">4.2 GB <span className="text-sm text-slate-600 font-sans">/ 10 GB</span></span>
              </div>
              <div className="flex-1 w-full max-w-xs h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "42%" }}></div>
              </div>
              <button className="text-blue-400 text-sm font-bold flex items-center hover:underline group">
                Planı Yükselt <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Backup Triggers */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-blue-500/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-500">
                <Database className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Yerel Yedekleme</h4>
              <p className="text-xs text-slate-500 mb-8 max-w-[200px]">Tüm veritabanını tek tıkla cihazınıza güvenli SQL formatında indirin.</p>
              <button className="w-full py-4 rounded-2xl bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Hemen Yedekle
              </button>
            </div>
          </div>

          {/* Frequency Configuration */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-8">Yedekleme Sıklığı</h3>
            <div className="space-y-4">
              {["Günlük", "Haftalık", "Aylık"].map((freq, i) => (
                <label key={freq} className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all">
                  <span className="text-slate-300 font-medium">{freq}</span>
                  <input defaultChecked={i === 0} className="w-5 h-5 bg-slate-900 border-slate-800 text-blue-600 focus:ring-offset-slate-900" name="freq" type="radio" />
                </label>
              ))}
            </div>
            <div className="mt-8">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4">Yedekleme Saati</label>
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4">
                <Clock className="text-slate-600 mr-3 w-5 h-5" />
                <input className="bg-transparent border-none text-white focus:ring-0 w-full font-mono text-lg" type="time" defaultValue="03:00" />
              </div>
            </div>
          </div>

          {/* Data Selection */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-8">Veri Seçimi</h3>
            <div className="space-y-2">
              {["Stok Verileri", "Servis Kayıtları", "Müşteri Bilgileri", "Finansal Veriler", "Kullanıcı Logları"].map((data, i) => (
                <label key={data} className="flex items-center p-4 hover:bg-slate-800/50 rounded-2xl cursor-pointer group transition-all">
                  <input defaultChecked={i < 3} className="w-5 h-5 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-offset-slate-900" type="checkbox" />
                  <span className="ml-4 text-slate-400 font-medium group-hover:text-white transition-colors">{data}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-8">Güvenlik Ayarları</h3>
            <div className="space-y-8">
              {[
                { title: "İki Adımlı Doğrulama (2FA)", sub: "SMS veya Authenticator uygulaması.", active: true },
                { title: "İşlem Loglarını Sakla", sub: "Tüm yönetici hareketlerini kaydet.", active: true },
                { title: "IP Kısıtlaması", sub: "Sadece izinli IP'lerden erişim.", active: false },
              ].map((sec, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-slate-200 font-bold text-sm">{sec.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-1">{sec.sub}</p>
                  </div>
                  <button className={cn(
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    sec.active ? "bg-blue-600" : "bg-slate-700"
                  )}>
                    <span className={cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      sec.active ? "translate-x-6" : "translate-x-1"
                    )} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-12 p-5 bg-blue-600/5 rounded-2xl border border-blue-600/10 flex items-start gap-4">
              <ShieldCheck className="text-blue-500 w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-500 leading-relaxed">Hesabınız şu anda kurumsal düzeyde şifreleme ve biyometrik yedekleme ile korunmaktadır.</p>
            </div>
          </div>

          {/* History Table */}
          <div className="col-span-12 bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-white/5">
            <div className="p-8 flex items-center justify-between bg-slate-950/20">
              <h3 className="text-lg font-bold text-white tracking-tight">Yedekleme Geçmişi</h3>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-500"><Filter className="w-5 h-5" /></button>
                <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-500"><RefreshCcw className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/40 border-y border-white/5">
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tarih</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Dosya Boyutu</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tür</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Durum</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {history.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-6 text-sm font-medium text-slate-300">{row.date}</td>
                      <td className="px-8 py-6 text-sm font-mono text-slate-500">{row.size}</td>
                      <td className="px-8 py-6">
                        <span className={cn("flex items-center text-xs font-bold", row.type === 'Bulut' ? "text-blue-400" : "text-slate-400")}>
                          <row.icon className="w-4 h-4 mr-2" /> {row.type}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          row.status === 'success' ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                        )}>
                          {row.status === 'success' ? 'Başarılı' : 'Hata'}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="text-slate-600 hover:text-white transition-colors"><MoreVertical className="w-5 h-5" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-950/30 flex justify-center border-t border-white/5">
              <button className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">Tüm Geçmişi Görüntüle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
