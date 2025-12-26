import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// Note: This relies on process.env.API_KEY being injected by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (
  businessName: string,
  businessType: string,
  customerName: string,
  location: string = "San Antonio, TX"
): Promise<{ 
  strategy: string; 
  headlines: string[]; 
  keywords: string[];
  oversight: string;
  competitor_count: string;
  paid_ad_insights: string;
} | null> => {
  try {
    const prompt = `
      The user is: ${customerName}
      Business Name: ${businessName}
      Industry: ${businessType}
      Target Location: ${location}

      Perform a high-level automated audit and strategy generation for this local business.
      
      1. **Oversight**: A thorough paragraph analyzing the current state of this specific niche in San Antonio. Mention specific local market dynamics.
      2. **Competitor Count**: Estimate how many businesses are currently competing in this niche within the San Antonio metro area.
      3. **Paid Ad Saturation**: Identify who is running ads and market saturation levels.
      4. **Strategy**: A high-frequency marketing strategy.
      5. **Headlines**: 3 high-CTR ad headlines.
      6. **Keywords**: 5 hyper-local SEO keywords.

      Return a JSON object with keys: 'oversight', 'competitor_count', 'paid_ad_insights', 'strategy', 'headlines', 'keywords'.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Act as 'Frequency AI', the proprietary artificial intelligence engine for Frequent Marketing, a top-tier San Antonio agency.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            oversight: { type: Type.STRING },
            competitor_count: { type: Type.STRING },
            paid_ad_insights: { type: Type.STRING },
            strategy: { type: Type.STRING },
            headlines: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);

  } catch (error) {
    console.error("Error generating strategy:", error);
    return null;
  }
};