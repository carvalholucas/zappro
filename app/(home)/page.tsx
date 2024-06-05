import { Button } from "@/components/ui/button";
import Form from "./form";
import Icon from "@/components/ui/icon";
import Header from "@/components/ui/header";
import Faq from "@/components/ui/faq";

const Home = () => {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center bg-green-950">
        <Header />
        <div className="mt-28 w-full px-6 text-center md:w-2/5">
          <p className="mb-2 text-xl font-light text-green-600">
            Simples, rápido e fácil.
          </p>
          <h1 className="mb-16 text-4xl font-bold text-white">
            Gerador de link para WhatsApp
          </h1>

          <p className="text-xl font-thin leading-8 text-white">
            Informe seu número de whatsapp, uma mensagem para iniciar a
            conversa, gere o link e compartilhe nas suas redes sociais.
          </p>

          <Button
            variant="secondary"
            className="mt-32 animate-bounce rounded-full"
            size="icon"
          >
            <Icon name="ArrowDown" size={24} className="text-green-950" />
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center rounded-lg bg-gray-50 p-8">
        <Form />
        <Faq />
      </section>
    </main>
  );
};

export default Home;
