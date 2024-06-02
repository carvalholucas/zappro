"use client";

import { useState, useRef, ChangeEvent, useEffect, useCallback } from "react";
import { useFormState } from "react-dom";
import { createLinkAction } from "@/lib/actions";
import { useToggle } from "@/hooks/useToggle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/ui/modal";
import { SubmitButton } from "@/app/(home)/submit-button";

export default function Form() {
  const [charCount, setCharCount] = useState<number>(0);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { isTrue, dispatchToggle } = useToggle();

  const initialState = { errors: {}, message: "" };
  const [state, formAction] = useFormState(createLinkAction, initialState);

  const handleCharCount = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const inputValue = event.target.value;
      setCharCount(inputValue.length);
    },
    [setCharCount],
  );

  const phoneMask = (value: string) => {
    const newValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2");

    if (phoneRef.current) {
      phoneRef.current.value = newValue;
    }
  };

  useEffect(() => {
    if (state.success) {
      dispatchToggle();
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className="flex w-full -translate-y-32 flex-col rounded-xl bg-white p-8 shadow-xl md:w-1/2"
      >
        <div className="mb-10 grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="number">Número do WhatsApp*</Label>
          <Input
            type="text"
            id="number"
            name="number"
            className="bg-gray-100"
            placeholder="Seu número de WhatsApp aqui"
            aria-describedby="number-error"
            ref={phoneRef}
            maxLength={15}
            onChange={(e) => phoneMask(e.target.value)}
          />
          <div id="number-error" aria-live="polite" aria-atomic="true">
            {state &&
              state.errors?.number &&
              state.errors.number.map((error: string) => (
                <p className="mt-2 text-xs text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-12 grid w-full gap-2">
          <Label htmlFor="message">Mensagem (Opcional)</Label>
          <Textarea
            id="message"
            name="great"
            className="resize-none bg-gray-100"
            placeholder="Deixe uma mensagem de boas vindas para facilitar a comunicação com o seu cliente"
            ref={messageRef}
            rows={5}
            maxLength={250}
            onChange={handleCharCount}
          />
          <span className="mt-2 self-end text-xs font-semibold text-gray-400">
            {charCount}/250
          </span>
        </div>
        <SubmitButton />
      </form>
      <Modal isShowing={isTrue} link={state.link} onClose={dispatchToggle} />
    </>
  );
}
