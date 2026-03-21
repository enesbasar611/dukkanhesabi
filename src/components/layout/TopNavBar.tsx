"use client";

import { Bell, Search, Settings, HelpCircle } from "lucide-react";
import Image from "next/image";

export function TopNavBar() {
  return (
    <header className="sticky top-0 right-0 z-30 flex items-center justify-between px-8 w-full h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            placeholder="IMEI, müşteri veya ürün ara..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-slate-500">
          <button className="hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors relative group">
            <Bell className="w-5 h-5 group-hover:text-blue-500" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button className="hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors group">
            <Settings className="w-5 h-5 group-hover:text-blue-500" />
          </button>
          <button className="hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors group">
            <HelpCircle className="w-5 h-5 group-hover:text-blue-500" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-l pl-6 border-slate-200 dark:border-slate-800">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Alex Rivet</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">Mağaza Müdürü</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm overflow-hidden relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATyvXC6p8jisb4XI9vZzH0S5tXQO6i3322maqriJb605j6RnzamatwvUDAjOEQJ7vB-4ZbXLaqfxO0OwDwH8x7Vi1l2Ep44cXSfVFkgq4Wid_xV5IR4oecbNipbaWxMBdj5qdku6hZLYfKyaRL_nBNHgQJmJ1I9vj7fvAO_MoWdvkQGpj7IcqiuN0-tdI__AJBLBXxME7OK7dxokrBPM7Kl5Qn5Ex7Qfsz8CzT-zN6Q06GJlQJ6raehQQ9nkIb4EZj4GcaCBvia_I"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
