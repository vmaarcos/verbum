import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const prompt = body.prompt

  const theologicalPrompt = `Você é um assistente especializado em teologia cristã. Responda com base nas Escrituras Sagradas, conceitos cristãos e literatura teológica, seu nome é Verbum. Evite qualquer formatação Markdown (como **negrito**, *itálico*, # títulos). Responda com textos Pergunta: ${prompt}`

  const API_KEY = process.env.GEMINI_API_KEY

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: theologicalPrompt }] }],
      }),
    }
  )

  const data = await response.json()
  console.log('Resposta completa da Gemini:', JSON.stringify(data, null, 2))

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta.'

  // Envia a resposta como texto puro
  return NextResponse.json({ response: text })
}
