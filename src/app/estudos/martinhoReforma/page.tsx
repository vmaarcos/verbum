import Image from "next/image";

export default function ReformaLutero() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Entenda o papel central de Lutero na Reforma Protestante
      </h1>
      
      <p className="max-w-3xl mx-auto text-center">
        Martinho Lutero foi uma figura decisiva na história da Igreja Cristã e do mundo ocidental. Seu papel na Reforma Protestante do século XVI marcou o início de profundas transformações religiosas, sociais e políticas, desafiando práticas da Igreja Católica e resgatando a centralidade das Escrituras.
      </p>
      
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/img/estu/lutero/lutero1.jpg"
          alt="Martinho Lutero"
          width={600}
          height={800}
          className="rounded-xl shadow-md"
          priority
        />
      </div>

      <div className="prose max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">O que é a Reforma Protestante?</h2>
        <p className="mt-2">
          A Reforma Protestante foi um movimento religioso iniciado no século XVI que buscava reformar práticas e doutrinas da Igreja Católica Romana. Surgiu em um contexto de crescente insatisfação com abusos, como a venda de indulgências, e com a centralização do poder clerical. A Reforma abriu caminho para o surgimento de novas denominações cristãs que valorizavam o ensino bíblico, a fé pessoal e a relação direta do crente com Deus.
        </p>

      <p className="mt-2">
  Em 1517, Martinho Lutero publicou suas 95 Teses, documento que criticava duramente a venda de indulgências e o poder excessivo do clero, defendendo a volta às raízes bíblicas da fé cristã. Esse ato corajoso provocou debates que mudaram para sempre o panorama religioso e social da Europa (Bainton, <i>Here I Stand</i>, 1950). Lutero enfatizava que a salvação se dá somente pela fé em Jesus Cristo (sola fide) e que a Bíblia é a única autoridade final para a doutrina cristã (sola scriptura). Sua tradução da Bíblia para o alemão tornou as Escrituras acessíveis ao povo comum, fomentando um grande despertar espiritual e cultural (MacCulloch, <i>The Reformation</i>, 2003).
</p>

<p className="mt-2">
  A Reforma Protestante não só alterou a estrutura da Igreja Católica, mas também teve um impacto profundo na sociedade, na educação e na política da época. O movimento promoveu maior liberdade religiosa, criticou o autoritarismo e incentivou o desenvolvimento da consciência individual diante de Deus. O legado de Lutero inclui a fundação das igrejas protestantes e a influência sobre valores modernos, como liberdade de crença, responsabilidade pessoal e o acesso amplo à Bíblia (Roper, <i>Martin Luther: Renegade and Prophet</i>, 2017). Segundo Hsia, no <i>The Cambridge History of Christianity</i> (2007), a Reforma foi fundamental para o avanço do pensamento crítico e das liberdades civis na Europa moderna.
</p>

        <h2 className="text-3xl mt-10 font-bold text-center">Referências bibliográficas</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><i>Here I Stand: A Life of Martin Luther</i> – Roland H. Bainton</li>
          <li><i>The Reformation: A History</i> – Diarmaid MacCulloch</li>
          <li><i>Martin Luther: Renegade and Prophet</i> – Lyndal Roper</li>
          <li><i>The Cambridge History of Christianity, Volume 5: Reform and Expansion 1500–1660</i> – Edited by R. Po-chia Hsia</li>
        </ul>

        <h2>Vídeo relacionado</h2>
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/yR9DiSBxHZ0?si=XR9XNi-IUlzjwocS"
          title="Martinho Lutero e a Reforma Protestante"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
