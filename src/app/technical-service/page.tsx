import Link from "next/link";
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Eye, Edit, Printer, Clock, User as UserIcon, CreditCard, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const tickets = [
  {
    id: "TS-2024-001",
    date: "12 May, 10:45",
    customer: "Burak Yılmaz",
    phone: "0532 444 00 11",
    device: "iPhone 13 Pro Max",
    problem: "Ekran Değişimi",
    technician: "Ahmet Y.",
    status: "ONARIMDA",
    amount: "4.250 TL",
    paid: false,
  },
  {
    id: "TS-2024-002",
    date: "12 May, 11:20",
    customer: "Ayşe Demir",
    phone: "0535 222 11 33",
    device: "Samsung Galaxy S22",
    problem: "Batarya Değişimi",
    technician: "Merve K.",
    status: "HAZIR",
    amount: "1.800 TL",
    paid: true,
  },
  {
    id: "TS-2024-003",
    date: "12 May, 14:00",
    customer: "Caner Uzun",
    phone: "0507 999 88 77",
    device: "iPad Air 5",
    problem: "Şarj Entegresi",
    technician: null,
    status: "YENİ",
    amount: "2.500 TL",
    paid: "partial",
  },
];

const statusStyles = {
  YENİ: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  ONARIMDA: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  HAZIR: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  TESLİM_EDİLDİ: "bg-slate-800 text-slate-400 border-slate-700",
  İPTAL_EDİLDİ: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function TechnicalServiceListing() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto bg-slate-950 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">Operasyon</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Teknik Servis Takibi</h1>
          <p className="text-slate-500 mt-1">Tüm onarım kayıtlarını yönetin ve takip edin.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
            <input
              className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm w-80 focus:ring-2 focus:ring-blue-500/20 text-white transition-all outline-none"
              placeholder="IMEI, Müşteri veya Kayıt No..."
              type="text"
            />
          </div>
          <Link
            href="/technical-service/new"
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95 text-sm"
          >
            <Plus className="w-4 h-4" />
            Yeni Kayıt
          </Link>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm">
        <div className="md:col-span-3 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-1">Durum</label>
          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tüm Durumlar</option>
            <option>Yeni Kayıt</option>
            <option>Onarımda</option>
            <option>Hazır</option>
            <option>Teslim Edildi</option>
          </select>
        </div>
        <div className="md:col-span-3 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-1">Tekniker</label>
          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tüm Teknikerler</option>
            <option>Ahmet Yılmaz</option>
            <option>Merve Kaya</option>
          </select>
        </div>
        <div className="md:col-span-3 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-1">Tarih Aralığı</label>
          <input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none" type="date" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-1">Marka/Model</label>
          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tümü</option>
            <option>Apple</option>
            <option>Samsung</option>
          </select>
        </div>
        <div className="md:col-span-1">
          <button className="w-full aspect-square flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors border border-slate-700">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="bg-slate-900 rounded-2xl shadow-sm overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">No / Tarih</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">Müşteri</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">Cihaz ve Arıza</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">Tekniker</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">Durum</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">Ödeme</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-blue-500 text-sm">#{ticket.id}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{ticket.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-white">{ticket.customer}</span>
                      <span className="text-[10px] text-slate-500">{ticket.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-slate-200">{ticket.device}</span>
                      <span className="text-xs text-red-400 font-medium">{ticket.problem}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {ticket.technician ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                          <UserIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-300">{ticket.technician}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 italic">Atanmadı</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border",
                      statusStyles[ticket.status as keyof typeof statusStyles]
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full mr-2",
                        ticket.status === 'ONARIMDA' ? "bg-orange-500" :
                        ticket.status === 'HAZIR' ? "bg-emerald-500" :
                        ticket.status === 'YENİ' ? "bg-blue-500" : "bg-slate-500"
                      )}></span>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-bold text-white">{ticket.amount}</span>
                      <span className={cn(
                        "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase",
                        ticket.paid === true ? "bg-emerald-500/10 text-emerald-500" :
                        ticket.paid === "partial" ? "bg-amber-500/10 text-amber-500" :
                        "bg-red-500/10 text-red-500"
                      )}>
                        {ticket.paid === true ? "Ödendi" : ticket.paid === "partial" ? "Parçalı" : "Ödenmedi"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400" title="Detaylar">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400" title="Düzenle">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400" title="Yazdır">
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500">24 kayıttan 1-10 arası gösteriliyor.</span>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-600 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 text-sm font-medium transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 text-sm font-medium transition-colors">3</button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Preview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Bekleyen", value: 12, icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Onarımda", value: 8, icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
          { label: "Hazır", value: 4, icon: Clock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Bugünkü Tahsilat", value: "₺8.550", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
