import Link from "next/link";
import { X as Icon } from "lucide-react";
// import Icon from "@/app/ui/icon";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 bg-green-900 p-6 text-white">
      <h1 className="mb-8 text-7xl font-extrabold">404</h1>
      <h2 className="text-3xl font-semibold">Link não encontrado</h2>
      <p className="mb-16">
        Infelizmente não encontramos o link que está tentando acessar.
      </p>
      <Link
        href="/"
        className="flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-sm text-white transition-colors hover:bg-green-700"
      >
        <Icon name="ArrowLeft" size={22} className="mr-4" />
        Criar novo link gratuitamente
      </Link>
    </main>
  );
}
