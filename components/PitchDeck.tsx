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
      <div className="flex flex-col items-center justify-center space-y-3 py-1">
        <div className="space-y-0.5 text-center">
          <div className="inline-block px-3 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[9px] font-black uppercase tracking-[0.4em]">
            Build on Bitcoin
          </div>
          <p className="text-gray-500 text-[9px] font-medium uppercase tracking-[0.2em]">Hackathon by Yale Blockchain Club</p>
        </div>
        
        <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />

        <div className="space-y-2 text-center w-full">
          <div className="text-gray-500 text-[8px] uppercase tracking-[0.4em] font-bold">Presented By</div>
          
          <div className="py-2.5 px-6 border-y border-white/5 bg-white/[0.01] rounded-lg">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Ajay Shrestha</h3>
            <p className="text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-0.5">
              MBA Class of 2026 @ Yale School of Management
            </p>
          </div>
          
          <div className="text-gray-600 font-mono text-[9px]">February 7, 2026</div>
        </div>
      </div>
    )
  },
  {
    title: "The Problem",
    subtitle: "Machines are Unbanked",
    icon: <ICONS.Lock />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-[10px] tracking-widest">The Subscription Wall</h4>
            <p className="text-gray-300 text-sm leading-relaxed">Credit cards and recurring billing are built for humans. Agents need millisecond settlement for single inference calls.</p>
          </div>
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-[10px] tracking-widest">Identity Silos</h4>
            <p className="text-gray-300 text-sm leading-relaxed">Current API gateways require legacy-heavy banking interface and centralized accounts. The agentic web needs anonymous, cryptographic payment proof.</p>
          </div>
        </div>
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-3xl font-black tracking-tight leading-tight">Payments are the <span className="text-red-500 underline decoration-2 underline-offset-8">bottleneck</span> of AI autonomy.</h3>
          <p className="text-gray-500 italic text-sm">Autonomous agents cannot reach their full potential while trapped inside fiat rails.</p>
        </div>
      </div>
    )
  },
  {
    title: "The Opportunity",
    subtitle: "Machine GDP is the Next Frontier",
    icon: <ICONS.Cpu />,
    content: (
      <div className="space-y-8">
        <p className="text-gray-400 text-center leading-relaxed max-w-2xl mx-auto">
          By 2030, autonomous agents will outnumber humans on the web. These agents need a <strong>Native Protocol of Value</strong> to exchange data and compute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="text-orange-500 font-black text-3xl mb-1">10B+</div>
            <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.2em]">Agents by 2030</div>
          </div>
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="text-blue-500 font-black text-3xl mb-1">$1.5T</div>
            <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.2em]">New Economy GDP</div>
          </div>
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="text-purple-500 font-black text-3xl mb-1">∞</div>
            <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.2em]">Scalability</div>
          </div>
        </div>
        <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-center text-xs font-black text-orange-200 uppercase tracking-widest">
          SatGate is the gateway to the Agentic Economy.
        </div>
      </div>
    )
  },
  {
    title: "Solution: L402",
    subtitle: "Auth + Payments via Macaroons",
    icon: <ICONS.Shield />,
    content: (
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5 p-10 rounded-[2rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500" />
          <div className="text-center space-y-2">
            <div className="text-3xl font-black text-blue-400">402</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">HTTP Code</div>
          </div>
          <div className="text-3xl text-gray-700 font-light">+</div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-black text-orange-400">SATS</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">Lightning</div>
          </div>
          <div className="text-3xl text-gray-700 font-light">+</div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-black text-purple-400">COOKIES</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">Macaroons</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
          L402 (formerly LSAT) merges identity and payment. It issues a cryptographic caveat (Macaroon) that validates <strong>only</strong> after a Lightning Preimage is provided.
        </p>
      </div>
    )
  },
  {
    title: "Workflow",
    subtitle: "The L402 Handshake",
    icon: <ICONS.Terminal />,
    content: (
      <div className="space-y-4 mono">
        <div className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">1</div>
          <span className="text-blue-500 font-bold uppercase text-[10px] tracking-widest">Agent</span>
          <span className="text-gray-600 tracking-tighter">→ GET /premium-data →</span>
          <span className="text-white font-bold text-[10px]">Proxy</span>
        </div>
        <div className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-purple-500/30 transition-colors">
          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-400">2</div>
          <span className="text-purple-500 font-bold uppercase text-[10px] tracking-widest">Proxy</span>
          <span className="text-gray-600 tracking-tighter">→ 402 + Invoice + Macaroon →</span>
          <span className="text-white font-bold text-[10px]">Agent</span>
        </div>
        <div className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors">
          <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-[10px] font-bold text-orange-400">3</div>
          <span className="text-orange-500 font-bold uppercase text-[10px] tracking-widest">Agent</span>
          <span className="text-gray-600 tracking-tighter">→ Settles SATS on Lightning →</span>
          <span className="text-white font-bold text-[10px]">Preimage</span>
        </div>
        <div className="group flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl transition-all">
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400">4</div>
          <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Agent</span>
          <span className="text-gray-600 tracking-tighter">→ Retry with Macaroon + Preimage →</span>
          <span className="text-green-400 font-bold text-[10px]">200 OK</span>
        </div>
      </div>
    )
  },
  {
    title: "The Vision",
    subtitle: "Scaling Machine Autonomy",
    icon: <ICONS.Zap />,
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl group hover:bg-white/[0.06] transition-all">
            <h4 className="font-black text-white mb-3 text-sm uppercase tracking-widest">Pay-Per-Token AI</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Kill the $20/mo subscription. Let agents pay exactly $0.0004 for a specific reasoning task instantly.</p>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl group hover:bg-white/[0.06] transition-all">
            <h4 className="font-black text-white mb-3 text-sm uppercase tracking-widest">Agent Data Markets</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Agents selling high-signal alpha to other agents. A trustless economy where intelligence is the currency.</p>
          </div>
        </div>
        <div className="text-center space-y-4 pt-4">
          <div className="text-gray-600 font-black tracking-[0.4em] text-[10px] uppercase">Bitcoin is the Native Language of Value</div>
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SATGATE: START THE DEMO</div>
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
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col overflow-y-auto animate-in fade-in duration-500 scroll-smooth">
      {/* Navigation Top */}
      <div className="sticky top-0 z-10 p-4 md:p-6 flex justify-between items-center border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-orange-500"><ICONS.Zap /></span>
          <span className="font-black tracking-tighter text-xl text-white">SatGate</span>
        </div>
        <div className="flex gap-2">
           {slides.map((_, i) => (
             <div key={i} className={`h-1.5 w-4 md:w-10 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.6)]' : 'bg-white/10'}`} />
           ))}
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.2em] border border-white/10 px-3 py-1 rounded">
          Close
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex flex-col items-center justify-center p-4 md:p-8 py-4 md:py-16 flex-1">
        <div className="max-w-4xl w-full flex flex-col items-center animate-in zoom-in-95 duration-700" key={currentSlide}>
          <div className="p-4 bg-orange-500/10 text-orange-500 rounded-2xl mb-6 scale-100 md:scale-110 shadow-2xl shadow-orange-500/10 border border-orange-500/20">
            {slide.icon}
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-center mb-1 text-white">
            {slide.title}
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-500 font-bold text-center mb-8 md:mb-10 uppercase tracking-[0.2em] px-6">
            {slide.subtitle}
          </h2>
          
          <div className="w-full bg-[#111] p-5 md:p-8 rounded-[2rem] border border-white/10 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.8)] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-[120px] -mr-40 -mt-40 transition-all group-hover:bg-orange-500/10" />
             <div className="relative z-10">
              {slide.content}
             </div>
          </div>
        </div>
      </div>

      {/* Controls Bottom */}
      <div className="p-6 md:p-10 flex justify-center items-center gap-6 md:gap-10 mt-auto pb-12 md:pb-20">
        <button 
          onClick={prev}
          disabled={currentSlide === 0}
          className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest transition-all border text-xs md:text-sm ${
            currentSlide === 0 ? 'invisible' : 'border-white/10 hover:bg-white/5 text-gray-500 hover:text-white'
          }`}
        >
          Previous
        </button>
        <button 
          onClick={next}
          className="group px-10 md:px-14 py-3 md:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] transition-all shadow-2xl shadow-orange-500/30 active:scale-95 text-xs md:text-base flex items-center gap-4"
        >
          {currentSlide === slides.length - 1 ? 'Start Demo' : 'Next Slide'}
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;