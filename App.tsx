import React, { useState, useCallback } from 'react';
import { LogEntry, LogSource, AgentState, Invoice } from './types';
import { ICONS, INITIAL_BALANCE, API_COST, SECRET_DATA } from './constants';
import ConsoleLog from './components/ConsoleLog';
import PitchDeck from './components/PitchDeck';
import { analyzeSecretData, getAgentReasoning } from './services/geminiService';

const App: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isPitchMode, setIsPitchMode] = useState<boolean>(true);
  const [agentState, setAgentState] = useState<AgentState>({
    balance: INITIAL_BALANCE,
    isProcessing: false,
    hasAccess: false,
    unlockedData: null,
  });
  const [pendingInvoice, setPendingInvoice] = useState<Invoice | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [geminiAnalysis, setGeminiAnalysis] = useState<string | null | undefined>(null);

  const addLog = useCallback((source: LogSource, message: string, type: 'info' | 'error' | 'success' | 'warning' = 'info') => {
    const newLog: LogEntry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      source,
      message,
      type,
    };
    setLogs((prev) => [...prev, newLog]);
  }, []);

  // Simulation Flow
  const startSimulation = async () => {
    if (agentState.isProcessing) return;
    
    setAgentState(prev => ({ ...prev, isProcessing: true, hasAccess: false, unlockedData: null }));
    setGeminiAnalysis(null);
    setActiveStep(1);
    addLog(LogSource.AGENT, "Requesting premium data from /expensive-data...", 'info');

    // Simulate Network Delay
    await new Promise(r => setTimeout(r, 1000));

    // Phase 1: 402 Denial
    addLog(LogSource.SERVER, "GET /expensive-data - 402 Payment Required", 'error');
    
    // Generate Mock Invoice
    const mockPreimage = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const mockInvoice: Invoice = {
      bolt11: `lnbc${API_COST}n1p...${Math.random().toString(36).substring(7)}`,
      paymentHash: "sha256_hash_of_preimage",
      preimage: mockPreimage,
      amount: API_COST,
      macaroon: "base64_encoded_macaroon_v1"
    };
    
    setPendingInvoice(mockInvoice);
    addLog(LogSource.SERVER, `Generated Lightning Invoice for ${API_COST} sats.`, 'warning');
    addLog(LogSource.AGENT, "Detected HTTP 402. Extracting Invoice & Macaroon...", 'info');
    
    setActiveStep(2);
    const reasoning = await getAgentReasoning("Calculating cost-benefit for 250 sats payment.");
    addLog(LogSource.AGENT, `Agent Reasoning: ${reasoning}`, 'info');

    await new Promise(r => setTimeout(r, 1500));

    // Phase 2: Payment
    setActiveStep(3);
    addLog(LogSource.WALLET, `Paying invoice: ${mockInvoice.bolt11.substring(0, 20)}...`, 'info');
    
    setAgentState(prev => ({
      ...prev,
      balance: prev.balance - API_COST
    }));
    
    addLog(LogSource.WALLET, "Payment successful! Preimage received.", 'success');
    addLog(LogSource.AGENT, `Obtained proof of payment (Preimage): ${mockInvoice.preimage.substring(0, 10)}...`, 'success');

    await new Promise(r => setTimeout(r, 1500));

    // Phase 3: Retry with L402 Header
    setActiveStep(4);
    addLog(LogSource.AGENT, "Retrying request with Authorization: L402 Header", 'info');
    addLog(LogSource.SERVER, "Authorization header verified. Valid Macaroon and Preimage provided.", 'success');
    
    await new Promise(r => setTimeout(r, 1000));

    // Phase 4: Success
    addLog(LogSource.SERVER, "GET /expensive-data - 200 OK", 'success');
    setAgentState(prev => ({ ...prev, hasAccess: true, unlockedData: SECRET_DATA, isProcessing: false }));
    setActiveStep(5);

    // AI Analysis of Unlocked Data
    addLog(LogSource.AGENT, "Sending raw data to LLM for final analysis...", 'info');
    const analysis = await analyzeSecretData(SECRET_DATA);
    setGeminiAnalysis(analysis);
    addLog(LogSource.AGENT, "Analysis complete.", 'success');
  };

  const reset = () => {
    setLogs([]);
    setAgentState({
      balance: INITIAL_BALANCE,
      isProcessing: false,
      hasAccess: false,
      unlockedData: null,
    });
    setPendingInvoice(null);
    setActiveStep(0);
    setGeminiAnalysis(null);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-[#0a0a0a] gap-6">
      {isPitchMode && <PitchDeck onClose={() => setIsPitchMode(false)} />}
      
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-4xl font-black tracking-tighter text-white flex items-center gap-2">
              <span className="text-orange-500"><ICONS.Zap /></span> SatGate
            </h1>
            <div className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-400 font-bold uppercase tracking-widest">
              Yale SOM Demo
            </div>
          </div>
          <p className="text-gray-400 text-sm italic">"Monetizing the Agentic Web" • <span className="text-white font-medium">Ajay Shrestha (MBA '26)</span></p>
        </div>
        
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setIsPitchMode(true)}
            className="px-4 py-2 hover:bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-lg transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Open Deck
          </button>
          <div className="bg-[#111] border border-white/10 rounded-lg p-3 flex items-center gap-4 shadow-xl">
            <div className="text-right">
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Agent Wallet</div>
              <div className="text-xl font-bold text-orange-400 mono">{agentState.balance} SATS</div>
            </div>
            <div className="p-2 bg-orange-500/10 text-orange-500 rounded">
              <ICONS.Zap />
            </div>
          </div>
          <button 
            onClick={reset}
            className="px-4 py-2 hover:bg-white/5 border border-white/10 rounded-lg transition-colors text-sm font-bold uppercase"
          >
            Reset
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        
        {/* Left: Logic Flow & Agent Visual */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ICONS.Cpu />
            </div>
            
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ICONS.Cpu /> Agent Intelligence
            </h2>

            <div className="space-y-4">
              {[
                { id: 1, label: "Initial Data Request", desc: "Agent identifies need for premium data." },
                { id: 2, label: "L402 Challenge Handling", desc: "Parsing Bolt11 & calculating cost." },
                { id: 3, label: "Lightning Payment", desc: "Settling invoice for the Preimage proof." },
                { id: 4, label: "Authorization Retry", desc: "Submitting proof for data release." },
                { id: 5, label: "Data Utilization", desc: "Analyzing and acting on secret info." }
              ].map((step) => (
                <div key={step.id} className={`flex gap-4 p-3 rounded-lg transition-all border ${
                  activeStep === step.id 
                    ? 'bg-blue-500/20 border-blue-500/50 scale-[1.02] shadow-lg shadow-blue-500/10' 
                    : activeStep > step.id ? 'bg-green-500/10 border-green-500/20 opacity-60' : 'border-transparent opacity-40'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeStep === step.id ? 'bg-blue-500 text-white' : activeStep > step.id ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50'
                  }`}>
                    {activeStep > step.id ? '✓' : step.id}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{step.label}</div>
                    <div className="text-[10px] text-gray-400">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              disabled={agentState.isProcessing}
              onClick={startSimulation}
              className={`w-full mt-6 py-4 rounded-lg font-black text-lg uppercase tracking-wider shadow-lg transition-all ${
                agentState.isProcessing 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-500 text-white active:scale-95 shadow-orange-500/20'
              }`}
            >
              {agentState.isProcessing ? 'Agent Working...' : 'Run L402 Flow'}
            </button>
          </div>

          {/* Unlocked Content Card */}
          <div className={`flex-1 p-6 rounded-xl border transition-all duration-700 ${
            agentState.hasAccess ? 'bg-green-500/5 border-green-500/30 shadow-lg shadow-green-500/5' : 'bg-black/20 border-white/5'
          }`}>
             <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              {agentState.hasAccess ? <ICONS.Unlock /> : <ICONS.Lock />} 
              {agentState.hasAccess ? "Premium Payload" : "L402 Protected Resource"}
            </h2>
            
            {agentState.hasAccess ? (
              <div className="space-y-4">
                <div className="p-3 bg-black/50 border border-green-500/20 rounded font-mono text-xs text-green-400 break-all leading-relaxed">
                  {agentState.unlockedData}
                </div>
                {geminiAnalysis && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 p-4 bg-white/[0.03] rounded-lg border border-white/5">
                    <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest flex items-center gap-2">
                      <ICONS.Cpu /> Gemini Analysis
                    </div>
                    <div className="text-sm italic leading-relaxed text-gray-300">
                      "{geminiAnalysis}"
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-48 flex flex-col items-center justify-center text-gray-700 gap-4">
                <div className="p-4 bg-white/5 rounded-full border border-white/5">
                  <ICONS.Lock />
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold">Waiting for Preimage</p>
                  <p className="text-[10px] mt-1 text-gray-800 uppercase font-mono tracking-tighter">402 Payment Required</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Logs Section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] lg:h-auto lg:flex-1">
            <ConsoleLog 
              title="Agent Terminal" 
              icon={<ICONS.Terminal />} 
              logs={logs.filter(l => l.source === LogSource.AGENT || l.source === LogSource.WALLET)} 
            />
            <ConsoleLog 
              title="Gateway Proxy" 
              icon={<ICONS.Shield />} 
              logs={logs.filter(l => l.source === LogSource.SERVER)} 
            />
          </div>

          {/* Bolt11 / Transaction Details */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[50px] group-hover:bg-orange-500/10 transition-colors" />
            <div className="flex justify-between items-center mb-4 relative z-10">
               <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <ICONS.Zap /> Network Status
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">LN Node: ACTIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mono relative z-10">
              <div className="p-3 bg-black/40 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="text-[10px] text-gray-600 mb-1 uppercase tracking-widest">Active Invoice</div>
                <div className="truncate text-orange-300 font-mono">
                  {pendingInvoice ? pendingInvoice.bolt11 : 'lnbc...'}
                </div>
              </div>
              <div className="p-3 bg-black/40 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="text-[10px] text-gray-600 mb-1 uppercase tracking-widest">Macaroon ID</div>
                <div className="truncate text-purple-300 font-mono">
                  {pendingInvoice ? pendingInvoice.macaroon : 'base64...'}
                </div>
              </div>
              <div className="p-3 bg-black/40 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="text-[10px] text-gray-600 mb-1 uppercase tracking-widest">Secret Preimage</div>
                <div className="truncate text-green-400 font-bold font-mono">
                  {agentState.hasAccess && pendingInvoice ? pendingInvoice.preimage : 'PENDING_PAYMENT'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="text-center text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold mt-auto pt-8 border-t border-white/5">
        L402 Protocol Specification: Macaroons + Lightning • SatGate Open Infrastructure • Build on Bitcoin - Yale Blockchain Club Hackathon - Feb 7, 2026
      </footer>
    </div>
  );
};

export default App;