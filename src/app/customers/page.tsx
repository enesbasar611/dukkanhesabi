import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Ban
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const customers = [
  { id: "1", name: "Burak Yılmaz", phone: "0532 444 00 11", email: "burak@example.com", status: "VIP", lastVisit: "12 Eki 2023", totalSpend: "14.250 ₺", debts: "0 ₺" },
  { id: "2", name: "Ayşe Demir", phone: "0535 222 11 33", email: "ayse@example.com", status: "Aktif", lastVisit: "08 Eki 2023", totalSpend: "2.800 ₺", debts: "450 ₺" },
  { id: "3", name: "Caner Uzun", phone: "0507 999 88 77", email: "caner@example.com", status: "Pasif", lastVisit: "15 Eyl 2023", totalSpend: "1.200 ₺", debts: "1.200 ₺" },
];

export default function CustomersPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Müşteri Yönetimi</h1>
          <p className="text-slate-500 mt-1">Müşteri portföyünüzü ve işlem geçmişlerini yönetin.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
            <input
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm w-80 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              placeholder="Müşteri adı, telefon veya e-posta..."
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95 text-sm">
            <UserPlus className="w-4 h-4" />
            Yeni Müşteri
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Müşteri", value: "1,284", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "VIP Müşteriler", value: "42", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-100" },
          { label: "Yeni (Bu Ay)", value: "+84", icon: UserPlus, color: "text-purple-600", bg: "bg-purple-100" },
          { label: "Kara Liste", value: "12", icon: Ban, color: "text-red-600", bg: "bg-red-100" },
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

      {/* Customers Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/20">
          <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">Müşteri Listesi</h3>
          <button className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
            <Filter className="w-4 h-4 text-slate-500" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Müşteri / İletişim</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Durum</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Son Ziyaret</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Harcama</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Borç</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</span>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Phone className="w-3 h-3" /> {c.phone}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3" /> {c.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      c.status === 'VIP' ? "bg-blue-100 text-blue-700" :
                      c.status === 'Aktif' ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                    )}>{c.status}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      {c.lastVisit}
                    </div>
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-900 dark:text-white text-sm">{c.totalSpend}</td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "text-sm font-bold",
                      c.debts !== '0 ₺' ? "text-red-500" : "text-slate-400"
                    )}>{c.debts}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/customers/${c.id}`} className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 rounded-lg">
                        Görüntüle
                      </Link>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500">1,284 kayıttan 1-10 arası gösteriliyor.</span>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">1</button>
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
