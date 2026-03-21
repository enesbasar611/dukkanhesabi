"use client";

import {
  Zap,
  ShoppingCart,
  Wrench,
  Star,
  ArrowRightLeft,
  Edit,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Megaphone,
  Smartphone,
  CheckCircle2,
  Gift,
  History,
  PlusCircle,
  Filter,
  BarChart3,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";

const customers = [
  { name: "Burak Kalaycı", initial: "BK", email: "burak.k@example.com", status: "VIP Müşteri", points: "2.450", value: "₺245,00", date: "14 Mayıs 2024", op: "Cihaz Tamiri" },
  { name: "Selin Demir", initial: "SD", email: "selin@agency.com", status: "Standart", points: "780", value: "₺78,00", date: "21 Mayıs 2024", op: "Aksesuar Alımı" },
  { name: "Mert Aksoy", initial: "MA", email: "mertaksoy@mail.com", status: "Premium", points: "1.120", value: "₺112,00", date: "Bugün, 09:12", op: "Yeni Kayıt" },
];

export default function LoyaltyManagement() {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-950 text-slate-200">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-1 block">Sadakat Programı</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Loyalty & Puan Yönetimi</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-slate-900 text-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all border border-slate-800">Rapor Al</button>
          <button className="px-6 py-2.5 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-900/20 flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Kampanya Oluştur
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Scoring Rule Configuration Card */}
        <div className="col-span-12 lg:col-span-8 bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Puan Kazanma Kuralları</h3>
            </div>
            <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full font-medium">Son Güncelleme: 12 dk önce</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-between group hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4">
                <ShoppingCart className="text-blue-500 w-5 h-5" />
                <div>
                  <p className="text-sm font-bold text-white">Her 10 TL Alışverişe</p>
                  <p className="text-xs text-slate-500">Aksesuar & Sarf Malzeme</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-blue-500">1</span>
                <span className="text-[10px] block font-bold text-slate-500 uppercase">Puan</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-between group hover:border-emerald-500/50 transition-all">
              <div className="flex items-center gap-4">
                <Wrench className="text-emerald-500 w-5 h-5" />
                <div>
                  <p className="text-sm font-bold text-white">Tamir İşlemlerinde</p>
                  <p className="text-xs text-slate-500">İşçilik bedeli üzerinden</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-emerald-500">%5</span>
                <span className="text-[10px] block font-bold text-slate-500 uppercase">Puan</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Dönüşüm Oranı</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">100 Puan</span>
                  <ArrowRightLeft className="text-slate-600 w-4 h-4" />
                  <span className="text-lg font-bold text-emerald-500">10 TL</span>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-slate-800"></div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Min. Kullanım</p>
                <p className="text-lg font-bold text-white">500 Puan</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-bold flex items-center gap-1 hover:underline">
              <Edit className="w-4 h-4" /> Ayarları Düzenle
            </button>
          </div>
        </div>

        {/* Active Campaigns Card */}
        <div className="col-span-12 lg:col-span-4 bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-white">Aktif Kampanyalar</h3>
            <Gift className="text-slate-500 w-5 h-5" />
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-black uppercase">Popüler</span>
                <span className="text-[10px] font-bold text-slate-500">Bitiş: 30 Haz</span>
              </div>
              <p className="text-sm font-extrabold text-white mb-1">Ekran Tamirine +50 Puan</p>
              <p className="text-xs text-slate-400 line-clamp-2">Tüm markalarda geçerli ekran değişimlerinde ekstra puan kazanımı.</p>
              <Smartphone className="absolute -right-2 -bottom-2 opacity-10 w-16 h-16" />
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 transition-colors cursor-pointer group">
              <p className="text-sm font-extrabold text-white mb-1 group-hover:text-blue-400">Yeni Müşteri Bonusu</p>
              <p className="text-xs text-slate-500">İlk kayıtta anında 250 puan hediye.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-500">AKTİF</span>
                <ChevronRight className="text-slate-500 w-4 h-4" />
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-dashed border-slate-700 rounded-xl text-xs font-bold text-slate-500 hover:border-blue-500 hover:text-blue-400 transition-all">Tüm Kampanyaları Gör</button>
        </div>

        {/* Customer Points List */}
        <div className="col-span-12 bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Star className="w-5 h-5" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Müşteri Puan Listesi</h3>
                <p className="text-xs text-slate-500">Toplam 1.284 kayıt listeleniyor</p>
              </div>
            </div>
            <div className="flex gap-2">
              <select className="pl-4 pr-10 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer">
                <option>En Yüksek Puan</option>
                <option>En Düşük Puan</option>
                <option>Son İşlem</option>
              </select>
              <button className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all text-slate-400 border border-slate-700">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/30">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Müşteri</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Durum</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Mevcut Puan</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">TL Karşılığı</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Son İşlem Tarihi</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {customers.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-400 text-xs">
                          {c.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{c.name}</p>
                          <p className="text-[10px] text-slate-500">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                        c.status === 'VIP Müşteri' ? "bg-emerald-500/10 text-emerald-400" :
                        c.status === 'Premium' ? "bg-blue-500/10 text-blue-400" : "bg-slate-800 text-slate-400"
                      )}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-sm font-black text-white">{c.points}</span>
                        <Star className="w-3 h-3 text-blue-500 fill-current" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-white">{c.value}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-medium text-slate-300">{c.date}</p>
                      <p className="text-[10px] text-slate-500">{c.op}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-500">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-950/30 border-t border-slate-800 flex justify-between items-center">
            <button className="text-xs font-bold text-slate-500 flex items-center gap-1 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" /> Önceki
            </button>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-900/20">1</span>
              <span className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 cursor-pointer transition-colors">2</span>
              <span className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 cursor-pointer transition-colors">3</span>
            </div>
            <button className="text-xs font-bold text-slate-500 flex items-center gap-1 hover:text-white transition-colors">
              Sonraki <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Usage History Feed */}
        <div className="col-span-12 bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-white">Puan Kullanım Geçmişi</h3>
            <button className="text-xs font-bold text-blue-400 bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/10 hover:bg-blue-500/10 transition-all">Tümünü İndir (Excel)</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Hüseyin Kaya", points: "-500 Puan", discount: "₺50,00 İNDİRİM", time: "2 saat önce", icon: ShoppingCart },
              { name: "Fatma Özdemir", points: "-1.200 Puan", discount: "₺120,00 İNDİRİM", time: "4 saat önce", icon: History },
              { name: "Ali Vural", points: "-300 Puan", discount: "₺30,00 İNDİRİM", time: "5 saat önce", icon: CreditCard },
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800/50">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                  <log.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{log.name}</p>
                  <p className="text-xs text-slate-500 mb-1">{log.points} Kullanıldı</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-rose-400">{log.discount}</span>
                    <span className="text-[10px] text-slate-600">• {log.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
