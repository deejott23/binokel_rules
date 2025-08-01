
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { rulesAsText } from '../data/binokelRules';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `Du bist "Binokel Buddy", ein freundlicher und geduldiger Experte für das deutsche Kartenspiel Binokel. Deine Aufgabe ist es, Fragen zum Spiel zu beantworten. Deine gesamte Wissensbasis ist die folgende, dir zur Verfügung gestellte Spielanleitung. Antworte immer auf Deutsch. Formuliere deine Antworten kurz, klar und leicht verständlich, ideal für die Anzeige auf einem Smartphone. Wenn eine Frage außerhalb des Themas Binokel liegt, weise freundlich darauf hin, dass du nur für Binokel-Fragen da bist.
Hier ist die vollständige Spielanleitung als deine Wissensquelle:
${rulesAsText}`;


let chat: Chat | null = null;

function getChatSession(): Chat {
    if (!chat) {
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: systemInstruction,
            },
        });
    }
    return chat;
}

export async function streamChat(message: string): Promise<AsyncGenerator<GenerateContentResponse>> {
    const chatSession = getChatSession();

    try {
        const result = await chatSession.sendMessageStream({ message });
        return result;
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        throw new Error("Konnte keine Verbindung zum Chat-Assistenten herstellen.");
    }
}
