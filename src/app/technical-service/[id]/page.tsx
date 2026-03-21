"use client";

import { use, useState } from "react";
import {
  Printer,
  X,
  CheckCircle,
  Smartphone,
  Wrench,
  Plus,
  ArrowRight,
  FileText,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
  { status: "Registered", title: "Received & Registered", desc: "Device logged into system by Sarah", time: "10:24 AM", icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { status: "Inspection", title: "Technical Inspection", desc: "Screen digitizer failure confirmed", time: "11:15 AM", icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { status: "Repairing", title: "In Repair Phase", desc: "Replacing display module & water seal", time: "ACTIVE", icon: Wrench, color: "text-blue-400", bg: "bg-blue-600", active: true },
  { status: "QC", title: "Quality Control", desc: "Final stress test & sensor check", time: "PENDING", icon: CheckCircle, color: "text-slate-500", bg: "bg-slate-800", pending: true },
];

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [note, setNote] = useState("");

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue-600/10 text-blue-500 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-blue-500/20 uppercase">In Progress</span>
            <span className="text-slate-500 text-sm font-medium">#{id}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">iPhone 14 Pro Max</h2>
          <p className="text-slate-500 text-sm">Deep Purple • 256GB • Warranty Active</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:opacity-80 shadow-sm">
            <Printer className="w-4 h-4" /> Print Receipt
          </button>
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:opacity-80 shadow-sm">
            <X className="w-4 h-4" /> Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <CheckCircle className="w-4 h-4" /> Complete Repair
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Customer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-bold text-lg">
                JD
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold">Jonathan Doe</h3>
                <p className="text-xs text-slate-500">+1 (555) 012-3456</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500 uppercase tracking-wider font-bold">Total Repairs</span>
                <span className="text-slate-900 dark:text-white">4 Orders</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500 uppercase tracking-wider font-bold">Last Visit</span>
                <span className="text-slate-900 dark:text-white">Oct 12, 2023</span>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                  View Full History <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Device Signature */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-500" />
              Device Signature
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">IMEI Number</p>
                <p className="text-sm font-mono text-slate-900 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded-lg border border-slate-100 dark:border-slate-800">35 847209 123456 7</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">Battery</p>
                  <p className="text-sm text-slate-900 dark:text-slate-200 font-semibold">89% Health</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">Condition</p>
                  <p className="text-sm text-slate-900 dark:text-slate-200 font-semibold">Grade B+</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">Accessories Received</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Original Box", "USB-C Cable"].map(acc => (
                    <span key={acc} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold">{acc}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Timeline */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-slate-900 dark:text-white font-bold mb-8 flex items-center justify-between">
              Progress Timeline
              <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">80% Ready</span>
            </h3>
            <div className="relative space-y-8 pl-8">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-100 dark:bg-slate-800"></div>
              {timelineData.map((item, i) => (
                <div key={i} className={cn("relative", item.pending && "opacity-40")}>
                  <div className={cn(
                    "absolute -left-8 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-sm",
                    item.bg
                  )}>
                    <item.icon className={cn("w-3.5 h-3.5", item.color)} />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className={cn(
                      "text-[10px] font-mono font-bold",
                      item.active ? "text-blue-500 italic animate-pulse" : "text-slate-400"
                    )}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Notes */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                Internal Notes
              </h3>
              <button className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter hover:text-blue-700">Add Log Entry</button>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500">Alex Rivera • 2h ago</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 dark:bg-orange-900/30 font-black uppercase">Crucial</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &quot;FaceID module was extremely delicate. Used heat at 75C for 180s to separate. Recommend replacing the top adhesive gasket after assembly.&quot;
                </p>
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-400 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                placeholder="Click to type a new technical note..."
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Components */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
              <h3 className="text-slate-900 dark:text-white font-bold text-sm">Components & Parts</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { name: "iPhone 14 PM Screen", desc: "OEM Grade • In Stock", price: "329.00" },
                { name: "Display Adhesive", desc: "Standard Repair Kit", price: "12.00" },
                { name: "Screen Protector", desc: "Loyalty Complementary", price: "0.00", free: true },
              ].map((part, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-200">{part.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{part.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className={cn("text-xs font-bold", part.free ? "text-emerald-500" : "text-slate-900 dark:text-white")}>${part.price}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">x1</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full p-3 bg-slate-50 dark:bg-slate-950/50 text-xs font-bold text-blue-600 hover:text-blue-700 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1 transition-colors">
              <Plus className="w-3 h-3" /> Add Part
            </button>
          </div>

          {/* Financial Summary */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/30 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-sm font-black opacity-80 uppercase tracking-[0.2em]">Financial Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-medium">
                  <span className="opacity-70">Total Parts</span>
                  <span className="font-bold">$341.00</span>
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="opacity-70">Labor Fee</span>
                  <span className="font-bold">$85.00</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-emerald-300">
                  <span className="opacity-70">Loyalty Discount</span>
                  <span className="font-bold">-$15.00</span>
                </div>
                <div className="pt-4 border-t border-blue-500/50 flex justify-between items-end">
                  <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Total Due</span>
                  <span className="text-3xl font-black tracking-tighter">$411.00</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded-full border border-white/20">UNPAID / PENDING</span>
                  <CreditCard className="w-4 h-4 opacity-70" />
                </div>
                <button className="w-full bg-white text-blue-600 font-black py-3 rounded-xl text-sm transition-all hover:bg-slate-100 active:scale-95 shadow-md">
                  Process Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
