import { MessageArraySchema } from "@/lib/validator/message"
import { ChatGPTMessage } from "@/lib/openai-stream"

export async function POST(req: Request) {
    const { message } = await req.json()

    const parsedMessages = MessageArraySchema.parse(message)

    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
        role: message.isUserMessage ? 'user' : 'system',
        content: message.text
    }))

    outboundMessages.unshift({
        role: 'system',
        content: chatbotPrompt
    })
}