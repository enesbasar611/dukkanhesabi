import {  Filter, Plus, FileUp, Building2, Phone, Mail, Globe, MapPin, MoreVertical, ChevronLeft, ChevronRight, Edit, History, Search, BadgeCheck, CreditCard, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const suppliers = [
  {
    name: "Asya Teknoloji Ltd.",
    category: "Yedek Parça",
    id: "SUP-9021",
    contact: "Ahmet Ak",
    phone: "0212 555 10 20",
    email: "siparis@asyateknoloji.com",
    debt: "₺12.450",
    trust: 92,
    status: "active"
  },
  {
    name: "Elite Lojistik A.Ş.",
    category: "Lojistik",
    id: "SUP-1104",
    contact: "Merve Yılmaz",
    phone: "0216 444 34 56",
    email: "operasyon@elitelojistik.com",
    debt: "₺4.200",
    trust: 85,
    status: "active"
  },
  {
    name: "Global Screen Solutions",
    category: "Panel/Ekran",
    id: "SUP-4492",
    contact: "John Doe",
    phone: "+86 138 000 000",
    email: "export@globalscreen.cn",
    debt: "₺28.900",
    trust: 45,
    status: "warning"
  }
];

export default function SupplierManagement() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-[0.1em] text-blue-600 uppercase">Satın Alma Paneli</span>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Tedarikçi Yönetimi</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm">
              <FileUp className="w-4 h-4" /> Dışa Aktar
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all active:scale-95">
              <Plus className="w-4 h-4" /> Yeni Tedarikçi
            </button>
          </div>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Aktif Tedarikçiler", value: "48", trend: "+4%", icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Toplam Borç", value: "₺142.500", trend: "-2.4%", icon: CreditCard, color: "text-red-500", bg: "bg-red-500/10" },
          { label: "Ort. Güven Skoru", value: "94/100", trend: "Mükemmel", icon: BadgeCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Geciken Teslimat", value: "3", tag: "Beklemede", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 group">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-2 rounded-lg", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <span className={cn("text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend?.includes('+') ? "text-emerald-500 bg-emerald-500/10" :
                stat.trend?.includes('-') ? "text-red-500 bg-red-500/10" : "text-slate-500 bg-slate-800")}>
                {stat.trend || stat.tag}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-extrabold text-white tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content: Supplier List */}
      <div className="bg-slate-900 rounded-xl shadow-sm overflow-hidden border border-slate-800">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
          <h3 className="text-lg font-bold text-white">Tedarikçi Listesi</h3>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                className="pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs w-64 focus:ring-2 focus:ring-blue-500/20 text-white outline-none"
                placeholder="Tedarikçi veya kategori ara..."
              />
            </div>
            <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl transition-colors border border-slate-700">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-800">Tedarikçi Adı</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-800">Kategori</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-800">Borç Durumu</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-800">Güven Skoru</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-800 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {suppliers.map((s, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-xs text-blue-500">
                        {s.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{s.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono">ID: {s.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-800 rounded-md text-[10px] font-bold text-slate-400 uppercase">
                      {s.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-white">{s.debt}</p>
                    <p className={cn("text-[10px] font-bold uppercase", s.status === 'warning' ? "text-red-500" : "text-emerald-500")}>
                      {s.status === 'warning' ? "Gecikme: 3 Gün" : "Vade: 12 Gün"}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-950 rounded-full overflow-hidden shadow-inner">
                        <div className={cn("h-full rounded-full transition-all", s.trust > 80 ? "bg-emerald-500" : s.trust > 50 ? "bg-amber-500" : "bg-red-500")} style={{width: `${s.trust}%`}}></div>
                      </div>
                      <span className={cn("text-xs font-bold", s.trust > 80 ? "text-emerald-500" : s.trust > 50 ? "text-amber-500" : "text-red-500")}>{s.trust}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400"><History className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-widest">Showing 3 of 48 active suppliers</p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
