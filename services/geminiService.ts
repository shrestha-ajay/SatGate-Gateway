import { GoogleGenAI } from "@google/genai";

/**
 * Retrieves the API key safely from the environment.
 */
const getApiKey = () => {
  return process?.env?.API_KEY || (window as any).process?.env?.API_KEY;
};

/**
 * Analyzes the data retrieved from the L402 gateway.
 */
export const analyzeSecretData = async (data: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      console.error("Gemini API Key missing.");
      return "Critical Error: Agent Intelligence Key (API_KEY) not found in environment. Please check your SatGate configuration.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using the most direct model and prompt structure for high reliability
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI data agent. You just paid for this data via Bitcoin/L402. Analyze its significance: "${data}"`,
    });
    
    return response.text || "Data retrieved, but interpretation generated no signal.";
  } catch (error) {
    console.error("Gemini analyzeSecretData Error:", error);
    return "Intelligence processing timeout. The L402 gateway remains operational, but agent reasoning is currently offline.";
  }
};

/**
 * Generates autonomous reasoning for the agent during the L402 handshake.
 */
export const getAgentReasoning = async (step: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return "Initializing local heuristic reasoning...";

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Internal monologue for an AI agent at this step: "${step}"`,
    });
    
    return response.text ?? "Verifying cryptographic proof of payment...";
  } catch (error) {
    console.error("Gemini getAgentReasoning Error:", error);
    return "Calculating optimal payment route for L402 settlement...";
  }
};