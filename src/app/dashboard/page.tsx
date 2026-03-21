import {
  DollarSign,
  Wrench,
  Wallet,
  Clock,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Landmark,
  Smartphone,
  Tablet,
  Laptop,
  ChevronDown,
  TrendingUp,
  History,
  ShoppingCart
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Today's Sales", val: "$1,250.00", trend: "+12%", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Repair Income", val: "$850.00", trend: "+8%", icon: Wrench, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Collected Payments", val: "$2,100.00", icon: Wallet, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Pending Services", val: "12", tag: "Urgent", icon: Clock, color: "text-orange-400", bg: "bg-orange-500/10" },
  { label: "Ready Devices", val: "5", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Critical Stock", val: "3", tag: "Low", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10" },
  { label: "Total Debts", val: "$450.00", icon: CreditCard, color: "text-red-400", bg: "bg-red-500/10" },
  { label: "Cash Balance", val: "$12,400.00", icon: Landmark, color: "text-blue-400", bg: "bg-blue-500/10", hero: true },
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
  { name: "9H Tempered Glass", cat: "Protection", sales: 210, price: "$15.00", status: "Low Stock", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvtImj_jjxSd8l4lVj2yFbsGm-yqlD4qa_4y3SlEg_eqblO6NBHVo6CBDAz0Kc5DHhnd1DjTUeNkPFT_8h3CZlXYnfb_XhxSRQOfKcHRysR8F3XBewFRXLTD5debvCjnj8G2_6G0bQeQbfhRRs7CACkQDDgOo6jksWAm5jvch_ZMiZiEB26qSV6iq-kvoK4AnGYkZfREZYUI6b2_2fYZYCCgal70fAuUnaFB5aynZyjck11gjr42CH6z9WVW7GXBgGEyOzteu3Y8k" },
  { name: "Sonic Buds Wireless", cat: "Audio", sales: 56, price: "$79.99", status: "In Stock", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMgAW-Ja89L0zIxr-0LYCV6p2gya8Ww-R5BjOcxK-oWmQJr5o31gAQHsVp_ODX7NyebV_AsCLu4OnvQCiKLqueyj1ZkO8BtKb9ZRwtlLbLnJuA1iX8OIIwW_jJCBrV199v1IXKCY9ZFSluXp-LErmrlXF1_9heKze7SwsT34lJKHLliIV-llvonN1pnp2Q4P3BEbDaen1Bs7dMmS-lXtsobvykIwedDB674QPJRBRKYyQgKB5Bja4N7imTM_idwT0ncJUTagw4aSU" },
];

export default function MainDashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen pb-24 font-inter">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className={cn(
            "bg-slate-900/40 p-6 rounded-2xl shadow-sm border border-slate-800 transition-all hover:border-blue-500/30",
            m.hero && "bg-gradient-to-br from-slate-900/40 to-blue-900/10"
          )}>
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2 rounded-xl", m.bg)}>
                <m.icon className={cn("w-5 h-5", m.color)} />
              </div>
              {m.trend ? (
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg uppercase tracking-widest">{m.trend}</span>
              ) : m.tag ? (
                <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest", m.tag === 'Urgent' ? "bg-red-500/10 text-red-400" : "bg-orange-500/10 text-orange-400")}>{m.tag}</span>
              ) : null}
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{m.label}</p>
            <h3 className="text-2xl font-black tracking-tight text-white">{m.val}</h3>
          </div>
        ))}
      </div>

      {/* Middle Section: Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Analysis */}
        <div className="lg:col-span-2 bg-slate-900/40 p-8 rounded-2xl border border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">Revenue Analysis</h4>
              <p className="text-xs font-medium text-slate-500 mt-1">Daily performance comparison</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-700 active:scale-95 transition-all">
              Last 7 Days <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="h-64 flex items-end gap-3 px-2">
            {[40, 60, 30, 80, 55, 95, 100].map((v, i) => (
              <div key={i} className="flex-1 bg-slate-800/50 rounded-t-lg relative group h-full flex items-end overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 bg-blue-600/30 h-full rounded-t-lg transition-all group-hover:bg-blue-600/50" style={{height: `${v}%`}}></div>
                <div className="absolute inset-x-0 bottom-0 bg-emerald-500/20 h-[70%] rounded-t-lg group-hover:bg-emerald-500/40" style={{height: `${v * 0.7}%`}}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-blue-500">Today</span>
          </div>
        </div>

        {/* Service Status Distribution */}
        <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 shadow-sm">
          <h4 className="text-lg font-bold text-white tracking-tight">Service Status</h4>
          <p className="text-xs font-medium text-slate-500 mt-1 mb-10">Workload distribution</p>
          <div className="relative w-48 h-48 mx-auto mb-10 group cursor-pointer">
            <div className="absolute inset-0 rounded-full border-[18px] border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-[18px] border-blue-600 border-t-transparent border-r-transparent rotate-45 transition-transform group-hover:rotate-90"></div>
            <div className="absolute inset-0 rounded-full border-[18px] border-emerald-500 border-l-transparent border-b-transparent -rotate-12 transition-transform group-hover:rotate-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-white tracking-tighter">34</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Total Units</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "Pending", val: 12, color: "bg-blue-600" },
              { label: "Ready", val: 5, color: "bg-emerald-500" },
              { label: "In Progress", val: 8, color: "bg-orange-500" },
              { label: "New", val: 9, color: "bg-slate-700" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-2.5 h-2.5 rounded-full shadow-sm", s.color)}></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                </div>
                <span className="text-sm font-bold text-white">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Transactions & Records */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <div className="bg-slate-900/40 rounded-2xl shadow-sm border border-slate-800 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/20">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Recent Transactions</h4>
            <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900/60 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  <th className="px-8 py-4">Customer</th>
                  <th className="px-8 py-4">Operation</th>
                  <th className="px-8 py-4">Amount</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-8 py-5">
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{t.date}</p>
                    </td>
                    <td className="px-8 py-5 text-xs font-bold text-slate-400 uppercase">{t.op}</td>
                    <td className="px-8 py-5 text-sm font-black text-white tracking-tight">{t.amount}</td>
                    <td className="px-8 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                        t.status === 'Paid' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      )}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Service Records */}
        <div className="bg-slate-900/40 rounded-2xl shadow-sm border border-slate-800 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/20">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Recent Service Records</h4>
            <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">All Tickets</button>
          </div>
          <div className="divide-y divide-slate-800/50">
            {serviceRecords.map((r, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-500 shadow-inner">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white tracking-tight">{r.device}</h5>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                      {r.user} • <span className="text-orange-400 font-black">{r.issue}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "block px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-1.5 border shadow-sm",
                    r.status === 'Ready' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                    r.status === 'In Progress' ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                    "bg-slate-800 text-slate-400 border-slate-700"
                  )}>{r.status}</span>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Tech: {r.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className="bg-slate-900/40 p-8 rounded-2xl shadow-sm border border-slate-800">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h4 className="text-lg font-bold text-white tracking-tight uppercase tracking-widest">Top Selling Inventory</h4>
            <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Most moved items this month</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-800 hover:bg-slate-800/40 transition-all group">
              <div className="aspect-square mb-4 rounded-lg bg-slate-800 overflow-hidden flex items-center justify-center relative shadow-inner">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-md shadow-lg uppercase tracking-widest">Hot Seller</div>
              </div>
              <h6 className="text-sm font-bold text-white leading-tight mb-1">{p.name}</h6>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{p.cat} • {p.sales} Sales</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-black text-blue-500 tracking-tighter">{p.price}</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md",
                  p.status === 'In Stock' ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-red-400 bg-red-500/10 border border-red-500/20"
                )}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
