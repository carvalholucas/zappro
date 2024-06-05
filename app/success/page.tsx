import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Icon from "@/components/ui/icon";

const SuccessPage = () => {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center bg-green-950">
        <Header />

        <div className="mt-28 flex w-full flex-col items-center px-6 text-center md:w-2/4">
          <h1 className="mb-16 text-4xl font-bold text-white">
            Seu link está pronto para ser usado :)
          </h1>

          <p className="text-xl font-thin leading-8 text-white">
            Copie e compartilhe o seu link em sua rede social, website ou em
            qualquer outro lugar que você queira ser contatado instantaneamente
            por seus clientes!
          </p>

          <div className="mt-16 w-full rounded-md bg-slate-100 p-4 px-8 md:w-fit">
            <a
              href="#"
              className="break-words text-2xl font-semibold text-green-700 underline"
            >
              zappro.vercel.app/lucassmc
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center rounded-lg bg-gray-50 p-8 pt-0">
        <div className="h-[250px] w-[250px] -translate-y-32 bg-black "></div>
        <Button className="w-1/4 rounded-full" size="lg" variant="default">
          <span>Copiar link</span>
        </Button>

        <Button
          className="mt-10 w-1/4 rounded-full"
          size="lg"
          variant="default"
        >
          <span>Download QR Code</span>
          <Icon name="Download" size={18} className="ml-4" />
        </Button>
      </section>
    </main>
  );
};

export default SuccessPage;
