'use client'

import { useState } from 'react'
import { FloatingActionButton } from '@/components/floating-action-button'
import Chatbot from '@/components/chatbot'

export function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <FloatingActionButton onChatOpen={() => setIsChatOpen(true)} />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}