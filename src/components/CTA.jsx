import React from 'react';
import { DollarSign, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="animate-fade-in-up [animation-delay:300ms] uppercase tracking-[0.1em] text-neutral-400 mb-8 text-sm">
          Elegí la opción que mejor te represente:
        </p>

        <div className="glass-panel animate-fade-in-up [animation-delay:400ms] max-w-2xl mx-auto relative">
          {/* Main Sale CTA */}
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <a href="https://api.whatsapp.com/send?phone=543704255361&text=Hola%20Nahuel%20quiero%20acceder%20al%20entrenamiento%20para%20vender%20m%C3%A1s%20por%20Tik%20Tok%20de%2097%20USD%2C%20me%20das%20m%C3%A1s%20info%3F" className="btn bg-gradient-to-r from-gold to-yellow-500 w-full px-6 py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-black relative z-10 shadow-2xl scale-100 hover:scale-[1.02] transition-transform rounded-2xl" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <span className="text-3xl drop-shadow-md">💰</span>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase leading-none">
                  Vende por Tik Tok <br />
                  <span className="text-sm font-bold opacity-80 uppercase tracking-widest block mt-1">Con Integridad</span>
                </span>
              </div>
              <div className="mt-4 sm:mt-0 bg-black/15 px-5 py-2 rounded-xl font-black text-2xl border border-black/10">
                97 USD
              </div>
            </a>
          </div>

          {/* Separator - TikTok */}
          <div className="flex items-center my-8 text-white/10">
            <div className="flex-1 h-px bg-white/10"></div>
            <div className="w-2 h-2 rotate-45 bg-gold mx-4 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Barberia CTA */}
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <a href="https://wa.link/t6et1p" className="btn w-full px-6 py-6 bg-gradient-to-r from-slate-100 to-white text-slate-900 border border-white hover:border-blue-200 shadow-2xl flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10 scale-100 hover:scale-[1.02] transition-transform rounded-2xl" target="_blank" rel="noopener noreferrer">
              <img src="/academia-barberos.png" alt="Academia Barberos" className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-sm flex-shrink-0" />
              <div className="text-center sm:text-left leading-tight">
                <span className="block text-2xl sm:text-3xl font-black tracking-tight uppercase text-indigo-950">CURSO DE BARBERÍA VIP</span>
                <span className="font-bold text-indigo-600 text-sm sm:text-base uppercase tracking-widest mt-2 block">Aprende y emprende hoy</span>
              </div>
            </a>
          </div>

          {/* Separator - WhatsApp */}
          <div className="flex items-center my-8 text-white/10">
            <div className="flex-1 h-px bg-white/10"></div>
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 px-4">Comunidad Libre</div>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* WhatsApp CTA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green to-emerald-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <a href="https://chat.whatsapp.com/KAWTg0RjPgMEIwVVq7dvOj" className="btn bg-gradient-to-r from-green to-emerald-600 w-full px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-white relative z-10 scale-100 hover:scale-[1.02] transition-transform shadow-2xl rounded-2xl border border-white/10" target="_blank" rel="noopener noreferrer">
              <span className="text-4xl drop-shadow-md">💬</span>
              <div className="text-center sm:text-left">
                <span className="block text-xl sm:text-2xl font-extrabold uppercase tracking-wide">Comunidad Génesis</span>
                <span className="block text-sm font-semibold opacity-90 uppercase tracking-widest mt-1">Únete a nuestro grupo (Todos los países)</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
