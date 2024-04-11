import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, type Message, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || 'AIzaSyBwUi28-4mveZ_LIbtP-drSqwtaMS1U2y4');

export const config = {
    runtime: 'edge'
};

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
    contents: messages
        .filter(message => message.role === 'user' || message.role === 'assistant')
        .map(message => ({
            role: message.role === 'user' ? 'user' : 'model',
            parts: [{ text: message.content }],
        })),
});

export async function POST({ request }) {
    const { messages } = await request.json();
    const geminiStream = await genAI
        .getGenerativeModel({ model: 'gemini-pro' })
        .generateContentStream(buildGoogleGenAIPrompt(messages));
    const stream = GoogleGenerativeAIStream(geminiStream);
    return new StreamingTextResponse(stream);
}

