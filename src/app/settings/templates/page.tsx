"use client";

import {
  Mail,
  MessageSquare,
  Search,
  Plus,
  CheckCircle2,
  Clock,
  Smartphone,
  Trash2,
  Save,
  ChevronRight,
  ArrowUp,
  Tablet,
  Monitor,
  User,
  Zap,
  Languages,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const templates = [
  { id: 1, title: "Servis Hazır", body: "Sayın {{MUSTERI_ADI}}, {{CIHAZ_MODEL}} model cihazınızın onarımı tamamlanmış olup teslim alınmaya hazırdır...", tags: ["#REPAIR", "#NOTIF"], status: "active", icon: CheckCircle2 },
  { id: 2, title: "Ödeme Hatırlatma", body: "Sayın {{MUSTERI_ADI}}, {{TICKET_ID}} nolu servis işleminiz için {{BORC_TUTARI}} tutarında ödeme beklemektedir...", tags: ["#FINANCE"], status: "scheduled", icon: Clock },
  { id: 3, title: "Yeni Kayıt Oluşturuldu", body: "Hoş geldiniz! {{CIHAZ_MODEL}} cihazınız #{{TICKET_ID}} referans numarası ile sisteme kaydedilmiştir...", tags: ["#ONBOARDING"], status: "active", icon: Smartphone },
];

export default function TemplateManagement() {
  const [activeTab, setActiveTab] = useState("SMS");

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <header className="mb-10">
        <span className="text-blue-500 font-bold text-xs tracking-[0.2em] uppercase mb-2 block">İletişim Merkezi</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">Şablon Yönetimi</h2>
          <div className="flex gap-4">
            <div className="flex bg-slate-900 p-1 rounded-2xl border border-slate-800">
              {["SMS", "WhatsApp"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-8 py-2 rounded-xl text-sm font-semibold transition-all",
                    activeTab === tab ? "bg-slate-800 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Bento Layout for Templates */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Side: Template List */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Aktif Şablonlar</h3>
            <span className="bg-blue-500/10 text-blue-400 text-[10px] px-3 py-1 rounded-full font-bold border border-blue-500/20">12 Toplam</span>
          </div>

          <div className="space-y-3">
            {templates.map((t) => (
              <div key={t.id} className={cn(
                "p-5 rounded-[2rem] border-l-4 transition-all cursor-pointer group",
                t.id === 1 ? "bg-slate-800 border-blue-500 shadow-xl" : "bg-slate-900/50 border-transparent hover:bg-slate-900 hover:border-slate-700"
              )}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{t.title}</h4>
                  <t.icon className={cn("w-4 h-4", t.id === 1 ? "text-blue-500" : "text-slate-600")} />
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{t.body}</p>
                <div className="mt-4 flex gap-2">
                  {t.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-950 rounded-lg text-[10px] font-mono text-blue-400/70 border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 border-2 border-dashed border-slate-800 rounded-3xl text-slate-600 font-bold text-sm hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" /> Yeni Şablon Ekle
          </button>
        </div>

        {/* Right Side: Editor & Preview */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Editor Column */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
              <label className="block text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-6">Şablon Düzenleyici</label>
              <div className="mb-6">
                <input className="w-full bg-slate-950 border-none rounded-2xl px-6 py-4 text-white font-bold focus:ring-2 focus:ring-blue-500/20 outline-none" type="text" defaultValue="Servis Hazır" />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-3 px-1">
                  <span className="text-xs text-slate-500 font-medium">Mesaj İçeriği</span>
                  <span className="text-[10px] text-slate-700 font-mono">142 / 160 Karakter</span>
                </div>
                <textarea
                  className="w-full bg-slate-950 border-none rounded-2xl p-6 text-sm text-white leading-relaxed focus:ring-2 focus:ring-blue-500/20 outline-none resize-none custom-scrollbar"
                  rows={8}
                  defaultValue={`Sayın {{MUSTERI_ADI}},

Harika bir haberimiz var! {{CIHAZ_MODEL}} cihazınızın onarımı tamamlandı ve teslim edilmeye hazır.

Toplam tutar: {{BORC_TUTARI}}.
Referans No: #{{TICKET_ID}}

Tech Atelier'i tercih ettiğiniz için teşekkürler!`}
                ></textarea>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest block ml-1">Kullanılabilir Etiketler</span>
                <div className="flex flex-wrap gap-2">
                  {["{{MUSTERI_ADI}}", "{{CIHAZ_MODEL}}", "{{BORC_TUTARI}}", "{{TICKET_ID}}"].map(tag => (
                    <button key={tag} className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded-lg hover:bg-blue-500/20 transition-colors border border-blue-500/10">
                      {tag}
                    </button>
                  ))}
                  <button className="px-3 py-1.5 bg-slate-800 text-slate-400 text-[10px] font-mono rounded-lg hover:bg-slate-700 transition-colors">+</button>
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <button className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-500 transition-all active:scale-95">Değişiklikleri Kaydet</button>
                <button className="px-5 py-4 bg-slate-800 text-rose-400 rounded-2xl hover:bg-rose-500/10 transition-colors border border-transparent hover:border-rose-500/20">
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Column */}
          <div className="flex flex-col items-center">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 self-start ml-4">Canlı Önizleme</label>
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] p-4 overflow-hidden ring-1 ring-white/10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-10"></div>
              {/* Screen Content */}
              <div className="h-full bg-black rounded-[2.8rem] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="pt-10 pb-4 px-6 bg-slate-900/90 border-b border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">Tech Atelier</div>
                    <div className="text-[10px] text-emerald-500 font-medium">Çevrimiçi</div>
                  </div>
                </div>
                {/* Chat Area */}
                <div className="flex-1 p-6 flex flex-col justify-end space-y-4">
                  <div className="self-center mb-auto pt-4">
                    <span className="text-[10px] bg-white/5 text-slate-500 px-4 py-1 rounded-full uppercase tracking-tighter border border-white/5 font-bold">Bugün 10:42</span>
                  </div>
                  {/* Message Bubble */}
                  <div className="bg-blue-600 p-5 rounded-[1.8rem] rounded-bl-none max-w-[95%] shadow-xl">
                    <p className="text-[12px] text-white leading-relaxed">
                      Sayın <span className="font-bold underline">Ahmet Yılmaz</span>, <br/><br/>
                      Harika bir haberimiz var! <span className="font-bold underline">iPhone 13 Pro</span> onarımı tamamlandı ve hazır. <br/><br/>
                      Tutar: <span className="font-bold underline">₺2.450,00</span>.<br/>
                      Ref: #TA-9982<br/><br/>
                      Tech Atelier!
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[9px] text-blue-200 font-bold opacity-70 uppercase">10:42 • İletildi</span>
                    </div>
                  </div>
                </div>
                {/* Input area mockup */}
                <div className="p-4 bg-slate-900/50 flex gap-3 items-center">
                  <div className="flex-1 bg-white/5 h-10 rounded-full border border-white/5"></div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ArrowUp className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Toggle */}
            <div className="mt-8 flex gap-3 bg-slate-900 p-2 rounded-2xl border border-white/5">
              <button className="p-3 bg-blue-600 rounded-xl text-white shadow-lg transition-all"><Smartphone className="w-5 h-5" /></button>
              <button className="p-3 text-slate-600 hover:text-slate-400 transition-all"><Tablet className="w-5 h-5" /></button>
              <button className="p-3 text-slate-600 hover:text-slate-400 transition-all"><Monitor className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Akıllı Hatırlatıcılar", desc: "Tekniker durum güncellemelerine göre otomatik şablon gönderimi tanımlayın.", icon: Zap, color: "text-amber-500" },
          { title: "Çoklu Dil Desteği", desc: "Uluslararası müşterileriniz için şablonların çeviri versiyonlarını oluşturun.", icon: Languages, color: "text-blue-500" },
          { title: "Etkileşim Analizi", desc: "Şablonlarınızın %94 teslimat ve %12 tıklama oranı performansı bulunmaktadır.", icon: BarChart3, color: "text-rose-500" }
        ].map((info, i) => (
          <div key={i} className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 hover:border-slate-700 transition-all group">
            <info.icon className={cn("w-8 h-8 mb-6 group-hover:scale-110 transition-transform", info.color)} />
            <h5 className="font-bold text-white mb-3 text-lg">{info.title}</h5>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">{info.desc}</p>
            <button className="text-xs font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1 hover:underline">
              Ayarları Yapılandır <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
