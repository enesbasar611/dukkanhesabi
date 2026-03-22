import {
  Calendar,
  ChevronDown,
  Download,
  FileText,
  TrendingUp,
  TrendingDown,
  Receipt,
  Wallet,
  Undo2,
  ArrowRight,
  MonitorCheck,
  Box,
  BadgeCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

async function getSalesData() {
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const prevMonthStart = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
  const prevMonthEnd = new Date(new Date().getFullYear(), new Date().getMonth(), 0);

  const [totalSales, prevSales, avgOrder, netProfit, topProducts] = await Promise.all([
    prisma.transaction.aggregate({
      where: { type: 'INCOME', createdAt: { gte: monthStart } },
      _sum: { amount: true },
      _count: { id: true }
    }),
    prisma.transaction.aggregate({
      where: { type: 'INCOME', createdAt: { gte: prevMonthStart, lte: prevMonthEnd } },
      _sum: { amount: true }
    }),
    prisma.transaction.aggregate({
      where: { type: 'INCOME', createdAt: { gte: monthStart } },
      _avg: { amount: true }
    }),
    prisma.transaction.aggregate({
      where: { createdAt: { gte: monthStart } },
      _sum: { amount: true } // This is tricky, needs type-based calc in real apps
    }),
    prisma.product.findMany({
      orderBy: { stock: 'asc' }, // Mocking top products with low stock for UI
      take: 5
    })
  ]);

  const salesTrend = ( (totalSales._sum.amount || 0) / (prevSales._sum.amount || 1) - 1 ) * 100;

  return {
    stats: {
      total: totalSales._sum.amount || 0,
      count: totalSales._count.id,
      trend: salesTrend.toFixed(1),
      avg: avgOrder._avg.amount || 0,
      profit: (totalSales._sum.amount || 0) * 0.3, // Mocked 30% margin
    },
    topProducts
  };
}

export default async function DetailedSalesReport() {
  const { stats, topProducts } = await getSalesData();

  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-200 antialiased overflow-hidden">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-blue-500 font-black tracking-[0.2em] text-[10px] uppercase mb-1">Finansal Performans</p>
          <h2 className="text-4xl font-black tracking-tight text-white uppercase leading-none">Detaylı Satış Raporu</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Hassas işlem ve hacim analizi</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FilterButton icon={Calendar} label="Bu Ay" />
          <FilterButton icon={Box} label="Tüm Kategoriler" />
          <div className="h-8 w-px bg-slate-800 mx-2"></div>
          <button className="flex items-center gap-2 bg-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-all active:scale-95 group shadow-xl shadow-blue-600/20">
            <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Excel Çıktısı</span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard label="Toplam Satış" val={`${stats.total.toLocaleString('tr-TR')} ₺`} trend={`+%${stats.trend}`} detail={`Bu Ay: ${stats.count} adet`} icon={Receipt} variant="blue" />
        <KPICard label="Ort. Sipariş" val={`${stats.avg.toLocaleString('tr-TR')} ₺`} trend="+%3,2" detail="geçen aya göre" icon={MonitorCheck} variant="emerald" />
        <KPICard label="Tahmini Kâr" val={`${stats.profit.toLocaleString('tr-TR')} ₺`} trend="+%8,1" detail="Marj: %30" icon={Wallet} variant="purple" />
        <KPICard label="İade Oranı" val="%1,24" trend="-%0,4" detail="Stabil" icon={Undo2} variant="red" inverseTrend />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem] flex flex-col justify-center items-center opacity-50">
           <TrendingUp className="w-20 h-20 mb-4 text-slate-700" />
           <p className="font-black uppercase tracking-widest text-sm">Satış Trend Grafiği Yakında</p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem]">
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8">Kategori Dağılımı</h3>
          <div className="space-y-8">
            <CategoryBar label="Aksesuarlar" percent={45} color="bg-blue-500" />
            <CategoryBar label="Ekran Koruma" percent={32} color="bg-emerald-500" />
            <CategoryBar label="Yedek Parçalar" percent={18} color="bg-purple-500" />
            <CategoryBar label="Diğer" percent={5} color="bg-amber-500" />
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] overflow-hidden">
        <div className="p-10 flex justify-between items-center border-b border-white/5 bg-white/5">
          <h3 className="text-xl font-black text-white uppercase tracking-tight">Popüler Ürünler</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-900/40 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-6">Ürün</th>
                <th className="px-8 py-6">Kategori</th>
                <th className="px-8 py-6">Stok Durumu</th>
                <th className="px-8 py-6">Fiyat</th>
                <th className="px-8 py-6 text-right">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {topProducts.map(p => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-all group cursor-pointer">
                  <td className="px-10 py-6 font-black text-white uppercase">{p.name}</td>
                  <td className="px-8 py-6 text-[10px] font-black uppercase text-blue-400">{p.category}</td>
                  <td className="px-8 py-6 font-bold text-slate-400">{p.stock} Adet</td>
                  <td className="px-8 py-6 font-black text-white">{p.salePrice.toLocaleString('tr-TR')} ₺</td>
                  <td className="px-8 py-6 text-right">
                    <TrendingUp className="w-5 h-5 text-emerald-400 ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-5 py-2.5 cursor-pointer hover:border-blue-500 transition-all">
      <Icon className="w-4 h-4 text-blue-400" />
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{label}</span>
      <ChevronDown className="w-3 h-3 text-slate-500" />
    </div>
  );
}

function KPICard({ label, val, trend, detail, icon: Icon, variant, inverseTrend }: any) {
  const colors: any = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
  };
  const isUp = trend.startsWith('+');
  return (
    <div className="bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] flex flex-col justify-between group hover:scale-[1.02] transition-all">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase text-slate-500">{label}</span>
          <div className={cn("p-3 rounded-2xl", colors[variant])}><Icon className="w-6 h-6" /></div>
        </div>
        <div className="text-3xl font-black tracking-tighter text-white">{val}</div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
        <span className={cn("flex items-center font-black text-[10px] uppercase", isUp ? "text-emerald-400" : "text-red-400")}>
          {isUp ? <TrendingUp className="w-4 h-4 mr-2" /> : <TrendingDown className="w-4 h-4 mr-2" />} {trend}
        </span>
        <span className="text-[10px] font-bold text-slate-500 uppercase">{detail}</span>
      </div>
    </div>
  );
}

function CategoryBar({ label, percent, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-black uppercase mb-3">
        <span className="text-slate-400">{label}</span>
        <span className="text-white">%{percent}</span>
      </div>
      <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
        <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
