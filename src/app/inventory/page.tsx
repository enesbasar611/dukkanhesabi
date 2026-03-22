import {  Filter, Plus, FileUp, Smartphone, BatteryCharging, Cable, Edit, PlusCircle, History, ChevronLeft, ChevronRight, Package, Box, AlertTriangle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import { ProductCategory } from "@prisma/client";

const categoryMap: Record<ProductCategory, string> = {
  SCREEN: "Ekran Paneli",
  BATTERY: "Batarya",
  ACCESSORY: "Aksesuar",
  MOTHERBOARD: "Anakart",
  DEVICE_NEW: "Yeni Cihaz",
  DEVICE_2ND_HAND: "2. El Cihaz",
  OTHER: "Diğer"
};

const getCategoryIcon = (cat: ProductCategory) => {
  switch (cat) {
    case 'SCREEN': return Smartphone;
    case 'BATTERY': return BatteryCharging;
    case 'ACCESSORY': return Cable;
    default: return Box;
  }
};

async function getInventoryData() {
  const products = await prisma.product.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 10
  });

  const totalStockValue = await prisma.product.findMany({
    select: { stock: true, purchasePrice: true }
  });

  const totalValue = totalStockValue.reduce((acc, curr) => acc + (curr.stock * curr.purchasePrice), 0);
  const outOfStock = await prisma.product.count({ where: { stock: { lte: 0 } } });

  // Critical items are those where stock <= minStock
  const productsAll = await prisma.product.findMany({ select: { stock: true, minStock: true } });
  const criticalCount = productsAll.filter(p => p.stock <= p.minStock && p.stock > 0).length;

  return {
    products,
    stats: {
      totalValue,
      outOfStock,
      criticalCount,
      totalCount: await prisma.product.count()
    }
  };
}

export default async function InventoryManagement() {
  const { products, stats } = await getInventoryData();

  return (
    <div className="p-8 space-y-8 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">Envanter</span>
          <h1 className="text-3xl font-extrabold tracking-tight">Stok ve Ürün Yönetimi</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <FileUp className="w-4 h-4" /> CSV Dışa Aktar
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> Yeni Ürün Ekle
          </button>
        </div>
      </div>

      {/* Summary Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Toplam Stok Değeri", value: `${stats.totalValue.toLocaleString('tr-TR')} ₺`, icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Stokta Yok", value: `${stats.outOfStock} Ürün`, icon: Package, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
          { label: "Kritik Uyarılar", value: `${stats.criticalCount} Ürün`, icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-900/20" },
          { label: "Toplam Çeşit", value: `${stats.totalCount} Kalem`, icon: Box, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-xl", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-slate-400 mr-2">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Filtrele:</span>
        </div>
        <select className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-900 dark:text-slate-100">
          <option>Kategori Seçin</option>
          {Object.entries(categoryMap).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <div className="ml-auto flex items-center gap-4">
          <button className="text-xs font-bold text-blue-600 hover:underline px-2 uppercase tracking-widest">Temizle</button>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-all">Filtreleri Uygula</button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-950/50">
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Ürün Bilgisi</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Uyumluluk</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 text-center">Stok</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Konum</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Alış Fiyatı</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Satış Fiyatı</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {products.map((item) => {
              const Icon = getCategoryIcon(item.category);
              const status = item.stock <= 0 ? 'critical' : (item.stock <= item.minStock ? 'warning' : 'optimal');

              return (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold leading-tight">{item.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">
                          {categoryMap[item.category]} • {item.barcode || 'Barkodsuz'}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1">
                      {item.compatibleWith?.split(',').map(m => (
                        <span key={m} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-lg">{m.trim()}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className={cn(
                        "text-sm font-black",
                        status === 'critical' ? "text-red-600" : status === 'warning' ? "text-amber-600" : "text-emerald-600"
                      )}>{item.stock} Adet</span>
                      <div className="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                        <div className={cn(
                          "h-full rounded-full transition-all",
                          status === 'critical' ? "bg-red-500 w-1/4" : status === 'warning' ? "bg-amber-500 w-1/2" : "bg-emerald-500 w-3/4"
                        )}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-black rounded-lg border border-slate-200 dark:border-slate-700">{item.shelfLocation || '---'}</span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-500">{item.purchasePrice.toLocaleString('tr-TR')} ₺</td>
                  <td className="px-6 py-5 text-sm font-black text-blue-600">{item.salePrice.toLocaleString('tr-TR')} ₺</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 rounded-xl transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600 rounded-xl transition-colors"><PlusCircle className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 rounded-xl transition-colors"><History className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {products.length === 0 && (
              <tr><td colSpan={7} className="py-20 text-center text-slate-400 italic">Envanterde henüz ürün bulunmuyor.</td></tr>
            )}
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500 font-medium">Toplam {stats.totalCount} üründen {products.length} tanesi gösteriliyor</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-200">1</button>
            <button className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-400"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
