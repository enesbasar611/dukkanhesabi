"use client";

import { Bell, Search, Settings, HelpCircle, Wrench, ShoppingCart, PlusSquare, PlusCircle, Bolt, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TopNavBar() {
  return (
    <header className="sticky top-0 right-0 z-30 flex items-center justify-between px-6 w-full h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 font-inter tracking-tight text-slate-100">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative group max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500/50 transition-all outline-none placeholder:text-slate-500"
            placeholder="IMEI, Müşteri veya Servis ID Ara..."
            type="text"
          />
        </div>

        <div className="h-6 w-px bg-slate-800 hidden md:block"></div>

        {/* Quick Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/technical-service/new"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold active:scale-95 transition-all shadow-lg shadow-blue-500/20"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Yeni Servis</span>
          </Link>
          <Link
            href="/pos"
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg text-xs font-semibold active:scale-95 transition-all border border-slate-700"
          >
            <Bolt className="w-3.5 h-3.5" />
            <span>Hızlı Satış</span>
          </Link>
          <Link
            href="/inventory/add"
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg text-xs font-semibold active:scale-95 transition-all border border-slate-700"
          >
            <Package className="w-3.5 h-3.5" />
            <span>Stok Ekle</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 border-l border-slate-800/50 pl-4 pr-2">
          <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-full transition-colors relative active:scale-95">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-full transition-colors active:scale-95">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-l border-slate-800/50 pl-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-50 leading-none">Alex Rivet</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1 font-semibold">Store Manager</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden ring-1 ring-slate-700 cursor-pointer active:scale-95 transition-transform relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATyvXC6p8jisb4XI9vZzH0S5tXQO6i3322maqriJb605j6RnzamatwvUDAjOEQJ7vB-4ZbXLaqfxO0OwDwH8x7Vi1l2Ep44cXSfVFkgq4Wid_xV5IR4oecbNipbaWxMBdj5qdku6hZLYfKyaRL_nBNHgQJmJ1I9vj7fvAO_MoWdvkQGpj7IcqiuN0-tdI__AJBLBXxME7OK7dxokrBPM7Kl5Qn5Ex7Qfsz8CzT-zN6Q06GJlQJ6raehQQ9nkIb4EZj4GcaCBvia_I"
              alt="User Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
