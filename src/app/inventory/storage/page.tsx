"use client";

import { Construction } from "lucide-react";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8">
      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mb-8 animate-bounce">
        <Construction className="w-10 h-10 text-blue-600" />
      </div>
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-2 text-center">Yapım Aşamasında</h1>
      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs text-center max-w-md leading-relaxed">
        Bu modül şu anda geliştirme aşamasındadır ve çok yakında hizmete açılacaktır.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-95"
      >
        Geri Dön
      </button>
    </div>
  );
}
