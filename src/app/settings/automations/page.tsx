"use client";

import {
  TrendingDown,
  PlusCircle,
  MoreVertical,
  Settings2,
  Send,
  Clock,
  User,
  Zap,
  Box,
  MonitorCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SMSAutomations() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight relative overflow-hidden">
      {/* Görsel Arka Plan Vurguları */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Sayfa Başlığı Bölümü */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">Otomasyon Katmanı</span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">Bildirim Merkezi</h2>
          <p className="text-slate-500 font-bold text-sm max-w-lg mt-2 uppercase tracking-tight leading-relaxed">İşletme uyarılarınız için hassas yapılandırmalar oluşturun. Otomatik SMS gönderimi için tetikleyicileri, eşikleri ve özel şablonları tanımlayın.</p>
        </div>

        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95 flex items-center gap-3">
          <PlusCircle className="w-5 h-5" />
          Yeni Kural Oluştur
        </button>
      </div>

      {/* Kontrol Paneli Düzeni (Bento Izgara Stili) */}
      <div className="grid grid-cols-12 gap-8">
        {/* Kural Yönetimi (Ana Liste) */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="px-10 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Aktif Otomasyon Kuralları</span>
              <span className="text-[10px] bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-lg uppercase font-black tracking-widest shadow-inner">3 Kural Aktif</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <RuleItem
                icon={TrendingDown}
                title="Düşük Kâr Marjı Uyarısı"
                desc="Kâr marjı %15'in altına düştüğünde tetiklenir"
                user="Mağaza Sahibi"
                schedule="Gerçek Zamanlı"
                enabled
              />
              <RuleItem
                icon={Box}
                title="Kritik Stok Uyarısı"
                desc="Stok adedi 5 ünitenin altına düştüğünde tetiklenir"
                user="Depo Müdürü"
                schedule="Günlük @ 09:00"
                enabled
                activeRow
              />
              <RuleItem
                icon={MonitorCheck}
                title="Servis Hazır Bildirimi"
                desc="Fiş durumu 'TAMAMLANDI' olarak değiştiğinde tetiklenir"
                user="Müşteri"
                schedule="Anında"
                enabled={false}
              />
            </div>
          </div>

          {/* SMS Günlükleri */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col group">
            <div className="px-10 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 flex justify-between items-center">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Son Gönderim Günlükleri</h4>
              <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Tümünü Gör</button>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-950/50 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                    <th className="px-10 py-5">Zaman Damgası</th>
                    <th className="px-8 py-5">Alıcı</th>
                    <th className="px-8 py-5">Tetikleyici Olay</th>
                    <th className="px-10 py-5 text-right">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                  <LogRow time="14:22:10 Bugün" recipient="+90 (555) 0123" event="Kritik Stok" status="İletildi" variant="emerald" />
                  <LogRow time="12:05:44 Bugün" recipient="+90 (555) 8829" event="Servis Hazır" status="Gönderildi" variant="blue" />
                  <LogRow time="09:15:22 Bugün" recipient="+90 (555) 0123" event="Kritik Stok" status="Hata" variant="red" />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Uyarı Yapılandırması ve Şablonlar (Sağ Sütun) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Yapılandırma Paneli */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-blue-500/20 dark:border-blue-500/10 p-10 flex flex-col group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/20 dark:from-slate-900 dark:to-blue-900/5">
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-600 shadow-xl shadow-blue-600/5 transition-transform group-hover:scale-110">
                <Settings2 className="w-6 h-6" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Kural Parametreleri</h4>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Eşik Değeri</label>
                <div className="relative group/input">
                  <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-4 text-sm font-black text-slate-900 dark:text-white shadow-inner outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" type="number" defaultValue="5" />
                  <span className="absolute right-6 top-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Adet</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Alıcı Kategorisi</label>
                <div className="relative group/input">
                  <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-4 text-[10px] font-black text-slate-900 dark:text-white shadow-inner outline-none focus:ring-2 focus:ring-blue-500/20 transition-all uppercase tracking-widest appearance-none cursor-pointer">
                    <option>Depo Müdürü</option>
                    <option>Teknisyenler</option>
                    <option>Mağaza Sahibi</option>
                    <option>Tüm Personel</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800 relative z-10">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4 block ml-2">SMS Şablon Düzenleyici</label>
              <div className="relative group/editor">
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-3xl p-6 text-[11px] font-bold text-slate-900 dark:text-white leading-relaxed placeholder:text-slate-300 dark:placeholder:text-slate-700 shadow-inner resize-none focus:ring-2 focus:ring-blue-500/20 outline-none"
                  rows={5}
                  defaultValue="UYARI: {{Item_Name}} kritik eşiğin altında. Mevcut stok: {{Stock_Level}} adet. Lütfen hemen stok yenileyin."
                ></textarea>
                <div className="absolute bottom-4 right-4 text-[8px] font-black text-slate-300 uppercase tracking-widest">112/160</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <VariableTag label="#Item_Name" />
                <VariableTag label="#Stock_Level" />
                <VariableTag label="#Category" />
              </div>
            </div>

            <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95 relative z-10">
              Kural Yapılandırmasını Kaydet
            </button>
          </div>

          {/* Ağ Geçidi Yapılandırması */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 p-10 flex flex-col group">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Ağ Geçidi Durumu</h4>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-inner group/api cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-lg border border-red-500/10 group-hover/api:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">Twilio API</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Çalışıyor</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 rounded-2xl transition-all group/test hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600 active:scale-95">
                <Send className="w-4 h-4 group-hover/test:translate-x-1 group-hover/test:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Test SMS Gönder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RuleItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  user: string;
  schedule: string;
  enabled: boolean;
  activeRow?: boolean;
}

function RuleItem({ icon: Icon, title, desc, user, schedule, enabled, activeRow }: RuleItemProps) {
  return (
    <div className={cn(
      "group p-10 hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-all flex items-center justify-between relative cursor-pointer border-l-8 border-transparent transition-all duration-300",
      activeRow && "bg-blue-600/5 border-blue-600"
    )}>
      <div className="flex items-start gap-6">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 shadow-black/10",
          activeRow ? "bg-blue-600 text-white" : "bg-blue-500/10 text-blue-600"
        )}>
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className={cn("text-lg font-black tracking-tight uppercase tracking-tight transition-colors", activeRow ? "text-blue-600" : "text-slate-900 dark:text-white group-hover:text-blue-600")}>{title}</h3>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{desc}</p>
          <div className="flex gap-8 mt-5">
            <span className="text-[10px] text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em] font-black group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              <User className="w-3.5 h-3.5" /> {user}
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em] font-black group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              <Clock className="w-3.5 h-3.5" /> {schedule}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <label className="relative inline-flex items-center cursor-pointer group/toggle active:scale-95 transition-transform">
          <input checked={enabled} className="sr-only peer" type="checkbox" readOnly />
          <div className="w-12 h-7 bg-slate-200 dark:bg-slate-800 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-inner transition-colors"></div>
        </label>
        <button className="p-3 rounded-2xl text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

interface LogRowProps {
  time: string;
  recipient: string;
  event: string;
  status: string;
  variant: string;
}

function LogRow({ time, recipient, event, status, variant }: LogRowProps) {
  const colors: Record<string, string> = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
  };

  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/30 transition-all group cursor-pointer">
      <td className="px-10 py-6 text-slate-400 text-[11px] font-black uppercase tracking-widest">{time}</td>
      <td className="px-8 py-6 font-black text-slate-900 dark:text-white tracking-tighter text-sm">{recipient}</td>
      <td className="px-8 py-6 text-slate-500 italic font-bold text-[10px] uppercase tracking-widest group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{event}</td>
      <td className="px-10 py-6 text-right">
        <span className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-inner border transition-all group-hover:scale-105", colors[variant])}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function VariableTag({ label }: { label: string }) {
  return (
    <span className="text-[9px] font-black bg-slate-100 dark:bg-slate-950 text-slate-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/20 transition-all uppercase tracking-widest shadow-sm active:scale-95">
      {label}
    </span>
  );
}
