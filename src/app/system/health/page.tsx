"use client";

import {
  Activity,
  MessageSquare,
  CloudSync,
  History,
  ChevronRight,
  Info,
  AlertTriangle,
  MonitorCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SystemHealth() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden">
      {/* Visual Background Accents */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-64 -z-10 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Editorial Header */}
      <section>
        <p className="text-blue-500 font-black tracking-[0.2em] text-[10px] uppercase mb-1">Architecture Monitoring</p>
        <h2 className="text-4xl font-black tracking-tight text-white uppercase leading-none">System Health <span className="text-slate-600">&amp;</span> Status</h2>
      </section>

      {/* Bento Grid: Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* POS Integration */}
        <StatusCard
          icon={Activity}
          title="POS Integration"
          status="Online"
          detail="Latency: 42ms"
          variant="emerald"
          pulse
        />
        {/* SMS Gateway */}
        <StatusCard
          icon={MessageSquare}
          title="SMS Gateway"
          status="Low Balance"
          detail="Credits: 142 remaining"
          variant="amber"
          warning
        />
        {/* Cloud Backup */}
        <StatusCard
          icon={CloudSync}
          title="Cloud Backup"
          status="Syncing"
          detail="Progress: 88%"
          variant="blue"
          progress={88}
        />
        {/* API Connections */}
        <StatusCard
          icon={MonitorCheck}
          title="API Connections"
          status="Healthy"
          detail="12/12 Endpoints Active"
          variant="emerald"
          segments={[40, 40, 40, 100]}
        />
      </div>

      {/* Real-time Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Uptime Graph */}
        <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem] relative overflow-hidden group">
          <div className="flex justify-between items-end mb-10 relative z-10">
            <div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">System Uptime</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Measured across all regional clusters</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-black text-emerald-400 tracking-tighter">99.98%</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mt-1">Last 30 Days</p>
            </div>
          </div>

          <div className="relative h-56 flex items-end gap-1.5 px-2 relative z-10">
            {/* Simulated Graph Bars */}
            {[95, 98, 92, 99, 97, 85, 99, 100, 96, 98, 99, 94, 99, 98, 96, 100, 99, 97].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-500/20 rounded-t-lg transition-all hover:bg-emerald-500/40 cursor-crosshair group/bar relative"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                  {h}% • Day {i+1}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] px-2 relative z-10">
            <span>MAY 01</span>
            <span>MAY 15</span>
            <span>MAY 30</span>
          </div>
        </div>

        {/* Integration Response Times */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-10 rounded-[2.5rem] flex flex-col">
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-10">Response Latency</h4>
          <div className="space-y-8 flex-1">
            <LatencyBar label="POS" val="120ms" percent={40} />
            <LatencyBar label="Auth" val="65ms" percent={25} />
            <LatencyBar label="CDN" val="210ms" percent={60} />
            <LatencyBar label="SQL" val="18ms" percent={15} />
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
            <Info className="w-5 h-5 text-blue-400 shrink-0" />
            <p className="text-[11px] text-blue-200/70 leading-relaxed font-bold uppercase tracking-tight">
              Network traffic is currently within nominal parameters for this session.
            </p>
          </div>
        </div>
      </div>

      {/* Maintenance Log */}
      <section className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-slate-800 rounded-xl">
              <History className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="text-xl font-black text-white uppercase tracking-tight">Maintenance &amp; Event Log</h4>
          </div>
          <button className="text-[10px] font-black text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-[0.2em] border border-blue-400/20 px-4 py-2 rounded-xl hover:bg-blue-400/5">
            Export CSV
          </button>
        </div>

        <div className="divide-y divide-white/5">
          <LogItem
            date="May 28"
            time="14:20"
            title="Security Patch Applied"
            desc="System kernel updated to v2.4.1. No downtime required."
            id="#LOG-8921"
          />
          <LogItem
            date="May 27"
            time="03:15"
            title="Database Optimization"
            desc="Automated vacuum and index rebuild completed successfully."
            id="#LOG-8845"
          />
          <LogItem
            date="May 25"
            time="18:45"
            title="SMS Gateway Warning"
            desc="Balance dropped below threshold ($50.00). Automated alert sent."
            id="#LOG-8712"
            warning
          />
        </div>

        <div className="p-6 bg-white/5 text-center">
          <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-300 transition-all">
            View All Events
          </button>
        </div>
      </section>
    </div>
  );
}

interface StatusCardProps {
  icon: React.ElementType;
  title: string;
  status: string;
  detail: string;
  variant: string;
  pulse?: boolean;
  warning?: boolean;
  progress?: number;
  segments?: number[];
}

function StatusCard({ icon: Icon, title, status, detail, variant, pulse, warning, progress, segments }: StatusCardProps) {
  const colors: Record<string, string> = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  };

  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] relative overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer shadow-xl shadow-black/20">
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-3 rounded-2xl", colors[variant])}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest shadow-inner", colors[variant])}>
          {pulse && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>}
          {warning && <AlertTriangle className="w-3 h-3" />}
          {status}
        </div>
      </div>
      <h3 className="text-sm font-black text-slate-300 mb-1 uppercase tracking-tight">{title}</h3>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{detail}</p>

      {progress !== undefined && (
        <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-blue-500/20" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {segments && (
        <div className="flex gap-1.5 mt-4">
          {segments.map((o: number, i: number) => (
            <div key={i} className={cn("h-1.5 w-full rounded-full shadow-inner transition-all duration-700", i === 3 ? "bg-emerald-500" : "bg-emerald-500/30")}></div>
          ))}
        </div>
      )}

      <div className={cn(
        "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent opacity-0 group-hover:opacity-100 transition-all duration-500",
        variant === 'emerald' ? "via-emerald-500/40" : variant === 'amber' ? "via-amber-500/40" : "via-blue-500/40"
      )}></div>
    </div>
  );
}

function LatencyBar({ label, val, percent }: { label: string, val: string, percent: number }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">{label}</div>
      <div className="flex-1 h-3 bg-slate-900 rounded-full shadow-inner overflow-hidden border border-white/5">
        <div className="h-full bg-blue-600 rounded-full transition-all duration-1000 shadow-lg shadow-blue-600/40" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="text-xs font-black text-slate-300 tracking-tighter w-12 text-right">{val}</div>
    </div>
  );
}

function LogItem({ date, time, title, desc, id, warning }: { date: string, time: string, title: string, desc: string, id: string, warning?: boolean }) {
  return (
    <div className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-all group cursor-pointer border-l-4 border-transparent hover:border-blue-500">
      <div className="flex items-center gap-10">
        <div className="text-center w-16 shrink-0">
          <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">{date}</span>
          <span className="block text-xs font-mono text-slate-400 mt-1">{time}</span>
        </div>
        <div>
          <h5 className={cn("text-sm font-black uppercase tracking-tight transition-colors", warning ? "text-amber-400" : "text-slate-100 group-hover:text-blue-400")}>{title}</h5>
          <p className="text-[11px] text-slate-500 font-bold mt-1 leading-relaxed uppercase tracking-tight">{desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-slate-900 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-black text-slate-400 shadow-inner">
          {id}
        </div>
        <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-blue-500 transition-all group-hover:translate-x-1" />
      </div>
    </div>
  );
}
