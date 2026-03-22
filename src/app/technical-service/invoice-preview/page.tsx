"use client";

import {
  FileText,
  Receipt,
  Printer,
  Download,
  LayoutTemplate
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function InvoicePreview() {
  const [showUnitPrices, setShowUnitPrices] = useState(true);
  const [itemizedDiscounts, setItemizedDiscounts] = useState(true);
  const [storeTerms, setStoreTerms] = useState(false);
  const [digitalQR, setDigitalQR] = useState(true);
  const [format, setFormat] = useState<'a4' | 'thermal'>('a4');

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-slate-950">
      {/* Sol Çalışma Alanı: Yapılandırma */}
      <div className="w-80 bg-slate-900 border-r border-slate-800 p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
        <div>
          <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Çıktı Formatı</h3>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => setFormat('a4')}
              className={cn(
                "flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left",
                format === 'a4'
                  ? "bg-blue-600/10 border-blue-600 text-blue-400"
                  : "bg-slate-800 border-transparent text-slate-400 hover:border-slate-700"
              )}
            >
              <FileText className="w-6 h-6" />
              <div>
                <p className="text-sm font-black leading-none uppercase tracking-tight">A4 Fatura</p>
                <p className="text-[10px] opacity-60 mt-1 uppercase font-bold tracking-widest">Standart 210x297mm</p>
              </div>
            </button>
            <button
              onClick={() => setFormat('thermal')}
              className={cn(
                "flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left",
                format === 'thermal'
                  ? "bg-blue-600/10 border-blue-600 text-blue-400"
                  : "bg-slate-800 border-transparent text-slate-400 hover:border-slate-700"
              )}
            >
              <Receipt className="w-6 h-6" />
              <div>
                <p className="text-sm font-black leading-none uppercase tracking-tight">Termal Fiş</p>
                <p className="text-[10px] opacity-60 mt-1 uppercase font-bold tracking-widest">POS 80mm Rulo</p>
              </div>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Belge Ayarları</h3>
          <div className="space-y-4">
            <Toggle label="Birim Fiyatları Göster" enabled={showUnitPrices} setEnabled={setShowUnitPrices} />
            <Toggle label="Ayrıntılı İndirimler" enabled={itemizedDiscounts} setEnabled={setItemizedDiscounts} />
            <Toggle label="Mağaza Şart ve Koşulları" enabled={storeTerms} setEnabled={setStoreTerms} />
            <Toggle label="Dijital QR Kod" enabled={digitalQR} setEnabled={setDigitalQR} />
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl active:scale-95">
            <Printer className="w-4 h-4" />
            Belgeyi Yazdır
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-700 transition-all border border-slate-700 active:scale-95">
            <Download className="w-4 h-4" />
            PDF Olarak Kaydet
          </button>
        </div>
      </div>

      {/* Sağ Çalışma Alanı: Önizleme Tuvali */}
      <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-12 overflow-y-auto custom-scrollbar">
        {/* Arka Plan Noktaları */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        {/* A4 Fatura Önizleme Konteynırı */}
        <div className="bg-white text-slate-900 w-[600px] min-h-[840px] shadow-2xl shadow-black p-12 flex flex-col relative rounded-sm transform scale-90 origin-top">
          {/* Filigran / Vurgular */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -mr-16 -mt-16 rounded-full"></div>

          <header className="flex justify-between items-start mb-12 relative z-10">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl shadow-lg">
                <LayoutTemplate className="text-white w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tighter uppercase leading-none">Teknik Atelier</h2>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">Hassas Servis Merkezi</p>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-5xl font-black text-slate-100 uppercase tracking-tighter leading-none mb-4">Fatura</h1>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Belge No.</p>
                <p className="text-sm font-mono font-bold tracking-tight">#TA-2023-9942</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-12 mb-12 relative z-10">
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Hizmet Sağlayıcı</p>
              <div className="text-xs leading-relaxed font-bold text-slate-600">
                <p className="text-slate-900 font-black">Teknik Atelier Genel Merkezi</p>
                <p>42 Endüstri Yolu, Kat 8</p>
                <p>İstanbul, Türkiye 34000</p>
                <p>iletisim@tecnikatelier.com.tr</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Fatura Adresi</p>
              <div className="text-xs leading-relaxed font-bold text-slate-600">
                <p className="text-slate-900 font-black">Aether Dynamics A.Ş.</p>
                <p>Alıcı: Selin Yılmaz</p>
                <p>909 İnovasyon Bulvarı</p>
                <p>Ankara, Türkiye 06000</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="py-4 text-left text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Açıklama</th>
                  <th className="py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Adet</th>
                  <th className="py-4 text-right text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Birim Fiyat</th>
                  <th className="py-4 text-right text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Toplam</th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold divide-y divide-slate-100">
                <tr className="group">
                  <td className="py-5">
                    <p className="font-black text-slate-900">Hassas Torna Bakımı</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic font-medium tracking-tight">Seviye 3 sensör kalibrasyonu ve mekanik hizalama</p>
                  </td>
                  <td className="py-5 text-center font-mono">1</td>
                  <td className="py-5 text-right font-mono">₺450,00</td>
                  <td className="py-5 text-right font-black tracking-tighter text-sm">₺450,00</td>
                </tr>
                <tr className="group">
                  <td className="py-5">
                    <p className="font-black text-slate-900">Yüksek Akışlı Tungsten Nozullar</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic font-medium tracking-tight">Parça #XT-90-2 (0.4mm varyantı)</p>
                  </td>
                  <td className="py-5 text-center font-mono">3</td>
                  <td className="py-5 text-right font-mono">₺85,00</td>
                  <td className="py-5 text-right font-black tracking-tighter text-sm">₺255,00</td>
                </tr>
                <tr className="group">
                  <td className="py-5">
                    <p className="font-black text-slate-900">Sistem Donanım Yazılımı Güncellemesi</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic font-medium tracking-tight">Bulut senkronizasyon entegrasyonu ile OS v4.2 Dağıtımı</p>
                  </td>
                  <td className="py-5 text-center font-mono">1</td>
                  <td className="py-5 text-right font-mono">₺120,00</td>
                  <td className="py-5 text-right font-black tracking-tighter text-sm">₺120,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <footer className="mt-12 flex justify-between items-end border-t-2 border-slate-900 pt-10 relative z-10">
            <div className="flex gap-6 items-center">
              {digitalQR && (
                <div className="p-3 border-2 border-slate-100 rounded-2xl bg-slate-50 shadow-inner">
                  <div className="w-16 h-16 bg-slate-900 flex flex-wrap p-1.5 rounded-lg">
                    <div className="w-1/3 h-1/3 border border-white"></div>
                    <div className="w-1/3 h-1/3 bg-white"></div>
                    <div className="w-1/3 h-1/3 border border-white"></div>
                    <div className="w-1/3 h-1/3 bg-white"></div>
                    <div className="w-1/3 h-1/3 border border-white"></div>
                    <div className="w-1/3 h-1/3 bg-white"></div>
                    <div className="w-1/3 h-1/3 border border-white"></div>
                    <div className="w-1/3 h-1/3 bg-white"></div>
                    <div className="w-1/3 h-1/3 border border-white"></div>
                  </div>
                </div>
              )}
              <div className="max-w-[180px]">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Dijital Takip</p>
                <p className="text-[9px] leading-relaxed text-slate-500 font-bold mt-1 uppercase tracking-tight">Servis geçmişini ve dijital bakım günlüklerini görüntülemek için tarayın.</p>
              </div>
            </div>
            <div className="w-52 space-y-2.5">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Ara Toplam</span>
                <span className="text-slate-900">₺825,00</span>
              </div>
              <div className="flex justify-between text-xs font-black text-blue-600 uppercase tracking-widest">
                <span>İndirim (5%)</span>
                <span>-₺41,25</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>KDV (20%)</span>
                <span className="text-slate-900">₺156,75</span>
              </div>
              <div className="flex justify-between pt-4 border-t-2 border-slate-900 mt-2">
                <span className="text-sm font-black uppercase tracking-[0.1em]">Toplam Borç</span>
                <span className="text-xl font-black text-slate-900 tracking-tighter">₺940,50</span>
              </div>
            </div>
          </footer>

          <div className="mt-12 text-[8px] font-black text-slate-300 text-center uppercase tracking-[0.5em]">
            Tech Atelier OS Tarafından Desteklenmektedir • Dijital Hassas Mühendislik
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, enabled, setEnabled }: { label: string, enabled: boolean, setEnabled: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between group cursor-pointer">
      <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-tight">{label}</span>
      <div
        onClick={() => setEnabled(!enabled)}
        className={cn(
          "relative inline-flex h-5 w-10 items-center rounded-full transition-colors",
          enabled ? "bg-blue-600" : "bg-slate-700"
        )}
      >
        <span className={cn(
          "inline-block h-3 w-3 transform rounded-full bg-white transition-transform",
          enabled ? "translate-x-6" : "translate-x-1"
        )}></span>
      </div>
    </label>
  );
}
