import {
  Settings,
  Bell,
  Shield,
  Smartphone,
  Database,
  Globe,
  Key,
  Eye,
  ChevronRight,
  User,
  CreditCard,
  MessageSquare,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Genel Ayarlar</h1>
        <p className="text-slate-500 mt-1">Sistem tercihlerini ve yapılandırmaları yönetin.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          <SettingsNavLink icon={User} label="Profil Ayarları" active />
          <SettingsNavLink icon={Bell} label="Bildirim Tercihleri" />
          <SettingsNavLink icon={Shield} label="Güvenlik & Şifre" />
          <SettingsNavLink icon={Smartphone} label="Cihaz Entegrasyonları" />
          <SettingsNavLink icon={Database} label="Veri & Yedekleme" />
          <SettingsNavLink icon={Globe} label="Dil & Bölge" />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">
          {/* Profile Card */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-xl">AT</div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Ali Tekin</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Mağaza Sahibi / Yönetici</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SettingsInput label="Ad Soyad" value="Ali Tekin" />
              <SettingsInput label="E-posta Adresi" value="ali@teknikatelier.com.tr" />
              <SettingsInput label="Telefon" value="+90 532 000 00 00" />
              <SettingsInput label="Mağaza Adı" value="Tech Atelier Merkez" />
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Değişiklikleri Kaydet</button>
            </div>
          </section>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SettingsActionCard
              icon={MessageSquare}
              title="Mesajlaşma Ayarları"
              desc="WhatsApp ve SMS API yapılandırmaları."
              href="/settings/messaging"
              color="bg-emerald-100 text-emerald-600"
            />
            <SettingsActionCard
              icon={Zap}
              title="Otomasyonlar"
              desc="Sistem tetikleyicileri ve kurallar."
              href="/settings/automations"
              color="bg-purple-100 text-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsNavLink({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
      active ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-500 hover:bg-white dark:hover:bg-slate-900"
    )}>
      <div className="flex items-center gap-3">
        <Icon className={cn("w-5 h-5", active ? "text-white" : "text-slate-400 group-hover:text-blue-500")} />
        <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
      </div>
      <ChevronRight className={cn("w-4 h-4", active ? "text-white/50" : "text-slate-300")} />
    </button>
  );
}

function SettingsInput({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{label}</label>
      <input
        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        defaultValue={value}
        type="text"
      />
    </div>
  );
}

function SettingsActionCard({ icon: Icon, title, desc, href, color }: { icon: any, title: string, desc: string, href: string, color: string }) {
  return (
    <a href={href} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex items-center gap-6 group">
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner", color)}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </a>
  );
}
