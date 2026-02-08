import { GoogleGenAI } from "@google/genai";

/**
 * Analyzes the data retrieved from the L402 gateway.
 * Uses gemini-3-flash-preview as recommended for general text analysis tasks.
 */
export const analyzeSecretData = async (data: string): Promise<string> => {
  try {
    // Initializing exactly as specified in the SDK guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional data analyst. You have just unlocked a premium data payload via the L402 protocol. Provide a brief, insightful analysis of this data: "${data}"`,
    });
    
    // Using the .text getter as per SDK guidelines
    return response.text || "The analysis engine returned an empty result.";
  } catch (error) {
    console.error("Gemini analyzeSecretData Error:", error);
    return "The agent successfully retrieved the data, but the interpretation layer encountered a processing error. The payload remains valid.";
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
      contents: `Act as an AI agent processing an L402 payment. Give a very short (one sentence) internal thought about this step: "${step}"`,
    });
    
    return response.text ?? "Verifying cryptographic proof of payment...";
  } catch (error) {
    console.error("Gemini getAgentReasoning Error:", error);
    return "Calculating optimal payment route for L402 settlement...";
  }
};