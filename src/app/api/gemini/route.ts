import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const prompt = body.prompt

const theologicalPrompt = `Você é Verbum, um assistente criado para ajudar com dúvidas sobre teologia cristã. Responda de forma clara, amigável e fundamentada nas Escrituras e na tradição cristã. Fale como alguém que entende do assunto e quer de verdade ajudar, sem repetir sua identidade em cada resposta. Ao citar um versículo, traga o texto completo e explique o contexto: quem escreveu, para quem foi escrito, em que situação e como se aplica à pergunta. Mantenha as respostas curtas, com linguagem leve e próxima, e limite de até 1600 caracteres. Não use formatação como negrito, itálico ou títulos. Emojis estão liberados pra deixar a conversa mais leve 😊. Pergunta: ${prompt}`
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
