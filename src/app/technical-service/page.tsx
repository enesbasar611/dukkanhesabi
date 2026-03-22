import Link from "next/link";
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Eye, Edit, Printer, Clock, User as UserIcon, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

const statusStyles = {
  NEW: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  PENDING_APPROVAL: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  REPAIRING: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  READY: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  DELIVERED: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
  CANCELLED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const statusLabels = {
  NEW: "YENİ",
  PENDING_APPROVAL: "ONAY BEKLİYOR",
  REPAIRING: "ONARIMDA",
  READY: "HAZIR",
  DELIVERED: "TESLİM EDİLDİ",
  CANCELLED: "İPTAL",
};

async function getTicketsData() {
  const tickets = await prisma.serviceTicket.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      customer: true,
      technician: true
    },
    take: 20
  });

  const stats = {
    new: await prisma.serviceTicket.count({ where: { status: 'NEW' } }),
    repairing: await prisma.serviceTicket.count({ where: { status: 'REPAIRING' } }),
    ready: await prisma.serviceTicket.count({ where: { status: 'READY' } }),
    todayRevenue: (await prisma.transaction.aggregate({
      where: {
        type: 'INCOME',
        category: 'Teknik Servis',
        createdAt: { gte: new Date(new Date().setHours(0,0,0,0)) }
      },
      _sum: { amount: true }
    }))._sum.amount || 0
  };

  return { tickets, stats };
}

export default async function TechnicalServiceListing() {
  const { tickets, stats } = await getTicketsData();

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Teknik Servis Takibi</h1>
          <p className="text-slate-500 mt-1">Tüm servis kayıtlarını yönetin ve takip edin.</p>
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

      {/* Main Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">ID / Tarih</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Müşteri</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Cihaz & Arıza</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Teknisyen</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800">Durum</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">#{ticket.displayId}</span>
                      <span className="text-xs text-slate-400">{format(ticket.createdAt, 'dd MMM, HH:mm', { locale: tr })}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{ticket.customer.name}</span>
                      <span className="text-xs text-slate-500">{ticket.customer.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{ticket.deviceBrand} {ticket.deviceModel}</span>
                      <span className="text-xs text-red-500 font-medium truncate max-w-[200px]">{ticket.problemDesc}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {ticket.technician ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                          <UserIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm">{ticket.technician.name}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Atanmadı</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase",
                      statusStyles[ticket.status]
                    )}>
                      {statusLabels[ticket.status]}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/technical-service/${ticket.id}`} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400" title="Detaylar">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400" title="Yazdır">
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {tickets.length === 0 && (
                <tr><td colSpan={6} className="py-20 text-center text-slate-400 italic">Henüz servis kaydı bulunmuyor.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500">Servis kayıtları listeleniyor.</span>
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

      {/* Stats Cards Preview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Yeni Kayıt", value: stats.new, icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "Onarımda", value: stats.repairing, icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
          { label: "Hazır", value: stats.ready, icon: Clock, color: "text-green-600", bg: "bg-green-100" },
          { label: "Bugünkü Tahsilat", value: `${stats.todayRevenue.toLocaleString('tr-TR')} ₺`, icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-100" },
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
