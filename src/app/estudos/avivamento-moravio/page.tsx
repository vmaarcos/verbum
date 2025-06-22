import Image from "next/image";

export default function AvivamentoMoravio() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">O Avivamento Morávio</h1>
      
      <p className="max-w-3xl mx-auto text-center">
        O Avivamento Morávio foi um dos movimentos de renovação espiritual mais influentes do século XVIII, surgido em 1727 na comunidade de Herrnhut, na Saxônia, sob a liderança do Conde Nikolaus Ludwig von Zinzendorf. Caracterizou-se por uma profunda vida de oração, comunhão cristã e intenso compromisso missionário.
      </p>
      
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/img/estu/moravio/moravio1.png"
          alt="moravio"
          width={600}
          height={800}
          className="rounded-xl shadow-md"
          priority
        />
      </div>

      <div className="prose max-w-3xl mx-auto">
        <h1 className="text-3xl text-center font-bold"><mark>A oração que nunca cessava</mark></h1>
        <p>
          Um dos aspectos mais notáveis do Avivamento Morávio foi a vigília de oração ininterrupta, que durou mais de cem anos. A comunidade organizava turnos de oração 24 horas por dia, fortalecendo a espiritualidade e unidade entre seus membros, e cultivando um ambiente de constante busca pela presença de Deus.
        </p>

        <p>
          Movidos por sua fé vibrante, os Morávios foram pioneiros em missões globais, enviando missionários para lugares como América do Norte, Caribe, África e Ásia. Um dos fatos mais impressionantes foi o extremo compromisso de alguns missionários que, para alcançar grupos sociais inacessíveis, chegaram a se vender como escravos voluntariamente. Essa prática radical tinha o propósito de penetrar em comunidades escravizadas e marginalizadas, levando o evangelho onde poucos ousavam chegar.  
        </p>

        <p>
          Ao se tornarem escravos, esses missionários morávios ganhavam acesso direto a ambientes de grande sofrimento, podendo pregar e viver o amor de Cristo em meio à adversidade. Essa entrega total representa uma das mais profundas expressões de fé prática e sacrifício na história das missões cristãs. Esse compromisso é registrado em fontes históricas como o livro <i>The History of the Moravian Church</i>, evidenciando a relevância e ousadia do movimento para sua época e para o avanço do evangelho no mundo.
        </p>

        <p>
          O legado dos Morávios segue vivo até hoje, influenciando movimentos posteriores de avivamento e missões protestantes. Sua dedicação incessante à oração e ao serviço missionário continua a inspirar igrejas e crentes ao redor do globo, mostrando o poder transformador de uma fé comunitária, comprometida e sacrificial.
        </p>

        <h2>Vídeo relacionado</h2>
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/XoVu0ct5o7w?si=Lw5xsL8smybDf4LW"
          title="O Avivamento Morávio"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
