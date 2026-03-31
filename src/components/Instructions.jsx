import React from 'react';
import { MoreHorizontal, ExternalLink } from 'lucide-react';

export default function Instructions() {
  return (
    <section className="section bg-darker">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="animate-fade-in-up text-3xl mb-12 text-white">
          ¿Cómo unirme correctamente?
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="glass-panel text-center animate-fade-in-up [animation-delay:100ms]">
            <h4 className="text-xl text-gold mb-4 uppercase tracking-[0.1em]">
              Paso 1
            </h4>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-dark rounded-full border border-gold">
                <MoreHorizontal size={32} className="text-gold" />
              </div>
            </div>
            <p className="text-neutral-400">
              Toca el ícono de opciones <strong className="text-white">( ... )</strong> en la esquina superior derecha de la pantalla.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel text-center animate-fade-in-up [animation-delay:200ms]">
            <h4 className="text-xl text-green mb-4 uppercase tracking-[0.1em]">
              Paso 2
            </h4>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-dark rounded-full border border-green">
                <ExternalLink size={32} className="text-green" />
              </div>
            </div>
            <p className="text-neutral-400">
              Selecciona <strong className="text-white">"Abrir en el navegador"</strong> para que puedas unirte al grupo de WhatsApp sin problemas de redirección.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
