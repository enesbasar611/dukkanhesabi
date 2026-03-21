import { Search, Filter, Smartphone, Package, TrendingUp, ShoppingBag, Eye, CheckCircle, ShieldCheck, Battery, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const devices = [
  {
    name: "iPhone 15 Pro Max (256GB)",
    imei: "359128471203948",
    type: "NEW",
    condition: "Kapalı Kutu",
    warranty: "23 Ay 12 Gün Kaldı",
    warrantyProgress: 95,
    price: "₺82.900",
    cost: "₺74.500",
    status: "Stokta"
  },
  {
    name: "iPhone 12 Pro",
    imei: "358249110294821",
    type: "USED",
    condition: "%86 Pil Sağlığı",
    warranty: "Süresi Doldu",
    warrantyProgress: 100,
    price: "₺28.500",
    cost: "₺24.000",
    status: "Revizyonda",
    isRevision: true
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    imei: "357122110485922",
    type: "USED",
    condition: "%92 Pil Sağlığı",
    warranty: "3 Ay 4 Gün Kaldı",
    warrantyProgress: 15,
    price: "₺36.000",
    cost: "₺31.500",
    status: "Stokta"
  }
];

export default function DeviceInventory() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">Envanter</span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Cihaz Stok Yönetimi</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            CSV Dışa Aktar
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all active:scale-95">
            <Smartphone className="w-4 h-4" /> Yeni Cihaz Ekle
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Stoktaki Cihazlar", value: "142", trend: "+12%", icon: Package, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Toplam Yatırım", value: "₺842.500", icon: CreditCard, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Beklenen Kar", value: "₺156.200", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "Aylık Satışlar", value: "28", icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <div className={cn("p-3 rounded-xl", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              {stat.trend && <span className="text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-lg">{stat.trend}</span>}
            </div>
            <div className="mt-4">
              <p className="text-sm font-bold text-slate-500">{stat.label}</p>
              <h3 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-2xl space-y-6 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Envanter Filtreleri</h4>
          <button className="text-[10px] font-black text-blue-600 flex items-center gap-1 uppercase tracking-tighter">
            <Filter className="w-3 h-3" /> Temizle
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="IMEI, Model veya Seri Numarası..." type="text" />
          </div>
          <div className="md:col-span-3">
            <select className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm h-11 px-4 outline-none">
              <option>Cihaz Tipi (Yeni / 2. El)</option>
              <option>Yeni</option>
              <option>İkinci El</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <select className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm h-11 px-4 outline-none">
              <option>Marka</option>
              <option>Apple</option>
              <option>Samsung</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <select className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm h-11 px-4 outline-none">
              <option>Durum</option>
              <option>Stokta</option>
              <option>Satıldı</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <button className="w-full h-11 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all uppercase tracking-widest">Aramayı Uygula</button>
          </div>
        </div>
      </div>

      {/* Device List Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Cihaz / IMEI</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Tip / Kondisyon</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Garanti Durumu</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Fiyatlandırma</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Durum</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {devices.map((device, i) => (
                <tr key={i} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{device.name}</p>
                        <p className="text-xs text-slate-500 font-mono mt-1">{device.imei}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1.5">
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded font-black uppercase",
                        device.type === 'NEW' ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      )}>{device.type === 'NEW' ? 'YENİ' : '2. EL'}</span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                        {device.type === 'NEW' ? <CheckCircle className="w-3 h-3 text-blue-500" /> : <Battery className="w-3 h-3 text-orange-500" />}
                        {device.condition}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-48">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className={cn(
                          "text-[10px] font-bold flex items-center gap-1",
                          device.warranty === 'Süresi Doldu' ? "text-red-600" : "text-blue-600"
                        )}>
                          <ShieldCheck className="w-3 h-3" />
                          {device.warranty}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                        <div
                          className={cn("h-full rounded-full transition-all duration-500", device.warranty === 'Süresi Doldu' ? "bg-red-500" : "bg-blue-500")}
                          style={{ width: `${device.warrantyProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm">
                      <p className="font-black text-slate-900 dark:text-white">{device.price}</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Maliyet: {device.cost}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      device.isRevision ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", device.isRevision ? "bg-orange-500" : "bg-emerald-500")}></span>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 rounded-xl transition-all"><Eye className="w-4 h-4" /></button>
                      <button className="bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-all px-6 py-1.5 text-[10px] font-black uppercase tracking-widest active:scale-95">Sat</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">142 cihazdan 1-3 arası gösteriliyor</p>
          <div className="flex gap-1.5">
            <button className="px-4 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-[10px] font-black uppercase tracking-widest transition-all">Önceki</button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-lg text-[10px] font-black shadow-md shadow-blue-200">1</button>
            <button className="px-4 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-[10px] font-black uppercase tracking-widest transition-all">Sonraki</button>
          </div>
        </div>
      </div>
    </div>
  );
}
