"use client";

import {
  GripVertical,
  PlusCircle,
  Plus,
  Trash2,
  Edit,
  Info,
  ExternalLink,
  Zap,
  Bell,
  User,
  ShoppingCart,
  Package,
  UserPlus,
  Search,
  BarChart3,
  Printer,
  Headset,
  Wallet,
  QrCode
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShortcutsManagement() {
  return (
    <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full bg-slate-950 text-slate-200">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Sistem Konfigürasyonu</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Hızlı İşlem Paneli</h2>
          <p className="text-slate-500 max-w-xl text-sm leading-relaxed">Üst barda yer alan kısayol butonlarını iş akışınıza göre sürükleyip bırakarak özelleştirin. İkonları ve hedef sayfaları dilediğiniz gibi güncelleyin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-xl border border-white/5 text-slate-400 font-semibold text-sm hover:bg-white/5 transition-all">Varsayılana Dön</button>
          <button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all">Değişiklikleri Kaydet</button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left: Active Shortcuts */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] flex flex-col gap-8 border border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <GripVertical className="text-blue-500 w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Aktif Kısayollar</h3>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-500 border border-white/5">4 / 6 Slot Dolu</span>
              </div>
              <Info className="text-slate-600 w-5 h-5 cursor-help" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Yeni Servis", target: "/service/new-ticket", icon: PlusCircle, color: "text-blue-500", bg: "bg-blue-500/10" },
                { title: "Hızlı Satış", target: "/pos/terminal", icon: ShoppingCart, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { title: "Stok Girişi", target: "/inventory/import", icon: Package, color: "text-orange-400", bg: "bg-orange-400/10" },
                { title: "Müşteri Kaydı", target: "/crm/customer-new", icon: UserPlus, color: "text-purple-400", bg: "bg-purple-400/10" },
              ].map((s, i) => (
                <div key={i} className="relative group p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-blue-500/50 transition-all cursor-move">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <button className="p-1.5 rounded-lg bg-white/5 text-slate-500 hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg bg-white/5 text-rose-500 hover:bg-rose-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner", s.bg, s.color)}>
                      <s.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">{s.title}</h4>
                      <p className="text-[11px] text-slate-600 font-mono mt-1">Target: {s.target}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Empty Slot */}
              <div className="border-2 border-dashed border-white/5 rounded-2xl p-6 flex items-center justify-center gap-3 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600 group-hover:text-blue-500 transition-colors border border-white/5">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-slate-400">Yeni Slot Ekle</span>
              </div>
            </div>
          </div>

          {/* Shortcut Preview (Visual Simulation) */}
          <div className="bg-slate-900/30 p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-6 px-1">Görünüm Önizleme</h3>
            <div className="bg-black/40 rounded-3xl p-10 flex items-center justify-center border border-white/5 shadow-inner">
              <div className="bg-slate-900 w-full max-w-xl h-14 rounded-xl border border-white/10 shadow-2xl flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="px-4 py-1.5 bg-blue-600 rounded-lg text-[10px] font-bold text-white flex items-center gap-2">
                    <PlusCircle className="w-3.5 h-3.5" />
                    Yeni Servis
                  </div>
                  <div className="px-4 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-slate-500 flex items-center gap-2 border border-white/5">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Hızlı Satış
                  </div>
                  <div className="px-4 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-slate-500 flex items-center gap-2 border border-white/5">
                    <Package className="w-3.5 h-3.5" />
                    Stok Girişi
                  </div>
                </div>
                <div className="flex gap-3 text-slate-600">
                  <Bell className="w-5 h-5" />
                  <User className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Available Actions / Library */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] sticky top-24 border border-white/5 shadow-2xl">
            <h3 className="font-bold text-xl text-white mb-4">Aksiyon Kütüphanesi</h3>
            <p className="text-[11px] text-slate-500 mb-8 uppercase font-bold tracking-widest">Sürükle ve Ekle</p>

            <div className="space-y-3 h-[450px] overflow-y-auto pr-3 custom-scrollbar">
              {[
                { title: "Günlük Rapor", cat: "Analytics", icon: BarChart3 },
                { title: "Son Etiket Yazdır", cat: "Printing", icon: Printer },
                { title: "Destek Talebi", cat: "Support", icon: Headset },
                { title: "Kasa İşlemleri", cat: "Finance", icon: Wallet },
                { title: "QR Tarayıcı", cat: "Tools", icon: QrCode },
                { title: "Müşteri Listesi", cat: "CRM", icon: User },
                { title: "Envanter Raporu", cat: "Stock", icon: Package },
              ].map((lib, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-all group cursor-grab active:cursor-grabbing">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-slate-500 group-hover:text-blue-500 transition-colors shadow-inner">
                    <lib.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-white truncate">{lib.title}</h5>
                    <p className="text-[10px] text-slate-600 uppercase font-bold tracking-tight">{lib.cat}</p>
                  </div>
                  <GripVertical className="text-slate-700 group-hover:text-slate-500 transition-colors w-4 h-4" />
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 border border-dashed border-white/10 rounded-2xl text-xs font-bold text-slate-600 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Özel Link Tanımla
            </button>
          </div>
        </div>
      </div>

      {/* Floating Change Detection Toast */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-slate-900 p-5 rounded-[2rem] shadow-2xl border border-white/5 border-l-4 border-l-blue-500 flex items-center gap-5 animate-in slide-in-from-right-10 duration-500 backdrop-blur-xl bg-opacity-80">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Değişiklik Algılandı</p>
            <p className="text-[11px] text-slate-500">Panel düzeninde 2 yeni değişiklik yapıldı.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-500 transition-all ml-4">Kaydet</button>
        </div>
      </div>
    </div>
  );
}
