import {
  QrCode,
  MessageSquare,
  Plus,
  Copy,
  CheckCircle2,
  Edit3,
  Database,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

async function getMessagingSettings() {
  const settings = await prisma.systemSettings.findUnique({
    where: { id: 'default' }
  });

  const rules = await prisma.automationRule.findMany({
    take: 5
  });

  return { settings, rules };
}

export default async function MessagingGateway() {
  const { settings, rules } = await getMessagingSettings();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">İletişim Katmanı</span>
        <h1 className="text-4xl font-black tracking-tighter leading-none uppercase">Mesajlaşma Ağ Geçidi</h1>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-start justify-between mb-12 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-xl border border-emerald-500/20">
                <QrCode className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">WhatsApp API Düğümü</h3>
              </div>
            </div>
            <div className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 border bg-emerald-50 text-emerald-600 border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Aktif
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 items-center relative z-10">
            <div className="w-56 h-56 bg-white dark:bg-white border-8 border-slate-50 dark:border-slate-800 p-5 rounded-[2.5rem] flex items-center justify-center relative shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa9WFftxgjCHXzUA5e0VQRBXY0CNLcZ_tYo3-2ay2N6CeuEkckC__xCcxW-fHspEyFGoYZsSiFh4i7KN0K9vdxV2mL2Vj6D8ibd99oX5HdsmlKx6R5uUtA1XYtNPJwSQqZ-QEM9Q600YP64jzcFMr53Og9EXYH5Px0ioKX2SKGwgE5eEH9p2u-2mQfOdQXAL2ozrESymHklyYQrNLzVrqIkrnf3bi1xChrOvz2wtsBvsv-yfVmXC8LjMhuuf9FlkfxTA7VwGbrNdc"
                alt="QR Kod"
                width={200}
                height={200}
              />
            </div>

            <div className="flex-1 grid grid-cols-1 gap-6 w-full">
               <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">API Anahtarı</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-3.5 text-sm font-mono shadow-inner" type="password" value={settings?.whatsappApiKey || "Kayıtlı değil"} readOnly />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Webhook</label>
                <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-3.5 text-sm font-mono shadow-inner" type="text" value={settings?.whatsappWebhookUrl || "Bağlantı yok"} readOnly />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-xl border border-blue-500/20">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">SMS Ağ Geçidi</h3>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Sender ID</label>
              <input className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-3.5 text-sm font-black uppercase shadow-inner" type="text" value={settings?.smsSenderId || "TECHATEL"} readOnly />
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
             <h3 className="text-xl font-black uppercase tracking-widest">Otomasyon Kuralları</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/50 text-[10px] font-black text-slate-400 uppercase">
                  <th className="px-10 py-6">Kural Adı</th>
                  <th className="px-6 py-6">Kanal</th>
                  <th className="px-6 py-6">Durum</th>
                  <th className="px-6 py-6 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {rules.map(r => (
                  <tr key={r.id}>
                    <td className="px-10 py-8 font-black uppercase text-sm">{r.name}</td>
                    <td className="px-6 py-8"><span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-[9px] font-black uppercase">{r.primaryChannel}</span></td>
                    <td className="px-6 py-8">{r.isEnabled ? 'Açık' : 'Kapalı'}</td>
                    <td className="px-6 py-8 text-right"><button className="p-3 text-slate-400 hover:text-blue-600"><Edit3 className="w-5 h-5" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
