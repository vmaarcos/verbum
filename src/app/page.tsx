import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      
      <SectionTitle
        preTitle="O que o Verbum oferece"
        title="Descubra como podemos ajudar você a compreender melhor a Bíblia"
      >
        O Verbum é uma plataforma criada para auxiliar você a entender e interpretar as Escrituras de forma mais clara. Com acesso a explicações teológicas e contexto bíblico, nosso objetivo é oferecer uma ferramenta acessível para estudantes, leigos e teólogos que buscam respostas às suas dúvidas espirituais.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Assista a um vídeo"
        title="Aprenda mais sobre como o Verbum pode te ajudar"
      >
        Esta seção é dedicada a mostrar como o Verbum pode ser a chave para o seu crescimento espiritual. Assista ao vídeo a seguir e veja como nossa plataforma oferece um espaço de aprendizado e esclarecimento sobre a Palavra de Deus.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Depoimentos"
        title="Veja o que nossos usuários dizem sobre nós"
      >
        Os depoimentos são uma excelente maneira de aumentar a confiança na nossa plataforma. Aqui você pode ouvir diretamente de nossos usuários como o Verbum os ajudou a entender melhor a Bíblia e resolver suas dúvidas teológicas.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Perguntas Frequentes">
        Aqui, respondemos às perguntas mais comuns sobre o Verbum. Se tiver alguma dúvida, consulte nossa seção de perguntas frequentes ou entre em contato conosco diretamente.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
