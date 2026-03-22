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
  Receipt,
  MessageSquare,
  Activity,
  BellRing,
  Smartphone,
  TrendingUp,
  FileText,
  Boxes,
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    category: "Yönetim",
    items: [
      { name: "Kontrol Paneli", href: "/dashboard", icon: LayoutDashboard },
      { name: "Raporlar", href: "/reports", icon: BarChart3 },
      { name: "Personel", href: "/staff", icon: BadgeCheck },
    ]
  },
  {
    category: "Operasyon",
    items: [
      { name: "Teknik Servis", href: "/technical-service", icon: Wrench },
      { name: "Fatura Önizleme", href: "/technical-service/invoice-preview", icon: FileText },
    ]
  },
  {
    category: "Stok",
    items: [
      { name: "Stok Yönetimi", href: "/inventory", icon: Package },
      { name: "Toplu Giriş", href: "/inventory/bulk", icon: Boxes },
      { name: "Cihaz Envanteri", href: "/inventory/devices", icon: Smartphone },
      { name: "Depo Birimleri", href: "/inventory/storage", icon: Warehouse },
      { name: "Tedarikçiler", href: "/suppliers", icon: Truck },
    ]
  },
  {
    category: "Satış",
    items: [
      { name: "POS / Satış", href: "/pos", icon: ShoppingCart },
      { name: "Satış Raporu", href: "/reports/sales", icon: Receipt },
    ]
  },
  {
    category: "CRM & Finans",
    items: [
      { name: "Müşteriler", href: "/customers", icon: Users },
      { name: "Borç Takibi", href: "/customers/debts", icon: CreditCard },
      { name: "Kasa / Finans", href: "/finance", icon: History },
      { name: "Kâr Analizi", href: "/finance/profit-analysis", icon: TrendingUp },
      { name: "Kampanyalar", href: "/crm/campaigns", icon: MessageSquare },
    ]
  },
  {
    category: "Sistem",
    items: [
      { name: "Sistem Sağlığı", href: "/system/health", icon: Activity },
      { name: "Mesajlaşma", href: "/settings/messaging", icon: Smartphone },
      { name: "Otomasyonlar", href: "/settings/automations", icon: BellRing },
    ]
  }
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-slate-900 w-64 border-r border-slate-800 shadow-2xl font-inter antialiased tracking-tight transition-all duration-300 ease-in-out">
      <div className="p-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black">TA</div>
          <div>
            <h1 className="text-sm font-black text-white tracking-widest uppercase leading-none">Tech Atelier</h1>
            <p className="text-[9px] text-slate-500 mt-1 uppercase font-black tracking-widest">Admin Terminal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar pb-10">
        {navigation.map((section) => (
          <div key={section.category} className="space-y-2">
            <h3 className="px-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">{section.category}</h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                      isActive
                        ? "bg-blue-600/10 text-blue-400 font-bold"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
                    <item.icon className={cn("w-4.5 h-4.5 transition-colors", isActive ? "text-blue-400" : "text-slate-500 group-hover:text-blue-400")} />
                    <span className="text-xs uppercase tracking-wider font-bold">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <Link
          href="/technical-service/new"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-2xl font-black shadow-xl shadow-blue-900/20 active:scale-95 transition-all text-[10px] uppercase tracking-widest mb-4"
        >
          <PlusCircle className="w-4 h-4" />
          Yeni Servis Kaydı
        </Link>

        <div className="grid grid-cols-2 gap-2">
          <Link href="/settings" className="flex items-center justify-center gap-2 p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all group">
            <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span className="text-[9px] font-black uppercase tracking-tighter">Ayarlar</span>
          </Link>
          <button className="flex items-center justify-center gap-2 p-2.5 bg-slate-800 hover:bg-red-600/20 text-slate-300 hover:text-red-400 rounded-xl transition-all">
            <LogOut className="w-4 h-4" />
            <span className="text-[9px] font-black uppercase tracking-tighter">Çıkış</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
