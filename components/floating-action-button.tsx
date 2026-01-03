'use client'

import { Phone, MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingActionButton() {
    const [isVisible, setIsVisible] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
                setIsExpanded(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
            {/* Quick actions when expanded */}
            {isExpanded && (
                <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-4 duration-300">
                    <a
                        href="tel:+911234567890"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-slate-200 hover:border-green-500"
                    >
                        <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <Phone className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors whitespace-nowrap">
                            Call Now
                        </span>
                    </a>

                    <a
                        href="https://wa.me/911234567890?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20stem%20cell%20banking%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-slate-200 hover:border-green-500"
                    >
                        <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors whitespace-nowrap">
                            WhatsApp
                        </span>
                    </a>
                </div>
            )}

            {/* Main FAB button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label={isExpanded ? "Close contact options" : "Open contact options"}
            >
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
                
                {/* Icon */}
                <div className="relative z-10 transition-transform duration-300">
                    {isExpanded ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <Phone className="h-6 w-6 text-white" />
                    )}
                </div>

                {/* Tooltip */}
                {!isExpanded && (
                    <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        Contact Us
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                )}
            </button>
        </div>
    )
}
