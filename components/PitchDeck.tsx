import React, { useState } from 'react';
import { ICONS } from '../constants';

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "SatGate",
    subtitle: "Monetizing the Agentic Web with L402",
    icon: <ICONS.Zap />,
    content: (
      <div className="space-y-6 text-center">
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          As AI agents become autonomous, they need a native way to pay for APIs and data. 
          Credit cards are for humans. <span className="text-orange-500 font-bold">Sats are for agents.</span>
        </p>
        
        <div className="py-6 border-y border-white/5 my-4">
          <div className="text-white font-bold text-lg">Presented by Ajay Shrestha</div>
          <div className="text-orange-500 text-sm font-bold tracking-widest uppercase mt-1">Yale School of Management • MBA 2026</div>
          <div className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-2">Yale x Google Hackathon 2025</div>
        </div>

        <div className="flex justify-center gap-8 pt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500"><ICONS.Zap /></div>
            <span className="text-xs font-bold tracking-widest uppercase">Lightning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-blue-500/10 rounded-full text-blue-500"><ICONS.Shield /></div>
            <span className="text-xs font-bold tracking-widest uppercase">Macaroons</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-purple-500/10 rounded-full text-purple-500"><ICONS.Cpu /></div>
            <span className="text-xs font-bold tracking-widest uppercase">AI Agents</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Problem",
    subtitle: "The Payment Wall for Machines",
    icon: <ICONS.Lock />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-xs tracking-widest">Friction</h4>
            <p className="text-gray-300">Traditional billing requires human identity, KYC, and monthly subscriptions.</p>
          </div>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-xs tracking-widest">Latency</h4>
            <p className="text-gray-300">Credit card clearing takes days. Agents need millisecond settlement.</p>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-3xl font-bold tracking-tight">Agents are currently <span className="text-red-500">unbanked</span>.</h3>
          <p className="text-gray-400 italic">"The internet of value must be as fluid as the internet of information."</p>
        </div>
      </div>
    )
  },
  {
    title: "The Solution: L402",
    subtitle: "Authentication + Payment in One Protocol",
    icon: <ICONS.Shield />,
    content: (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-blue-400">402</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">HTTP Status Code</div>
          </div>
          <div className="text-3xl text-gray-600">+</div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-orange-400">Lightning</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Micropayments</div>
          </div>
          <div className="text-3xl text-gray-600">+</div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-purple-400">Macaroons</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Tiered Auth</div>
          </div>
        </div>
        <p className="text-center text-gray-400">
          L402 (formerly LSAT) allows a server to issue a <span className="text-white">cryptographic challenge</span> that, 
          when paid, becomes the user's permanent, verifiable access token.
        </p>
      </div>
    )
  },
  {
    title: "SatGate Workflow",
    subtitle: "Zero-Trust Agent Monetization",
    icon: <ICONS.Terminal />,
    content: (
      <div className="space-y-4 mono text-sm">
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-blue-500">1. Agent</span>
          <span className="text-gray-500">→ GET /data →</span>
          <span className="text-purple-500">Server</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-purple-500">2. Server</span>
          <span className="text-gray-500">→ 402 + Invoice →</span>
          <span className="text-blue-500">Agent</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-blue-500">3. Agent</span>
          <span className="text-gray-500">→ Pay Invoice →</span>
          <span className="text-orange-500">Lightning</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-blue-500">4. Agent</span>
          <span className="text-gray-500">→ GET /data + Preimage →</span>
          <span className="text-purple-500">Server</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-green-500/10 border border-green-500/20 rounded">
          <span className="text-purple-500">5. Server</span>
          <span className="text-gray-500">→ 200 OK + Payload →</span>
          <span className="text-blue-500">Agent</span>
        </div>
      </div>
    )
  }
];

interface PitchDeckProps {
  onClose: () => void;
}

const PitchDeck: React.FC<PitchDeckProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const prev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col overflow-hidden animate-in fade-in duration-500">
      {/* Navigation Top */}
      <div className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-orange-500"><ICONS.Zap /></span>
          <span className="font-black tracking-tighter text-xl">SatGate Pitch</span>
        </div>
        <div className="flex gap-2">
           {slides.map((_, i) => (
             <div key={i} className={`h-1 w-8 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-orange-500' : 'bg-white/10'}`} />
           ))}
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
          Exit Deck
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full flex flex-col items-center animate-in zoom-in-95 duration-500" key={currentSlide}>
          <div className="p-4 bg-orange-500/10 text-orange-500 rounded-2xl mb-8 scale-150">
            {slide.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-2">
            {slide.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-medium text-center mb-12 uppercase tracking-widest">
            {slide.subtitle}
          </h2>
          
          <div className="w-full bg-[#111] p-10 rounded-3xl border border-white/10 shadow-2xl">
            {slide.content}
          </div>
        </div>
      </div>

      {/* Controls Bottom */}
      <div className="p-10 flex justify-center items-center gap-6">
        <button 
          onClick={prev}
          disabled={currentSlide === 0}
          className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all border ${
            currentSlide === 0 ? 'opacity-0' : 'border-white/10 hover:bg-white/5'
          }`}
        >
          Previous
        </button>
        <button 
          onClick={next}
          className="px-12 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20 active:scale-95"
        >
          {currentSlide === slides.length - 1 ? 'Start Demo' : 'Next Slide'}
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;