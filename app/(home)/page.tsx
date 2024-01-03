"use client";

import Link from "next/link";
import { ModalProvider } from "@/contexts/modal-context";
import { Button } from "@/components/ui/button";
import Form from "./form";
import Modal from "./modal";
import Icon from "@/components/ui/icon";

const links = [
  { name: "Faq", href: "/#", action: false },
  { name: "Comparativo", href: "/#", action: false },
  { name: "Seja premium", href: "/#", action: true },
];

// const Home = () => {
//   return (
//     <ModalProvider>
//       <main className="flex min-h-screen bg-white">
//         <section className="w-2/5 p-10">
//           <div className="flex h-full flex-col justify-between">
//             <p className="text-xl font-bold text-green-600">Zappro</p>
//             <div>
//               <p className="mb-2 font-light text-gray-900">
//                 Simples, rápido e fácil.
//               </p>
//               <h1 className="mb-16 text-2xl font-bold text-black">
//                 Gerador de link para WhatsApp
//               </h1>

//               <p className="mb-16 font-thin leading-8 text-gray-600	">
//                 Informe seu número de whatsapp, uma mensagem para iniciar a
//                 conversa, gere o link e compartilhe nas suas redes sociais.
//               </p>

//               <Form />

//               <Modal />
//             </div>
//           </div>
//         </section>
//         <section className="flex-1 bg-green-950"></section>
//       </main>
//     </ModalProvider>
//   );
// };

const Home = () => {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center bg-green-950">
        <header className="mx-auto my-0 flex h-28 w-[min(100%,_1280px)] items-center justify-between px-4">
          <span className="text-3xl font-bold text-green-600">Zappro</span>
          <nav>
            <ul className="text-white">
              {links.map((link) => {
                if (link.action) {
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

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="ml-16 inline hover:text-green-500 hover:underline"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </nav>
        </header>

        <div className="mt-28 w-2/5 text-center">
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
            className="mt-32 rounded-full"
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
