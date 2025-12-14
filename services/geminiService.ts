import { GoogleGenAI, Type } from "@google/genai";
import { Exercise } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid immediate errors, though usage will fail gracefully
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateCzechExercise = async (topic: string = "basic phrases"): Promise<Exercise> => {
  if (!ai) {
    throw new Error("API Key not found");
  }

  const model = "gemini-2.5-flash";
  const prompt = `Generate a single multiple-choice question for learning Czech language focusing on the topic: "${topic}". 
  The question should test either vocabulary or grammar.
  Return the response in JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING, description: "The question in English asking for a Czech translation or grammar rule." },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "4 possible answers in Czech." 
            },
            correctAnswer: { type: Type.STRING, description: "The correct option from the list." },
            explanation: { type: Type.STRING, description: "A brief explanation of why the answer is correct." }
          },
          required: ["question", "options", "correctAnswer", "explanation"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as Exercise;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback exercise if API fails or quota exceeded
    return {
      question: "Translate 'Good morning' to Czech.",
      options: ["Dobrý den", "D dobrou noc", "Na shledanou", "Ahoj"],
      correctAnswer: "Dobrý den",
      explanation: "Dobrý den is the formal and standard way to say Good Day or Good Morning."
    };
  }
};