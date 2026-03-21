"use client";

import {
  Calendar,
  ChevronDown,
  Download,
  FileText,
  TrendingUp,
  TrendingDown,
  Receipt,
  Wallet,
  Undo2,
  ArrowRight,
  MonitorCheck,
  Box,
  BadgeCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DetailedSalesReport() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-200 antialiased overflow-hidden">
      {/* Başlık Bölümü */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-blue-500 font-black tracking-[0.2em] text-[10px] uppercase mb-1">Finansal Performans</p>
          <h2 className="text-4xl font-black tracking-tight text-white uppercase leading-none">Detaylı Satış Raporu</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Hassas işlem ve hacim analizi</p>
        </div>

        {/* Global Filtre Araç Çubuğu */}
        <div className="flex flex-wrap items-center gap-3">
          <FilterButton icon={Calendar} label="Bu Ay" />
          <FilterButton icon={Box} label="Tüm Kategoriler" />
          <FilterButton icon={BadgeCheck} label="Ana Şube" />
          <div className="h-8 w-px bg-slate-800 mx-2"></div>
          <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all active:scale-95 group shadow-xl shadow-black/20">
            <FileText className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">PDF Çıktısı</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-all active:scale-95 group shadow-xl shadow-blue-600/20">
            <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Excel Çıktısı</span>
          </button>
        </div>
      </section>

      {/* KPI Kartları Izgarası */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          label="Toplam Satış"
          val="₺142.850,00"
          trend="+%12,5"
          detail="Bugün: 24 adet"
          icon={Receipt}
          variant="blue"
        />
        <KPICard
          label="Ort. Sipariş Değeri"
          val="₺84,50"
          trend="+%3,2"
          detail="geçen aya göre"
          icon={MonitorCheck}
          variant="emerald"
        />
        <KPICard
          label="Net Kâr"
          val="₺42.310,20"
          trend="+%8,1"
          detail="Marj: %29,6"
          icon={Wallet}
          variant="purple"
        />
        <KPICard
          label="İade Oranı"
          val="%1,24"
          trend="-%0,4"
          detail="Stabil performans"
          icon={Undo2}
          variant="red"
          inverseTrend
        />
      </section>

      {/* Ana Grafik ve Kategori Dağılımı */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* İnteraktif Satış Grafiği Alanı */}
        <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between mb-10 relative z-10">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Satış Trendi</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Günlük işlem hacmi ve gelir</p>
            </div>
            <div className="flex gap-6">
              <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-blue-400">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span> Gelir
              </span>
              <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span className="w-2.5 h-2.5 bg-slate-600 rounded-full mr-2"></span> Hacim
              </span>
            </div>
          </div>

          <div className="h-72 flex items-end justify-between relative px-2 mb-4">
            {/* SVG Grafik Arka Plan Çizgileri */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5 py-4">
              <div className="border-t border-slate-100 w-full h-px"></div>
              <div className="border-t border-slate-100 w-full h-px"></div>
              <div className="border-t border-slate-100 w-full h-px"></div>
              <div className="border-t border-slate-100 w-full h-px"></div>
            </div>

            <div className="w-full h-full relative z-10">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(59, 130, 246, 0.4)', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: 'rgba(59, 130, 246, 0)', stopOpacity: 1 }}></stop>
                  </linearGradient>
                </defs>
                <path d="M0,180 L50,160 L100,170 L150,130 L200,140 L250,90 L300,100 L350,60 L400,75 L450,40 L500,50 L550,20 L600,35 L650,15 L700,40 L800,20" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,180 L50,160 L100,170 L150,130 L200,140 L250,90 L300,100 L350,60 L400,75 L450,40 L500,50 L550,20 L600,35 L650,15 L700,40 L800,20 L800,200 L0,200 Z" fill="url(#chartGradient)" />
                {/* Zirve noktalarındaki noktalar */}
                {[0, 150, 300, 450, 600, 750].map((x, i) => (
                  <circle key={i} cx={x} cy={((i * 137) % 100) + 50} r="4" fill="#3b82f6" stroke="#fff" strokeWidth="2" className="animate-pulse" />
                ))}
              </svg>
            </div>
          </div>

          <div className="flex justify-between mt-6 px-4 text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] relative z-10">
            <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
          </div>
        </div>

        {/* Kategori Bazlı Satışlar */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem] shadow-2xl shadow-black/40">
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8">Kategori Dağılımı</h3>
          <div className="space-y-8 mb-10">
            <CategoryBar label="Aksesuarlar" percent={45} color="bg-blue-500" />
            <CategoryBar label="Ekran Koruma" percent={32} color="bg-emerald-500" />
            <CategoryBar label="Yedek Parçalar" percent={18} color="bg-purple-500" />
            <CategoryBar label="Giyilebilir Tek." percent={5} color="bg-amber-500" />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Ödeme Hızı</h4>
            <div className="flex items-center justify-around gap-6">
              <PaymentCircle percent={62} label="Kart" color="text-blue-500" />
              <PaymentCircle percent={28} label="Nakit" color="text-emerald-500" />
              <PaymentCircle percent={10} label="Banka" color="text-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* En Çok Satan Ürünler Tablosu */}
      <section className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40">
        <div className="p-10 flex justify-between items-center border-b border-white/5 bg-white/5">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">En Yüksek Performans Endeksi</h3>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Gelir katkısına göre önde gelen ürünler</p>
          </div>
          <button className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-blue-300 transition-colors flex items-center gap-2 group border border-blue-400/20 px-6 py-3 rounded-2xl hover:bg-blue-400/5">
            Tüm Envanteri Görüntüle <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-slate-900/40 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-6">Ürün & Profil</th>
                <th className="px-8 py-6">Sınıflandırma</th>
                <th className="px-8 py-6">Hacim</th>
                <th className="px-8 py-6">Gelir Endeksi</th>
                <th className="px-8 py-6 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              <ProductRow
                name="iPhone 14 Ekran Koruyucu"
                cat="Koruma"
                sold="1.240 adet"
                revenue="18.600,00 ₺"
                trend="up"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDruZTRKm7bltf5Grsvil2nbNU3_G7neIbD9gQFKcXwF2_QfzuxAjm0DgNCBWYLvvTnDFaZ5CHuMFKFwzdBG0mzcxzZEDPWVzikYBt9JUbVA8yIcRMtd8NkuUWqNEkSfDyIGY1yqM6Af3wM5wd4-ktnajTIgsrHPESo65dCnR-rtMxLCC_okw9yr8kBFWxQNDAsdD3uzrMVr5UZqmZljqBGmvFnpcnY2gtqU6YCLxuiyVFL34U8NLXSKQHbXSooq8E1PnfGQLVXp4U"
              />
              <ProductRow
                name="Silikon Saat Kordonu (Active)"
                cat="Aksesuar"
                sold="850 adet"
                revenue="12.750,00 ₺"
                trend="up"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuBqdptHTqKrQpEqooUOPaXy4DDCEiNYqs1zkGN38eLX1TT3rnhZfOnn8SzIvZQPWinccH3lwZbPeoUmgLHTpEfaTZzbc6Vtj0NDvTjSXulmwGCuzP9Ik5nf-UhE6de141aAyUj39vIa1RyEQW3URfrnTWz-K5kMafI_7EW823Q6dkr6B68YNtbxRIwQa8jx93Q6CPYsKOG33RR8ZsFuTBMRXUDaW3CfwtXTkhNFp990yNUpNPyCh3F5A4fGqvFBJMfi3lJ7pAunM_Q"
              />
              <ProductRow
                name="Deri MagSafe Kılıf"
                cat="Aksesuar"
                sold="620 adet"
                revenue="31.000,00 ₺"
                trend="flat"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pLWRlr6OHEaYw0wX7PBv2TAPNNT0GHLr5iYNleM0W1Wih0RpiwSnj-awpGpCLy4-bhdXzGDOKQyjsuVt73RBrTm4320UTyDCge31Lf91SFKIarq3ZB0vCUkk9d5VEUmBYliVrvS0yfhbPngXccl1mZqHjvOS5Aorv4NPBKfqPu0Cea0zJq8n4XVdIlksyT_1b8ta7wilFVCycbxaAj1ve3O_d4hYmvtwL9MU_qZHcicdHVuQWzhqKUhoPL9tbyMPnL-XW-VNylc"
              />
              <ProductRow
                name="OEM Li-Ion Pil (iPh 13)"
                cat="Yedek Parça"
                sold="410 adet"
                revenue="24.600,00 ₺"
                trend="down"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzKR9UB8ulKBfufy7z4VpjZbbIzOFar6dIaZe0rmJGcVR_NDXAVuMx1HkwsAToKdKOPu-tHR4dgo0SidJF77_FRc5qY9x04soRO-lNZqGXTZSJ23lLN1TGYnKRIHqRX3N5lv0y243yxznswpwTPEjB5PPgf3ZpC7fx7qGP09ZTfyG-32CrcftzRJ7p8T5VYMJtR1jh0G29qSeOmPwa8rdnaF7ao6KS99CuvYGmjlRgXkLj5giC69l6sbFZ_O04RoRnVlDOd-lyU8"
              />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-2.5 cursor-pointer hover:border-blue-500 transition-all group shadow-xl shadow-black/20">
      <Icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{label}</span>
      <ChevronDown className="w-3 h-3 text-slate-500 group-hover:translate-y-0.5 transition-transform" />
    </div>
  );
}

interface KPICardProps {
  label: string;
  val: string;
  trend: string;
  detail: string;
  icon: React.ElementType;
  variant: string;
  inverseTrend?: boolean;
}

function KPICard({ label, val, trend, detail, icon: Icon, variant, inverseTrend }: KPICardProps) {
  const colors: Record<string, string> = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20 shadow-blue-500/10",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20 shadow-purple-500/10",
    red: "text-red-500 bg-red-500/10 border-red-500/20 shadow-red-500/10",
  };

  const isUp = trend.startsWith('+');
  const trendColor = inverseTrend
    ? (isUp ? "text-red-400" : "text-emerald-400")
    : (isUp ? "text-emerald-400" : "text-red-400");

  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] flex flex-col justify-between group hover:scale-[1.02] transition-all cursor-pointer shadow-2xl shadow-black/40">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-400 transition-colors">{label}</span>
          <div className={cn("p-3 rounded-2xl transition-transform group-hover:scale-110", colors[variant])}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="text-3xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">{val}</div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
        <span className={cn("flex items-center font-black text-[10px] uppercase tracking-widest", trendColor)}>
          {isUp ? <TrendingUp className="w-4 h-4 mr-2" /> : <TrendingDown className="w-4 h-4 mr-2" />}
          {trend}
        </span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{detail}</span>
      </div>
    </div>
  );
}

function CategoryBar({ label, percent, color }: { label: string, percent: number, color: string }) {
  return (
    <div className="group">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
        <span className="text-slate-400 group-hover:text-white transition-colors">{label}</span>
        <span className="text-white tracking-tighter text-sm">%{percent}</span>
      </div>
      <div className="h-2.5 bg-slate-900 rounded-full overflow-hidden shadow-inner border border-white/5">
        <div className={cn("h-full rounded-full transition-all duration-1000 group-hover:brightness-110", color)} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function PaymentCircle({ percent, label, color }: { percent: number, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className={cn("w-14 h-14 rounded-full border-[3px] border-slate-900 flex items-center justify-center text-[11px] font-black tracking-tighter shadow-xl transition-all group-hover:scale-110", color)} style={{ borderColor: 'currentColor' }}>
        %{percent}
      </div>
      <span className="text-[9px] font-black text-slate-500 mt-3 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}

interface ProductRowProps {
  name: string;
  cat: string;
  sold: string;
  revenue: string;
  trend: string;
  img: string;
}

function ProductRow({ name, cat, sold, revenue, trend, img }: ProductRowProps) {
  return (
    <tr className="hover:bg-white/[0.02] transition-all group cursor-pointer">
      <td className="px-10 py-6">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 p-1 relative overflow-hidden shadow-inner group-hover:scale-110 transition-transform">
            <Image src={img} alt={name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-black text-white text-sm uppercase tracking-tight group-hover:text-blue-400 transition-colors">{name}</span>
        </div>
      </td>
      <td className="px-8 py-6 uppercase tracking-widest font-black text-[10px]">
        <span className={cn(
          "px-4 py-1.5 rounded-full border",
          cat === 'Koruma' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
          cat === 'Yedek Parça' ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
          "bg-blue-500/10 text-blue-400 border-blue-500/20"
        )}>{cat}</span>
      </td>
      <td className="px-8 py-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">{sold}</td>
      <td className="px-8 py-6 font-black text-white tracking-tighter text-base">{revenue}</td>
      <td className="px-8 py-6 text-right">
        {trend === 'up' && <TrendingUp className="w-5 h-5 text-emerald-400 ml-auto" />}
        {trend === 'down' && <TrendingDown className="w-5 h-5 text-red-400 ml-auto" />}
        {trend === 'flat' && <ArrowRight className="w-5 h-5 text-slate-500 ml-auto" />}
      </td>
    </tr>
  );
}
