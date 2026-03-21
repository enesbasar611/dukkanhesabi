import {
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Users,
  TrendingUp,
  Filter,
  Download,
  MessageSquare,
  CreditCard as CreditCardIcon,
  Plus,
  MoreVertical,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const debtors = [
  { name: "Mehmet Akarsu", phone: "+90 532 000 00 00", lastOp: "12 Eki 2023", desc: "iPhone Ekran Tamiri", amount: "₺4.500", status: "GECİKMİŞ", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
  { name: "Selin Yılmaz", phone: "+90 544 111 22 33", lastOp: "24 Eki 2023", desc: "MacBook Bakım", amount: "₺1.200", status: "BEKLEMEDE", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { name: "Burak Tan", phone: "+90 555 999 88 77", lastOp: "05 Kas 2023", desc: "Playstation Tamiri", amount: "₺3.750", status: "KISMI", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { name: "Canan Ergin", phone: "+90 531 222 33 44", lastOp: "10 Kas 2023", desc: "Yedek Parça Satış", amount: "₺12.400", status: "GECİKMİŞ", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
];

export default function DebtManagement() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">Finansal Veriler</span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Borç ve Alacak Yönetimi</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> Tahsilat Ekle
          </button>
        </div>
      </div>

      {/* Hero Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Alacaklar", val: "₺142.850", icon: CreditCard, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", trend: "+12%" },
          { label: "Gecikmiş Ödemeler", val: "₺28.400", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20", sub: "12 Müşteri gecikmede" },
          { label: "Bu Ay Tahsil Edilen", val: "₺54.200", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20", progress: 72, sub: "Hedef: ₺75k (72%)" },
          { label: "Aktif Borçlular", val: "84", icon: Users, color: "text-slate-600", bg: "bg-slate-100 dark:bg-slate-800", sub: "Ort. Borç: ₺1,700" },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-40 group hover:border-blue-500/50 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">{s.label}</span>
              <div className={cn("p-2 rounded-xl group-hover:scale-110 transition-transform", s.bg)}>
                <s.icon className={cn("w-5 h-5", s.color)} />
              </div>
            </div>
            <div>
              <h2 className={cn("text-3xl font-black tracking-tighter", s.color === 'text-red-600' ? 'text-red-600' : 'text-slate-900 dark:text-white')}>{s.val}</h2>
              {s.progress && (
                <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[72%] rounded-full shadow-lg"></div>
                </div>
              )}
              <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tighter flex items-center gap-1">
                {s.trend && <TrendingUp className="w-3 h-3 text-emerald-500" />}
                {s.trend || s.sub}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Middle Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Aging Analysis */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="text-sm font-black text-slate-900 dark:text-white mb-8 flex items-center gap-2 uppercase tracking-widest">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            Borç Yaşlandırma Analizi
          </h3>
          <div className="space-y-6 flex-1">
            {[
              { label: "0 - 30 Gün", amount: "₺82,450", p: "w-[60%]", color: "bg-blue-500" },
              { label: "31 - 60 Gün", amount: "₺32,000", p: "w-[25%]", color: "bg-emerald-500" },
              { label: "60+ Gün", amount: "₺28,400", p: "w-[15%]", color: "bg-red-500", alert: true },
            ].map((a, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-tighter">
                  <span className="text-slate-400">{a.label}</span>
                  <span className={a.alert ? "text-red-500" : "text-slate-900 dark:text-white"}>{a.amount}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div className={cn("h-full transition-all duration-1000", a.color, a.p)}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
              &quot;60 günü geçen borçlar toplam alacakların %20'sini oluşturuyor. Acil aksiyon önerilir.&quot;
            </p>
          </div>
        </div>

        {/* Debtor List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">Müşteri Alacak Listesi</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-xs font-black rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm">
                <Filter className="w-4 h-4" /> Filtrele
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-xs font-black rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm">
                <Download className="w-4 h-4" /> Dışa Aktar
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950/50">
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Müşteri</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Son İşlem</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Toplam Borç</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Durum</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {debtors.map((d, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-black text-xs">
                            {d.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-black text-slate-900 dark:text-white">{d.name}</span>
                            <span className="text-[10px] text-slate-400 font-bold">{d.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-slate-700 dark:text-slate-300">{d.lastOp}</span>
                          <span className="text-[10px] text-slate-400 font-medium italic">{d.desc}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-black text-slate-900 dark:text-white">{d.amount}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={cn("px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border shadow-inner", d.status === 'GECİKMİŞ' ? 'bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:border-red-800' : d.status === 'BEKLEMEDE' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' : 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800')}>
                          {d.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Tahsil Et"><CreditCardIcon className="w-4 h-4" /></button>
                          <button className="p-2 text-slate-400 hover:text-emerald-500 transition-colors" title="Mesaj Gönder"><MessageSquare className="w-4 h-4" /></button>
                          <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-8 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>84 borçlu arasından 1-4 arası gösteriliyor</span>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white transition-colors disabled:opacity-50" disabled><Calendar className="w-3.5 h-3.5" /></button>
                <button className="w-8 h-8 rounded-lg bg-blue-600 text-white shadow-md">1</button>
                <button className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white transition-colors">2</button>
                <button className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white transition-colors">3</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-3xl shadow-2xl shadow-blue-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50 border-4 border-white dark:border-slate-900">
        <CreditCardIcon className="w-8 h-8" />
        <div className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          HIZLI TAHSİLAT
        </div>
      </button>
    </div>
  );
}
