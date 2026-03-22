"use client";

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
import { useState } from "react";

export default function MessagingGateway() {
  const [waConnected, setWaConnected] = useState(true);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight">
      {/* Header & Intro */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Communication Layer</span>
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-none uppercase">Messaging Gateway</h1>
        <p className="text-slate-500 font-bold text-sm max-w-3xl mt-2 uppercase tracking-tight">Configure how TechAtelier communicates with your clients and staff. Toggle between SMS and WhatsApp protocols for automated operational triggers.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* WhatsApp API Configuration (Large Card) */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>

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
                <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">WhatsApp API Node</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Pair your business instance via QR or Secret Key</p>
              </div>
            </div>
            <div className={cn(
              "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 border shadow-inner",
              waConnected ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"
            )}>
              <span className={cn("w-2 h-2 rounded-full", waConnected ? "bg-emerald-500 animate-pulse" : "bg-red-500")}></span>
              {waConnected ? "Connected" : "Disconnected"}
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
            {/* QR Code Mockup */}
            <div className="w-56 h-56 bg-white dark:bg-white border-8 border-slate-50 dark:border-slate-800 p-5 rounded-[2.5rem] flex items-center justify-center relative shadow-2xl group cursor-pointer transition-all hover:scale-105 active:scale-95">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa9WFftxgjCHXzUA5e0VQRBXY0CNLcZ_tYo3-2ay2N6CeuEkckC__xCcxW-fHspEyFGoYZsSiFh4i7KN0K9vdxV2mL2Vj6D8ibd99oX5HdsmlKx6R5uUtA1XYtNPJwSQqZ-QEM9Q600YP64jzcFMr53Og9EXYH5Px0ioKX2SKGwgE5eEH9p2u-2mQfOdQXAL2ozrESymHklyYQrNLzVrqIkrnf3bi1xChrOvz2wtsBvsv-yfVmXC8LjMhuuf9FlkfxTA7VwGbrNdc"
                alt="QR Code"
                width={200}
                height={200}
                className="opacity-90 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded-[2.5rem]">
                <button className="bg-blue-600 text-white text-[10px] font-black px-6 py-3 rounded-2xl shadow-2xl shadow-blue-600/40 uppercase tracking-widest active:scale-90 transition-all">REFRESH QR</button>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-6 w-full">
              <ConfigInput label="Business API Key" value="*************************" password icon={Copy} />
              <ConfigInput label="Webhook URL" value="https://api.techatelier.com/v1/webhook/wa_09x" readOnly />

              <div className="flex items-center gap-6 mt-4">
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95">Validate Session</button>
                <button
                  onClick={() => setWaConnected(!waConnected)}
                  className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] hover:underline decoration-2 underline-offset-8 transition-all"
                >
                  {waConnected ? "Disconnect Instance" : "Connect Instance"}
                </button>
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
        {/* SMS Gateway (Small Card) */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 flex flex-col group">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-xl border border-blue-500/20 transition-transform group-hover:scale-110">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">SMS Gateway</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Twilio Integration</p>
            </div>
          </div>

          <div className="space-y-6 flex-1">
            <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-inner group/balance">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-paid Balance</span>
                <span className="text-sm font-black text-blue-600 tracking-tighter">$142.80</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                <div className="w-[70%] h-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 group-hover/balance:brightness-125"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Sender ID</label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-3.5 text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest shadow-inner focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                type="text"
                defaultValue="TECHATEL"
              />
            </div>
          </div>

          <button className="mt-10 w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-50 dark:hover:bg-slate-950 hover:border-blue-500/30 hover:text-blue-500 transition-all active:scale-95 group shadow-inner">
            <Plus className="w-4 h-4 inline-block mr-2 group-hover:scale-125 transition-transform" />
            RELOAD CREDITS
          </button>
        </div>

        {/* Trigger Matrix (Full Width) */}
        <div className="col-span-12 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">Trigger Matrix</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Define primary channels and templates for automated alerts</p>
            </div>
            <button className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95">Save All Changes</button>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/50 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                  <th className="px-10 py-6">Event Trigger</th>
                  <th className="px-6 py-6">Primary Channel</th>
                  <th className="px-6 py-6">Status</th>
                  <th className="px-10 py-6">Template Preview</th>
                  <th className="px-6 py-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <TriggerRow
                  icon={Database}
                  variant="amber"
                  title="Low Stock"
                  desc="Stock levels < 10%"
                  primary="wa"
                  enabled
                  template="Alert: {{Product_Name}} is low on stock ({{Stock_Qty}} remaining)."
                />
                <TriggerRow
                  icon={CheckCircle2}
                  variant="emerald"
                  title="Service Ready"
                  desc="Order status → Finished"
                  primary="sms"
                  enabled
                  template="Hello {{Customer_Name}}, your {{Device_Model}} is ready for pickup."
                />
                <TriggerRow
                  icon={Zap}
                  variant="red"
                  title="Low Margin Alert"
                  desc="Profit margin < 15%"
                  primary="wa"
                  enabled={false}
                  template="Admin Notice: Transaction {{Invoice_ID}} has a low margin."
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Template Editor (Bottom Section) */}
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">Active Template: <span className="text-blue-600">Service Ready</span></h3>
            <span className="text-[9px] bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800 font-mono font-black text-slate-500 uppercase tracking-widest shadow-inner">ID: TMP_882</span>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-3xl p-8 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none resize-none min-h-[180px] leading-relaxed shadow-inner"
                defaultValue="Hello {{Customer_Name}}, Your {{Device_Model}} is now ready for collection at {{Store_Name}}. Ticket ID: #{{Ticket_ID}}. Thank you for choosing TechAtelier!"
              ></textarea>
              <div className="absolute bottom-5 right-5 text-[9px] font-black text-slate-300 uppercase tracking-widest">142/160 chars</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <VariableTag name="Customer_Name" />
              <VariableTag name="Device_Model" />
              <VariableTag name="Ticket_ID" />
              <VariableTag name="Store_Name" />
              <VariableTag name="Total_Amount" />
            </div>
          </div>
        </div>

        {/* Visual Preview (Mobile Glass) */}
        <div className="col-span-12 lg:col-span-5 bg-slate-900 rounded-[3.5rem] p-8 shadow-2xl flex items-center justify-center border-[10px] border-slate-800 relative h-[450px] lg:h-auto overflow-hidden">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-full z-20"></div>

          <div className="w-full max-w-[300px] space-y-6 relative z-10">
            {/* WhatsApp Preview Card */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl transform -rotate-3 scale-95 relative z-10 border-l-8 border-emerald-500 shadow-emerald-500/10 transition-transform hover:rotate-0 transition-all duration-500 cursor-crosshair">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">WhatsApp Business</span>
                <span className="text-[9px] font-black text-slate-300 uppercase">14:20</span>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-800 font-medium">
                Hello <b className="font-black">John Doe</b>, your <b className="font-black text-blue-600">iPhone 13 Pro</b> is now ready for collection at <b className="font-black">Main Street Hub</b>.
              </p>
            </div>

            {/* SMS Preview Card */}
            <div className="bg-[#E9E9EB] rounded-[2rem] p-5 shadow-2xl transform rotate-2 relative z-20 shadow-slate-400/20 transition-transform hover:rotate-0 transition-all duration-500 cursor-crosshair">
              <p className="text-[12px] text-black font-medium leading-relaxed">
                <span className="font-black uppercase tracking-tighter">TechAtelier:</span> Hello John, your device is ready! Ticket #4928. Total: $85.00. See you soon!
              </p>
              <div className="absolute -bottom-1.5 right-6 w-5 h-5 bg-[#E9E9EB] transform rotate-45 shadow-sm"></div>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] animate-pulse">Real-time Visualizer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ConfigInputProps {
  label: string;
  value: string;
  password?: boolean;
  readOnly?: boolean;
  icon?: React.ElementType;
}

function ConfigInput({ label, value, password, readOnly, icon: Icon }: ConfigInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{label}</label>
      <div className="flex gap-3">
        <input
          className={cn(
            "flex-1 bg-slate-50 dark:bg-slate-950 border-none rounded-2xl px-6 py-3.5 text-sm font-mono shadow-inner outline-none transition-all",
            readOnly ? "text-slate-400 cursor-not-allowed" : "text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20"
          )}
          type={password ? "password" : "text"}
          defaultValue={value}
          readOnly={readOnly}
        />
        {Icon && (
          <button className="bg-slate-100 dark:bg-slate-800 px-5 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95 text-slate-500 shadow-md">
            <Icon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

interface TriggerRowProps {
  icon: React.ElementType;
  variant: string;
  title: string;
  desc: string;
  primary: string;
  enabled: boolean;
  template: string;
}

function TriggerRow({ icon: Icon, variant, title, desc, primary, enabled, template }: TriggerRowProps) {
  const colors: Record<string, string> = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
  };

  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/30 transition-all group cursor-pointer">
      <td className="px-10 py-8">
        <div className="flex items-center gap-5">
          <div className={cn("p-3 rounded-2xl transition-transform group-hover:scale-110 shadow-lg", colors[variant])}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">{title}</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{desc}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-8">
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl w-fit shadow-inner">
          <button className={cn(
            "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
            primary === 'wa' ? "bg-white dark:bg-slate-700 shadow-xl text-blue-600" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          )}>WhatsApp</button>
          <button className={cn(
            "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
            primary === 'sms' ? "bg-white dark:bg-slate-700 shadow-xl text-blue-600" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          )}>SMS</button>
        </div>
      </td>
      <td className="px-6 py-8">
        <label className="relative inline-flex items-center cursor-pointer group/toggle active:scale-95 transition-transform">
          <input checked={enabled} className="sr-only peer" type="checkbox" readOnly />
          <div className="w-11 h-6 bg-slate-200 dark:bg-slate-800 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
        </label>
      </td>
      <td className="px-10 py-8 max-w-xs">
        <div className="text-[11px] text-slate-500 font-bold italic truncate bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
          &quot;{template}&quot;
        </div>
      </td>
      <td className="px-6 py-8 text-right">
        <button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-500/10 rounded-2xl transition-all active:scale-95 group/btn">
          <Edit3 className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
        </button>
      </td>
    </tr>
  );
}

function VariableTag({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-[10px] font-black rounded-xl hover:bg-blue-500/10 hover:text-blue-500 cursor-pointer transition-all border border-slate-200 dark:border-slate-800 uppercase tracking-widest shadow-sm active:scale-95">
      {`{{${name}}}`}
    </span>
  );
}
