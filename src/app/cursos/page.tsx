import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CursosPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Estudos Temáticos</h1>
    <p className="max-w-3xl mx-auto text-center">
    Estude temas bíblicos e históricos de forma fácil e visual, <mark>“Antes, santificai Cristo, como Senhor, em vossos corações; e estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós.” (1 Pedro 3:15)</mark>
    </p>

      {/* Grid container para responsividade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Estudo: Avivamento Morávio*/}
        <Link
          href="/estudos/avivamento-moravio"
          className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition max-w-xl mx-auto"
        >
          <Image
            src="/img/estu/avivamentoMoravio.jpg"
            alt="O Avivamento Morávio"
            width={600}
            height={300}
            className="rounded-t-xl object-cover"
            priority={true}
          />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-semibold">O Avivamento Morávio</h2>
            <p>Conheça o movimento que impactou gerações com oração contínua e missões.</p>
            <span className="inline-block mt-2 underline text-sm">Ler Estudo</span>
          </div>
        </Link>

        {/* \Martinho Lutero e a Reforma*/}
        <Link
          href="/estudos/martinhoReforma"
          className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition max-w-xl mx-auto"
        >
          <Image
            src="/img/estu/martinhoReforma.jpg"
            alt="Martinho Lutero e a Reforma"
            width={600}
            height={300}
            className="rounded-t-xl object-cover"
            priority={true}
          />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-semibold">Martinho Lutero e a Reforma</h2>
            <p>Entenda o papel central de Lutero na Reforma Protestante.</p>
            <span className="inline-block mt-2 underline text-sm">Ler Estudo</span>
          </div>
        </Link>

            {/* Estudo: Conhecendo Deus pela Natureza */}
<Link
  href="/estudos/conhecendoDeusNatureza"
  className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition max-w-xl mx-auto"
>
  <Image
    src="/img/estu/naturezaTheo/natureza.jpg"
    alt="Conhecendo Deus pela Natureza"
    width={600}
    height={300}
    className="rounded-t-xl object-cover"
    priority={true}
  />
  <div className="p-4 space-y-1">
    <h2 className="text-xl font-semibold">Conhecendo Deus pela Natureza</h2>
    <p>
      Explore como a ordem perfeita do universo e a complexidade da criação revelam a existência de um Criador inteligente.
    </p>
    <span className="inline-block mt-2 underline text-sm">Ler Estudo</span>
  </div>
</Link>

      </div>
    </div>
  );
}
