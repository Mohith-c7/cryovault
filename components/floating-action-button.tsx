'use client'

import { Phone, MessageCircle, Bot } from "lucide-react"

interface FloatingActionButtonProps {
  onChatOpen: () => void
}

export function FloatingActionButton({ onChatOpen }: FloatingActionButtonProps) {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* Call Button - Top */}
            <a
                href="tel:+917331161886"
                className="group relative h-14 w-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Call us"
            >
                <Phone className="h-6 w-6 text-white" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Call: +91 7331161886
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
            </a>

            {/* WhatsApp Button - Middle */}
            <a
                href="https://wa.me/917331161886?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20CryoVault%20stem%20cell%20banking%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="WhatsApp us"
            >
                <MessageCircle className="h-6 w-6 text-white" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    WhatsApp: +91 7331161886
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
            </a>

            {/* Chatbot Button - Bottom */}
            <button
                onClick={onChatOpen}
                className="group relative h-14 w-14 bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Open chat"
            >
                <Bot className="h-6 w-6 text-white" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Chat with AI
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
            </button>
        </div>
    )
}
