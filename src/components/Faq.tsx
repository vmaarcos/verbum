"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-emerald-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "O Verbum é totalmente gratuito para usar?",
    answer: "Sim, a plataforma Verbum oferece acesso gratuito ao conteúdo e discussões teológicas.",
  },
  {
    question: "Posso participar das discussões e interações de qualquer lugar?",
    answer: "Sim, nossa plataforma é acessível de qualquer lugar, e você pode se juntar às discussões teológicas de nossa comunidade.",
  },
  {
    question: "Quais fontes teológicas vocês utilizam?",
    answer:
      "As respostas e discussões são baseadas em fontes cristãs confiáveis, incluindo Bíblia, livros teológicos e materiais educacionais de respeitadas tradições cristãs.",
  },
  {
    question: "Como posso sugerir temas ou perguntas para a comunidade?",
    answer:
      "Você pode sugerir temas e perguntas através do nosso painel de interação, onde a comunidade pode votar e discutir as ideias propostas.",
  },
];
