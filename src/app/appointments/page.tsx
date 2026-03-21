'use client'

import React from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon,
  Wrench,
  Package,
  BarChart3,
  LayoutDashboard,
  HelpCircle,
  LogOut,
  Bell,
  Settings,
  Search,
  Cpu
} from 'lucide-react'
import Image from 'next/image'

const AppointmentsPage = () => {
  const calendarDays = [
    { day: 25, isCurrentMonth: false }, { day: 26, isCurrentMonth: false },
    { day: 27, isCurrentMonth: false }, { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false }, { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true, appointment: { title: 'iPhone 14 Ekran', time: '09:30', color: 'blue' } },
    { day: 4, isCurrentMonth: true }, { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true, appointment: { title: 'Anakart Onarımı', time: '14:00', color: 'orange' } },
    { day: 7, isCurrentMonth: true }, { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true }, { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true, isToday: true, appointment: { title: 'MacBook Batarya', time: '11:00', color: 'blue' } },
    { day: 12, isCurrentMonth: true }, { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true }, { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true }, { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true }, { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true }, { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true }, { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true }, { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true }, { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
  ]

  const upcomingAppointments = [
    { id: 'TK-4029', title: 'iPad Pro M2 Ekran', time: '10:00', client: 'Serkan Aydın', color: 'blue' },
    { id: 'TK-4031', title: 'MacBook Air Anakart', time: '11:30', client: 'Deniz Demir', color: 'orange' },
    { id: 'TK-4035', title: 'Genel Batarya Değişimi', time: '14:15', client: 'Tekno Şirketi', color: 'emerald' },
    { id: 'TK-4038', title: 'iPhone 13 Kamera Modülü', time: '16:00', client: 'Ayşe Yılmaz', color: 'blue', opacity: 60 },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col">
      <div className="flex-1 flex p-6 gap-6 overflow-hidden mt-2">
        {/* Calendar Section */}
        <section className="flex-1 bg-slate-950/50 rounded-2xl border border-slate-800/50 overflow-hidden flex flex-col shadow-xl">
          {/* Calendar Header inside Section */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold tracking-tighter text-slate-50">Randevular</h2>
              <div className="flex items-center bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
                <button className="p-1 hover:text-blue-400 transition-colors"><ChevronLeft size={18} /></button>
                <span className="px-4 font-semibold text-sm tracking-tight">Ekim 2023</span>
                <button className="p-1 hover:text-blue-400 transition-colors"><ChevronRight size={18} /></button>
              </div>
            </div>
            <div className="flex bg-slate-800 p-1 rounded-lg">
              <button className="px-4 py-1 text-xs font-bold bg-slate-700 text-white rounded-md shadow-sm">Ay</button>
              <button className="px-4 py-1 text-xs font-bold text-slate-400 hover:text-slate-200">Hafta</button>
              <button className="px-4 py-1 text-xs font-bold text-slate-400 hover:text-slate-200">Gün</button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-slate-800 bg-slate-900/30">
            {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day, idx) => (
              <div key={day} className={`py-3 text-center text-[10px] font-black uppercase tracking-widest ${idx === 6 ? 'text-slate-600' : 'text-slate-500'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Content */}
          <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {calendarDays.map((item, idx) => (
              <div
                key={idx}
                className={`border-r border-b border-slate-800/30 p-2 text-xs font-bold transition-colors hover:bg-slate-800/10 ${!item.isCurrentMonth ? 'opacity-30 bg-slate-900/20' : ''} ${item.isToday ? 'bg-slate-800/20 relative' : ''}`}
              >
                {item.isToday && <div className="absolute inset-0 border-2 border-blue-500/50 pointer-events-none"></div>}
                {item.day}
                {item.appointment && (
                  <div className={`mt-2 p-1.5 rounded-md text-[10px] font-semibold group cursor-pointer transition-all ${
                    item.appointment.color === 'blue' ? 'bg-blue-500/10 border-l-2 border-blue-500 text-blue-400 hover:bg-blue-500/20' :
                    'bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 hover:bg-orange-500/20'
                  }`}>
                    <span className="block truncate">{item.appointment.title}</span>
                    <span className="block opacity-60">{item.appointment.time}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar: Upcoming List */}
        <aside className="w-80 flex flex-col gap-6">
          {/* Quick Info Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-2xl shadow-xl shadow-blue-500/10">
            <div className="flex justify-between items-start mb-4">
              <Cpu className="text-white/50" size={32} />
              <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">Atölye Doluluğu</span>
            </div>
            <div className="mb-4">
              <p className="text-3xl font-black text-white">%82</p>
              <p className="text-xs text-white/70">Maksimum verimlilikte çalışılıyor</p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div className="bg-white h-full rounded-full w-4/5"></div>
            </div>
          </div>

          {/* Upcoming List */}
          <div className="flex-1 bg-slate-950/40 rounded-2xl border border-slate-800/50 p-5 flex flex-col shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Gelecek Randevular
            </h3>
            <div className="space-y-3 overflow-y-auto pr-1">
              {upcomingAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`bg-slate-900/60 p-3 rounded-xl border border-slate-800 transition-all cursor-move ${
                    apt.color === 'blue' ? 'hover:border-blue-500/50' :
                    apt.color === 'orange' ? 'hover:border-orange-500/50' :
                    'hover:border-emerald-500/50'
                  } ${apt.opacity ? 'opacity-60' : ''}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${
                      apt.color === 'blue' ? 'text-blue-400' :
                      apt.color === 'orange' ? 'text-orange-400' :
                      'text-emerald-400'
                    }`}>#{apt.id}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{apt.time}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-100">{apt.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Müşteri: {apt.client}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 text-[10px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-widest border border-dashed border-slate-800 rounded-lg hover:border-slate-600 transition-all">
              + Kuyruktan Sürükle
            </button>
          </div>
        </aside>
      </div>

      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Plus size={24} />
      </button>
    </div>
  )
}

export default AppointmentsPage
