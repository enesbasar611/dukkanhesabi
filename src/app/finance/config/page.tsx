import {
  CreditCard,
  Settings,
  PlusCircle,
  Activity,
  History,
  Edit3,
  CheckCircle2,
  Landmark,
  Wallet,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

const terminals = [
  { name: "Garanti BBVA", initials: "G", id: "#POS-98822", status: "aktif", color: "bg-emerald-600" },
  { name: "Akbank", initials: "A", id: "#POS-44120", status: "aktif", color: "bg-red-600" },
  { name: "Ziraat Bankası", initials: "Z", id: "#POS-00921", status: "çevrimdışı", color: "bg-slate-700" },
];

const commissions = [
  { plan: "Tek Çekim", rate: "1.25%", code: "COM_SNG_01", status: "Aktif" },
  { plan: "3 Taksit", rate: "3.50%", code: "COM_INS_03", status: "Aktif" },
  { plan: "6 Taksit", rate: "6.80%", code: "COM_INS_06", status: "Aktif" },
];

export default function FinancialConfig() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-100 pb-32">
      <div className="flex items-center justify-between mb-8 sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl py-4 border-b border-slate-800/50">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-black tracking-tighter text-slate-100 uppercase">Finansal Yapılandırma</h1>
          <span className="h-4 w-[1px] bg-slate-700"></span>
          <nav className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Ayarlar</span>
            <span className="text-slate-700">/</span>
            <span className="text-blue-400">Ödemeler ve Geçitler</span>
          </nav>
        </div>
      </div>

      {/* Hero Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Kasa Bakiyesi", val: "₺142.850,00", trend: "+12.4%", color: "border-blue-600" },
          { label: "Aktif Terminaller", val: "03 / 04", sub: "1 çevrimdışı (Ziraat)", color: "border-slate-700" },
          { label: "Aktif Entegrasyonlar", val: "02 Entegrasyon", sub: "Iyzico, PayTR", color: "border-slate-700" },
          { label: "Vergi Ayarları", val: "%20 KDV", sub: "Global Servis Oranı", color: "border-slate-700" },
        ].map((s, i) => (
          <div key={i} className={cn("bg-slate-900 p-6 rounded-3xl border-l-4 shadow-sm", s.color)}>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</div>
            <div className="text-2xl font-black text-slate-100 tracking-tight">{s.val}</div>
            {s.trend ? (
              <div className="text-[10px] text-emerald-400 mt-2 flex items-center gap-1 font-black">
                <Activity className="w-3 h-3" /> {s.trend} geçen aya göre
              </div>
            ) : (
              <div className="text-[10px] text-slate-500 mt-2 font-black uppercase tracking-widest">{s.sub}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Payment Methods */}
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div>
                <h2 className="text-lg font-black tracking-tight text-slate-100 uppercase">Ödeme Yöntemleri Yönetimi</h2>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mt-1">Müşteri ödeme seçeneklerini aktif et</p>
              </div>
              <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 border border-slate-700 shadow-lg">
                <PlusCircle className="w-4 h-4" /> Yöntem Ekle
              </button>
            </div>
            <div className="divide-y divide-slate-800/50">
              {[
                { label: "Nakit", sub: "Fiziksel kasa işlemleri", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { label: "Kredi Kartı", sub: "POS Terminal işlemleri", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-500/10" },
                { label: "Havale/EFT", sub: "Manuel mutabakat gerekli", icon: Landmark, color: "text-purple-500", bg: "bg-purple-500/10" },
              ].map((m, i) => (
                <div key={i} className="p-6 hover:bg-slate-800/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner", m.bg)}>
                      <m.icon className={cn("w-7 h-7", m.color)} />
                    </div>
                    <div>
                      <div className="font-black text-slate-200 uppercase tracking-widest text-sm">{m.label}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">{m.sub}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 font-black uppercase">Durum</span>
                      <div className="w-12 h-6 bg-blue-600 rounded-full relative px-1 flex items-center shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full translate-x-6"></div>
                      </div>
                    </div>
                    <button className="p-3 text-slate-500 hover:text-white hover:bg-slate-700 rounded-xl transition-all border border-transparent hover:border-slate-600"><Settings className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Table */}
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-800/20">
              <h2 className="text-lg font-black tracking-tight text-slate-100 uppercase">Komisyon ve Vergi Kuralları</h2>
              <div className="bg-slate-950 px-5 py-2.5 rounded-2xl flex items-center gap-4 border border-slate-800 shadow-inner">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global KDV:</span>
                <span className="text-sm font-black text-blue-400">%20</span>
                <Edit3 className="w-3.5 h-3.5 text-slate-700 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Plan Tipi</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Oran</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">İşlem Kodu</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Durum</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {commissions.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-800/20 transition-all">
                      <td className="px-8 py-6 font-black text-slate-200 text-sm uppercase tracking-widest">{c.plan}</td>
                      <td className="px-8 py-6 text-sm font-black text-blue-400">{c.rate}</td>
                      <td className="px-8 py-6 font-mono text-xs text-slate-500">{c.code}</td>
                      <td className="px-8 py-6 text-right"><CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto" /></td>
                      <td className="px-8 py-6 text-right"><MoreVertical className="w-4 h-4 text-slate-600 cursor-pointer" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* POS Terminals */}
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500">POS Terminalleri</h2>
              <PlusCircle className="w-4 h-4 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <div className="space-y-4">
              {terminals.map((t, i) => (
                <div key={i} className={cn("bg-slate-950 p-5 rounded-3xl border border-slate-800/50 group hover:border-blue-500/50 transition-all cursor-pointer shadow-inner", t.status === 'çevrimdışı' && "opacity-50")}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs text-white shadow-xl", t.color)}>{t.initials}</div>
                      <div className="font-black text-slate-200 uppercase tracking-widest text-sm">{t.name}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-1.5 rounded-full", t.status === 'aktif' ? "bg-emerald-500 animate-pulse" : "bg-red-500")}></div>
                      <span className={cn("text-[9px] font-black uppercase", t.status === 'aktif' ? "text-emerald-500" : "text-red-500")}>{t.status}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-widest">ID: {t.id}</span>
                    <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline decoration-2">Yapılandır</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cash Drawers */}
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-slate-800">
            <h2 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Kasalar</h2>
            <div className="space-y-4">
              {[
                { name: "Ana Kasa", balance: "₺112.400", currency: "TRY / EUR", color: "text-blue-400" },
                { name: "Ön Banko", balance: "₺28.450", currency: "TRY", color: "text-emerald-400" },
              ].map((d, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-slate-950 rounded-3xl border border-slate-800 shadow-inner">
                  <div>
                    <div className="text-xs font-black text-slate-200 uppercase tracking-widest">{d.name}</div>
                    <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-0.5">Fiziksel Depolama</div>
                  </div>
                  <div className="text-right">
                    <div className={cn("text-lg font-black tracking-tighter", d.color)}>{d.balance}</div>
                    <div className="text-[8px] text-slate-600 font-black tracking-[0.2em]">{d.currency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logs */}
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-slate-800">
            <h2 className="font-black text-xs uppercase tracking-[0.2em] text-slate-300 mb-8 flex items-center gap-3">
              <History className="w-4 h-4 text-blue-600" /> Sistem Günlükleri
            </h2>
            <div className="space-y-6">
              {[
                { text: "Akbank POS terminal yazılımı sistem tarafından güncellendi", time: "2 saat önce", color: "bg-blue-500" },
                { text: "Yeni Global KDV oranı %20 tüm kategorilere uygulandı", time: "Dün, 14:30", color: "bg-amber-500" },
                { text: "PayTR entegrasyonu başarıyla yeniden doğrulandı", time: "24 Eki 2023", color: "bg-emerald-500" },
              ].map((l, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className={cn("mt-1 w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform", l.color)}></div>
                  <div>
                    <p className="text-xs text-slate-400 leading-relaxed font-bold italic">{l.text}</p>
                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest mt-1 block">{l.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 border border-slate-800 rounded-2xl text-[10px] font-black text-slate-500 hover:bg-slate-800 hover:text-white transition-all uppercase tracking-[0.2em] shadow-lg">Tümünü Gör</button>
          </div>
        </div>
      </div>
    </div>
  );
}
