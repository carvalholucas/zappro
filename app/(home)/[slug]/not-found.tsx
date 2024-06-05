"use client";

import Link from "next/link";
import Icon from "@/components/ui/icon";

export default function NotFound() {
  return (
    <>
      <h1 className="mb-8 text-7xl font-extrabold">404</h1>
      <h2 className="text-3xl font-semibold">Link não encontrado</h2>
      <p className="mb-16 text-center text-xl font-thin leading-8 text-white">
        Infelizmente não encontramos o link que está tentando acessar.
      </p>
      <Link
        href="/"
        className="flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-sm text-white transition-colors hover:bg-green-700"
      >
        <Icon name="ArrowLeft" size={22} className="mr-4" />
        Criar novo link gratuitamente
      </Link>
    </>
  );
}
