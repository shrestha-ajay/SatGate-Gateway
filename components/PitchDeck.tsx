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
      <div className="space-y-8 text-center py-6">
        <div className="space-y-2">
          <div className="text-orange-500 font-black text-xl tracking-[0.3em] uppercase">Build on Bitcoin</div>
          <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">Hackathon by Yale Blockchain Club</div>
        </div>
        
        <div className="py-8 border-y border-white/5 my-6 bg-white/[0.02] rounded-xl">
          <div className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-4">Presented By</div>
          <div className="text-3xl font-black text-white tracking-tight">Ajay Shrestha</div>
          <div className="text-orange-400 text-sm font-bold mt-2 uppercase tracking-widest">
            MBA Class of 2026 @ Yale School of Management
          </div>
          <div className="text-gray-500 text-xs mt-6 font-mono">Feb 7, 2026</div>
        </div>

        <div className="flex justify-center gap-12">
          <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col items-center gap-2">
            <ICONS.Zap />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Lightning</span>
          </div>
          <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col items-center gap-2">
            <ICONS.Shield />
            <span className="text-[10px] font-bold uppercase tracking-tighter">L402</span>
          </div>
          <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col items-center gap-2">
            <ICONS.Cpu />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Agents</span>
          </div>
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
          <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-xs tracking-widest">Fiat Friction</h4>
            <p className="text-gray-300 text-sm">Agents can't open bank accounts or hold credit cards. Subscriptions are for humans, not machine-to-machine logic.</p>
          </div>
          <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-xs tracking-widest">Identity Walls</h4>
            <p className="text-gray-300 text-sm">KYC-heavy gateways block the "Agentic Web" before it even starts. We need anonymous, cryptographic settlement.</p>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-3xl font-bold tracking-tight leading-tight">Payments are the <span className="text-red-500">bottleneck</span> of AI autonomy.</h3>
          <p className="text-gray-400 italic text-sm">"Software is eating the world, but fiat is slowing it down."</p>
        </div>
      </div>
    )
  },
  {
    title: "The Agentic Economy",
    subtitle: "A Multi-Billion Dollar Machine Market",
    icon: <ICONS.Cpu />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-400 text-center leading-relaxed">
          The next generation of the internet belongs to <strong>Autonomous Agents</strong>. These agents need to purchase data, compute, and API access in real-time.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 border border-white/5 rounded-lg bg-white/[0.02]">
            <div className="text-orange-500 font-black text-xl">10B+</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Agents by 2030</div>
          </div>
          <div className="text-center p-4 border border-white/5 rounded-lg bg-white/[0.02]">
            <div className="text-blue-500 font-black text-xl">$1T</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Machine GDP</div>
          </div>
          <div className="text-center p-4 border border-white/5 rounded-lg bg-white/[0.02]">
            <div className="text-purple-500 font-black text-xl">0 ms</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Settlement Latency</div>
          </div>
        </div>
        <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg text-center text-sm font-bold text-orange-200">
          SatGate bridges Bitcoin's security with AI's speed.
        </div>
      </div>
    )
  },
  {
    title: "Solution: L402",
    subtitle: "Authentication + Payment Integration",
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
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Sats Scaling</div>
          </div>
          <div className="text-3xl text-gray-600">+</div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-purple-400">Macaroons</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Smart Cookies</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm max-w-lg mx-auto">
          L402 allows servers to issue a <strong>pre-condition (Macaroon)</strong> that only becomes a 
          valid <strong>access token</strong> once the associated Lightning invoice is settled.
        </p>
      </div>
    )
  },
  {
    title: "Workflow",
    subtitle: "The L402 Handshake",
    icon: <ICONS.Terminal />,
    content: (
      <div className="space-y-3 mono text-[11px] md:text-xs">
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-blue-500">AGENT</span>
          <span className="text-gray-600">→ GET /data →</span>
          <span className="text-purple-500">PROXY</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-purple-500">PROXY</span>
          <span className="text-gray-600">→ 402 + LSAT CHALLENGE →</span>
          <span className="text-blue-500">AGENT</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded">
          <span className="text-blue-500">AGENT</span>
          <span className="text-gray-600">→ PAY INVOICE (SATS) →</span>
          <span className="text-orange-500">LIGHTNING</span>
        </div>
        <div className="flex items-center gap-4 p-3 bg-green-500/10 border border-green-500/20 rounded">
          <span className="text-blue-500">AGENT</span>
          <span className="text-gray-600">→ RETRY + PREIMAGE →</span>
          <span className="text-green-500">200 OK</span>
        </div>
      </div>
    )
  },
  {
    title: "Vision & Roadmap",
    subtitle: "Hyper-Granular Monetization",
    icon: <ICONS.Zap />,
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
            <h4 className="font-bold text-white mb-2 text-sm">Pay-Per-Token LLMs</h4>
            <p className="text-xs text-gray-500">Remove subscriptions. Pay exactly for the compute used by your agent, in real-time.</p>
          </div>
          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
            <h4 className="font-bold text-white mb-2 text-sm">Data Marketplaces</h4>
            <p className="text-xs text-gray-500">Enable agents to sell insights to other agents through automated L402 gateways.</p>
          </div>
        </div>
        <div className="text-center space-y-4 pt-4">
          <div className="text-gray-400 font-bold tracking-widest text-[10px] uppercase">Join the Agentic Revolution</div>
          <div className="text-2xl font-black text-orange-500">SATGATE: THE INTERNET OF VALUE</div>
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
          <span className="font-black tracking-tighter text-xl">SatGate Pitch</span>
        </div>
        <div className="flex gap-2">
           {slides.map((_, i) => (
             <div key={i} className={`h-1 w-4 md:w-8 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
           ))}
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">
          Skip
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex flex-col items-center justify-center p-4 md:p-8 py-12 md:py-24">
        <div className="max-w-4xl w-full flex flex-col items-center animate-in zoom-in-95 duration-500" key={currentSlide}>
          <div className="p-5 bg-orange-500/10 text-orange-500 rounded-2xl mb-10 scale-125 md:scale-150 shadow-2xl shadow-orange-500/5">
            {slide.icon}
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-center mb-3">
            {slide.title}
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-500 font-medium text-center mb-12 md:mb-16 uppercase tracking-[0.2em] px-4">
            {slide.subtitle}
          </h2>
          
          <div className="w-full bg-[#111] p-6 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden">
             {/* Decorative Background for inner card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -mr-32 -mt-32" />
             <div className="relative z-10">
              {slide.content}
             </div>
          </div>
        </div>
      </div>

      {/* Controls Bottom */}
      <div className="p-10 md:p-16 flex justify-center items-center gap-6 md:gap-8 mt-auto pb-20 md:pb-28">
        <button 
          onClick={prev}
          disabled={currentSlide === 0}
          className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all border text-xs md:text-sm ${
            currentSlide === 0 ? 'invisible' : 'border-white/10 hover:bg-white/5 text-gray-500 hover:text-white'
          }`}
        >
          Previous
        </button>
        <button 
          onClick={next}
          className="group px-10 md:px-16 py-4 md:py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/20 active:scale-95 text-sm md:text-lg flex items-center gap-3"
        >
          {currentSlide === slides.length - 1 ? 'Start Demo' : 'Next'}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;