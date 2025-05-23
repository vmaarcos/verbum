'use client'

import { useState, useRef, useEffect } from 'react'
import { SendHorizontal } from 'lucide-react' 
import ReactMarkdown from 'react-markdown';
import ProtectedRoute from '@/components/ProtectedRoute'; // Import ProtectedRoute

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const chatTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return


    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {

      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      })

      if (!res.ok) {
        throw new Error('Erro na resposta da API')
      }

      const data = await res.json()
      const aiMessage = { role: 'assistant', content: data.response }
      setMessages((prev) => [...prev, aiMessage]) 
    } catch (error) {
      console.error('Erro ao chamar API:', error)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Houve um erro ao processar sua solicitação.' },
      ])
    }

    setLoading(false)
  }

  return (
    <ProtectedRoute>
      <main className="flex flex-col h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <div className="flex flex-col flex-1 max-w-2xl w-full mx-auto p-4">

          <div className="flex-1 overflow-y-auto space-y-4 px-1 sm:px-2 py-4 max-h-[80dvh]">
            <div ref={chatTopRef} />
            {/*<div ref={chatEndRef} />*/}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`rounded-xl px-4 py-3 max-w-[85%] whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'ml-auto bg-teal-600 text-white'
                    : 'mr-auto bg-zinc-700 text-gray-100'
                }`}
              >
                <ReactMarkdown >
                  {msg.content}
                </ReactMarkdown>

              </div>
            ))}

            {loading && (
              <p className="text-sm text-gray-400 italic">Escrevendo resposta...</p>
            )}
          </div>

          <div className="flex items-center border border-zinc-700 bg-zinc-800 rounded-xl p-3 mt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Faça sua pergunta teológica..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-2"
            />
            <button
              onClick={sendMessage}
              className="ml-3 p-2 bg-teal-600 hover:bg-teal-700 rounded-full transition"
              aria-label="Enviar"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  )
}