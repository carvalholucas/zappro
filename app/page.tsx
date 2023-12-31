"use client";

import Form from "@/app/form";

const Home = () => { 
  return (
    <main className="flex min-h-screen bg-white">
      <section className="w-2/5 p-10">
        <div className="flex flex-col justify-between h-full">
          <p className="text-green-600 font-bold text-xl">Zappro</p>
          <div>
            <p className="text-gray-900 font-light mb-2">
              Simples, rápido e fácil.
            </p>
            <h1 className="text-black font-bold text-2xl mb-16">
              Gerador de link para WhatsApp
            </h1>

            <p className="text-gray-600 font-thin mb-16 leading-8	">
              Informe seu número de whatsapp, uma mensagem para iniciar a
              conversa, gere o link e compartilhe nas suas redes sociais.
            </p>

            <Form />
            

            {/* {link?.slug && (
              <a href={link?.anchor}>
                <p className="text-green-700 text-base font-medium mt-6 underline">{`zappro.link/${link?.slug}`}</p>
              </a>
            )} */}
          </div>
        </div>
      </section>
      <section className="flex-1 bg-green-950"></section>
    </main>
  );
};

export default Home;
