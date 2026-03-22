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
import { prisma } from "@/lib/prisma";

async function getAutomationsData() {
  const rules = await prisma.automationRule.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return { rules };
}

export default async function SMSAutomations() {
  const { rules } = await getAutomationsData();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">Otomasyon Katmanı</span>
          <h2 className="text-4xl font-black tracking-tight uppercase leading-none">Bildirim Merkezi</h2>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95 flex items-center gap-3">
          <PlusCircle className="w-5 h-5" />
          Yeni Kural
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="px-10 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Aktif Otomasyon Kuralları</span>
              <span className="text-[10px] bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-lg uppercase font-black tracking-widest">{rules.length} Kural Aktif</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {rules.map(r => (
                <div key={r.id} className="p-10 hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-all flex items-center justify-between">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-500/10 text-blue-600">
                       <MonitorCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black tracking-tight uppercase">{r.name}</h3>
                      <div className="flex gap-4 mt-2">
                         <span className="text-[9px] font-black uppercase bg-blue-50 text-blue-600 px-2 py-1 rounded">{r.primaryChannel}</span>
                         <span className="text-[9px] font-black uppercase bg-slate-100 text-slate-500 px-2 py-1 rounded">{r.recipientRole}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className={cn("w-12 h-7 rounded-full relative transition-colors", r.isEnabled ? "bg-blue-600" : "bg-slate-200")}>
                      <div className={cn("absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform", r.isEnabled ? "translate-x-5" : "translate-x-0")}></div>
                    </div>
                    <button className="p-3 text-slate-300 hover:text-slate-900"><MoreVertical className="w-6 h-6" /></button>
                  </div>
                </div>
              ))}
              {rules.length === 0 && (
                <div className="py-20 text-center text-slate-400 italic">Otomasyon kuralı tanımlanmamış.</div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-blue-500/20">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10">Hızlı Test</h4>
            <button className="w-full flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl hover:text-blue-600 hover:border-blue-500/30 transition-all">
              <Send className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase">Test Mesajı Gönder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
