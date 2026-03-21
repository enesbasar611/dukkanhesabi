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
  CalendarDays,
  Smartphone,
  History as AuditLog,
  HelpCircle,
  Settings2,
  HardHat,
  ClipboardList,
  Contact2,
  ArrowLeftRight,
  TrendingUp,
  Store
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    category: "YÖNETİM",
    items: [
      { name: "Ana Panel", href: "/dashboard", icon: LayoutDashboard },
      { name: "Takvim", href: "/calendar", icon: CalendarDays },
    ]
  },
  {
    category: "OPERASYON",
    items: [
      { name: "Kayıtlar", href: "/technical-service", icon: ClipboardList },
      { name: "Yeni Servis", href: "/technical-service/new", icon: PlusCircle },
    ]
  },
  {
    category: "STOK",
    items: [
      { name: "Ürünler", href: "/inventory", icon: Package },
      { name: "Parçalar", href: "/inventory/parts", icon: HardHat },
      { name: "Depo", href: "/inventory/storage", icon: Warehouse },
      { name: "Sayım", href: "/inventory/audit", icon: AuditLog },
    ]
  },
  {
    category: "SATIŞ",
    items: [
      { name: "Hızlı Satış", href: "/pos", icon: ShoppingCart },
      { name: "İkinci El", href: "/inventory/devices", icon: Smartphone },
    ]
  },
  {
    category: "CRM & FİNANS",
    items: [
      { name: "Kasalar", href: "/finance/vaults", icon: Store },
      { name: "Müşteriler", href: "/customers", icon: Users },
      { name: "Veresiyeler", href: "/customers/debts", icon: CreditCard },
      { name: "Gelir-Gider", href: "/finance", icon: ArrowLeftRight },
      { name: "Raporlar", href: "/reports", icon: BarChart3 },
    ]
  },
  {
    category: "SİSTEM",
    items: [
      { name: "Personel", href: "/staff", icon: BadgeCheck },
      { name: "Ayarlar", href: "/settings", icon: Settings },
      { name: "Destek", href: "/support", icon: HelpCircle },
    ]
  }
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex flex-col bg-slate-900 border-r border-slate-800 font-inter antialiased tracking-tight shadow-xl">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
          <Wrench className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-50 leading-none tracking-tighter">Teknik Atelier</h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-semibold">Phone Repair & POS</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-6 overflow-y-auto custom-scrollbar py-2">
        {navigation.map((group) => (
          <div key={group.category}>
            <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{group.category}</p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 group text-sm font-medium",
                        isActive
                          ? "bg-blue-600/10 text-blue-400 shadow-sm font-semibold translate-x-1"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:translate-x-1"
                      )}
                    >
                      <item.icon className={cn("w-[20px] h-[20px] transition-colors", isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-200")} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 mt-auto flex flex-col gap-2">
        <Link
          href="/technical-service/new"
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm shadow-lg shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          Yeni Servis Kaydı
        </Link>
        <button className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-red-400 transition-colors cursor-pointer group rounded-lg hover:bg-red-400/5">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Güvenli Çıkış</span>
        </button>
      </div>
    </aside>
  );
}
