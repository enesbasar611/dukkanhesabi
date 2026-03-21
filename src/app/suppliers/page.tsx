import {
  Factory,

  Truck,
  Wallet,
  ShoppingBag,
  Plus,
  ChevronRight,
  FileDown,


  CheckCircle2,



  BrainCircuit
} from "lucide-react";
import { cn } from "@/lib/utils";

const suppliers = [
  { name: "Elite Parça A.Ş.", cat: "Yedek Parça", debt: "12.450,00 ₺", last: "12 May 2024", score: "98%", initials: "EP" },
  { name: "TechnoMarket", cat: "Cihaz", debt: "0,00 ₺", last: "08 May 2024", score: "92%", initials: "TM" },
  { name: "Global Aksesuar", cat: "Aksesuar", debt: "2.100,00 ₺", last: "02 May 2024", score: "84%", initials: "GA" },
];

const orders = [
  { no: "#PO-8821", supplier: "Elite Parça A.Ş.", item: "iPhone 13 Ekran (OLED)", qty: "5 Adet", amount: "11.250,00 ₺", paid: true, status: "Teslim Edildi" },
  { no: "#PO-8819", supplier: "Global Aksesuar", item: "20W USB-C Adaptör", qty: "20 Adet", amount: "4.800,00 ₺", paid: false, status: "Sevkiyatta" },
  { no: "#PO-8815", supplier: "TechnoMarket", item: "Samsung S22 Batarya", qty: "10 Adet", amount: "3.400,00 ₺", paid: "partial", status: "Hazırlanıyor" },
];

export default function SupplierManagement() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-1">Operasyonel Genel Bakış</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Tedarikçiler ve Satın Alma</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
            <FileDown className="w-4 h-4" /> Raporu Dışa Aktar
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-black rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 text-sm uppercase tracking-widest">
            <Plus className="w-4 h-4" /> Yeni Sipariş
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Toplam Tedarikçi", val: "128", sub: "+2 yeni", icon: Factory, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Aktif Siparişler", val: "14", sub: "4 acil", icon: Truck, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-900/20" },
          { label: "Toplam Borç", val: "42.850,00 ₺", sub: "Vade: 4 gün", icon: Wallet, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
          { label: "Aylık Satın Alma", val: "115.400,00 ₺", sub: "Bugün 3 sipariş", icon: ShoppingBag, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-2xl", s.bg)}>
                <s.icon className={cn("w-6 h-6", s.color)} />
              </div>
              <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter", s.bg, s.color)}>{s.sub}</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
            <h3 className="text-2xl font-black mt-1 text-slate-900 dark:text-white">{s.val}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9 space-y-8">
          {/* Supplier List */}
          <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Öne Çıkan Tedarikçiler</h4>
                <p className="text-sm text-slate-500 font-medium">En yüksek işlem hacmine sahip ortaklar</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filtre:</span>
                <select className="text-xs font-bold border-none bg-slate-100 dark:bg-slate-800 rounded-xl focus:ring-blue-500 py-2 px-4 outline-none">
                  <option>Tüm Kategoriler</option>
                  <option>Yedek Parça</option>
                  <option>Cihazlar</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
                    <th className="px-6 pb-2">Tedarikçi Adı</th>
                    <th className="px-6 pb-2">Kategori</th>
                    <th className="px-6 pb-2 text-right">Aktif Borç</th>
                    <th className="px-6 pb-2 text-center">Son Sipariş</th>
                    <th className="px-6 pb-2 text-center">Puan</th>
                    <th className="px-6 pb-2 w-12"></th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {suppliers.map((s, i) => (
                    <tr key={i} className="bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group rounded-2xl cursor-pointer">
                      <td className="px-6 py-5 first:rounded-l-2xl border-y border-l border-slate-100 dark:border-slate-800 group-hover:border-blue-200">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-blue-600 shadow-sm">{s.initials}</div>
                          <span className="font-black text-slate-900 dark:text-white">{s.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 border-y border-slate-100 dark:border-slate-800">
                        <span className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">{s.cat}</span>
                      </td>
                      <td className="px-6 py-5 border-y border-slate-100 dark:border-slate-800 text-right">
                        <span className="font-black text-slate-900 dark:text-white">{s.debt}</span>
                      </td>
                      <td className="px-6 py-5 border-y border-slate-100 dark:border-slate-800 text-center text-xs font-bold text-slate-500">
                        {s.last}
                      </td>
                      <td className="px-6 py-5 border-y border-slate-100 dark:border-slate-800 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                          <span className="font-black text-xs text-emerald-600 dark:text-emerald-400">{s.score}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 last:rounded-r-2xl border-y border-r border-slate-100 dark:border-slate-800 text-right">
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Orders */}
          <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Son Satın Alma Siparişleri</h4>
              <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">Tüm Siparişleri Gör</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                    <th className="pb-6 pr-4">Sipariş No</th>
                    <th className="pb-6 px-4">Tedarikçi</th>
                    <th className="pb-6 px-4">Parça / Cihaz</th>
                    <th className="pb-6 px-4 text-center">Adet</th>
                    <th className="pb-6 px-4 text-right">Toplam Tutar</th>
                    <th className="pb-6 px-4 text-center">Ödeme</th>
                    <th className="pb-6 pl-4 text-right">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {orders.map((o, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group">
                      <td className="py-6 pr-4">
                        <span className="font-mono text-[11px] font-black text-blue-600 dark:text-blue-400">{o.no}</span>
                      </td>
                      <td className="py-6 px-4 font-black text-sm text-slate-700 dark:text-slate-200">{o.supplier}</td>
                      <td className="py-6 px-4 text-xs font-bold text-slate-500">{o.item}</td>
                      <td className="py-6 px-4 text-center text-xs font-black">{o.qty}</td>
                      <td className="py-6 px-4 text-right font-black text-slate-900 dark:text-white">{o.amount}</td>
                      <td className="py-6 px-4 text-center">
                        <span className={cn(
                          "px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest",
                          o.paid === true ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                          o.paid === "partial" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                          "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        )}>
                          {o.paid === true ? "Ödendi" : o.paid === "partial" ? "Kısmi" : "Beklemede"}
                        </span>
                      </td>
                      <td className="py-6 pl-4 text-right">
                        <div className="flex items-center justify-end gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {o.status === 'Teslim Edildi' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Truck className="w-3.5 h-3.5 text-blue-500" />}
                          {o.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/30 space-y-8">
            <h5 className="text-lg font-black tracking-tight uppercase tracking-widest opacity-80">Hızlı İşlemler</h5>
            <div className="space-y-4">
              {[
                { label: "Yeni Satın Alma Formu", icon: ShoppingBag },
                { label: "Ödeme Yap", icon: Wallet },
                { label: "Tedarikçi Kaydet", icon: Factory },
              ].map((a, i) => (
                <button key={i} className="w-full flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group active:scale-95 text-left">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <a.icon className="w-6 h-6" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest">{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Zekâ Notu</h5>
            <div className="space-y-8">
              {[
                { label: "Stok Devir Hızı", val: "85%", color: "bg-emerald-500" },
                { label: "Tedarikçi Memnuniyeti", val: "94%", color: "bg-blue-500" },
                { label: "Ödeme Sadakati", val: "72%", color: "bg-amber-500" },
              ].map((a, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-2.5">
                    <span className="text-[10px] font-black uppercase text-slate-500">{a.label}</span>
                    <span className="text-xs font-black text-slate-900 dark:text-white">{a.val}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden shadow-inner">
                    <div className={cn("h-full rounded-full transition-all duration-1000", a.color)} style={{width: a.val}}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
                <BrainCircuit className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Akıllı AI Notu</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-bold italic">
                &quot;Elite Parça ile işlem hacmi bu çeyrek %20 arttı. Yıllık toplu anlaşma yapmak birim fiyatlarda ~%5 tasarruf sağlayabilir.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
