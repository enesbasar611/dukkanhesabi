"use client";

import {
  Users,
  Star,
  History,
  BarChart3,
  ChevronRight,
  Smartphone,
  Smile,
  Paperclip,
  AtSign,
  Clock,
  ArrowLeft,
  Video,
  Phone,
  Mic,
  Info,
  Percent,
  PartyPopper,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function CampaignManagement() {
  const [activeAudience, setActiveAudience] = useState("all");

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 antialiased font-inter tracking-tight">
      {/* Hero Heading Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-600 mb-2 block">Communication Engine</span>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">Campaign Management</h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 overflow-hidden relative shadow-xl">
                <Image
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuAHt7wJDxd_Co3H2ct37BrK3s92LqAksZTuEfYwEljAddu-0GlLIJCayVGcuKhk0nXNDWX9y3R4h5xYMx2McCT6UD7tcJhsgGPiL2twJa9eOUxUwgE_0E8Nk1TZNMFU7mzi-5XAdqOeOYHlEbRbqR0gyN6zYodcG8AqNdz_RfbzbHFJEk4R-E53BBYotEN3J-Bj_WEKCpBjxy6OPdT_QVINGzZH88j2vpa2IMpuAP3r84rs444KyrD1-ILDxI-tQwtEs4oz36Pw1Tw`}
                  alt="User"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-black text-white border-4 border-white dark:border-slate-950 shadow-xl relative z-10">
              12+
            </div>
          </div>
          <button className="flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 group">
            <BarChart3 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            View Global ROI
          </button>
        </div>
      </div>

      {/* Main Layout: Asymmetric Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column: Composer (Large) */}
        <div className="xl:col-span-8 space-y-8">
          {/* Step 1: Audience & Template Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Audience */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-6 block">1. Select Audience</label>
              <div className="grid grid-cols-2 gap-4">
                <AudienceButton
                  icon={Users}
                  label="All Customers"
                  count="2,840 Users"
                  active={activeAudience === "all"}
                  onClick={() => setActiveAudience("all")}
                />
                <AudienceButton
                  icon={Star}
                  label="VIP Members"
                  count="142 Users"
                  active={activeAudience === "vip"}
                  onClick={() => setActiveAudience("vip")}
                />
                <AudienceButton
                  icon={DollarSign}
                  label="Debtors"
                  count="12 Users"
                  active={activeAudience === "debtors"}
                  onClick={() => setActiveAudience("debtors")}
                  variant="red"
                />
                <AudienceButton
                  icon={History}
                  label="Past 3 Months"
                  count="890 Users"
                  active={activeAudience === "past"}
                  onClick={() => setActiveAudience("past")}
                />
              </div>
            </div>

            {/* Template */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-6 block">2. Choose Template</label>
              <div className="space-y-3">
                <TemplateButton icon={Percent} label="Seasonal Discount" variant="emerald" />
                <TemplateButton icon={Smartphone} label="New Model Arrival" variant="blue" />
                <TemplateButton icon={PartyPopper} label="Festival Greetings" variant="purple" />
              </div>
            </div>
          </div>

          {/* Step 2: Message Composer */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
              <div className="flex items-center gap-6">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">3. Compose Message</label>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">WhatsApp Connected</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ComposerAction icon={Smile} />
                <ComposerAction icon={Paperclip} />
                <ComposerAction icon={AtSign} />
              </div>
            </div>

            <div className="p-10">
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700 resize-none min-h-[180px] text-slate-900 dark:text-white"
                placeholder="Type your message here... Use {name} for personalization."
              ></textarea>

              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-8 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <span>CHARS: <span className="text-blue-600">142/160</span></span>
                  <span>CREDITS: <span className="text-blue-600">1.0</span></span>
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Save Draft</button>
                  <div className="flex shadow-2xl shadow-blue-600/20">
                    <button className="px-8 py-3 rounded-l-2xl text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white hover:bg-blue-500 transition-all border-r border-white/10">Send Now</button>
                    <button className="px-4 py-3 rounded-r-2xl bg-blue-700 text-white hover:bg-blue-800 transition-all">
                      <Clock className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Campaigns Table */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black tracking-tight uppercase tracking-widest">Recent Activity</h3>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 hover:underline">Export Analytics</button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-950/20 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                    <th className="px-8 py-6">Campaign Profile</th>
                    <th className="px-8 py-6">Status</th>
                    <th className="px-8 py-6">Performance</th>
                    <th className="px-8 py-6">Open Rate</th>
                    <th className="px-8 py-6 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <CampaignRow
                    name="Eid Special Offer"
                    status="Completed"
                    delivery="98.2%"
                    open="42.5%"
                    date="Oct 12, 2023"
                    variant="emerald"
                  />
                  <CampaignRow
                    name="iPhone 15 Launch"
                    status="Processing"
                    delivery="45.0%"
                    open="12.1%"
                    date="Today, 09:45"
                    variant="blue"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Preview & Analytics (Sidebar) */}
        <div className="xl:col-span-4 space-y-8">
          {/* Phone Preview */}
          <div className="bg-slate-900 rounded-[3.5rem] p-5 shadow-2xl relative border-[10px] border-slate-800 mx-auto w-full max-w-[340px] aspect-[9/19] flex flex-col overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-slate-800 rounded-b-3xl z-20"></div>

            <div className="h-full w-full bg-[#e5ddd5] rounded-[2.5rem] overflow-hidden flex flex-col shadow-inner relative z-10">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] p-5 pt-10 text-white flex items-center gap-4 relative">
                <ArrowLeft className="w-5 h-5" />
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden relative border border-white/20">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb9YmXOW1bTglgmC-TguTWCagf3IvFdD7BpCa-NcmGOlF4e7hk85sc7CpdwIO_pyNkAcuuqvHdm01OpOLAI7EUYsMXA_2_mve-Q_5KQwj1ttf7HxFkIPCQ0b39FoeRbTfYUeAZ_CWhAfFil6G7KKd-Um2X-LIHMFN7F9DkSZphijcjim5oXXoNoIGJT027-ZxNepb-arjOTDam7M1Prx9IaxLeDQVx4uNenw47ngeR77Ncy80BlB5e3uREfPlwSwOLU20EKZXt4WQ"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black tracking-tight leading-none">TechAtelier Care</p>
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest mt-1">online</p>
                </div>
                <div className="flex gap-4">
                  <Video className="w-4 h-4" />
                  <Phone className="w-4 h-4" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 space-y-5 custom-scrollbar overflow-y-auto">
                <div className="mr-auto bg-[#dcf8c6] p-4 rounded-2xl rounded-tl-none text-[11px] shadow-sm max-w-[85%] font-medium text-slate-800 relative">
                  <p className="mb-1 font-black">Hi John! 👋</p>
                  <p>Your iPhone 13 Pro is ready for collection at TechAtelier Downtown. Please bring your receipt #4920.</p>
                  <span className="text-[8px] text-slate-400 font-black uppercase float-right mt-2">11:42 AM ✓✓</span>
                </div>

                <div className="mr-auto bg-white p-4 rounded-2xl rounded-tl-none text-[11px] shadow-sm max-w-[85%] border-l-4 border-blue-500 font-medium text-slate-800 relative">
                  <div className="flex flex-col">
                    <div className="mb-3 rounded-xl overflow-hidden bg-slate-100 aspect-video relative">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARtyl1LAe2wcEFstooNM3WHB4x40LwpYeC1oqQqm_0igHvsyoSIyouo1uz12OijYDd2YrcEqA6GHQP5YZLNs7ipMoJb7o8bvFHiqrj235-9-rENtlfstLc1XGkuuCfxiMoCp0_1tdIOKmQ6fqL_xNyuMu-VBW52dYW1JCL_lIXBZH50LunbMBmjPlDOkAxqDBe_g7oQDbWYK3jUsL0akKewm8-boW-4_525qJeqbZANz2f9rs27I1-ShRWY1QUFeVXcuguD0r6NPs"
                        alt="Promo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-black mb-1">New Model Alert! 🚀</p>
                    <p className="text-slate-600 font-bold">The iPhone 15 Pro is here. Trade in your old device and get up to 40% OFF. Limited stocks only!</p>
                    <span className="text-[8px] text-slate-400 font-black uppercase float-right mt-2">Now ✓</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="p-3 bg-[#f0f0f0] flex items-center gap-3">
                <div className="flex-1 bg-white rounded-full px-5 py-2 flex items-center justify-between shadow-inner">
                  <Smile className="w-5 h-5 text-slate-400" />
                  <span className="text-xs text-slate-300 flex-1 px-4 font-bold">Message</span>
                  <Paperclip className="w-5 h-5 text-slate-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#075e54] flex items-center justify-center text-white shadow-lg">
                  <Mic className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="flex items-center justify-between relative z-10">
              <h4 className="text-sm font-black uppercase tracking-[0.2em]">Monthly Quota</h4>
              <Info className="w-4 h-4 opacity-50" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>SMS CREDITS</span>
                <span className="text-white">8,420 / 10,000</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>WHATSAPP MSG</span>
                <span className="text-white">450 / 5,000</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: '9%' }}></div>
              </div>
            </div>

            <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 border border-white/5 relative z-10">Upgrade Capacity</button>
          </div>

          {/* Pro Tip */}
          <div className="bg-blue-600/5 border border-blue-500/10 p-6 rounded-[2rem] flex gap-5 shadow-inner">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-500 shrink-0 shadow-lg">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-widest">Pro Insight</p>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                Personalizing with <span className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded text-blue-500">{"{first_name}"}</span> increases open rates by up to 28% for tech retail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AudienceButtonProps {
  icon: React.ElementType;
  label: string;
  count: string;
  active: boolean;
  onClick: () => void;
  variant?: string;
}

function AudienceButton({ icon: Icon, label, count, active, onClick, variant }: AudienceButtonProps) {
  const isRed = variant === 'red';
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-start p-4 rounded-2xl border-2 transition-all text-left group active:scale-95",
        active
          ? (isRed ? "border-red-600 bg-red-600/5" : "border-blue-600 bg-blue-600/5")
          : "border-transparent bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800"
      )}
    >
      <Icon className={cn(
        "w-6 h-6 mb-3 transition-colors",
        active
          ? (isRed ? "text-red-500" : "text-blue-500")
          : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
      )} />
      <span className={cn("text-[10px] font-black uppercase tracking-tight mb-1", active ? (isRed ? "text-red-600" : "text-blue-600") : "text-slate-900 dark:text-white")}>{label}</span>
      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{count}</span>
    </button>
  );
}

interface TemplateButtonProps {
  icon: React.ElementType;
  label: string;
  variant: string;
}

function TemplateButton({ icon: Icon, label, variant }: TemplateButtonProps) {
  const colors: Record<string, string> = {
    emerald: "text-emerald-500 bg-emerald-500/10",
    blue: "text-blue-500 bg-blue-500/10",
    purple: "text-purple-500 bg-purple-500/10",
  };

  return (
    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group active:scale-[0.98] border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
      <div className="flex items-center gap-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg", colors[variant])}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
    </button>
  );
}

function ComposerAction({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <button className="p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-500 hover:text-blue-600 active:scale-95 group">
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
}

interface CampaignRowProps {
  name: string;
  status: string;
  delivery: string;
  open: string;
  date: string;
  variant: string;
}

function CampaignRow({ name, status, delivery, open, date, variant }: CampaignRowProps) {
  const isEmerald = variant === 'emerald';
  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/30 transition-all group cursor-pointer">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]", isEmerald ? "bg-emerald-500" : "bg-blue-500")}></div>
          <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">{name}</span>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className={cn(
          "px-3 py-1 text-[9px] font-black rounded-lg uppercase tracking-[0.2em] shadow-inner border",
          isEmerald ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-blue-100"
        )}>{status}</span>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <span className="text-xs font-black tracking-tighter w-10">{delivery}</span>
          <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div className={cn("h-full rounded-full transition-all duration-1000", isEmerald ? "bg-emerald-500" : "bg-blue-500")} style={{ width: delivery }}></div>
          </div>
        </div>
      </td>
      <td className="px-8 py-6 font-black text-sm tracking-tighter text-slate-900 dark:text-white">{open}</td>
      <td className="px-8 py-6 text-[10px] text-slate-500 font-bold text-right uppercase tracking-widest">{date}</td>
    </tr>
  );
}
