"use client";

import React from "react";
import {
  Users,
  UserCheck,
  CalendarX,
  UserPlus,
  Search,
  Bell,
  Settings2,
  CheckCircle2,
  XCircle,
  FileEdit,
  Wallet,
  UserMinus,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Toplam Personel", val: "42", trend: "+12%", icon: Users, color: "text-blue-600" },
  { label: "Aktif Görevde", val: "38", icon: UserCheck, color: "text-emerald-600" },
  { label: "İzinli / Tatil", val: "4", icon: CalendarX, color: "text-slate-400" },
];

const staffList = [
  { name: "Ahmet Yılmaz", role: "Yönetici", jobs: 142, success: "%98.5", lastSeen: "Şimdi aktif", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKx_Nzu3N8OZDCt3PD7L7wKzxSyqj1W9Z2lAj4DOnwjiq9ziL49BrJ4fGvdj77RBZHQ65p8XXa_dsAlD0KMqdb2Hm9cp5BL6HnyDnN5cUhQYxk0krgvG0kyOXDQIRypbojy34LgWSWY8uQvTaEh4AOMdVZnYNWCKHJ8D2rp5YNamfX2z7V5Nj4DXccTeywsRQzm2XyVEcH2MMr23T-VHculN_pxRd9Ga5Fw67B3hHsDMg_jDauhvXc7-XnAoTbrht3xcZQ1Ver60I" },
  { name: "Mehmet Kaya", role: "Teknisyen", jobs: 86, success: "%94.2", lastSeen: "2 saat önce", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-S4eTqmrRkSaatgvh9EIuh0WNwKId6q28O9wfo8VXdUneeUpW3VxD98uPvW0uWXMVQ9-jHG1lYIBRgmk6KaXgbHnoOh76oYAwMT7uy4Ho9Ho5d5LJEyV0isKzKIZ2MU_SB2hADIuTjbWboopMGL0C-6v7ZdpbI5ChLkK50ntkK6yQ_93zIN3ROTzf02NPfw2i3yf_x3g-QI97Q1pIiU4CfkC2ZQ7Bc_dyT_ZCaFOElgmu7xAXSGoIgGtfkDFkSQWI5gVOw1y8n3Y" },
  { name: "Selin Demir", role: "Kasiyer", jobs: 215, success: "%99.1", lastSeen: "Dün 18:45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHv99d_u_ykVPt_eGToTi4SVLQB3eKATN28FzwkJ30au-rJzdVazKrY4KgUPhpIMerTnl-hGqQiLD6hCfA9b3WXU_Gf0Z1HGvzhCs21nAMAt6-3G5MvsfPjPciRbsPtcDi6IJNQSkkedJ4kuy8eaD77jli33U8JkfQ7KaDaBEDYQk37XJNnskIVJmuG53VIcgFdeWhjjy2xbDLmB-PQafFjVSld0YnX8dPEujwkNYv7qAOSyCzMY2Qlk5cqM9OoVNcdxtm_bCcz6U" },
  { name: "Can Özcan", role: "Teknisyen", jobs: 54, success: "%88.9", lastSeen: "3 gün önce", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgfupDemUn1-KLXhYaaMFK2APEHJeOxB8fVYrbp4ivC2JvtNu3jJv9siRNZQZSlxT-WX5Ut7ukYtkjewioxjc22f3PYgfZKjdkxgO2GCzZ0QHN6s1aaVwUGdhR1qCcKZ4sYGvbLnipVMKSoQM6MtNjq4c2aJD20DFFNL2zAjVdfGAWJ9sfc0sNjMRzCkXNSzX-uz4Rpy6_z1XPCcnbKFdB1-rMolZuNAeuMcR4DlR0n_USbsEa91hvbrPvWHGIjNZ4vnwAPtaJS6w" },
];

const auditLogs = [
  { user: "Ahmet Yılmaz", action: "servis kaydını güncelledi:", target: "#SV-9021", time: "14:22", icon: FileEdit, color: "text-emerald-600", bg: "bg-emerald-50" },
  { user: "Mehmet Kaya", action: "kasa girişi yaptı:", target: "1.250,00 ₺", time: "13:10", icon: Wallet, color: "text-blue-600", bg: "bg-blue-50" },
  { user: "Sistem", action: "bir personelin erişimini kısıtladı:", target: "Can Özcan", time: "12:05", icon: UserMinus, color: "text-red-600", bg: "bg-red-50" },
  { user: "Selin Demir", action: "stok sayımı başlattı:", target: "Elektronik Grubu", time: "11:30", icon: Package, color: "text-slate-600", bg: "bg-slate-50" },
];

export default function StaffManagementPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Personel ve Yetki Yönetimi</h2>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all" placeholder="Personel ara..." type="text"/>
          </div>
          <button className="p-2 text-slate-500 hover:bg-white rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-50"></span>
          </button>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-4">
              <s.icon className={cn("w-8 h-8", s.color)} />
              {s.trend && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{s.trend}</span>}
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{s.label}</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{s.val}</h3>
          </div>
        ))}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center text-white text-center group cursor-pointer active:scale-95 transition-transform">
          <UserPlus className="w-10 h-10 mb-2" />
          <p className="font-bold">Yeni Personel Ekle</p>
          <p className="text-[10px] opacity-80 mt-1 uppercase tracking-widest">Ekip üyelerini yönetin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Staff Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Personel Listesi</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-colors">Tümü</button>
              <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-white transition-colors">Teknisyenler</button>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">İsim / Rol</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">İş Sayısı</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Başarı</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Aksiyon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {staffList.map((person, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img alt={person.name} className="w-10 h-10 rounded-xl object-cover border border-slate-100 dark:border-slate-800" src={person.img}/>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">{person.name}</p>
                          <span className={cn(
                            "text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter",
                            person.role === 'Yönetici' ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600"
                          )}>{person.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-black text-sm text-slate-900 dark:text-white text-center">{person.jobs}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm text-emerald-600 font-black">{person.success}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                        <Settings2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Permissions Matrix */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight px-2 text-slate-900 dark:text-white">Yetki Seviyeleri</h3>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800 pb-4">
                <span>Modül Erişimi</span>
                <div className="flex gap-4">
                  <span className="w-4 text-center">Y</span>
                  <span className="w-4 text-center">T</span>
                  <span className="w-4 text-center">K</span>
                </div>
              </div>
              {[
                { name: "Finans & Kasa", perms: [true, false, true] },
                { name: "Stok Yönetimi", perms: [true, true, true] },
                { name: "Servis Kayıtları", perms: [true, true, false] },
                { name: "Müşteri Verileri", perms: [true, false, false] },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{m.name}</span>
                  <div className="flex gap-4">
                    {m.perms.map((p, j) => (
                      p ? <CheckCircle2 key={j} className="w-4 h-4 text-emerald-500" /> : <XCircle key={j} className="w-4 h-4 text-slate-200 dark:text-slate-800" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[10px] text-slate-400 font-bold leading-relaxed italic">
                * Y: Yönetici, T: Teknisyen, K: Kasiyer rollerini temsil eder.
              </p>
            </div>
            <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95">
              Yetki Şablonlarını Düzenle
            </button>
          </div>
        </div>
      </div>

      {/* Audit Logs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">İşlem Logları (Audit Log)</h3>
          <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Tümünü Gör</button>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {auditLogs.map((log, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", log.bg, log.color)}>
                  <log.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    <span className="font-black">{log.user}</span> {log.action} <span className="text-blue-600 dark:text-blue-400 font-bold">{log.target}</span>
                  </p>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
