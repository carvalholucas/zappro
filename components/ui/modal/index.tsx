"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

import SuccessModal from "@/components/ui/modal/success-modal";

type ModalProps = {
  isShowing?: boolean;
  link?: {
    anchor: string;
    slug: string;
  };
  onClose: () => void;
};

const Modal = ({ isShowing, link, onClose }: ModalProps) => {
  const [qrcodeSrc, setQrcodeSrc] = useState<string>("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const generateQRCode = async (text: string) => {
    try {
      const src = await QRCode.toDataURL(text, {
        errorCorrectionLevel: "H",
        rendererOpts: { quality: 1 },
        width: 350,
      });
      setQrcodeSrc(src);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowModal = () => {
    dialogRef.current?.showModal();

    if (link?.anchor) {
      generateQRCode(link?.anchor);
    }
  };

  useEffect(() => {
    isShowing ? handleShowModal() : dialogRef.current?.close();
  });

  return (
    <dialog ref={dialogRef}>
      <SuccessModal link={link} src={qrcodeSrc} onClose={onClose} />
    </dialog>
  );
};

export default Modal;
