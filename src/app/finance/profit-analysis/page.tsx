import {
  TrendingUp,
  Wallet,
  Star,
  BarChart3,
  Package,
  Calendar,
  Filter,
  Download,
  Save,
  Store,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

async function getProfitData() {
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const incomes = await prisma.transaction.aggregate({
    where: { type: 'INCOME', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  const expenses = await prisma.transaction.aggregate({
    where: { type: 'EXPENSE', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  const categoryProfits = await prisma.transaction.groupBy({
    by: ['category'],
    where: { type: 'INCOME', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  const totalIncome = incomes._sum.amount || 0;
  const totalExpense = expenses._sum.amount || 0;
  const netProfit = totalIncome - totalExpense;

  return {
    netProfit,
    totalIncome,
    totalExpense,
    categoryProfits: categoryProfits.map(cp => ({
      name: cp.category,
      revenue: cp._sum.amount || 0,
      percent: totalIncome > 0 ? Math.round(((cp._sum.amount || 0) / totalIncome) * 100) : 0
    }))
  };
}

export default async function ProfitAnalysis() {
  const data = await getProfitData();

  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-200 antialiased overflow-hidden relative">
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">FİNANSAL ANALİZ</span>
              <div className="w-12 h-[2px] bg-blue-500/30"></div>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white uppercase leading-none">Kategori Bazlı Kâr Analizi</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2 max-w-lg">Hizmet ve ürün gruplarına göre finansal performans.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center px-4 py-2.5 shadow-2xl shadow-black/40">
              <Calendar className="w-4 h-4 text-slate-500 mr-2" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Bu Ay</span>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-3 rounded-2xl border border-white/5 transition-all active:scale-95 shadow-2xl shadow-black/40">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard label="Toplam Net Kâr" val={`${data.netProfit.toLocaleString('tr-TR')} ₺`} trend="+%12,4" icon={Wallet} variant="blue" />
          <KPICard label="Toplam Gelir" val={`${data.totalIncome.toLocaleString('tr-TR')} ₺`} detail="Bu ayki ciro" icon={Star} variant="purple" />
          <KPICard label="Kâr Marjı" val="%32.4" progress={32.4} icon={BarChart3} variant="amber" />
          <KPICard label="Stok Yatırım ROI" val="x3.2" detail="Sektör Ort: x2.1" icon={Package} variant="emerald" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doughnut Chart Mockup */}
          <div className="lg:col-span-1 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/[0.05] flex flex-col items-center shadow-2xl shadow-black/40">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10 w-full text-left">Gelir Dağılımı</h4>
            <div className="relative w-52 h-52 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[20px] border-slate-900"></div>
              <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-blue-500 border-r-blue-500 rotate-45"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">NET KÂR</span>
                <span className="text-2xl font-black text-white tracking-tighter mt-1 uppercase">₺{(data.netProfit/1000).toFixed(1)}K</span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 w-full">
              {data.categoryProfits.map((cp, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-3 h-3 rounded-sm", i % 2 === 0 ? "bg-blue-500" : "bg-purple-500")}></div>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest group-hover:text-white transition-colors">{cp.name}</span>
                  </div>
                  <span className="text-xs font-black">%{cp.percent}</span>
                </div>
              ))}
              {data.categoryProfits.length === 0 && <p className="text-center text-slate-500 text-[10px] font-black uppercase">Veri bulunamadı</p>}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/[0.05] shadow-2xl shadow-black/40 flex flex-col justify-center items-center opacity-50">
             <BarChart3 className="w-20 h-20 mb-4 text-slate-700" />
             <p className="font-black uppercase tracking-widest text-sm">Trend Analizi Yakında</p>
          </div>
        </div>

        {/* Detailed Analysis Table */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/60 relative z-20">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Detaylı Kâr Tablosu</h4>
            <button className="flex items-center gap-2 text-[10px] font-black text-blue-400 hover:text-blue-300 transition-all uppercase tracking-widest group border border-blue-400/20 px-6 py-3 rounded-2xl hover:bg-blue-400/5">
              <Download className="w-4 h-4" /> DIŞA AKTAR
            </button>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-950/50 text-slate-500 uppercase text-[10px] font-black tracking-[0.3em]">
                  <th className="px-8 py-6">Kategori</th>
                  <th className="px-8 py-6">Gelir (₺)</th>
                  <th className="px-8 py-6">Pay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.categoryProfits.map((cp, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-all group cursor-pointer">
                    <td className="px-8 py-6 font-black text-slate-100 uppercase tracking-tight">{cp.name}</td>
                    <td className="px-8 py-6 text-slate-200 font-black tracking-tight">₺{cp.revenue.toLocaleString('tr-TR')}</td>
                    <td className="px-8 py-6 text-emerald-400 font-black tracking-tighter">%{cp.percent}</td>
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

function KPICard({ label, val, trend, detail, icon: Icon, variant, tag, progress }: any) {
  const colors: any = {
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/20 shadow-blue-400/10",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20 shadow-purple-400/10",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-amber-400/10",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10",
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-3 rounded-2xl", colors[variant])}><Icon className="w-6 h-6" /></div>
        {trend && <span className="text-emerald-400 text-[10px] font-black uppercase">{trend}</span>}
      </div>
      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{label}</p>
      <h3 className="font-black tracking-tighter text-white text-2xl">{val}</h3>
      {progress !== undefined && (
        <div className="mt-4 w-full bg-slate-800/50 h-2 rounded-full overflow-hidden">
          <div className={cn("h-full rounded-full transition-all", variant === 'amber' ? "bg-amber-400" : "bg-blue-500")} style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}
