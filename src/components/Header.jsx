import React from 'react';

export default function Header() {
  return (
    <header className="py-8 border-b border-white/10 bg-gradient-to-b from-[#141414]/80 to-transparent">
      <div className="max-w-7xl mx-auto px-8 animate-fade-in-down flex flex-col items-center">
        
        {/* Logo de Génesis */}
        <div className="mb-8 inline-flex items-center justify-center w-36 h-36 rounded-full bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(251,191,36,0.15)] overflow-hidden">
          <img src="/logo.png" alt="Logotipo de Génesis" className="w-[85%] h-[85%] object-contain" />
        </div>

        {/* Perfil del Fundador */}
        <div className="flex items-center gap-5 bg-white/5 pr-8 pl-3 py-3 rounded-full border border-white/10 mt-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] border-gold shadow-lg flex-shrink-0">
            <img src="/nahuel.png" alt="Nahuel Velazquez" className="w-full h-full object-cover object-top scale-110 mt-1" />
          </div>
          <div className="text-left">
            <h2 className="text-lg sm:text-xl uppercase tracking-[0.2em] text-white font-extrabold leading-tight">
              Nahuel Velazquez
            </h2>
            <span className="text-xs sm:text-sm text-gold font-bold uppercase tracking-widest mt-1 block">
              Fundador de Génesis
            </span>
          </div>
        </div>
        
      </div>
    </header>
  );
}
