"use client";

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


export default function ProfitAnalysis() {
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
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2 max-w-lg">İşletmenizin hizmet ve ürün gruplarına göre finansal performans verileri.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center px-4 py-2.5 shadow-2xl shadow-black/40">
              <Calendar className="w-4 h-4 text-slate-500 mr-2" />
              <select className="bg-transparent border-none text-[10px] font-black text-slate-300 focus:ring-0 cursor-pointer uppercase tracking-widest outline-none">
                <option>Son 30 Gün</option>
                <option>Bu Ay</option>
                <option>Geçen Ay</option>
                <option>2024 Yılı Toplam</option>
              </select>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center px-4 py-2.5 shadow-2xl shadow-black/40">
              <Store className="w-4 h-4 text-slate-500 mr-2" />
              <select className="bg-transparent border-none text-[10px] font-black text-slate-300 focus:ring-0 cursor-pointer uppercase tracking-widest outline-none">
                <option>Tüm Şubeler</option>
                <option>Merkez Atölye</option>
                <option>Kadıköy Şubesi</option>
              </select>
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
          <KPICard
            label="Toplam Net Kâr (Bu Ay)"
            val="₺142.850,00"
            trend="+12.4%"
            icon={Wallet}
            variant="blue"
          />
          <KPICard
            label="En Kârlı Kategori"
            val="Teknik Servis İşçilik"
            detail="Pay: %42.8"
            icon={Star}
            variant="purple"
            tag="Lider"
          />
          <KPICard
            label="Ortalama Kâr Marjı"
            val="%68.4"
            progress={68.4}
            icon={BarChart3}
            variant="amber"
          />
          <KPICard
            label="Stok Yatırım ROI"
            val="x3.2"
            detail="Sektör Ort: x2.1"
            icon={Package}
            variant="emerald"
          />
        </div>

        {/* Visual Charts Section (Bento Grid Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doughnut Chart Mockup */}
          <div className="lg:col-span-1 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/[0.05] flex flex-col items-center shadow-2xl shadow-black/40">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10 w-full text-left">Kategori Dağılımı</h4>
            <div className="relative w-52 h-52 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 rounded-full border-[20px] border-slate-900 group-hover:scale-105 transition-transform"></div>
              <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-blue-500 border-r-blue-500 rotate-45 transition-transform group-hover:rotate-90"></div>
              <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-l-purple-500 -rotate-12 transition-transform group-hover:rotate-0"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">NET KÂR</span>
                <span className="text-2xl font-black text-white tracking-tighter mt-1 uppercase">₺142K</span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 w-full">
              <LegendItem color="bg-blue-500" label="T. Servis (%42)" />
              <LegendItem color="bg-purple-500" label="Y. Parça (%28)" />
              <LegendItem color="bg-emerald-500" label="Aksesuar (%15)" />
              <LegendItem color="bg-amber-500" label="Diğer (%15)" />
            </div>
          </div>

          {/* Spline Chart Mockup */}
          <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/[0.05] shadow-2xl shadow-black/40 group">
            <div className="flex items-center justify-between mb-10">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Aylık Kâr Trendi</h4>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Gelir</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Maliyet</span>
                </div>
              </div>
            </div>

            <div className="h-64 w-full flex items-end gap-3 px-2 relative">
              {/* Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-5 pointer-events-none">
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
              </div>

              {/* Simulated Bar Trends */}
              <BarTrend label="OCA" height={32} />
              <BarTrend label="ŞUB" height={40} />
              <BarTrend label="MAR" height={36} />
              <BarTrend label="NİS" height={48} />
              <BarTrend label="MAY" height={44} />
              <BarTrend label="HAZ" height={52} active />
            </div>
          </div>
        </div>

        {/* Detailed Analysis Table */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/60 relative z-20">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Detaylı Kâr Tablosu</h4>
            <button className="flex items-center gap-2 text-[10px] font-black text-blue-400 hover:text-blue-300 transition-all uppercase tracking-widest group border border-blue-400/20 px-6 py-3 rounded-2xl hover:bg-blue-400/5">
              <Download className="w-4 h-4" /> DIŞA AKTAR
            </button>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Kategori Bazlı Detay Analiz</h4>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-widest group">
                <Target className="w-4 h-4 group-hover:scale-110 transition-transform" /> HEDEF YAPILANDIRMA
              </button>
              <button className="flex items-center gap-2 text-[10px] font-black text-blue-400 hover:text-blue-300 transition-all uppercase tracking-widest group border border-blue-400/20 px-6 py-3 rounded-2xl hover:bg-blue-400/5 shadow-xl">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> VERİYİ DIŞA AKTAR
              </button>
            </div>
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
                  <th className="px-8 py-6">Kategori Adı</th>
                  <th className="px-8 py-6">Satış Hacmi</th>
                  <th className="px-8 py-6">Maliyet (₺)</th>
                  <th className="px-8 py-6">Gelir (₺)</th>
                  <th className="px-8 py-6">Net Kâr (₺)</th>
                  <th className="px-8 py-6">Kâr Marjı</th>
                  <th className="px-8 py-6 text-right">Stok Devir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <TableRow
                  name="Teknik Servis İşçilik"
                  volume="412 İşlem"
                  cost="12.400"
                  revenue="68.250"
                  profit="55.850"
                  margin="81.8"
                  turnover="-"
                />
                <TableRow
                  name="Yedek Parçalar"
                  volume="188 Adet"
                  cost="45.600"
                  revenue="82.100"
                  profit="36.500"
                  margin="44.4"
                  turnover="4.2x"
                />
                <TableRow
                  name="Aksesuarlar"
                  volume="852 Adet"
                  cost="18.200"
                  revenue="39.400"
                  profit="21.200"
                  margin="53.8"
                  turnover="8.1x"
                  tag="Düşük"
                  variant="amber"
                />
                <TableRow
                  name="2. El Telefon"
                  volume="14 Cihaz"
                  cost="112.000"
                  revenue="128.500"
                  profit="16.500"
                  margin="12.8"
                  turnover="1.4x"
                  tag="Kritik"
                  variant="red"
                />
                <TableRow
                  name="Ekran Koruma"
                  volume="244 Adet"
                  cost="2.100"
                  revenue="11.400"
                  profit="9.300"
                  margin="81.5"
                  turnover="12.5x"
                />
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
interface KPICardProps {
  label: string;
  val: string;
  trend?: string;
  detail?: string;
  icon: React.ElementType;
  variant: string;
  tag?: string;
  progress?: number;
}

function KPICard({ label, val, trend, detail, icon: Icon, variant, tag, progress }: KPICardProps) {
  const colors: Record<string, string> = {
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
    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer shadow-2xl shadow-black/40">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={cn("p-3 rounded-2xl group-hover:scale-110 transition-transform", colors[variant])}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className="text-emerald-400 text-[10px] font-black flex items-center gap-1 uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" /> {trend}
          </span>
        )}
        {tag && (
          <span className={cn("px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] shadow-inner", colors[variant])}>
            {tag}
          </span>
        )}
      </div>

      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1 relative z-10">{label}</p>
      <h3 className={cn("font-black tracking-tighter text-white transition-colors relative z-10", variant === 'purple' ? "text-xl" : "text-2xl")}>{val}</h3>

      {detail && <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2 relative z-10">{detail}</p>}

      {progress !== undefined && (
        <div className="mt-4 w-full bg-slate-800/50 h-2 rounded-full overflow-hidden shadow-inner relative z-10">
          <div className={cn("h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(251,191,36,0.5)]", variant === 'amber' ? "bg-amber-400" : "bg-blue-500")} style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={cn("w-3.5 h-3.5 rounded shadow-sm group-hover:scale-125 transition-transform", color)}></div>
      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}

function BarTrend({ label, height, active }: { label: string, height: number, active?: boolean }) {
  return (
    <div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-crosshair">
      <div
        className={cn(
          "w-full rounded-t-xl transition-all duration-500 shadow-xl",
          active ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-blue-600/20 group-hover:bg-blue-600/40"
        )}
        style={{ height: `${height}%` }}
      ></div>
      <span className={cn("text-[10px] font-black tracking-widest uppercase transition-colors", active ? "text-white" : "text-slate-500 group-hover:text-slate-400")}>{label}</span>
    </div>
  );
}

interface TableRowProps {
  name: string;
  volume: string;
  cost: string;
  revenue: string;
  profit: string;
  margin: string;
  turnover: string;
  tag?: string;
  variant?: string;
}

function TableRow({ name, volume, cost, revenue, profit, margin, turnover, tag, variant }: TableRowProps) {
  const isRed = variant === 'red';
  const isAmber = variant === 'amber';

  return (
    <tr className="hover:bg-white/[0.02] transition-all group cursor-pointer">
      <td className="px-8 py-6 font-black text-slate-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{name}</td>
      <td className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">{volume}</td>
      <td className="px-8 py-6 text-slate-500 font-mono">₺{cost}</td>
      <td className="px-8 py-6 text-slate-200 font-black tracking-tight">₺{revenue}</td>
      <td className="px-8 py-6 text-emerald-400 font-black tracking-tighter text-base italic">₺{profit}</td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="relative group/input">
            <input
              className={cn(
                "bg-slate-800/50 border border-white/5 text-[10px] font-black px-3 py-2 rounded-xl w-20 focus:ring-2 outline-none transition-all shadow-inner tracking-tighter",
                isRed ? "text-red-400 focus:ring-red-500/50" : isAmber ? "text-amber-400 focus:ring-amber-500/50" : "text-emerald-400 focus:ring-emerald-500/50"
              )}
              type="text"
              value={`%${margin}`}
              readOnly
            />
            <button className={cn("absolute -right-1 -top-1 p-1 rounded-full opacity-0 group-hover/input:opacity-100 transition-opacity bg-slate-700 shadow-xl", isRed ? "text-red-400" : isAmber ? "text-amber-400" : "text-emerald-400")}>
              <Save className="w-3 h-3" />
            </button>
          </div>
          {tag && (
            <span className={cn(
              "text-[8px] px-2 py-1 rounded font-black uppercase tracking-[0.2em] shadow-inner",
              isRed ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"
            )}>
              {tag}
            </span>
          )}
        </div>
      </td>
      <td className="px-8 py-6 text-slate-400 text-[10px] font-black tracking-widest text-right">{turnover}</td>
    </tr>
  );
}
