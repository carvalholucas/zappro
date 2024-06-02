"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Form from "./form";
import Icon from "@/components/ui/icon";

const links = [
  { name: "Faq", href: "/#", action: false, active: false },
  { name: "Comparativo", href: "/#", action: false, active: false },
  { name: "Seja premium", href: "/#", action: true, active: false },
];

const Home = () => {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center bg-green-950">
        <header className="mx-auto my-0 flex h-28 w-[min(100%,_1280px)] items-center justify-between px-6">
          <span className="text-3xl font-bold text-green-600">Zappro</span>
          <nav>
            <ul className="text-white">
              {links.map((link) => {
                if (link.action && link.active) {
                  return (
                    <Button
                      asChild
                      key={link.name}
                      variant="secondary"
                      className="ml-16 rounded-full px-6"
                    >
                      <Link key={link.name} href={link.href}>
                        {link.name}
                      </Link>
                    </Button>
                  );
                }

                if (link.active) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="ml-16 inline hover:text-green-500 hover:underline"
                    >
                      {link.name}
                    </Link>
                  );
                }
              })}
            </ul>
          </nav>
        </header>

        <div className="mt-28 w-full px-6 text-center md:w-2/5">
          <p className="mb-2 text-xl font-light text-green-600">
            Simples, rápido e fácil.
          </p>
          <h1 className="mb-16 text-4xl font-bold text-white">
            Gerador de link para WhatsApp
          </h1>

          <p className="text-xl font-thin leading-8 text-white	">
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
      <section className=" flex justify-center rounded-lg bg-gray-50 p-8">
        <Form />
      </section>
    </main>
  );
};

export default Home;
