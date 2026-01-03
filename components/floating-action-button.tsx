'use client'

import { Calendar, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

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
                    <Link
                        href="/appointment"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-slate-200 hover:border-primary"
                    >
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                            Book Appointment
                        </span>
                    </Link>

                    <Link
                        href="/pricing"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-slate-200 hover:border-primary"
                    >
                        <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                            View Pricing
                        </span>
                    </Link>

                    <Link
                        href="/contact"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-slate-200 hover:border-primary"
                    >
                        <div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                            Contact Us
                        </span>
                    </Link>
                </div>
            )}

            {/* Main FAB button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative h-16 w-16 bg-gradient-to-br from-primary to-purple-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label={isExpanded ? "Close quick actions" : "Open quick actions"}
            >
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                
                {/* Icon */}
                <div className="relative z-10 transition-transform duration-300">
                    {isExpanded ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <Calendar className="h-6 w-6 text-white" />
                    )}
                </div>

                {/* Tooltip */}
                {!isExpanded && (
                    <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        Quick Actions
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                )}
            </button>
        </div>
    )
}
