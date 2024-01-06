"use client";

import { useEffect, useRef } from "react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

type ModalContentProps = {
  link?: {
    anchor: string;
    slug: string;
  };
  onClose: () => void | undefined;
};

export const ModalContent = (props: ModalContentProps) => {
  const { link, onClose } = props;
  const [copiedLink, copyLink] = useCopyToClipboard();
  const { toast } = useToast();

  const { anchor, slug } = link || {};

  useEffect(() => {
    if (copiedLink !== null) {
      toast({
        variant: "success",
        description: "Link copiado com sucesso!",
      });
    }
  }, [copiedLink, toast]);

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="relative flex w-[600px] flex-col items-center rounded-lg bg-white p-12">
        <button
          className="absolute right-2 top-2 rounded-2xl p-2 hover:bg-slate-100"
          onClick={onClose}
        >
          <Icon name="X" className="text-slate-900" size={20} />
        </button>
        <h1 className="mb-6 text-center text-2xl font-medium text-black">
          Seu link está pronto para ser usado :)
        </h1>
        <p className="mb-16 text-center font-extralight leading-normal text-gray-500">
          Copie e compartilhe o seu link em sua rede social, website ou em
          qualquer outro lugar que você queira ser contatado instantaneamente
          por seus clientes!
        </p>
        <div className="mb-12 flex w-full items-center justify-center rounded-md bg-slate-100 p-4">
          <a
            href={anchor}
            className="text-2xl font-semibold text-green-700 underline"
          >
            zappro.link/{slug}
          </a>
        </div>
        <button
          className="flex items-center justify-center self-center bg-transparent text-sm font-light text-gray-500"
          onClick={() => copyLink(`https://zappro.vercel.app/${slug}`)}
        >
          <Icon name="Link" size={16} className="mr-2 text-gray-400" />
          Copiar
        </button>
      </div>
    </div>
  );
};

type ModalProps = {
  isShowing?: boolean;
  link?: {
    anchor: string;
    slug: string;
  };
  onClose: () => void;
};

const Modal = ({ isShowing, link, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    isShowing ? dialogRef.current?.showModal() : dialogRef.current?.close();
  });

  return (
    <dialog ref={dialogRef}>
      <ModalContent link={link} onClose={onClose} />
    </dialog>
  );
};

export default Modal;
