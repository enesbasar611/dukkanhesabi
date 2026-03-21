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
  Calendar,
  PlusCircle,
  LogOut,
  Warehouse
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Panel", href: "/dashboard", icon: LayoutDashboard },
  { name: "Randevular", href: "/appointments", icon: Calendar },
  { name: "Teknik Servis", href: "/technical-service", icon: Wrench },
  { name: "Stok", href: "/inventory", icon: Package },
  { name: "Depo Birimleri", href: "/inventory/storage", icon: Warehouse },
  { name: "Satış/POS", href: "/pos", icon: ShoppingCart },
  { name: "Müşteriler", href: "/customers", icon: Users },
  { name: "Borçlar", href: "/customers/debts", icon: CreditCard },
  { name: "Finans", href: "/finance", icon: History },
  { name: "Raporlar", href: "/reports", icon: BarChart3 },
  { name: "Personel", href: "/staff", icon: BadgeCheck },
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-slate-800 dark:bg-slate-950 w-64 border-r-0 shadow-xl font-inter antialiased tracking-tight transition-all duration-300 ease-in-out">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white tracking-tight uppercase">Tech Atelier</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Yönetim Paneli</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pt-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ease-in-out font-medium group",
                isActive
                  ? "bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              )}
            >
              <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white")} />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-700/50 space-y-4">
        <Link
          href="/technical-service/new"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Yeni Servis Kaydı
        </Link>

        <div className="space-y-1">
          <Link href="/settings/profile" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Ayarlar</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Çıkış Yap</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
