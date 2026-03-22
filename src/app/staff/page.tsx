import {
  ShieldCheck,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Briefcase,
  Star,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

async function getStaffData() {
  const staff = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { tickets: { where: { status: { in: ['NEW', 'REPAIRING'] } } } }
      }
    }
  });

  const stats = {
    total: staff.length,
    activeTasks: staff.reduce((acc, curr) => acc + curr._count.tickets, 0),
    avgRating: staff.reduce((acc, curr) => acc + curr.rating, 0) / staff.length || 0,
    certified: staff.filter(s => s.role === 'ADMIN' || s.role === 'MANAGER').length
  };

  return { staff, stats };
}

export default async function StaffPage() {
  const { staff, stats } = await getStaffData();

  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Personel Yönetimi</h1>
          <p className="text-slate-500 mt-1">Ekibinizi, yetkilerini ve performanslarını yönetin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95 text-sm">
            <UserPlus className="w-4 h-4" />
            Yeni Personel Ekle
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Ekip", value: stats.total.toString(), icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "Aktif Görevler", value: stats.activeTasks.toString(), icon: Activity, color: "text-orange-600", bg: "bg-orange-100" },
          { label: "Ort. Performans", value: `${stats.avgRating.toFixed(1)}/5`, icon: Star, color: "text-amber-600", bg: "bg-amber-100" },
          { label: "Yönetici", value: stats.certified.toString(), icon: BadgeCheck, color: "text-emerald-600", bg: "bg-emerald-100" },
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

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((person) => (
          <div key={person.id} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner",
                person.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
              )}>
                {person.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </div>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                  person.status === 'ACTIVE' ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"
                )}>{person.status === 'ACTIVE' ? 'Aktif' : 'İzinli'}</span>
                <button className="p-2 text-slate-300 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-1 mb-6 relative z-10">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{person.name}</h3>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{person.role}</p>
            </div>

            <div className="space-y-3 mb-8 relative z-10">
              <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Mail className="w-4 h-4 text-slate-400" />
                {person.email}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6 relative z-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Performans</p>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-black text-slate-900 dark:text-white">{person.rating.toFixed(1)}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">İş Yükü</p>
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-blue-500" />
                  <span className="font-black text-slate-900 dark:text-white">{person._count.tickets} Aktif</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-black uppercase tracking-widest border border-slate-100 dark:border-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 shadow-sm">
              Profili Görüntüle
            </button>
          </div>
        ))}
        {staff.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-400 italic">Henüz personel kaydı bulunmuyor.</div>
        )}
      </div>
    </div>
  );
}
