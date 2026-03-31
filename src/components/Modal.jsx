import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-[#141414] border border-white/10 rounded-2xl shadow-2xl animate-fade-in-up [animation-duration:300ms]">
        <div className="sticky top-0 bg-[#141414] border-b border-white/10 p-4 flex justify-between items-center z-10">
          <h2 className="text-xl text-gold font-semibold uppercase tracking-wider">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8 text-neutral-300 space-y-4 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
