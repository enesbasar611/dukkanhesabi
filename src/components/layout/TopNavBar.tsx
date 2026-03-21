"use client";

import { Bell, Search, Settings, HelpCircle, User, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TopNavBar() {
  return (
    <header className="sticky top-0 right-0 z-30 flex items-center justify-between px-8 w-full h-16 bg-white/5 backdrop-blur-md shadow-sm border-b border-slate-800">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-transparent border-none rounded-xl text-sm focus:ring-0 text-slate-300 transition-all outline-none"
            placeholder="Hızlı işlem veya rapor ara..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="/technical-service/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 active:scale-95"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Yeni Servis</span>
        </Link>

        <div className="flex items-center gap-4 text-slate-400 border-l border-slate-800 pl-6">
          <button className="hover:text-white transition-colors relative group">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
          </button>
          <button className="hover:text-white transition-colors group">
            <User className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-l pl-6 border-slate-800">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-white leading-none">Alex Rivet</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">Mağaza Müdürü</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-slate-800 shadow-sm overflow-hidden relative">
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
