import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FC } from "react"
import ChatHeader from "./chat-header"

const Chat: FC = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="relative bg-white z-40 shadow"
        >
            <AccordionItem value="item-1">
                <div className="fixed right-8 bottom-8 w-80 bg-white border border-gray-200 rounded-md hid">
                    <div className="w-full h-full flex flex-col">
                        <AccordionTrigger className="p-6 border-b border-zinc-300">
                            <ChatHeader />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col h-80">
                                messages
                            </div>
                        </AccordionContent>
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    )
}

export default Chat;