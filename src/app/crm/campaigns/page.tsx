import {
  Users,
  Star,
  History,
  BarChart3,
  ChevronRight,
  Smartphone,
  Smile,
  Paperclip,
  AtSign,
  Clock,
  Video,
  Phone,
  Mic,
  Info,
  Percent,
  PartyPopper,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

async function getCampaignData() {
  const campaigns = await prisma.campaign.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  const stats = {
    smsUsed: 8420,
    smsTotal: 10000,
    waUsed: 450,
    waTotal: 5000
  };

  return { campaigns, stats };
}

export default async function CampaignManagement() {
  const { campaigns, stats } = await getCampaignData();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-600 mb-2 block">İletişim Motoru</span>
          <h2 className="text-4xl font-black tracking-tighter leading-none uppercase">Kampanya Yönetimi</h2>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 group">
            <BarChart3 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            ROI Analizi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-6 block">1. Hedef Kitleyi Seçin</label>
              <div className="grid grid-cols-2 gap-4">
                <AudienceButton icon={Users} label="Tüm Müşteriler" active />
                <AudienceButton icon={Star} label="VIP Üyeler" />
                <AudienceButton icon={DollarSign} label="Borçlular" variant="red" />
                <AudienceButton icon={History} label="Son 3 Ay" />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-6 block">2. Şablon Seçin</label>
              <div className="space-y-3">
                <TemplateButton icon={Percent} label="Sezonluk İndirim" variant="emerald" />
                <TemplateButton icon={Smartphone} label="Yeni Model Gelişi" variant="blue" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">3. Mesajı Yazın</label>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">WhatsApp Bağlı</span>
              </div>
            </div>

            <div className="p-10">
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700 resize-none min-h-[180px]"
                placeholder="Mesajınızı buraya yazın... Kişiselleştirme için {ad} kullanın."
              ></textarea>

              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex gap-4">
                  <button className="px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Taslağı Kaydet</button>
                  <button className="px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white hover:bg-blue-500 transition-all">Şimdi Gönder</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">Kampanya Geçmişi</h3>
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-950/20 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                    <th className="px-8 py-6">Kampanya Adı</th>
                    <th className="px-8 py-6">Durum</th>
                    <th className="px-8 py-6">İletim</th>
                    <th className="px-8 py-6 text-right">Tarih</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {campaigns.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/30 transition-all group">
                      <td className="px-8 py-6">
                        <span className="text-sm font-black uppercase">{c.name}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 text-[9px] font-black rounded-lg uppercase bg-blue-50 text-blue-600">{c.status}</span>
                      </td>
                      <td className="px-8 py-6 font-black text-sm">%{c.deliveryRate || 0}</td>
                      <td className="px-8 py-6 text-[10px] text-slate-500 font-bold text-right uppercase">{format(c.createdAt, 'dd MMM yyyy', { locale: tr })}</td>
                    </tr>
                  ))}
                  {campaigns.length === 0 && (
                    <tr><td colSpan={4} className="py-10 text-center text-slate-400 italic">Henüz kampanya kaydı yok.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em]">Aylık Kota</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                <span>SMS KREDİSİ</span>
                <span>{stats.smsUsed} / {stats.smsTotal}</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400" style={{ width: `${(stats.smsUsed/stats.smsTotal)*100}%` }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                <span>WHATSAPP MESAJI</span>
                <span>{stats.waUsed} / {stats.waTotal}</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${(stats.waUsed/stats.waTotal)*100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudienceButton({ icon: Icon, label, active, variant }: any) {
  const isRed = variant === 'red';
  return (
    <button className={cn(
      "flex flex-col items-start p-4 rounded-2xl border-2 transition-all text-left",
      active ? (isRed ? "border-red-600 bg-red-600/5" : "border-blue-600 bg-blue-600/5") : "border-transparent bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800"
    )}>
      <Icon className={cn("w-6 h-6 mb-3", active ? (isRed ? "text-red-500" : "text-blue-500") : "text-slate-400")} />
      <span className={cn("text-[10px] font-black uppercase", active ? (isRed ? "text-red-600" : "text-blue-600") : "")}>{label}</span>
    </button>
  );
}

function TemplateButton({ icon: Icon, label, variant }: any) {
  const colors: any = { emerald: "text-emerald-500 bg-emerald-500/10", blue: "text-blue-500 bg-blue-500/10", purple: "text-purple-500 bg-purple-500/10" };
  return (
    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent">
      <div className="flex items-center gap-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors[variant])}><Icon className="w-5 h-5" /></div>
        <span className="text-xs font-black uppercase">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-300" />
    </button>
  );
}
