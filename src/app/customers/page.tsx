"use client";

import {
  Search,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Share,
  CalendarDays,
  User,
  Trash2,
  Edit,
  History
} from "lucide-react";
import { cn } from "@/lib/utils";

const customers = [
  { id: "#CP-2940", name: "Alex Sterling", type: "Kurumsal Ortak", item: "Sunucu Kabini Yenileme", status: "İşlemde", statusColor: "text-blue-400 bg-blue-500/10", tech: "Marc J.", date: "12 Eki, 2023", initial: "AS" },
  { id: "#CP-2938", name: "Elena Moretti", type: "Standart Müşteri", item: "Hassas Lens Kalibrasyonu", status: "Beklemede", statusColor: "text-amber-400 bg-amber-500/10", tech: "Sarah W.", date: "11 Eki, 2023", initial: "EM" },
  { id: "#CP-2937", name: "Kevin Chen", type: "Öncelikli Kullanıcı", item: "Firmware Enjeksiyonu - v4.2", status: "Gecikmiş", statusColor: "text-rose-400 bg-rose-500/10", tech: "Atanmadı", date: "10 Eki, 2023", initial: "KC" },
  { id: "#CP-2936", name: "David Ross", type: "Standart Müşteri", item: "Devre Analizi", status: "Taslak", statusColor: "text-slate-400 bg-slate-800", tech: "Linda K.", date: "10 Eki, 2023", initial: "DR" },
];

export default function CRMManagement() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-950 overflow-hidden relative">
      <header className="sticky top-0 z-40 w-full bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 h-16">
        <div className="flex items-center gap-8">
          <div className="relative group">
            <Search className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 group-focus-within:text-blue-500 w-5 h-5 pointer-events-none self-center h-full" />
            <input
              className="block w-80 pl-10 pr-3 py-2 border-none bg-slate-800 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              placeholder="Sipariş, kayıt veya müşteri ara..."
              type="text"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <button className="text-slate-500 font-medium text-sm hover:text-blue-400 transition-colors">Panel</button>
            <button className="text-blue-500 font-semibold text-sm border-b-2 border-blue-600 pb-1">Müşteriler</button>
            <button className="text-slate-500 font-medium text-sm hover:text-blue-400 transition-colors">Envanter</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition-all">
            <Plus className="w-4 h-4" /> Yeni Müşteri
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Table Section */}
        <section className="flex-1 flex flex-col p-8 overflow-hidden">
          {/* Bulk Actions Panel */}
          <div className="mb-6 flex items-center justify-between bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/5 rounded-lg border border-blue-500/10">
                <input checked readOnly className="rounded border-slate-700 text-blue-600 focus:ring-blue-600 bg-slate-800" type="checkbox" />
                <span className="text-sm font-bold text-blue-500">24 Seçildi</span>
              </div>
              <div className="h-6 w-[1px] bg-slate-800"></div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 rounded-xl transition-all">
                  <Share className="w-4 h-4" /> Dışa Aktar
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 rounded-xl transition-all">
                  <CalendarDays className="w-4 h-4" /> Durum Değiştir
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-rose-500 hover:bg-rose-500/5 rounded-xl transition-all">
                  <Trash2 className="w-4 h-4" /> Sil
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sırala:</span>
              <select className="text-sm font-medium border-none bg-slate-800 text-slate-300 rounded-lg focus:ring-0 cursor-pointer">
                <option>Son Güncelleme</option>
                <option>Oluşturma Tarihi</option>
                <option>Öncelik Seviyesi</option>
              </select>
            </div>
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-auto custom-scrollbar bg-slate-900 rounded-2xl shadow-sm border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-slate-900 z-10">
                <tr className="border-b border-slate-800">
                  <th className="p-4 w-12"><input className="rounded border-slate-700 bg-slate-800 text-blue-600" type="checkbox" /></th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Kayıt No</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Müşteri</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Hizmet Kalemi</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Durum</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Atanan</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tarih</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {customers.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="p-4"><input defaultChecked={i < 2} className="rounded border-slate-700 bg-slate-800 text-blue-600" type="checkbox" /></td>
                    <td className="p-4 text-sm font-bold text-slate-300 font-mono">{c.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                          {c.initial}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-medium text-slate-300">{c.item}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Envanter: Modül-X9</p>
                    </td>
                    <td className="p-4">
                      <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight", c.statusColor)}>
                        {c.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {c.tech !== "Atanmadı" ? (
                          <>
                            <div className="h-6 w-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                              <User className="w-3 h-3 text-slate-500" />
                            </div>
                            <span className="text-xs font-medium text-slate-400">{c.tech}</span>
                          </>
                        ) : (
                          <span className="text-xs font-medium text-slate-600 italic">Atanmadı</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-500 font-medium font-mono">{c.date}</td>
                    <td className="p-4 text-right">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500">2.492 teknik kayıttan 1-10 arası gösteriliyor</p>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-slate-900 rounded-lg transition-colors text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
              <button className="h-8 w-8 bg-blue-600 text-white font-bold text-xs rounded-lg">1</button>
              <button className="h-8 w-8 hover:bg-slate-900 text-slate-500 font-medium text-xs rounded-lg transition-colors">2</button>
              <button className="h-8 w-8 hover:bg-slate-900 text-slate-500 font-medium text-xs rounded-lg transition-colors">3</button>
              <span className="px-2 text-slate-700">...</span>
              <button className="h-8 w-8 hover:bg-slate-900 text-slate-500 font-medium text-xs rounded-lg transition-colors">249</button>
              <button className="p-2 hover:bg-slate-900 rounded-lg transition-colors text-slate-600"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </section>

        {/* Filter Drawer (Right Side) */}
        <aside className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col shadow-2xl">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-500" /> Arama Kriterleri
            </h2>
            <button className="text-xs font-bold text-blue-500 hover:underline">Sıfırla</button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {/* Date Range */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Tarih Aralığı</label>
              <div className="space-y-3">
                <input className="block w-full px-4 py-2.5 text-sm font-medium border-none bg-slate-950 text-white rounded-xl focus:ring-2 focus:ring-blue-500/20" type="date" defaultValue="2023-10-01" />
                <input className="block w-full px-4 py-2.5 text-sm font-medium border-none bg-slate-950 text-white rounded-xl focus:ring-2 focus:ring-blue-500/20" type="date" defaultValue="2023-10-31" />
              </div>
            </div>
            {/* Status Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Servis Durumu</label>
              <div className="space-y-2">
                {[
                  { label: "İşlemde", count: 124, active: true },
                  { label: "İnceleme Bekliyor", count: 42 },
                  { label: "Tamamlandı", count: 892 },
                  { label: "Kritik Gecikme", count: 12, error: true }
                ].map((s) => (
                  <label key={s.label} className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-xl cursor-pointer hover:bg-slate-950 transition-colors border border-transparent hover:border-slate-800">
                    <input defaultChecked={s.active} className="rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-600" type="checkbox" />
                    <span className={cn("text-sm font-medium", s.error ? "text-rose-400" : "text-slate-300")}>{s.label}</span>
                    <span className="ml-auto text-[10px] font-bold text-slate-600">{s.count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-slate-800 bg-slate-950/30">
            <button className="w-full bg-blue-600 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:scale-[1.01] active:scale-95 transition-all">
              Kriterleri Uygula
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
