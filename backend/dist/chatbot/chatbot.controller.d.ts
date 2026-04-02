import { Response } from 'express';
import { ChatbotService } from './chatbot.service';
import { ChatDto } from './chatbot.dto';
export declare class ChatbotController {
    private readonly chatbotService;
    constructor(chatbotService: ChatbotService);
    chat(dto: ChatDto, res: Response): Promise<void>;
}
