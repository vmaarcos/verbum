"use client"
import { useState } from "react";

const temas = [
  {
    titulo: "Salvação",
    versiculo: "Efésios 2:8-9",
    texto: "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós, é dom de Deus; não de obras, para que ninguém se glorie.",
    explicacao: "Paulo escreve aos efésios mostrando que a salvação é um presente de Deus, não algo que a gente conquista por mérito. Isso tira o orgulho e exalta a graça divina."
  },
  {
    titulo: "Amor de Deus",
    versiculo: "Romanos 5:8",
    texto: "Mas Deus prova o seu próprio amor para conosco pelo fato de ter Cristo morrido por nós, sendo nós ainda pecadores.",
    explicacao: "Mesmo quando a gente ainda estava longe dEle, Deus mostrou amor mandando Jesus. Isso revela um amor incondicional, que não depende do nosso desempenho."
  },
  {
    titulo: "Arrependimento",
    versiculo: "Atos 3:19",
    texto: "Arrependei-vos, pois, e convertei-vos para que sejam cancelados os vossos pecados.",
    explicacao: "Pedro tá pregando após Pentecostes. Arrependimento aqui é mudar de mente e atitude. A promessa é: quem se arrepende, tem os pecados apagados."
  },
    {
      titulo: "Graça",
      versiculo: "2 Coríntios 12:9",
      texto: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.",
      explicacao: "Deus nos ensina que Sua graça é suficiente, mesmo em momentos de fraqueza. Ela nos fortalece onde nossas forças falham e nos permite viver pela força do poder divino."
    },
    {
      titulo: "Fé",
      versiculo: "Hebreus 11:1",
      texto: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.",
      explicacao: "A fé é confiar em Deus mesmo quando não vemos ou entendemos o que está por vir. Ela nos dá firmeza e confiança nas promessas de Deus, independentemente das circunstâncias."
    },
    {
      titulo: "Perdão",
      versiculo: "1 João 1:9",
      texto: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
      explicacao: "Quando confessamos sinceramente nossos pecados, Deus é fiel e justo para nos perdoar e nos purificar, restaurando nossa comunhão com Ele."
    },
    {
      titulo: "Esperança",
      versiculo: "Romanos 15:13",
      texto: "Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.",
      explicacao: "Deus nos dá uma esperança renovada, mesmo nos momentos difíceis, por meio do Espírito Santo, que nos enche de paz e alegria, fortalecendo nossa confiança no futuro."
    },
    {
      titulo: "Sabedoria",
      versiculo: "Tiago 1:5",
      texto: "E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não o lança em rosto; e ser-lhe-á dada.",
      explicacao: "Deus oferece sabedoria generosamente a todos que pedem, sem julgamentos. Quando buscamos direção divina, Ele nos guia com clareza e compreensão."
    },
    {
      titulo: "Paz",
      versiculo: "Filipenses 4:7",
      texto: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.",
      explicacao: "A paz de Deus vai além da nossa compreensão humana. Ela nos protege emocional e espiritualmente, nos trazendo tranquilidade em meio às dificuldades."
    }
  ];
  


export default function TemasBiblicos() {
    const [temaSelecionado, setTemaSelecionado] = useState<number | null>(null);
    const [busca, setBusca] = useState("");
  
    const temasFiltrados = temas.filter((tema) =>
      tema.titulo.toLowerCase().includes(busca.toLowerCase())
    );
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6 text-center">
          Temas Bíblicos
        </h1>
  
        <input
          type="text"
          placeholder="Buscar tema..."
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
  
        <ul className="space-y-4">
          {temasFiltrados.length > 0 ? (
            temasFiltrados.map((tema, index) => (
              <li
                key={index}
                className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all cursor-pointer"
                onClick={() =>
                  setTemaSelecionado(index === temaSelecionado ? null : index)
                }
              >
                <h2 className="text-xl font-semibold">{tema.titulo}</h2>
                {temaSelecionado === index && (
                  <div className="mt-3 text-gray-800 dark:text-gray-200">
                    <p>
                      <strong>{tema.versiculo}</strong>: {tema.texto}
                    </p>
                    <p className="mt-2">{tema.explicacao}</p>
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum tema encontrado 😕
            </p>
          )}
        </ul>
      </div>
    );
  }