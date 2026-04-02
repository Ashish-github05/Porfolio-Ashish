export declare class ChatbotService {
    private groq;
    streamChat(messages: {
        role: 'user' | 'assistant';
        content: string;
    }[]): AsyncGenerator<string, void, unknown>;
}
