"use client";

import {
  Search,
  Filter,
  RefreshCcw,
  MoreVertical,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  User,
  Monitor,
  Smartphone,
  ShieldCheck,
  History,
  Database,
  ArrowRightLeft,
  Settings2,
  Lock,
  Clock,
  LayoutGrid,
  Laptop
} from "lucide-react";
import { cn } from "@/lib/utils";

const logs = [
  { id: "#STK-882193", date: "12.05.2024", time: "14:42:08", user: "Mert Yılmaz", role: "Admin", action: "Stok Kartı Silme", module: "STOK", color: "bg-rose-500", ip: "192.168.1.45", initial: "MY" },
  { id: "Samsung S21 Screen Unit", date: "12.05.2024", time: "13:15:30", user: "Zeynep Kaya", role: "Store Manager", action: "Fiyat Güncelleme", module: "FİNANS", color: "bg-emerald-500", ip: "192.168.1.12", initial: "ZK" },
  { id: "Daily Cloud Snapshot", date: "12.05.2024", time: "09:12:44", user: "System Root", role: "Automated Task", action: "Yedekleme Tamamlandı", module: "SİSTEM", color: "bg-blue-500", ip: "::local-cron", initial: "SY" },
  { id: "Ahmet Şen (Technician -> Lead)", date: "11.05.2024", time: "17:58:22", user: "Mert Yılmaz", role: "Admin", action: "Kullanıcı Yetki Değişimi", module: "SİSTEM", color: "bg-blue-600", ip: "192.168.1.45", initial: "MY" },
];

export default function AuditLogsPage() {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-950 overflow-hidden text-slate-200">
      {/* Top App Bar for Logs */}
      <header className="h-16 w-full sticky top-0 z-40 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center flex-1 max-w-xl group">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
            <input
              className="w-full bg-slate-950 border-none rounded-xl pl-12 pr-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Sistem genelinde günlüklerde ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-blue-400 tracking-wide uppercase">Canlı İzleme Aktif</span>
          </div>
          <button className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
            <History className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
        {/* Editorial Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Güvenlik & Günlükler</span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-1 mb-2 text-white">Sistem Günlükleri</h2>
          <p className="text-slate-500 max-w-2xl text-sm">Circuit Pro altyapısında gerçekleşen tüm kritik işlemlerin kronolojik kaydı. Veri güvenliği ve izlenebilirlik için tüm değişiklikler burada tutulur.</p>
        </div>

        {/* Filters Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 ml-1">Kullanıcı</label>
            <select className="bg-slate-900 border border-white/5 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 text-slate-300 outline-none cursor-pointer">
              <option>Tüm Kullanıcılar</option>
              <option>Mert Yılmaz</option>
              <option>Zeynep Kaya</option>
            </select>
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 ml-1">İşlem Tipi</label>
            <select className="bg-slate-900 border border-white/5 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 text-slate-300 outline-none cursor-pointer">
              <option>Hepsi</option>
              <option>Silme (Delete)</option>
              <option>Güncelleme (Update)</option>
              <option>Yetkilendirme</option>
            </select>
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 ml-1">Modül</label>
            <select className="bg-slate-900 border border-white/5 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 text-slate-300 outline-none cursor-pointer">
              <option>Tümü</option>
              <option>Stok</option>
              <option>Finans</option>
              <option>Sistem</option>
            </select>
          </div>
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 ml-1">Tarih Aralığı</label>
            <div className="flex items-center gap-2">
              <input className="flex-1 bg-slate-900 border border-white/5 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 text-slate-300 outline-none" type="date" />
              <span className="text-slate-700">-</span>
              <input className="flex-1 bg-slate-900 border border-white/5 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 text-slate-300 outline-none" type="date" />
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20">
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
              <span>Filtrele</span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Tarih / Saat</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Kullanıcı</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">İşlem</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Modül</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">IP Adresi</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Detaylar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {logs.map((log, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-6">
                      <div className="text-sm font-medium text-white">{log.date}</div>
                      <div className="text-[11px] text-slate-600 font-mono mt-0.5">{log.time}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-9 h-9 rounded-full flex items-center justify-center font-bold text-[11px]", log.color + "/10", log.color.replace('bg-', 'text-'))}>
                          {log.initial}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{log.user}</div>
                          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">{log.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", log.color)}></div>
                        <span className="text-sm text-slate-200">{log.action}</span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1 font-mono">{log.id}</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-[10px] font-bold tracking-tight border border-white/5">
                        {log.module}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-mono text-[11px] text-slate-600">{log.ip}</td>
                    <td className="px-6 py-6 text-right">
                      <button className="text-blue-500 font-bold text-xs hover:underline decoration-2 underline-offset-4 flex items-center justify-end gap-1 ml-auto">
                        Detay Gör <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Overlay Mockup */}
          <div className="p-8 bg-white/[0.03] border-t border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold flex items-center gap-2 text-white">
                <ArrowRightLeft className="text-blue-500 w-4 h-4" />
                Son İşlem Detayı (Öncesi / Sonrası Veri Farkı)
              </h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-full border border-white/5">Sadece Yönetici Yetkisi</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                <span className="text-[10px] font-black text-rose-500 uppercase block mb-4 tracking-widest">ESKİ VERİ (BEFORE)</span>
                <div className="space-y-2 font-mono text-[12px] text-rose-400/80">
                  <div className="flex justify-between border-b border-rose-500/5 pb-2"><span>stok_fiyat:</span> <span>1.250,00 TRY</span></div>
                  <div className="flex justify-between border-b border-rose-500/5 pb-2"><span>indirim_oranı:</span> <span>%0</span></div>
                  <div className="flex justify-between"><span>stok_adet:</span> <span>12</span></div>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <span className="text-[10px] font-black text-emerald-500 uppercase block mb-4 tracking-widest">YENİ VERİ (AFTER)</span>
                <div className="space-y-2 font-mono text-[12px] text-emerald-400/80">
                  <div className="flex justify-between border-b border-emerald-500/5 pb-2"><span>stok_fiyat:</span> <span className="font-bold underline">1.425,00 TRY</span></div>
                  <div className="flex justify-between border-b border-emerald-500/5 pb-2"><span>indirim_oranı:</span> <span className="font-bold underline">%5 (Kampanya)</span></div>
                  <div className="flex justify-between"><span>stok_adet:</span> <span>12</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-8 py-5 border-t border-white/5 bg-slate-950/20">
            <span className="text-xs text-slate-600 font-medium">Toplam 2,492 kayıttan 1-15 arası gösteriliyor</span>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg hover:bg-white/5 text-slate-600 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-900/20">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 text-xs font-bold transition-all">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 text-xs font-bold transition-all">3</button>
              <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
