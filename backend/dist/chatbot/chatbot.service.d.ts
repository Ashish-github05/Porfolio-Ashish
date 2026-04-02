export declare class ChatbotService {
    private genAI;
    streamChat(messages: {
        role: 'user' | 'assistant';
        content: string;
    }[]): AsyncGenerator<string, void, unknown>;
}
