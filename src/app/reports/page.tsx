"use client";

import {
  DollarSign,
  Wrench,
  UserPlus,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Smartphone,
  CheckCircle2,
  Star,
  ArrowUpRight,
  ChevronRight,
  Download,
  Filter,
  RefreshCcw,
  Zap,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

const techs = [
  { name: "Alexander Pierce", tasks: 124, success: "98.2%", time: "42m", rating: 4.9, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoBimUTXmBrMU3-yrv6APVdxTesJTfq-lYwnQnS-rDqre_9ahjSSWATrH1_6WJYRClQedsmc382vjrEo8_qCAz1I9E_elJqWMfWeoZXD8hmiTyVvBVule7sMeuGa2MUnr7BjS0i3Qq9qGROox14VH0tMp6s6wv7yNHmv6tzDhIYgspgeY__fcXue8-peYFnQyRtPgIrdWb3KhVTfWB1LnIJAqhexY2joG-W4tV50E_nItD6jUXI_fabqLhIEXvY96HT6Py7SsUBhg" },
  { name: "Sarah Jenkins", tasks: 108, success: "95.5%", time: "51m", rating: 4.7, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKRxPpHc9H1I186wvHgsOakJfMSWl7t8Ahr18a9KKXqLHOXKLbIOipn-XSh-pd5OGe91NVv8VslGUh72uhDuLwGf75UIgRcybgEcGrBJd0n_tFRU-PcP9Fk_j_4K5w6lLR1xfKJ_rJAHp3BjSBHjY_maLOy5dhnKSNHowo4j0QdlUKpCgHMNOdv1WsOyKeM2_W1baqzl9NZAhRVHOg1ImHQpDVkqCzMtnzrP_n1sG54mWZqg__Eq5UOMs4VWi2i2MTy9sqqmbhZmk" },
  { name: "David Miller", tasks: 89, success: "92.1%", time: "38m", rating: 4.5, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADq7yQSgwht6UdvNKF8X_Hravdfvnmh2MOJiJGVyXNmhgkovA6vdp0YYRI1LaJC1QxMuwsfSmA20b48IHY_lVJciKdDS8q9sTdqpZIzLybb2JodZ3PWLW5nGMdTRBRAZ8ccT-oPENgkIO64_eNETeflRpmHw8wl47Ot6xYYzkbUFprfyJoA9eI7YH0RVmfQExLi2TZktbPmIMJ8yP20rQpmKUf9DsYPt8vGsAY4kmnD13MFH6zuieQD8aGYIv0uFoEkBNTzyRSp5k" },
];

export default function DetailedReports() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      {/* Dashboard Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">Detaylı Raporlar ve Analitik</h2>
          <p className="text-slate-400 text-sm">Circuit Pro Operasyonları için gerçek zamanlı performans metrikleri ve finansal döküm.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
            <Download className="w-4 h-4" /> Dışa Aktar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            <RefreshCcw className="w-4 h-4" /> Verileri Yenile
          </button>
        </div>
      </div>

      {/* Strategic KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Toplam Gelir", val: "₺142.580,00", trend: "+12.4%", icon: DollarSign, color: "text-blue-400", bg: "bg-blue-500/10", progress: "w-[78%]" },
          { label: "Onarım Başarı Oranı", val: "94.8%", trend: "Stabil", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10", progress: "w-[94%]" },
          { label: "Aktif Müşteriler", val: "2.842", trend: "+8% Yeni", icon: UserPlus, color: "text-purple-400", bg: "bg-purple-500/10", progress: "w-[62%]" },
        ].map((card, i) => (
          <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className={cn("p-2 rounded-lg", card.bg, card.color)}>
                <card.icon className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded">{card.trend}</span>
            </div>
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{card.label}</h3>
            <p className="text-3xl font-bold text-white tracking-tighter">{card.val}</p>
            <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className={cn("h-full bg-blue-500", card.progress)}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Comparison Chart Placeholder */}
        <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Gelir Karşılaştırması</h3>
              <p className="text-xs text-slate-500">Onarım Geliri vs Ürün Satışları (Son 6 Ay)</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Onarım
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Ürünler
              </div>
            </div>
          </div>
          {/* Mock Chart */}
          <div className="h-64 flex items-end justify-between gap-4 px-4 border-b border-slate-800/50 pb-2">
            {[
              { m: "OCA", h1: "40%", h2: "25%" },
              { m: "ŞUB", h1: "55%", h2: "30%" },
              { m: "MAR", h1: "45%", h2: "40%" },
              { m: "NİS", h1: "70%", h2: "35%" },
              { m: "MAY", h1: "60%", h2: "50%" },
              { m: "HAZ", h1: "85%", h2: "45%" },
            ].map((d, i) => (
              <div key={i} className="w-full flex flex-col gap-1 items-center">
                <div className="w-full flex items-end gap-1 h-full justify-center">
                  <div className="w-4 bg-blue-600/80 rounded-t-sm" style={{ height: d.h1 }}></div>
                  <div className="w-4 bg-emerald-600/80 rounded-t-sm" style={{ height: d.h2 }}></div>
                </div>
                <span className="text-[10px] text-slate-500 mt-2 font-bold">{d.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Repair Breakdown */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white tracking-tight mb-6">Cihaz Kırılımı</h3>
          <div className="space-y-6">
            {[
              { brand: "Apple", p: "54%", color: "bg-blue-500" },
              { brand: "Samsung", p: "28%", color: "bg-blue-400" },
              { brand: "Xiaomi", p: "12%", color: "bg-emerald-500" },
              { brand: "Diğer", p: "6%", color: "bg-slate-600" },
            ].map((b, i) => (
              <div key={i}>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-400">{b.brand}</span>
                  <span className="text-white">{b.p}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full">
                  <div className={cn("h-full rounded-full", b.color)} style={{ width: b.p }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-blue-400 uppercase font-bold tracking-widest mb-1">Bu Ayın En Çok Gelen Modeli</p>
              <p className="text-sm font-bold text-white">iPhone 15 Pro Max</p>
            </div>
            <Zap className="text-blue-500 w-5 h-5 fill-current" />
          </div>
        </div>
      </div>

      {/* Technician Performance Table */}
      <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/20">
          <h3 className="text-lg font-bold text-white tracking-tight">Teknisyen Performansı</h3>
          <button className="text-xs text-blue-400 font-bold flex items-center gap-1 hover:underline">
            Tüm Listeyi Gör <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/40">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">İsim</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">İşlem Sayısı</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Başarı Oranı</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Ort. Süre</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Memnuniyet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {techs.map((t, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img className="w-8 h-8 rounded-full border border-slate-700" src={t.img} alt={t.name} />
                      <span className="text-sm font-semibold text-white">{t.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-center font-mono">{t.tasks}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-emerald-400">{t.success}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-center">{t.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1 text-amber-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-bold text-slate-200">{t.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profitability Analysis by Category */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white tracking-tight mb-6">Kategori Bazlı Karlılık</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "2. EL TAKAS", val: "₺14.200", p: "+15% Kar", color: "text-emerald-500" },
              { label: "YENİ CİHAZ", val: "₺32.800", p: "%8 Marj", color: "text-slate-400" },
              { label: "YEDEK PARÇA", val: "₺18.450", p: "+42% Kar", color: "text-emerald-500" },
            ].map((c, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{c.label}</p>
                <p className="text-xl font-bold text-white mb-2 font-mono">{c.val}</p>
                <div className={cn("text-[10px] font-bold", c.color)}>{c.p}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center text-xs mb-4">
              <span className="text-slate-400">Net Kar Marjı</span>
              <span className="text-blue-400 font-bold">Genel %24.5</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "24.5%" }}></div>
            </div>
          </div>
        </div>

        {/* Supplier Performance Analysis */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white tracking-tight mb-6 flex items-center gap-2">
            <Package className="w-5 h-5 text-slate-400" /> Tedarikçi Performansı
          </h3>
          <div className="space-y-4">
            {[
              { name: "Global Screens Ltd.", rel: "98%", time: "2 Gün", tag: "En İyi", color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { name: "Circuit Parts Co.", rel: "82%", time: "5 Gün", tag: "Düşük Stok", color: "text-red-400", bg: "bg-red-500/10" },
              { name: "Tech Imports Int.", rel: "91%", time: "3 Gün", tag: "Hacimli Alım", color: "text-blue-400", bg: "bg-blue-500/10" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800/50 hover:bg-slate-800 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:text-blue-500 transition-colors">
                    {s.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{s.name}</p>
                    <p className="text-[10px] text-slate-500">Güvenilirlik: {s.rel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn("text-xs font-bold", s.color)}>{s.tag}</p>
                  <p className="text-[10px] text-slate-500">Teslimat: {s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
