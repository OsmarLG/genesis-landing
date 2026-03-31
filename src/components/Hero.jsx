import React from 'react';

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="bg-grid"></div>
      
      {/* Decorative Blur */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(217,119,6,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[100px] -z-10 rounded-full"
      ></div>

      <div className="max-w-7xl mx-auto px-8 text-center z-10 relative">
        <div className="animate-fade-in-up">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 leading-[1.1]">
            <span className="text-white">"EMPRENDE CON PROPÓSITO Y </span>
            <br className="hidden md:block" />
            <span className="text-gradient-gold">PRINCIPIOS BÍBLICOS"</span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12 italic leading-relaxed">
            MÉTODO VALIDADO POR MÁS DE 2.000 EMPRENDEDORES PARA CONVERTIR TU NEGOCIO EN UNA HERRAMIENTA DE IMPACTO ETERNO
            <br/>
            <span className="text-base opacity-80">(GENERANDO TESOROS EN EL CIELO, NO SOLO EN LA TIERRA)</span>
          </p>
        </div>

        <div className="animate-fade-in-up [animation-delay:200ms] relative max-w-[650px] mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 aspect-video group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          
          <img 
            src="/tiktok-banner.png" 
            alt="Intensivo TikTok" 
            className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
}
