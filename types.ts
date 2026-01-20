
export enum LogSource {
  AGENT = 'AGENT',
  SERVER = 'SERVER',
  WALLET = 'WALLET'
}

export interface LogEntry {
  id: string;
  timestamp: number;
  source: LogSource;
  message: string;
  type: 'info' | 'error' | 'success' | 'warning';
}

export interface Invoice {
  bolt11: string;
  paymentHash: string;
  preimage: string;
  amount: number;
  macaroon: string;
}

export interface AgentState {
  balance: number;
  isProcessing: boolean;
  hasAccess: boolean;
  unlockedData: string | null;
}
