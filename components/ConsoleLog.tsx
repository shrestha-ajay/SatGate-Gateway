
import React from 'react';
import { LogEntry, LogSource } from '../types';

interface ConsoleLogProps {
  logs: LogEntry[];
  title: string;
  icon: React.ReactNode;
}

const ConsoleLog: React.FC<ConsoleLogProps> = ({ logs, title, icon }) => {
  return (
    <div className="flex flex-col h-full bg-[#111] rounded-lg border border-white/10 overflow-hidden shadow-xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="text-orange-500">{icon}</span>
        <h3 className="font-bold text-sm tracking-widest uppercase">{title}</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 mono text-xs space-y-2">
        {logs.length === 0 && (
          <div className="text-gray-600 italic">Waiting for activity...</div>
        )}
        {logs.map((log) => (
          <div key={log.id} className="animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-gray-500 mr-2">
              [{new Date(log.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
            </span>
            <span className={`font-bold mr-2 ${
              log.source === LogSource.AGENT ? 'text-blue-400' :
              log.source === LogSource.SERVER ? 'text-purple-400' : 'text-green-400'
            }`}>
              {log.source}:
            </span>
            <span className={`${
              log.type === 'error' ? 'text-red-400' :
              log.type === 'success' ? 'text-green-400' :
              log.type === 'warning' ? 'text-yellow-400' : 'text-gray-300'
            }`}>
              {log.message}
            </span>
          </div>
        ))}
        <div id="scroll-anchor" />
      </div>
    </div>
  );
};

export default ConsoleLog;
