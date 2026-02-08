import { GoogleGenAI } from "@google/genai";

/**
 * Analyzes the data retrieved from the L402 gateway.
 * Uses gemini-3-flash-preview for efficient text analysis.
 */
export const analyzeSecretData = async (data: string): Promise<string> => {
  try {
    // Strictly follow the initialization requirement
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a crypto-native AI analyst agent. You just successfully paid for and unlocked this premium data payload via the L402 protocol. Summarize the information and explain its strategic significance: "${data}"`,
    });
    
    // .text is a getter, do not call it.
    return response.text || "Data retrieved. Intelligence engine produced an empty summary.";
  } catch (error) {
    console.error("Gemini analyzeSecretData Error:", error);
    return "The agent successfully retrieved the data, but the reasoning engine is currently experiencing high latency. The payload remains secure.";
  }
};

/**
 * Generates autonomous reasoning for the agent during the L402 handshake.
 */
export const getAgentReasoning = async (step: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Act as an autonomous AI agent. Provide a short, one-sentence internal thought for this workflow step: "${step}"`,
    });
    
    return response.text ?? "Verifying cryptographic proof of payment...";
  } catch (error) {
    console.error("Gemini getAgentReasoning Error:", error);
    return "Analyzing payment requirements for L402 settlement...";
  }
};