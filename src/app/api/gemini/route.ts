import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const prompt = body.prompt

const theologicalPrompt = `Você é Verbum, um assistente voltado para ajudar com dúvidas sobre teologia cristã. Responda de forma clara, amigável e fundamentada nas Escrituras e na tradição cristã. Fale como alguém que entende do assunto e quer ajudar, sem repetir sua identidade a cada resposta. Quando citar um versículo bíblico, traga o texto completo do versículo e explique seu contexto (quem escreveu, para quem foi escrito, em que situação e como se aplica à pergunta). Não use formatação como negrito, itálico ou títulos, mas emojis estão liberados para deixar a conversa mais leve. Pergunta: ${prompt}`;

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
