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
  Receipt,
  ArrowLeftRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

async function getFinanceData() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { createdAt: 'desc' },
    include: { customer: true, supplier: true },
    take: 10
  });

  const cashDrawers = await prisma.cashDrawer.findMany();
  const totalBalance = cashDrawers.reduce((acc, curr) => acc + curr.balance, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dailyIncome = await prisma.transaction.aggregate({
    where: { type: 'INCOME', createdAt: { gte: today } },
    _sum: { amount: true }
  });

  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const monthlyIncome = await prisma.transaction.aggregate({
    where: { type: 'INCOME', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });
  const monthlyExpense = await prisma.transaction.aggregate({
    where: { type: 'EXPENSE', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  const netProfit = (monthlyIncome._sum.amount || 0) - (monthlyExpense._sum.amount || 0);

  // Category breakdown for this month
  const categoryStats = await prisma.transaction.groupBy({
    by: ['category'],
    where: { type: 'INCOME', createdAt: { gte: monthStart } },
    _sum: { amount: true }
  });

  return {
    transactions,
    totalBalance,
    dailyIncome: dailyIncome._sum.amount || 0,
    netProfit,
    categoryStats: categoryStats.map(s => ({
      label: s.category,
      val: s._sum.amount || 0,
      p: `w-[${Math.min(100, Math.round(((s._sum.amount || 0) / (monthlyIncome._sum.amount || 1)) * 100))}%]`
    }))
  };
}

export default async function FinanceDashboard() {
  const { transactions, totalBalance, dailyIncome, netProfit, categoryStats } = await getFinanceData();

  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center h-16 px-2 border-b border-slate-200 dark:border-slate-800 -mt-4 mb-4">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-black tracking-tighter uppercase">Finans ve Kasa Yönetimi</h1>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest border-b-2 border-blue-600 h-16 flex items-center">
            Toplam Bakiye: {totalBalance.toLocaleString('tr-TR')} ₺
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
          { label: "KASA BAKİYESİ", val: `${totalBalance.toLocaleString('tr-TR')} ₺`, sub: "Tüm kasalar toplamı", icon: Landmark, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "GÜNLÜK GELİR", val: `${dailyIncome.toLocaleString('tr-TR')} ₺`, sub: "Bugünkü nakit girişi", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "AYLIK NET KÂR", val: `${netProfit.toLocaleString('tr-TR')} ₺`, sub: "Gelir - Gider dengesi", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "BEKLEYEN ÖDEME", val: "--- ₺", sub: "Tahsilat bekleyen borçlar", icon: CreditCard, color: "text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 group hover:border-blue-500/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2.5 rounded-2xl", s.bg)}>
                <s.icon className={cn("w-6 h-6", s.color)} />
              </div>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{s.label}</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black tracking-tighter">{s.val}</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Charts & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center py-20 opacity-50">
          <BarChart3 className="w-20 h-20 mb-4 text-slate-300" />
          <p className="font-black uppercase tracking-widest text-sm">Haftalık Grafik Verisi Yakında</p>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <h2 className="text-lg font-black tracking-tight uppercase mb-8 tracking-widest">Gelir Dağılımı (Bu Ay)</h2>
          <div className="flex-1 space-y-8">
            {categoryStats.map((r, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span className="text-slate-500">{r.label}</span>
                  <span>{r.val.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className={cn("h-full rounded-full transition-all duration-1000 bg-blue-600", r.p)}></div>
                </div>
              </div>
            ))}
            {categoryStats.length === 0 && (
              <p className="text-center text-slate-400 italic py-10">Bu ay henüz gelir kaydı yok.</p>
            )}
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-black tracking-tight uppercase tracking-widest">Son İşlemler ve Giderler</h2>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Sistemdeki en son finansal hareketler</p>
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
                <th className="px-8 py-5">Tarih / Saat</th>
                <th className="px-8 py-5">Tür</th>
                <th className="px-8 py-5">Kategori</th>
                <th className="px-8 py-5">Yöntem</th>
                <th className="px-8 py-5">Tutar</th>
                <th className="px-8 py-5">İlgili Kişi/Kurum</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group text-slate-900 dark:text-slate-100">
                  <td className="px-8 py-6 text-sm font-bold text-slate-500">
                    {format(t.createdAt, 'HH:mm', { locale: tr })}
                    <span className="block text-[10px] uppercase">{format(t.createdAt, 'dd MMM yyyy', { locale: tr })}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "flex items-center gap-2 text-xs font-black uppercase tracking-widest",
                      t.type === 'INCOME' ? "text-emerald-600" : "text-red-600"
                    )}>
                      {t.type === 'INCOME' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      {t.type === 'INCOME' ? 'GELİR' : 'GİDER'}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-black">{t.category}</td>
                  <td className="px-8 py-6 text-xs font-bold text-slate-500 uppercase">{t.method}</td>
                  <td className={cn("px-8 py-6 font-black text-base tracking-tighter", t.type === 'EXPENSE' ? "text-red-600" : "text-slate-900 dark:text-white")}>
                    {t.type === 'EXPENSE' ? '-' : ''} {t.amount.toLocaleString('tr-TR')} ₺
                  </td>
                  <td className="px-8 py-6 text-sm font-medium">
                    {t.customer?.name || t.supplier?.name || '---'}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-slate-300 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr><td colSpan={7} className="py-20 text-center text-slate-400 italic">Henüz finansal işlem kaydı bulunmuyor.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-8 py-5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <span>Son işlemler gösteriliyor</span>
          <div className="flex items-center gap-4">
            <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Quick Action FABs */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="group flex items-center gap-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 px-6 py-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all active:scale-95">
          <ArrowLeftRight className="w-5 h-5 text-blue-600" />
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
