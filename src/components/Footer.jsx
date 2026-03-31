import React, { useState } from 'react';
import Modal from './Modal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (e, type) => {
    e.preventDefault();
    setActiveModal(type);
  };

  return (
    <footer className="bg-darker border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm gap-4">
        <p>© {new Date().getFullYear()} Génesis. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <button 
            onClick={(e) => openModal(e, 'terms')} 
            className="hover:text-white transition-colors"
          >
            Términos y Condiciones
          </button>
          <button 
            onClick={(e) => openModal(e, 'privacy')} 
            className="hover:text-white transition-colors"
          >
            Política de Privacidad
          </button>
        </div>
      </div>

      {/* Términos y Condiciones Modal */}
      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)}
        title="Términos y Condiciones"
      >
        <p>Bienvenido a Génesis. Al acceder y utilizar nuestros servicios y método intensivo, usted acepta estar sujeto a los siguientes términos y condiciones:</p>
        <br/>
        <h3 className="text-white text-base">1. Uso del Servicio</h3>
        <p>Nuestro contenido "Emprende con Propósito" es exclusivamente para fines educativos. No garantizamos resultados financieros exactos, ya que el éxito depende del esfuerzo y dedicación individual del emprendedor.</p>
        <br/>
        <h3 className="text-white text-base">2. Propiedad Intelectual</h3>
        <p>Todo el material, videos, guías y recursos compartidos dentro del programa, incluyendo los grupos de WhatsApp, son propiedad exclusiva de Génesis y Nahuel Velazquez. Está estrictamente prohibida su distribución comercial no autorizada.</p>
        <br/>
        <h3 className="text-white text-base">3. Política de Reembolsos</h3>
        <p>Debido a la naturaleza del producto digital intensivo, el reembolso está supeditado a las garantías legales que ofrezca la plataforma de pago procesadora en el momento de la adquisición.</p>
        <br/>
        <p><em>Última actualización: Marzo 2026.</em></p>
      </Modal>

      {/* Política de Privacidad Modal */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)}
        title="Política de Privacidad"
      >
        <p>En Génesis, la privacidad de nuestros usuarios y estudiantes es de suma importancia. Esta política detalla cómo manejamos la información:</p>
        <br/>
        <h3 className="text-white text-base">1. Recopilación de Datos</h3>
        <p>Recopilamos información básica (como nombre y correo electrónico) cuando te registras en nuestros cursos o te unes a nuestro grupo de WhatsApp comunitario para enviarte material y actualizaciones.</p>
        <br/>
        <h3 className="text-white text-base">2. Uso de la Información</h3>
        <p>Los datos aportados solo serán utilizados para propósitos de contacto relacionados con "Emprende con Propósito", promociones internas y optimización de contenido. Jamás venderemos ni cederemos tus datos a terceros.</p>
        <br/>
        <h3 className="text-white text-base">3. Seguridad</h3>
        <p>Tomamos medidas razonables para proteger su información personal, sin embargo, debe recordar que ninguna transmisión de datos por internet es 100% segura.</p>
        <br/>
        <p><em>Última actualización: Marzo 2026.</em></p>
      </Modal>
    </footer>
  );
}
