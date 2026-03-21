"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wrench,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  History,
  BarChart3,
  BadgeCheck,
  Settings,
  PlusCircle,
  LogOut,
  Warehouse,
  Bell,
  ShieldCheck,
  Database,
  FileText,
  Zap,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { group: "Yönetim", items: [
    { name: "Panel", href: "/dashboard", icon: LayoutDashboard },
    { name: "Raporlar", href: "/reports", icon: BarChart3 },
  ]},
  { group: "Operasyon", items: [
    { name: "Teknik Servis", href: "/technical-service", icon: Wrench },
    { name: "Bildirimler", href: "/notifications", icon: Bell },
  ]},
  { group: "Stok", items: [
    { name: "Envanter", href: "/inventory", icon: Package },
    { name: "Depo Birimleri", href: "/inventory/storage", icon: Warehouse },
    { name: "Tedarikçiler", href: "/suppliers", icon: ClipboardList },
  ]},
  { group: "Satış", items: [
    { name: "Hızlı Satış (POS)", href: "/pos", icon: ShoppingCart },
  ]},
  { group: "CRM & Finans", items: [
    { name: "Müşteriler", href: "/customers", icon: Users },
    { name: "Sadakat Programı", href: "/customers/loyalty", icon: Zap },
    { name: "Finans", href: "/finance", icon: History },
    { name: "Borç Takibi", href: "/customers/debts", icon: CreditCard },
  ]},
  { group: "Sistem", items: [
    { name: "Ayarlar", href: "/settings/profile", icon: Settings },
    { name: "Güvenlik", href: "/settings/profile", icon: ShieldCheck },
    { name: "Yedekleme", href: "/settings/backup", icon: Database },
    { name: "Sistem Günlükleri", href: "/settings/logs", icon: FileText },
  ]},
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-slate-900 dark:bg-black w-64 border-r border-slate-800 dark:border-zinc-900 shadow-2xl font-inter antialiased tracking-tight transition-all duration-300 ease-in-out">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white tracking-tighter uppercase">Tech Atelier</h1>
        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-medium">Yönetim Paneli</p>
      </div>

      <nav className="flex-1 px-4 space-y-6 overflow-y-auto custom-scrollbar pt-4 pb-8">
        {navigation.map((group) => (
          <div key={group.group} className="space-y-1">
            <h2 className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">
              {group.group}
            </h2>
            {group.items.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ease-in-out font-medium group",
                    isActive
                      ? "bg-blue-600/10 text-blue-400 border-l-4 border-blue-500 font-semibold ml-1"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white")} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-800 space-y-4">
        <Link
          href="/technical-service/new"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Yeni Servis Kaydı
        </Link>

        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">AD</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Admin Kullanıcı</p>
            <p className="text-[10px] text-slate-500 truncate">Yönetici</p>
          </div>
          <button className="text-slate-500 hover:text-red-400 transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
