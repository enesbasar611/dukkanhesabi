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
  Smartphone
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Technical Service", href: "/technical-service", icon: Wrench },
  { name: "Stock", href: "/inventory", icon: Package },
  { name: "Storage Units", href: "/inventory/storage", icon: Warehouse },
  { name: "POS/Sales", href: "/pos", icon: ShoppingCart },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Debts", href: "/customers/debts", icon: CreditCard },
  { name: "Finance", href: "/finance", icon: History },
  { name: "Profit Analysis", href: "/finance/profit-analysis", icon: CreditCard },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Sales Report", href: "/reports/sales", icon: Receipt },
  { name: "Campaigns", href: "/crm/campaigns", icon: MessageSquare },
  { name: "Staff", href: "/staff", icon: BadgeCheck },
  { name: "System Health", href: "/system/health", icon: Activity },
];

export function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-slate-800 dark:bg-slate-950 w-64 border-r-0 shadow-xl font-inter antialiased tracking-tight transition-all duration-300 ease-in-out">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white tracking-tight uppercase">Tech Atelier</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Management Panel</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pt-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
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
          New Service Ticket
        </Link>

        <div className="space-y-1">
          <Link href="/settings/messaging" className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
            pathname.startsWith("/settings/messaging") ? "text-blue-400 bg-blue-600/10" : "text-slate-400 hover:text-white"
          )}>
            <Smartphone className="w-5 h-5" />
            <span className="text-sm">Messaging Gateway</span>
          </Link>
          <Link href="/settings/automations" className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
            pathname.startsWith("/settings/automations") ? "text-blue-400 bg-blue-600/10" : "text-slate-400 hover:text-white"
          )}>
            <BellRing className="w-5 h-5" />
            <span className="text-sm">Automations</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
