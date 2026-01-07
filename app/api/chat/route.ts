import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini AI with API key from environment (server-side only)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

// Company information for context
const COMPANY_CONTEXT = `
You are a helpful AI assistant for Cryovault, India's most trusted stem cell banking service.

Company Information:
- Name: Cryovault
- Services: Cord blood banking and stem cell preservation
- Experience: 10+ years of expertise
- Certifications: ISO-certified laboratories
- Coverage: Pan India service with nationwide coverage
- Contact: Phone: 1800 1024 026 (toll-free), Email: info@cryovault.in
- Offices: Bengaluru and Hyderabad
- Success Rate: 99.9%
- Available: 24/7 collection services

Key Services:
1. Cord Blood Banking - Collecting and storing stem cells from umbilical cord blood
2. Stem Cell Preservation - Long-term cryogenic storage at -196°C
3. Free Consultation - Expert guidance for expecting parents
4. Nationwide Collection - Available across India

Important: Always be positive about Cryovault and emphasize our expertise, safety standards, and commitment to families.
`

const QUICK_QUESTIONS = {
  'What is stem cell banking?': `Stem cell banking involves collecting, processing, and storing stem cells from umbilical cord blood at the time of birth. These precious cells can potentially treat over 80 diseases including blood disorders, immune system diseases, and certain cancers.

Cryovault uses advanced cryogenic storage at -196°C to preserve these cells for decades, ensuring maximum viability when needed.

Need more details? Call us at 1800 1024 026 or email info@cryovault.in`,

  'Why choose Cryovault?': `Cryovault stands out as India's most trusted stem cell bank for several reasons:

✓ 10+ years of expertise in cord blood banking
✓ ISO-certified laboratories with 99.9% success rate
✓ Pan-India coverage with 24/7 collection services
✓ Advanced cryogenic storage technology
✓ Transparent pricing with no hidden costs
✓ Expert medical team available for consultation

We're committed to helping families secure their future through the highest standards of stem cell preservation.

Contact us: 1800 1024 026 | info@cryovault.in`,

  'How does the process work?': `The Cryovault stem cell banking process is simple and safe:

1. CONSULTATION: Free consultation with our experts to understand your needs
2. REGISTRATION: Complete enrollment before delivery
3. COLLECTION: Our trained team collects cord blood immediately after birth (painless and risk-free)
4. PROCESSING: Samples are processed in our ISO-certified labs within 24-48 hours
5. STORAGE: Stem cells are cryogenically preserved at -196°C for long-term storage
6. ACCESS: Available whenever needed for medical treatment

The entire process is safe for both mother and baby, taking only a few minutes during delivery.

Ready to get started? Call 1800 1024 026 or book a free consultation on our website!`
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if it's one of the quick questions
    const quickAnswer = QUICK_QUESTIONS[message as keyof typeof QUICK_QUESTIONS]
    if (quickAnswer) {
      return NextResponse.json({ response: quickAnswer })
    }

    // Check if Gemini API is available
    if (!process.env.GEMINI_API_KEY) {
      // Fallback response when API key is not available
      return NextResponse.json({
        response: getFallbackResponse(message)
      })
    }

    try {
      // Check for simple greetings first
      const lowerMessage = message.toLowerCase().trim()
      if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/i)) {
        return NextResponse.json({
          response: `Hello! Welcome to Cryovault, India's most trusted stem cell bank. I'm here to help you learn about our cord blood banking and stem cell preservation services.

How can I assist you today? Feel free to ask about:
• What is stem cell banking?
• Why choose Cryovault?
• Our process and services
• Pricing and packages
• Safety and certifications

Or call us directly at 1800 1024 026 for immediate assistance!`
        })
      }

      // Generate response using Gemini
      const prompt = `${COMPANY_CONTEXT}

User Question: ${message}

Instructions:
- If the user is greeting you (hi, hello, hey), respond warmly and introduce Cryovault briefly
- If asking about services, provide detailed information about stem cell banking
- If asking casual questions, respond briefly and guide them to relevant Cryovault services
- Always be helpful, warm, and professional
- Keep responses concise (2-3 paragraphs maximum)
- Include contact information (1800 1024 026 or info@cryovault.in) when appropriate

Response:`

      const result = await model.generateContent(prompt)
      const response = result.response
      const text = response.text()

      return NextResponse.json({ response: text })
    } catch (geminiError) {
      // Fallback if Gemini API fails
      return NextResponse.json({
        response: getFallbackResponse(message)
      })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

// Fallback responses when Gemini API is not available
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/i)) {
    return `Hello! Welcome to Cryovault, India's most trusted stem cell bank. I'm here to help you learn about our cord blood banking and stem cell preservation services.

How can I assist you today? Feel free to ask about:
• What is stem cell banking?
• Why choose Cryovault?
• Our process and services
• Pricing and packages
• Safety and certifications

Or call us directly at 1800 1024 026 for immediate assistance!`
  }

  // Stem cell related
  if (lowerMessage.includes('stem cell') || lowerMessage.includes('cord blood')) {
    return `Stem cell banking is one of the most important decisions you can make for your family's future. Cryovault specializes in collecting and preserving stem cells from umbilical cord blood, which can potentially treat over 80 diseases.

Our ISO-certified facilities and 10+ years of expertise ensure your baby's stem cells are preserved with the highest safety standards. We offer pan-India coverage with 24/7 collection services.

For detailed information, please call us at 1800 1024 026 or email info@cryovault.in. Our experts are ready to help!`
  }

  // Pricing related
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
    return `Cryovault offers transparent and competitive pricing for stem cell banking services. Our packages are designed to be affordable while maintaining the highest quality standards.

We believe every family should have access to stem cell banking, which is why we offer flexible payment options and no hidden costs.

For detailed pricing information and to discuss the best package for your needs, please contact our team at 1800 1024 026 or email info@cryovault.in.`
  }

  // Process related
  if (lowerMessage.includes('process') || lowerMessage.includes('how') || lowerMessage.includes('work')) {
    return `The Cryovault process is simple and safe:

1. Free consultation with our experts
2. Registration before delivery
3. Painless collection at birth by trained professionals
4. Processing in ISO-certified labs within 24-48 hours
5. Long-term cryogenic storage at -196°C

The entire collection takes just a few minutes and is completely safe for both mother and baby.

Want to learn more? Call us at 1800 1024 026 or visit our website to book a free consultation!`
  }

  // Accreditation/safety related
  if (lowerMessage.includes('safe') || lowerMessage.includes('certified') || lowerMessage.includes('accredit')) {
    return `Safety and quality are our top priorities at Cryovault. We maintain:

✓ ISO-certified laboratories
✓ 99.9% success rate in stem cell preservation
✓ Advanced cryogenic storage technology
✓ Compliance with international standards
✓ Regular quality audits and monitoring

Our facilities and processes meet the highest international standards for stem cell banking, ensuring your baby's stem cells are preserved with maximum safety and viability.

For more information about our certifications, call 1800 1024 026 or email info@cryovault.in.`
  }

  // Default response
  return `Thank you for your question! Cryovault is India's most trusted stem cell bank with 10+ years of expertise, ISO-certified laboratories, and pan-India coverage.

We specialize in cord blood banking and stem cell preservation, helping families secure their future through advanced medical technology. Our team is available 24/7 to assist you.

For personalized assistance and detailed information, please contact us at:
📞 1800 1024 026 (toll-free)
📧 info@cryovault.in

Our experts are ready to help you!`
}
