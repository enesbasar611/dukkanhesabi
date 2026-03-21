"use client";

import {
  TrendingUp,
  TrendingDown,
  Landmark,
  PieChart,
  Printer,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Banknote,
  ArrowRightLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { id: "#45829", time: "16:45", type: "GELİR", desc: "iPhone 13 Ekran Değişimi", method: "Kart", amount: "+₺4.200,00", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { id: "Ticket #122", time: "15:20", type: "GİDER", desc: "Yemek ve İçecek Harcaması", method: "Nakit", amount: "-₺240,00", color: "text-rose-400", bg: "bg-rose-500/10" },
  { id: "Satış #089", time: "14:10", type: "GELİR", desc: "Aksesuar Satışı (Şarj Seti)", method: "Nakit", amount: "+₺1.150,00", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { id: "Alım #334", time: "11:30", type: "GİDER", desc: "Yedek Parça Alımı (Direnç)", method: "Banka", amount: "-₺1.800,00", color: "text-rose-400", bg: "bg-rose-500/10" },
  { id: "#45820", time: "09:50", type: "GELİR", desc: "MacBook Pro Pil Değişimi", method: "Kart", amount: "+₺5.400,00", color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

export default function DailyClosingReport() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-200">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-1 block">Finansal Kontrol Merkezi</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Günlük Kasa Kapanış Raporu</h2>
          <p className="text-slate-500 text-sm mt-1">24 Mayıs 2024, Cuma • Şube: Merkez Teknik Atölye</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border border-slate-700/50">
            <Printer className="w-4 h-4" /> Yazdır
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-900/40">
            <CheckCircle className="w-4 h-4" /> Gün Sonunu Onayla
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Summary Stats */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-emerald-500 font-bold">+12.4%</span>
            </div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Toplam Gelir</p>
            <h3 className="text-2xl font-bold text-white mt-1">₺42.850,00</h3>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-rose-500 font-bold">-4.2%</span>
            </div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Toplam Gider</p>
            <h3 className="text-2xl font-bold text-white mt-1">₺8.420,50</h3>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm ring-1 ring-blue-500/30">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Landmark className="w-5 h-5" />
              </div>
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Net Kasa Bakiyesi</p>
            <h3 className="text-2xl font-bold text-white mt-1">₺34.429,50</h3>
          </div>
        </div>

        {/* Payment Method Distribution */}
        <div className="col-span-12 lg:col-span-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
          <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-blue-400" /> Ödeme Yöntemleri
          </h4>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Nakit</span>
                <span className="text-white font-medium">₺12.400 (29%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: "29%" }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Kredi Kartı</span>
                <span className="text-white font-medium">₺28.150 (66%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: "66%" }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Havale / EFT</span>
                <span className="text-white font-medium">₺2.300 (5%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full" style={{ width: "5%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Counting & Reconciliation */}
        <div className="col-span-12 lg:col-span-5 bg-white/[0.03] p-8 rounded-3xl border border-slate-800/80 backdrop-blur-md">
          <h4 className="text-lg font-bold text-white mb-2">Fiziki Kasa Sayımı</h4>
          <p className="text-slate-500 text-xs mb-8">Eldeki nakit tutarı banknot bazlı giriniz.</p>

          <div className="space-y-4">
            {[
              { label: "₺200 x", val: 0, total: "₺0,00" },
              { label: "₺100 x", val: 15, total: "₺1.500,00" },
              { label: "₺50 x", val: 20, total: "₺1.000,00" },
              { label: "Diğer", placeholder: "Tutar Gir", total: "₺0,00" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800/30">
                <span className="text-slate-300 font-medium">{row.label}</span>
                <input
                  className="bg-slate-800 border-none rounded-lg text-sm text-center py-2 focus:ring-1 focus:ring-blue-500 outline-none text-white"
                  placeholder={row.placeholder?.toString() || row.val?.toString()}
                  type="number"
                />
                <span className="text-right text-slate-500 text-xs">{row.total}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="text-slate-400">Hesaplanan Nakit:</span>
              <span className="text-white font-bold">₺12.400,00</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-6">
              <span className="text-slate-400">Sayımı Yapılan:</span>
              <span className="text-rose-400 font-bold">₺11.850,00</span>
            </div>
            <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20 flex items-center gap-3">
              <AlertCircle className="text-rose-500 w-5 h-5 shrink-0" />
              <span className="text-xs text-rose-200">Kasa açığı tespit edildi: <strong>-₺550,00</strong>. Lütfen kontrol ediniz.</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="col-span-12 lg:col-span-7 bg-slate-900/50 rounded-2xl border border-slate-800/50 overflow-hidden flex flex-col">
          <div className="p-6 flex justify-between items-center border-b border-slate-800 bg-slate-950/20">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Son Kasa Hareketleri</h4>
            <button className="text-blue-400 text-xs font-semibold hover:underline">Tümünü Gör</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-800/30">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">İşlem Tipi</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Açıklama</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Yöntem</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Tutar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold uppercase", t.bg, t.color)}>
                        {t.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-white font-medium">{t.desc}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{t.id} • {t.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {t.method === "Kart" ? <CreditCard className="w-3.5 h-3.5 text-slate-400" /> :
                         t.method === "Nakit" ? <Banknote className="w-3.5 h-3.5 text-slate-400" /> :
                         <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400" />}
                        <span className="text-xs text-slate-300">{t.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={cn("text-xs font-bold", t.color)}>{t.amount}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-800/10 text-center">
            <button className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Daha Fazla İşlem Yükle</button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Notification for Confirmation */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-blue-600 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-blue-400/30 pointer-events-auto max-w-sm animate-pulse">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <AlertCircle className="text-white w-6 h-6" />
          </div>
          <div className="pr-2">
            <p className="text-white text-xs font-bold">Kapanış Bekleniyor</p>
            <p className="text-blue-100 text-[10px]">Tüm veriler girildiğinde onay butonuna basınız.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
