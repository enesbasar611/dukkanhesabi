"use client";

import {
  User,
  Mail,
  Phone,
  Briefcase,
  Lock,
  ShieldCheck,
  Smartphone,
  Laptop,
  Camera,
  Trash2,
  CheckCircle2,
  History,
  ShieldAlert as ShieldMoon,
  ChevronRight,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfileSecuritySettings() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-1 block">Hesap Merkezi</span>
            <h2 className="text-4xl font-extrabold tracking-tighter text-white">Profil & Güvenlik</h2>
            <p className="text-slate-400 mt-2">Kişisel bilgilerinizi yönetin ve hesap güvenliğinizi optimize edin.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-xl text-slate-300 font-semibold hover:bg-slate-800 transition-all border border-slate-700">İptal Et</button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-all">Değişiklikleri Kaydet</button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Information Section */}
          <div className="md:col-span-8 bg-slate-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <User className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white tracking-tight">Profil Bilgileri</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Adınız</label>
                <input className="w-full bg-slate-800/40 border-b-2 border-transparent focus:border-blue-600 border-x-0 border-t-0 rounded-lg px-4 py-3 text-white transition-all outline-none" type="text" defaultValue="Caner" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Soyadınız</label>
                <input className="w-full bg-slate-800/40 border-b-2 border-transparent focus:border-blue-600 border-x-0 border-t-0 rounded-lg px-4 py-3 text-white transition-all outline-none" type="text" defaultValue="Arslan" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-posta Adresi</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                  <input className="w-full bg-slate-800/40 border-b-2 border-transparent focus:border-blue-600 border-x-0 border-t-0 rounded-lg pl-12 pr-4 py-3 text-white transition-all outline-none" type="email" defaultValue="caner.arslan@circuitpro.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefon Numarası</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                  <input className="w-full bg-slate-800/40 border-b-2 border-transparent focus:border-blue-600 border-x-0 border-t-0 rounded-lg pl-12 pr-4 py-3 text-white transition-all outline-none" type="tel" defaultValue="+90 532 000 00 00" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Uzmanlık Alanı</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                  <input className="w-full bg-slate-800/40 border-b-2 border-transparent focus:border-blue-600 border-x-0 border-t-0 rounded-lg pl-12 pr-12 py-3 text-white transition-all outline-none" type="text" defaultValue="Mikro-Elektronik, Anakart Onarımı, IoT Entegrasyonu" />
                  <Settings className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4 cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo / Quick Status */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900/20 rounded-3xl p-8 border border-white/5 text-center flex flex-col items-center">
              <div className="relative group cursor-pointer mb-4">
                <img alt="Profile" className="w-32 h-32 rounded-3xl object-cover ring-4 ring-blue-600/10 group-hover:ring-blue-600/30 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlSC2SgZlfI-Bjh0fNHVIlGlxk2gvsiNFI4h1y2ogYOHibolTub3GIf36uxxIbS0GCeL_Ly8Xtlc5oFLqRI3Thyyzcvy5KyQ20XQ-nrpxYvQDMux295fiZEKcVbXkNskzk0HNeOnzhkN7JZGqEq6OFZc4RxRs-UGDI22Kf3pkMQFTgzekE5-wdeKQmijtnl-4RXGx0iyZtKP1bAYKEtcctklVXN4LTm9lXkuPXwS08xpK3Ki_LKGji6o056hJpX3gBWu3pExMX6Zg" />
                <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <Camera className="text-white w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white">Caner Arslan</h4>
              <p className="text-blue-400 text-sm font-semibold mb-6">Kıdemli Teknisyen</p>
              <div className="grid grid-cols-2 w-full gap-2">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Onarımlar</p>
                  <p className="text-lg font-bold text-white">1,284</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Verimlilik</p>
                  <p className="text-lg font-bold text-emerald-500">98%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Password & Security Section */}
          <div className="md:col-span-12 lg:col-span-7 bg-slate-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white tracking-tight">Güvenlik Ayarları</h3>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all">
                <div>
                  <h4 className="font-bold text-white">Hesap Şifresi</h4>
                  <p className="text-sm text-slate-500">Son değiştirilme: 3 ay önce</p>
                </div>
                <button className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-bold rounded-lg transition-colors">Şifreyi Güncelle</button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-600/10 border border-blue-600/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">İki Adımlı Doğrulama (2FA)</h4>
                    <p className="text-sm text-slate-400">Authenticator uygulaması ile hesabınız güvende.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-md border border-emerald-500/20 uppercase">Aktif</span>
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Aktif Oturumlar</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-3 px-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <Laptop className="text-slate-500 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold text-white">MacBook Pro - Istanbul, TR</p>
                        <p className="text-[11px] text-slate-600">Şu an aktif • Chrome v120</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-slate-500 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold text-white">iPhone 15 Pro - Istanbul, TR</p>
                        <p className="text-[11px] text-slate-600">2 saat önce • Circuit Pro iOS</p>
                      </div>
                    </div>
                    <button className="text-rose-500 text-[11px] font-bold hover:underline">Oturumu Kapat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Log Section */}
          <div className="md:col-span-12 lg:col-span-5 bg-slate-900/30 rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white tracking-tight">Güvenlik Aktivitesi</h3>
            </div>
            <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
              {[
                { title: "Başarılı Giriş Yapıldı", sub: "Istanbul, TR • 192.168.1.45", time: "Bugün 09:12", status: "success" },
                { title: "Şifre Değiştirme Talebi", sub: "E-posta onayı gönderildi", time: "14 Ocak, 15:30", status: "neutral" },
                { title: "Yeni Cihaz Bağlandı", sub: "iPad Air (6th Gen)", time: "12 Ocak, 11:24", status: "warning" },
                { title: "2FA Ayarları Güncellendi", sub: "Metod: SMS -> App", time: "05 Ocak, 10:05", status: "neutral" }
              ].map((log, i) => (
                <div key={i} className="relative pl-8">
                  <div className={cn(
                    "absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-slate-900 border flex items-center justify-center",
                    log.status === 'success' ? "border-blue-500" : log.status === 'warning' ? "border-amber-500" : "border-slate-700"
                  )}>
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      log.status === 'success' ? "bg-blue-500" : log.status === 'warning' ? "bg-amber-500" : "bg-slate-700"
                    )}></div>
                  </div>
                  <p className="text-sm font-bold text-white">{log.title}</p>
                  <p className="text-xs text-slate-500">{log.sub}</p>
                  <p className="text-[10px] text-slate-600 mt-1 uppercase font-medium">{log.time}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl text-slate-500 text-xs font-bold hover:bg-white/5 transition-all uppercase tracking-widest border border-slate-800">Tüm Aktiviteyi Görüntüle</button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-rose-500/5 rounded-3xl p-6 border border-rose-500/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Hesabı Devre Dışı Bırak</p>
              <p className="text-xs text-slate-500">Çalışma alanı erişiminizi ve verilerinizi kalıcı olarak kaldırın.</p>
            </div>
          </div>
          <button className="px-5 py-2 rounded-xl border border-rose-500/30 text-rose-500 text-xs font-bold hover:bg-rose-500/10 transition-colors">Silme Talebi Gönder</button>
        </div>
      </div>
    </div>
  );
}
