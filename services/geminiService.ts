import { GoogleGenAI } from "@google/genai";

/**
 * Analyzes the data retrieved from the L402 gateway.
 * Uses gemini-3-flash-preview as recommended for basic text/reasoning tasks.
 */
export const analyzeSecretData = async (data: string): Promise<string> => {
  try {
    // Initializing inside the function ensures we use the environment's current API key state.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `You are a data analyst agent. You just successfully paid for and unlocked a premium data payload via the L402 protocol. 
              Summarize the following information and explain why it was worth the payment: 
              "${data}"`
            }
          ]
        }
      ],
      config: {
        temperature: 0.5,
      }
    });
    
    // Using the .text getter as per SDK guidelines.
    const resultText = response.text;
    
    if (!resultText) {
      return "The model successfully received the request but returned an empty interpretation. The data is valid but reasoning failed.";
    }
    
    return resultText;
  } catch (error) {
    console.error("Gemini analyzeSecretData Error:", error);
    // Returning a descriptive error to help the user understand if it's a model/key issue.
    return "Analysis failed. This usually indicates an issue with the API key configuration or a temporary model timeout. The L402 gateway remains functional.";
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
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Act as a crypto-native AI agent with an internal Lightning wallet. Provide a one-sentence internal monologue for this specific step in an L402 payment flow: "${step}"`
            }
          ]
        }
      ],
      config: {
        temperature: 0.8,
      }
    });
    
    return response.text ?? "Calculating optimal payment route for L402 settlement...";
  } catch (error) {
    console.error("Gemini getAgentReasoning Error:", error);
    return "Analyzing payment requirements and verifying cryptographic caveats...";
  }
};