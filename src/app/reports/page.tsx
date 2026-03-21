import {
  TrendingUp,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Star,
  Download,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity,
  Zap,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Aylık Toplam Ciro", value: "₺842.250,00", trend: "+12.4%", progress: 78, desc: "Hedeflenen cironun %78'ine ulaşıldı", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Tamir Başarı Oranı", value: "%94.2", trend: "Stabil", bars: 10, totalBars: 12, desc: "Son 1.000 işlem baz alınmıştır", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Müşteri Memnuniyeti", value: "4.9 / 5.0", trend: "+0.3", avatars: 3, extraAvatars: 12, desc: "Son yapılan 48 yorum", icon: Star, color: "text-amber-500", bg: "bg-amber-500/10" },
];

const revenueComparison = [
  { day: "PAZ", repair: 65, sales: 40 },
  { day: "PZT", repair: 85, sales: 35 },
  { day: "SAL", repair: 70, sales: 50 },
  { day: "ÇAR", repair: 95, sales: 60 },
  { day: "PER", repair: 80, sales: 45 },
  { day: "CUM", repair: 90, sales: 70 },
  { day: "CMT", repair: 50, sales: 30 },
];

const technicianPerformance = [
  { name: "Mert Aydın", role: "Senior Technician", initials: "MA", completed: 142, success: "98.5%", time: "1.2 Saat", revenue: "₺184.200", status: "YÜKSEK", statusColor: "text-emerald-400", statusBg: "bg-emerald-500/10" },
  { name: "Selin Kara", role: "Junior Technician", initials: "SK", completed: 89, success: "92.1%", time: "1.8 Saat", revenue: "₺92.450", status: "NORMAL", statusColor: "text-blue-400", statusBg: "bg-blue-500/10" },
  { name: "Okan Yılmaz", role: "Master Technician", initials: "OY", completed: 156, success: "97.8%", time: "0.9 Saat", revenue: "₺210.300", status: "KRİTİK", statusColor: "text-amber-400", statusBg: "bg-amber-500/10" },
];

export default function ReportsPage() {
  return (
    <div className="p-8 space-y-10 bg-slate-950 min-h-screen pb-24">
      {/* Editorial Header */}
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1 block">Analitik Veri Merkezi</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Performans Raporu</h1>
        </div>
        <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-inner">
          <button className="px-6 py-2 text-xs font-bold rounded-lg bg-slate-800 text-white shadow-sm transition-all">Aylık</button>
          <button className="px-6 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-200 transition-colors">Yıllık</button>
          <button className="px-6 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-200 transition-colors">Özel</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-sm group hover:border-blue-500/30 transition-all">
            <div className="flex justify-between items-start">
              <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110", kpi.bg)}>
                <kpi.icon className={cn("w-5 h-5", kpi.color)} />
              </div>
              <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest",
                kpi.trend.startsWith('+') ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
              )}>{kpi.trend}</span>
            </div>
            <div className="mt-8">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</p>
              <h3 className="text-2xl font-black text-white mt-1 tracking-tight">{kpi.value}</h3>

              {kpi.progress !== undefined && (
                <>
                  <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${kpi.progress}%` }}></div>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mt-2">{kpi.desc}</p>
                </>
              )}

              {kpi.bars !== undefined && (
                <>
                  <div className="flex gap-1 mt-4">
                    {Array.from({ length: kpi.totalBars || 0 }).map((_, idx) => (
                      <div key={idx} className={cn(
                        "h-3 flex-1 rounded-sm shadow-sm",
                        idx < (kpi.bars || 0) ? "bg-emerald-500/40" : "bg-slate-800"
                      )}></div>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mt-2">{kpi.desc}</p>
                </>
              )}

              {kpi.avatars !== undefined && (
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {Array.from({ length: kpi.avatars }).map((_, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800"></div>
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">+{kpi.extraAvatars}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold italic tracking-tight">{kpi.desc}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Comparison Chart */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              Gelir Karşılaştırma
            </h4>
            <div className="flex space-x-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">TAMİR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ÜRÜN SATIŞI</span>
              </div>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {revenueComparison.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group relative">
                <div className="bg-emerald-500/20 rounded-t-sm transition-all group-hover:bg-emerald-500/30" style={{ height: `${d.sales}%` }}></div>
                <div className="bg-blue-600 rounded-t-sm transition-all group-hover:bg-blue-500" style={{ height: `${d.repair}%` }}></div>
                <p className="text-[10px] text-center mt-3 font-black text-slate-500 group-hover:text-slate-300 transition-colors">{d.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Profitable Fault Types */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl shadow-sm">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            En Çok Kazandıran Arıza Türleri
          </h4>
          <div className="space-y-8">
            {[
              { label: "Ekran Değişimi (OLED/LCD)", value: "₺142.500", p: 85, color: "bg-blue-600" },
              { label: "Anakart Onarımı", value: "₺98.200", p: 65, color: "bg-blue-600" },
              { label: "Sıvı Teması Müdahale", value: "₺64.000", p: 45, color: "bg-blue-600" },
              { label: "Batarya Yenileme", value: "₺42.100", p: 30, color: "bg-blue-600" },
            ].map((item, i) => (
              <div key={i} className="space-y-2.5 group cursor-pointer">
                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-wider">
                  <span className="text-slate-400 group-hover:text-white transition-colors">{item.label}</span>
                  <span className="text-blue-400">{item.value}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className={cn("h-full rounded-full transition-all duration-1000 group-hover:opacity-80", item.color)} style={{ width: `${item.p}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technician Performance Table */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-500" />
            Teknisyen Performans Tablosu
          </h4>
          <button className="text-[10px] font-black text-blue-500 flex items-center gap-1.5 hover:underline uppercase tracking-widest">
            Tümünü İndir <Download className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/60 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                <th className="px-8 py-5 border-b border-slate-800">Teknisyen</th>
                <th className="px-8 py-5 border-b border-slate-800 text-center">Biten İş</th>
                <th className="px-8 py-5 border-b border-slate-800 text-center">Başarı Oranı</th>
                <th className="px-8 py-5 border-b border-slate-800 text-center">Ort. Süre</th>
                <th className="px-8 py-5 border-b border-slate-800 text-right">Üretilen Ciro</th>
                <th className="px-8 py-5 border-b border-slate-800 text-center">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {technicianPerformance.map((tech, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-8 py-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-900/20 text-blue-400 border border-blue-500/20 flex items-center justify-center font-black text-xs shadow-inner">
                      {tech.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{tech.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{tech.role}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center font-bold text-slate-300">{tech.completed}</td>
                  <td className="px-8 py-5 text-center">
                    <span className="text-emerald-400 font-black tracking-tighter">{tech.success}</span>
                  </td>
                  <td className="px-8 py-5 text-center text-slate-400 font-medium text-xs">{tech.time}</td>
                  <td className="px-8 py-5 text-right font-black text-white tracking-tight">{tech.revenue}</td>
                  <td className="px-8 py-5 text-center">
                    <span className={cn(
                      "px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-[0.15em] border",
                      tech.statusColor,
                      tech.statusBg,
                      tech.statusColor.replace('text', 'border').replace('400', '500/20')
                    )}>{tech.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10 text-center">
        <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em]">TechAtelier Engine v4.2.0 • 2024 Analitik Sistemleri</p>
      </footer>
    </div>
  );
}
