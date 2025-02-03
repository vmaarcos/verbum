import {
  FaceSmileIcon,
  ChatBubbleBottomCenterIcon,
  BookOpenIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
  SunIcon,
  LightBulbIcon,

} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/celular1.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Descubra os benefícios do Verbum",
  desc: "O Verbum ajuda você a esclarecer suas dúvidas bíblicas e espirituais de forma fácil e acessível. Veja como pode transformar seu entendimento da Palavra de Deus.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entenda melhor a Bíblia",
      desc: "Com respostas claras e baseadas em fontes teológicas, você vai aprofundar sua compreensão das escrituras.",
      icon: <BookOpenIcon />,
    },
    {
      title: "Acesso rápido a temas teológicos",
      desc: "Tire dúvidas sobre doutrinas, versículos difíceis ou contextos bíblicos com apenas alguns cliques.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Aprenda de forma interativa",
      desc: "Explore tópicos e compare diferentes interpretações com a ajuda de conteúdo de qualidade e fontes confiáveis",
      icon: <AcademicCapIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Aprofunde-se ainda mais com Verbum",
  desc: "Utilize a plataforma para expandir seus conhecimentos teológicos, obter respostas para dúvidas e viver sua fé de forma mais consciente.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Acessível em qualquer lugar",
      desc: "Com o Verbum, você pode aprender de qualquer lugar, seja no computador ou no celular, em qualquer horário.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Crie sua jornada de aprendizado com a comunidade Verbum",
      desc: "Além do conteúdo bíblico e teológico, oferecemos uma plataforma para discussões, onde você pode interagir com outros usuários e compartilhar aprendizados.",
      icon: <ChatBubbleBottomCenterIcon />,
    },
    {
      title: "Suporte especializado",
      desc: "Caso precise de mais ajuda, nosso suporte estará disponível para guiar você em sua jornada de aprendizado.",
      icon: <PhoneIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
