"use client";

import Form from "@/app/ui/form";
import Modal from "@/app/ui/modal";
import { ModalProvider } from "@/app/contexts/modal-context";

const Home = () => {
  return (
    <ModalProvider>
      <main className="flex min-h-screen bg-white">
        <section className="w-2/5 p-10">
          <div className="flex h-full flex-col justify-between">
            <p className="text-xl font-bold text-green-600">Zappro</p>
            <div>
              <p className="mb-2 font-light text-gray-900">
                Simples, rápido e fácil.
              </p>
              <h1 className="mb-16 text-2xl font-bold text-black">
                Gerador de link para WhatsApp
              </h1>

              <p className="mb-16 font-thin leading-8 text-gray-600	">
                Informe seu número de whatsapp, uma mensagem para iniciar a
                conversa, gere o link e compartilhe nas suas redes sociais.
              </p>

              <Form />

              <Modal />
            </div>
          </div>
        </section>
        <section className="flex-1 bg-green-950"></section>
      </main>
    </ModalProvider>
  );
};

export default Home;
