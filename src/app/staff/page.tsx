import {
  Shield,
  BadgeCheck,
  Users,
  Activity,
  MoreVertical,
  Filter,
  ShieldCheck,
  UserPlus,
  Edit3,
  Plus,
  History as AuditLogIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const personnel = [
  {
    name: "Ahmet Yılmaz",
    email: "a.yilmaz@techatelier.com",
    role: "Senior Technician",
    dept: "Main Workshop",
    lastActive: "2 minutes ago",
    ip: "192.168.1.45",
    status: "Online",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4KVvugUWDj1HTuU9H6j8VVUrqtUa6l1ymvx7lYqhNX5OeJtwO5_GUTLGVli9o06udotXtXoMwwawokn-sfKLNwcejy_zc0wghWijv6rR3Q0GbawcqASPuYKS2wCrOA-H0RBzGKkzDLtBSpX47O4lShV_yjoABFPQ5FcNV14xsFXkTK_lAaON7EwarPuNLVICN0iPuGkddc-6_Ma8Uj_iDA5CV2_B4XGi2rDprh9Gnf_EprK2aYoIxNkKerNViZ0RCgfCNI3lN0zk"
  },
  {
    name: "Zeynep Kaya",
    email: "z.kaya@techatelier.com",
    role: "Cashier / POS",
    dept: "Front Desk",
    lastActive: "1 hour ago",
    ip: "192.168.1.12",
    status: "Offline",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhY0CeUXGwMyprOEW7LY_Txnr--dH4UUs5aMF644TSuiNJBmMyciikt768w3oEwn_oi3irfxLW2EmZ3pXGL3AQm6uje2ols8X382M66SqigLdxb7xuns2zBbTITob4VTgL9x3-_tg2DCN1scFc4AWUXEl7QLn7ERKSxKBbINyxojJAybvzYX7xSrv0paZQwganTaKh_Jc1j6qEHyoVwjbHksdLSzv7_QxEhVlEcfzwLV2_n5nZWjqUN2zfjAc7u7PLysGxx3yZ2mM"
  },
  {
    name: "Murat Özcan",
    email: "m.ozcan@techatelier.com",
    role: "System Admin",
    dept: "Management",
    lastActive: "Active Now",
    ip: "172.16.5.20",
    status: "Online",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCOUvfcz2ARO5H6rU9a8fr3fBXnI8lav6hOd5w-IoKlF_BqTuNpjQ7TESch2NeLOfctpyQAJltwJSr5Mp8EEtCFqtdMvnkNyFZC-GMwsQt775m2eRwsH7uXqU9VwVnQ-HLDEPrPDaAzHCCoBwDemaj6jbi2h69a7STa4QZq7WJvhcTvhPEo0jfzz-M-4x7zpQzzV_EjKzw1JDoP3uj8POYv8Toebco_7UnKNCaSzWEufy5-eOEyGfPJ6TheXMvCJK2YyuNnhlEDds"
  }
];

const auditLogs = [
  { time: "14:22:10", user: "Ahmet Yılmaz", op: "updated Ticket #SR-9012", detail: "Operation: Status Change (Pending -> Processing)", terminal: "WS-01", type: "UPDATE" },
  { time: "13:05:45", user: "Murat Özcan", op: "created new User Account", detail: "Operation: Staff Onboarding (Selin Ak)", terminal: "MGMT-01", type: "CREATE" },
  { time: "11:40:02", user: "System", op: "purged Temp Cache Logs", detail: "Operation: Automated Maintenance", terminal: "AUTO-SERV", type: "DELETE" },
];

export default function StaffManagement() {
  return (
    <div className="p-8 space-y-10 bg-slate-950 min-h-screen pb-24">
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1 block">System Administration</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Staff & Permissions</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 text-sm font-bold text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
            Export Audit Log
          </button>
          <button className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            New Staff Member
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Active Personnel Table */}
        <div className="col-span-12 xl:col-span-8 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 flex justify-between items-center border-b border-slate-800">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              Active Personnel
            </h3>
            <button className="p-1.5 hover:bg-slate-800 rounded text-slate-500 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/60 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Role & Dept</th>
                  <th className="px-6 py-4">Last Active</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {personnel.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 overflow-hidden relative border border-slate-700">
                          <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-none">{p.name}</p>
                          <p className="text-[11px] text-slate-500 mt-1">{p.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-200">{p.role}</span>
                        <span className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">{p.dept}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <p className="text-xs font-medium text-slate-300">{p.lastActive}</p>
                        <p className="text-[10px] text-slate-500 font-mono">IP: {p.ip}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                        p.status === 'Online' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-slate-800 text-slate-500 border-slate-700"
                      )}>{p.status}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role Hierarchy & Stats */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              Role Hierarchy
            </h3>
            <div className="space-y-4">
              {[
                { name: "Admin", sub: "Full System Access", count: 2, icon: Shield, color: "text-blue-500", bg: "bg-blue-500/10" },
                { name: "Technician", sub: "Tickets & Parts Only", count: 8, icon: BadgeCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Cashier", sub: "Sales & Daily Report", count: 4, icon: Activity, color: "text-orange-500", bg: "bg-orange-500/10" },
              ].map((role) => (
                <div key={role.name} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", role.bg)}>
                      <role.icon className={cn("w-5 h-5", role.color)} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{role.name}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{role.sub}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role.count} Members</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-800 rounded-xl text-slate-500 hover:text-blue-400 hover:border-blue-500/50 transition-all text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
              Define New Role
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between h-32">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Failed Logins</span>
              <div>
                <p className="text-3xl font-black text-red-500 tracking-tighter">03</p>
                <p className="text-[10px] text-slate-600 font-bold uppercase mt-1">Last 24 hours</p>
              </div>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between h-32">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Active Sessions</span>
              <div>
                <p className="text-3xl font-black text-emerald-500 tracking-tighter">14</p>
                <p className="text-[10px] text-slate-600 font-bold uppercase mt-1">Across branches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Log */}
        <div className="col-span-12 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 flex justify-between items-center border-b border-slate-800">
            <h3 className="font-bold text-white flex items-center gap-2">
              <AuditLogIcon className="w-4 h-4 text-blue-500" />
              System Audit Log
            </h3>
            <div className="flex gap-4 items-center">
              {['CREATE', 'UPDATE', 'DELETE'].map(type => (
                <div key={type} className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span className={cn(
                    "w-2 h-2 rounded-full",
                    type === 'CREATE' ? "bg-blue-500" : type === 'UPDATE' ? "bg-emerald-500" : "bg-red-500"
                  )}></span>
                  {type}
                </div>
              ))}
            </div>
          </div>
          <div className="divide-y divide-slate-800/50">
            {auditLogs.map((log, i) => (
              <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-slate-800/20 transition-all group">
                <div className="flex items-center gap-8">
                  <span className="text-xs font-mono font-bold text-slate-500 w-16">{log.time}</span>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      log.type === 'CREATE' ? "bg-blue-500/10 text-blue-500" :
                      log.type === 'UPDATE' ? "bg-emerald-500/10 text-emerald-400" :
                      "bg-red-500/10 text-red-500"
                    )}>
                      {log.type === 'UPDATE' ? <Edit3 className="w-3.5 h-3.5" /> :
                       log.type === 'CREATE' ? <Plus className="w-3.5 h-3.5" /> : <MoreVertical className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        <span className="font-bold text-white">{log.user}</span> {log.op}
                      </p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">{log.detail}</p>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-black text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-tighter">Terminal: {log.terminal}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-900/40 text-center border-t border-slate-800">
            <button className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] hover:underline">View All Activities</button>
          </div>
        </div>
      </div>
    </div>
  );
}
