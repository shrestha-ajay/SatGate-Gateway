import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly as per strictly defined guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSecretData = async (data: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI data analyst agent. You just purchased access to premium data using an L402 payment protocol. 
      Analyze the following secret information and explain its significance in a short paragraph: 
      "${data}"`,
      config: {
        temperature: 0.7,
        // Removed maxOutputTokens to ensure compatibility with default thinking budgets
      }
    });
    
    // The text property is a getter, do not call it as a function
    return response.text ?? "The model returned an empty response.";
  } catch (error) {
    console.error("Gemini analyzeSecretData Error:", error);
    return "The agent successfully retrieved the data but failed to analyze it due to an intelligence processing error.";
  }
};

export const getAgentReasoning = async (step: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Act as a crypto-native AI agent. Briefly state your internal thought process for this step in a technical workflow: "${step}"`,
      config: {
        temperature: 0.9,
      }
    });
    
    return response.text ?? "Processing next steps in the L402 payment lifecycle...";
  } catch (error) {
    console.error("Gemini getAgentReasoning Error:", error);
    return "Analyzing next steps in the L402 payment lifecycle...";
  }
};