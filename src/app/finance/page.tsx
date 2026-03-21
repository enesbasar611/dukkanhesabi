import {
  Landmark,
  TrendingUp,
  CreditCard,
  BarChart3,

  QrCode,
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
  MoreVertical,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Receipt
} from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { time: "14:20", type: "GELİR", cat: "Teknik Servis", method: "Kart", amount: "₺1.250,00", status: "Onaylandı" },
  { time: "13:45", type: "GİDER", cat: "Parça Alımı", method: "Nakit", amount: "- ₺3.400,00", status: "Ödendi", error: true },
  { time: "12:10", type: "GİDER", cat: "Kira", method: "Havale", amount: "- ₺12.000,00", status: "Beklemede", error: true },
  { time: "10:30", type: "GELİR", cat: "Ürün Satışı", method: "Kart", amount: "₺550,00", status: "Onaylandı" },
];

export default function FinanceDashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex justify-between items-center h-16 px-2 border-b border-slate-200 dark:border-slate-800 -mt-4 mb-4">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">Finans ve Kasa Yönetimi</h1>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest border-b-2 border-blue-600 h-16 flex items-center">
            Kasa Bakiyesi: 12.450,00 ₺
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-all shadow-sm">
            <QrCode className="w-4 h-4" /> Hızlı Tara
          </button>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Yeni İşlem
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "KASA BAKİYESİ", val: "₺42.850,00", sub: "Toplam nakit ve çekmece", icon: Landmark, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "GÜNLÜK GELİR", val: "₺8.420,00", sub: "Bugünkü toplam giriş", trend: "+12%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "BEKLEYEN POS", val: "₺15.200,45", sub: "Provizyondaki toplam", icon: CreditCard, color: "text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "AYLIK NET KAR", val: "₺112.900", sub: "Tüm giderler sonrası", trend: "+8.4%", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 group hover:border-blue-500/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2.5 rounded-2xl", s.bg)}>
                <s.icon className={cn("w-6 h-6", s.color)} />
              </div>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{s.label}</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">{s.val}</h3>
                {s.trend && <span className="text-xs font-black text-emerald-500">{s.trend}</span>}
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Charts & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase">Gelir vs Gider Trendi</h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Haftalık finansal performans analizi</p>
            </div>
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm">Haftalık</button>
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg text-slate-400 hover:text-slate-600 transition-colors">Aylık</button>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-6 px-4">
            {[
              { day: "Pzt", income: 40, expense: 20 },
              { day: "Sal", income: 60, expense: 30 },
              { day: "Çar", income: 85, expense: 25, active: true },
              { day: "Per", income: 55, expense: 45 },
              { day: "Cum", income: 70, expense: 30 },
              { day: "Cmt", income: 30, expense: 15 },
              { day: "Paz", income: 10, expense: 5 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full flex gap-1.5 items-end h-48">
                  <div className={cn("flex-1 rounded-t-lg transition-all", d.active ? "bg-blue-600" : "bg-blue-200 dark:bg-blue-900/40", `h-[${d.income}%]`)} style={{height: `${d.income}%`}}></div>
                  <div className={cn("flex-1 rounded-t-lg transition-all", d.active ? "bg-red-500/40" : "bg-red-100 dark:bg-red-950/20", `h-[${d.expense}%]`)} style={{height: `${d.expense}%`}}></div>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d.day}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-8 px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/20"></div>
              <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em]">Gelir</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
              <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em]">Gider</span>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase mb-8 tracking-widest">Gelir Dağılımı</h2>
          <div className="flex-1 space-y-8">
            {[
              { label: "Teknik Servis", val: "₺24.500", p: "w-[55%]", color: "bg-blue-600" },
              { label: "Ürün Satışları", val: "₺12.200", p: "w-[30%]", color: "bg-blue-400" },
              { label: "2. El Takas", val: "₺6.150", p: "w-[15%]", color: "bg-emerald-500" },
            ].map((r, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span className="text-slate-500">{r.label}</span>
                  <span className="text-slate-900 dark:text-white">{r.val}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className={cn("h-full rounded-full transition-all duration-1000", r.color, r.p)}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em]">Aktif Kampanya</span>
              <span className="text-xs font-black text-blue-700 dark:text-blue-300 mt-0.5">Ekran Tamiri %10 İndirim</span>
            </div>
            <Plus className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">Son İşlemler ve Giderler</h2>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Son 24 saat içindeki tüm hareketler</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" /> Filtrele
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all">
              <Download className="w-4 h-4" /> Excel
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <th className="px-8 py-5">Saat</th>
                <th className="px-8 py-5">Tür</th>
                <th className="px-8 py-5">Kategori</th>
                <th className="px-8 py-5">Yöntem</th>
                <th className="px-8 py-5">Tutar</th>
                <th className="px-8 py-5">Durum</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {transactions.map((t, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-6 text-sm font-bold text-slate-500">{t.time}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "flex items-center gap-2 text-xs font-black uppercase tracking-widest",
                      t.type === 'INCOME' ? "text-emerald-600" : "text-red-600"
                    )}>
                      {t.type === 'INCOME' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      {t.type}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-slate-700 dark:text-slate-200">{t.cat}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CreditCard className="w-4 h-4" /> {t.method}
                    </div>
                  </td>
                  <td className={cn("px-8 py-6 font-black text-base tracking-tighter", t.error ? "text-red-600" : "text-slate-900 dark:text-white")}>{t.amount}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                      {t.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-slate-300 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-8 py-5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <span>Toplam 48 kayıt bulundu</span>
          <div className="flex items-center gap-4">
            <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <span className="text-slate-900 dark:text-white">Sayfa 1 / 5</span>
            <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Quick Action FABs */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="group flex items-center gap-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 px-6 py-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all active:scale-95">
          <ArrowLeftRightIcon className="w-5 h-5 text-blue-600" />
          <span className="font-black text-[11px] uppercase tracking-widest">Kasa Giriş/Çıkış</span>
        </button>
        <button className="group flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95">
          <Receipt className="w-5 h-5" />
          <span className="font-black text-[11px] uppercase tracking-widest">Gider Ekle</span>
        </button>
      </div>
    </div>
  );
}

import { ArrowLeftRight as ArrowLeftRightIcon } from "lucide-react";
