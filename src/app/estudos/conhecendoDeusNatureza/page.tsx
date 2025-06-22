
import Image from "next/image";

export default function ConhecendoDeusNatureza() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Conhecendo Deus pela Natureza: O Universo como Prova da Criação
      </h1>

      <p className="max-w-3xl mx-auto text-center">
        Explore como a ordem perfeita do universo e a complexidade da criação revelam a existência de um Criador inteligente.
      </p>

      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/img/estu/naturezaTheo/natureza.jpg"
          alt="Conhecendo Deus pela Natureza"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
          priority
        />
      </div>

      <div className="prose max-w-3xl mx-auto">
     <p className="mt-2">
        A teologia natural é o estudo que busca conhecer Deus pela observação da natureza e do universo. Ao contemplar a complexidade e a ordem existentes na criação, 
        percebemos sinais claros de um Criador inteligente por trás de tudo. Por exemplo, a inclinação do eixo da Terra em cerca de 23,5 graus é fundamental para a existência das estações do ano, 
        que regulam o clima e a diversidade da vida. A Lua está posicionada a aproximadamente 384 mil quilômetros, permitindo que suas forças gravitacionais estabilizem a inclinação do eixo terrestre, 
        o que mantém a estabilidade climática. Se a Lua estivesse muito mais perto, causaria marés e tremores devastadores; muito mais longe, a Terra perderia essa estabilidade e o clima se tornaria caótico.
        Além disso, as constantes físicas fundamentais, como a velocidade da luz, a constante gravitacional e a constante de Planck, estão afinadas com extrema precisão. Pequenas variações nelas tornariam impossível 
        a existência da vida, indicando um projeto intencional e meticuloso.
    </p>
        <p className="mt-2">
          A complexidade das células, do DNA, dos ecossistemas e a harmonia entre as leis da física e da química mostram uma ordem que não pode ser fruto do acaso. Cada detalhe reflete a sabedoria de um Designer. 
          A Bíblia nos ensina que <mark>“as coisas invisíveis de Deus, desde a criação do mundo, são claramente vistas, sendo compreendidas por meio das coisas que foram feitas” (Romanos 1:20).</mark>
          O Salmo 19 também exalta os céus e a criação como testemunhos da glória de Deus.
        </p>

        <h2 className="mt-12">Referências Bibliográficas</h2>
        <ul>
          <li><i>The Case for a Creator</i> – Lee Strobel</li>
          <li><i>Nature’s God</i> – Matthew Barrett</li>
          <li><i>God and the Cosmos</i> – Hugh Ross</li>
          <li><i>Evidence for God from Science</i> – Stephen C. Meyer</li>
        </ul>

        <h2>Vídeo Relacionado</h2>
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/MHjvif5yg08?si=Lkd8vKexumkkPs8Q"
          title="Conhecendo Deus pela Natureza"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
