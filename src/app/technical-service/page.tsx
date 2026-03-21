import Link from "next/link";
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Eye, Edit, Printer, Clock, User as UserIcon, CreditCard } from "lucide-react";
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
    status: "REPAIRING",
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
    status: "READY",
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
    status: "NEW",
    amount: "2.500 TL",
    paid: "partial",
  },
];

const statusStyles = {
  NEW: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  REPAIRING: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  READY: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  DELIVERED: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
  CANCELLED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const statusLabels: Record<string, string> = {
  NEW: "Yeni Kayıt",
  REPAIRING: "Onarımda",
  READY: "Hazır",
  DELIVERED: "Teslim Edildi",
  CANCELLED: "İptal Edildi",
};

export default function TechnicalServiceListing() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Teknik Servis Takibi</h1>
          <p className="text-slate-500 mt-1">Tüm onarım kayıtlarını yönetin ve takip edin.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
            <input
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm w-80 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              placeholder="IMEI, Müşteri veya Kayıt ID..."
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="md:col-span-3 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Durum</label>
          <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tüm Durumlar</option>
            <option>Yeni Kayıt</option>
            <option>Onarımda</option>
            <option>Hazır</option>
            <option>Teslim Edildi</option>
          </select>
        </div>
        <div className="md:col-span-3 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Teknisyen</label>
          <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tüm Teknisyenler</option>
            <option>Ahmet Yılmaz</option>
            <option>Merve Kaya</option>
          </select>
        </div>
        <div className="md:col-span-3 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Tarih Aralığı</label>
          <input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" type="date" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Marka/Model</label>
          <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
            <option>Tümü</option>
            <option>Apple</option>
            <option>Samsung</option>
          </select>
        </div>
        <div className="md:col-span-1">
          <button className="w-full aspect-square flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">ID / Tarih</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Müşteri</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Cihaz ve Arıza</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Teknisyen</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Durum</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Ödeme</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">#{ticket.id}</span>
                      <span className="text-xs text-slate-400">{ticket.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{ticket.customer}</span>
                      <span className="text-xs text-slate-500">{ticket.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{ticket.device}</span>
                      <span className="text-xs text-red-500 font-medium">{ticket.problem}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {ticket.technician ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                          <UserIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm">{ticket.technician}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Atanmadı</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold",
                      statusStyles[ticket.status as keyof typeof statusStyles]
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full mr-2",
                        ticket.status === 'REPAIRING' ? "bg-orange-500" :
                        ticket.status === 'READY' ? "bg-green-500" :
                        ticket.status === 'NEW' ? "bg-blue-500" : "bg-slate-500"
                      )}></span>
                      {statusLabels[ticket.status] || ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-bold">{ticket.amount}</span>
                      <span className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded font-bold uppercase",
                        ticket.paid === true ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        ticket.paid === "partial" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      )}>
                        {ticket.paid === true ? "Ödendi" : ticket.paid === "partial" ? "Kısmi" : "Ödenmedi"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400" title="Detaylar">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400" title="Düzenle">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400" title="Yazdır">
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
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500">24 kayıt arasından 1-10 arası gösteriliyor.</span>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-sm font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-sm font-medium">3</button>
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Preview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Bekleyen", value: 12, icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "Onarımda", value: 8, icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
          { label: "Hazır", value: 4, icon: Clock, color: "text-green-600", bg: "bg-green-100" },
          { label: "Bugünkü Tahsilat", value: "8.550 TL", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-100" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
