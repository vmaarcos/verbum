import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-emerald-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Pronto para entender a Bíblia de forma mais profunda?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Comece sua jornada de esclarecimento bíblico com o Verbum e obtenha respostas para suas dúvidas espirituais.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/chat"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-emerald-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </Container>
  );
};
