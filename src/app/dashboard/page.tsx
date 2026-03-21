import {
  DollarSign,
  Wrench,
  Wallet,
  Clock,
  CheckCircle2,
  AlertTriangle,
  CreditCard,

  Smartphone,
  Tablet,
  Laptop,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Today's Sales", val: "$1,250.00", trend: "+12%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { label: "Repair Income", val: "$850.00", trend: "+8%", icon: Wrench, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Payments", val: "$2,100.00", icon: Wallet, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { label: "Pending", val: "12", tag: "Urgent", icon: Clock, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
  { label: "Ready", val: "5", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { label: "Low Stock", val: "3", tag: "Low", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
  { label: "Total Debts", val: "$450.00", icon: CreditCard, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
  { label: "Cash Balance", val: "$12,400.00", icon: Landmark, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", hero: true },
];

const transactions = [
  { name: "Julian Casablancas", date: "14 Oct, 2:30 PM", op: "iPhone 13 Screen Repair", amount: "$120.00", status: "Paid" },
  { name: "Sarah Connor", date: "14 Oct, 11:15 AM", op: "Samsung S22 Battery", amount: "$85.00", status: "Pending" },
  { name: "David Bowie", date: "13 Oct, 4:45 PM", op: "Charging Port Clean", amount: "$35.00", status: "Paid" },
];

const serviceRecords = [
  { device: "iPhone 14 Pro Max", user: "Mark R.", issue: "Broken Glass", status: "In Progress", tech: "Sam Wilson", icon: Smartphone },
  { device: "iPad Air (M1)", user: "Alice P.", issue: "Boot Loop", status: "Ready", tech: "Alex R.", icon: Tablet },
  { device: "MacBook Pro 16\"", user: "Studio X", issue: "Water Damage", status: "Waiting Parts", tech: "Sam Wilson", icon: Laptop },
];

const products = [
  { name: "MagSafe Case - Clear", cat: "Accessories", sales: 142, price: "$29.99", status: "In Stock", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1BlENdUi5NsnoLY2RHi8D-XzoMyF3bifJRPEs0XBcWAsEbqDbIJkvI6LnMEsUX5bsrz2D9UFW0QeG-B-_7sfDIE0VEWY0kYEX-vZh0tyYAL0JtT9IdN_KNnoeakKtfSHIg936n8pAT-VJ9PEpIzGoyCSf66eW6xwAJuwUQJyNAXY004Ig5K_YFZe9BQOOqNYDWlmLWOAc9BLQTOiSbPvtxPpfbqJnWOAcjgwHISCdYaOuIaai8W_3qleXeQXVa5TXYjYqsxusc_E" },
  { name: "Pulse Fit Pro Watch", cat: "Wearables", sales: 89, price: "$149.00", status: "In Stock", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv9huhNi8-J-yqhPp1Ctb1nvazZo53s35LDGuaVFHC5pKtjjgspFii-7bdmXX31CifpTd49rVGTEuUeylJalLbRvO4mN2av309ndUw4zRBcJDl8ATiuoKY3dPutBPS_LxORipuhBZJWdatCIF286Aru19P5zvdispK6F5kCcGWBqdGY4Q9wOQJTbD6f8SDtGzPXOd0SbpYm_9wKbiCtapWFbq2QOx6CDt0aG2iovJwNA8K8tILqCPxbfERXB0O5yiURxCNAPol73U" },
];

export default function MainDashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className={cn(
            "bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:scale-[1.02]",
            m.hero && "bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-900/10"
          )}>
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2.5 rounded-2xl", m.bg)}>
                <m.icon className={cn("w-6 h-6", m.color)} />
              </div>
              {m.trend ? (
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">{m.trend}</span>
              ) : m.tag ? (
                <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest", m.tag === 'Urgent' ? "bg-red-50 text-red-600" : "bg-orange-50 text-orange-600")}>{m.tag}</span>
              ) : null}
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{m.label}</p>
            <h3 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white">{m.val}</h3>
          </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">Revenue Analysis</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Daily performance comparison</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 shadow-inner">
              Last 7 Days <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="h-64 flex items-end gap-3 px-2">
            {[40, 60, 30, 80, 55, 95, 100].map((v, i) => (
              <div key={i} className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-t-2xl relative group h-full flex items-end overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 bg-blue-600/40 rounded-t-2xl transition-all group-hover:bg-blue-600/60" style={{height: `${v}%`}}></div>
                <div className="absolute inset-x-0 bottom-0 bg-emerald-500/30 rounded-t-2xl group-hover:bg-emerald-500/50" style={{height: `${v * 0.6}%`}}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-blue-600">Today</span>
          </div>
        </div>

        {/* Service Distribution */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">Service Status</h4>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 mb-10">Workload distribution</p>
          <div className="relative w-52 h-52 mx-auto mb-10 group cursor-pointer">
            <div className="absolute inset-0 rounded-full border-[20px] border-slate-100 dark:border-slate-800/50"></div>
            <div className="absolute inset-0 rounded-full border-[20px] border-blue-600 border-t-transparent border-r-transparent rotate-45 transition-transform group-hover:rotate-90"></div>
            <div className="absolute inset-0 rounded-full border-[20px] border-emerald-500 border-l-transparent border-b-transparent -rotate-12 transition-transform group-hover:rotate-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">34</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Units</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "Pending", val: 12, color: "bg-blue-600" },
              { label: "Ready", val: 5, color: "bg-emerald-500" },
              { label: "In Progress", val: 8, color: "bg-orange-400" },
              { label: "New", val: 9, color: "bg-slate-300" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-2.5 h-2.5 rounded-full shadow-sm", s.color)}></div>
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-white">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/30">
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest">Recent Transactions</h4>
            <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline decoration-2">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Customer</th>
                  <th className="px-8 py-5">Operation</th>
                  <th className="px-8 py-5">Amount</th>
                  <th className="px-8 py-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-8 py-6">
                      <p className="text-sm font-black text-slate-900 dark:text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.date}</p>
                    </td>
                    <td className="px-8 py-6 text-xs font-bold text-slate-500 uppercase">{t.op}</td>
                    <td className="px-8 py-6 text-sm font-black text-slate-900 dark:text-white tracking-tighter">{t.amount}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-inner border",
                        t.status === 'Paid' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-blue-100"
                      )}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Records */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/30">
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest">Recent Service Records</h4>
            <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline decoration-2">All Tickets</button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {serviceRecords.map((r, i) => (
              <div key={i} className="p-8 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-inner">
                    <r.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900 dark:text-white">{r.device}</h5>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                      {r.user} • <span className="text-orange-600 dark:text-orange-400 font-black">{r.issue}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-1.5 shadow-sm border",
                    r.status === 'Ready' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                    r.status === 'In Progress' ? "bg-orange-50 text-orange-600 border-orange-100" :
                    "bg-slate-100 text-slate-600 border-slate-200"
                  )}>{r.status}</span>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Tech: {r.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Inventory Bento */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase tracking-widest">Top Selling Inventory</h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Most moved items this month</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group hover:-translate-y-1">
              <div className="aspect-square mb-6 rounded-2xl bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center justify-center relative shadow-inner">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-lg shadow-lg uppercase tracking-widest">Hot Seller</div>
              </div>
              <h6 className="text-sm font-black text-slate-900 dark:text-white leading-tight mb-1">{p.name}</h6>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{p.cat} • {p.sales} Sales</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-blue-600 tracking-tighter">{p.price}</span>
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em]">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Landmark } from "lucide-react";
