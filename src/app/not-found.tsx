'use client'

import React from 'react'
import Link from 'next/link'
import { LayoutDashboard, HelpCircle, Construction } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#191c1e] text-[#f7f9fb] flex flex-col items-center justify-center technical-grid overflow-hidden relative">
      <style jsx>{`
        .technical-grid {
          background-size: 40px 40px;
          background-image: radial-gradient(circle, rgba(81, 92, 113, 0.15) 1px, transparent 1px);
        }
      `}</style>

      {/* Background Blueprint Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 border border-slate-700 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-slate-700 rounded-lg rotate-12 opacity-5"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-20"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
        {/* Error Illustration Area */}
        <div className="relative mb-12">
          {/* Large Floating Code/Schematic Element */}
          <div className="absolute -top-12 -left-20 bg-[#191c1e]/60 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/10 rotate-[-6deg] hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
            <div className="font-mono text-[10px] text-slate-400 leading-relaxed text-left">
              <span className="text-blue-600">GET</span> /api/v1/system/status<br/>
              <span className="text-red-500">HATA:</span> 404_KAYNAK_BULUNAMADI<br/>
              <span className="text-slate-400">İz sürülüyor...</span> [BAŞARISIZ]
            </div>
          </div>

          {/* Main Technical Graphic */}
          <div className="relative p-1">
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <div className="relative flex items-center justify-center">
              {/* Icon Layering */}
              <div className="text-[180px] md:text-[240px] leading-none select-none font-black text-slate-800 tracking-tighter opacity-40">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Construction size={120} className="text-blue-600 drop-shadow-[0_0_15px_rgba(0,88,190,0.5)]" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Floating Schematic Annotation */}
          <div className="absolute -bottom-8 -right-12 bg-[#191c1e]/60 backdrop-blur-xl p-3 rounded-lg border border-white/10 rotate-3 hidden md:block">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">Bileşen Kimliği</span>
              <span className="text-xs font-mono text-[#f7f9fb]">SYS_ERR_VOID_OX404</span>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-[#f7f9fb]">
            Devrede Sinyal Kayboldu
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            Aradığınız teknik şema devre dışı bırakılmış veya farklı bir sektöre taşınmış olabilir. Komuta merkezine dönmenize yardımcı olalım.
          </p>
        </div>

        {/* Action Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/dashboard"
            className="group relative px-8 py-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,88,190,0.4)] active:scale-95 flex items-center gap-3"
          >
            <LayoutDashboard size={20} />
            <span>Panele Dön</span>
          </Link>
          <button className="px-8 py-4 bg-slate-800 text-[#f7f9fb] hover:bg-slate-700 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 border border-white/5">
            <HelpCircle size={20} />
            <span>Sorun Bildir</span>
          </button>
        </div>

        {/* System Footer Info */}
        <div className="mt-20 flex items-center gap-6 text-[11px] uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Sistem Aktif</span>
          </div>
          <div className="w-px h-3 bg-slate-700"></div>
          <span>TechAtelier v2.4.0</span>
          <div className="w-px h-3 bg-slate-700"></div>
          <span>Örnek Kimliği: 0xFF404</span>
        </div>
      </main>

      {/* Visual Edge Accents */}
      <div className="fixed top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px] -mr-16 -mt-16"></div>
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-slate-700/5 blur-[100px] -ml-32 -mb-32"></div>
    </div>
  )
}
