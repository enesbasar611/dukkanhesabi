import {
  TrendingUp,
  PieChart,
  Calendar,
  ArrowUpRight,
  Zap,
  Target,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

async function getReportsStats() {
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const monthlyRevenue = await prisma.transaction.aggregate({
    where: { type: 'INCOME', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  const totalTickets = await prisma.serviceTicket.count({
    where: { createdAt: { gte: monthStart } }
  });

  const completedTickets = await prisma.serviceTicket.count({
    where: { status: 'DELIVERED', updatedAt: { gte: monthStart } }
  });

  const completionRate = totalTickets > 0 ? Math.round((completedTickets / totalTickets) * 100) : 0;

  return {
    revenue: monthlyRevenue._sum.amount || 0,
    completionRate,
    totalTickets
  };
}

export default async function ReportsPage() {
  const stats = await getReportsStats();

  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Raporlar & Analizler</h1>
          <p className="text-slate-500 mt-1">İşletmenizin performans verilerini derinlemesine inceleyin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-all shadow-sm">
            <Calendar className="w-4 h-4" /> Bu Ay
          </button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Genel Rapor Oluştur
          </button>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Satış Performansı", desc: "Ürün ve hizmet satışlarının detaylı dökümü.", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-50", href: "/reports/sales" },
          { title: "Kâr & Zarar", desc: "Giderler ve net kâr marjı analizi.", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", href: "/finance/profit-analysis" },
          { title: "Envanter Raporu", desc: "Stok devir hızı ve depo doluluk oranları.", icon: PieChart, color: "text-purple-600", bg: "bg-purple-50", href: "/inventory" },
        ].map((report, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner", report.bg, "dark:bg-slate-800")}>
              <report.icon className={cn("w-8 h-8", report.color)} />
            </div>
            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{report.title}</h3>
            <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">{report.desc}</p>
            <a href={report.href} className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
              Raporu Aç <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-lg font-black uppercase tracking-widest">Aylık İlerleme</h4>
            <div className="flex items-center gap-2 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-xs font-black">
              <ArrowUpRight className="w-3.5 h-3.5" /> +14.2%
            </div>
          </div>
          <div className="space-y-6">
            {[
              { label: "Servis Tamamlama", val: stats.completionRate, color: "bg-blue-600" },
              { label: "Hedef Ciro", val: Math.min(100, Math.round((stats.revenue / 100000) * 100)), color: "bg-emerald-500" },
              { label: "Müşteri Memnuniyeti", val: 94, color: "bg-amber-500" },
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <span>{s.label}</span>
                  <span>%{s.val}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className={cn("h-full rounded-full transition-all duration-1000", s.color)} style={{ width: `${s.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h4 className="text-lg font-black uppercase tracking-widest opacity-80 mb-6">Akıllı İçgörüler</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-white/10 rounded-xl shrink-0"><Zap className="w-5 h-5 text-amber-400" /></div>
                <p className="text-sm font-bold text-slate-300 leading-relaxed italic">
                  &quot;Bu ay teknik servis hızı geçen aya göre %12 arttı. Bu tempo devam ederse aylık hedef %5 aşılacak.&quot;
                </p>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-white/10 rounded-xl shrink-0"><Target className="w-5 h-5 text-blue-400" /></div>
                <p className="text-sm font-bold text-slate-300 leading-relaxed italic">
                  &quot;Aksesuarlarda stok devir hızı çok yüksek. Stok yenileme sıklığını artırmanızı öneririm.&quot;
                </p>
              </div>
            </div>
          </div>
          <button className="relative z-10 w-full mt-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all">
            Detaylı AI Analizini İndir
          </button>
        </div>
      </div>
    </div>
  );
}
