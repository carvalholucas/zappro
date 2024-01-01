"use client";

import { useState, useRef, ChangeEvent, useEffect, useCallback } from "react";
import { useFormState } from "react-dom";
import { createLinkAction } from "@/lib/actions";
import { useModalContext } from "@/contexts/modal-context";
import { SubmitButton } from "@/app/ui/submit-button";

export default function Form() {
  const [charCount, setCharCount] = useState<number>(0);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toggleModal, setLink } = useModalContext();

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
      setLink(state.link);
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col">
      <div className="mb-8 flex flex-col">
        <label className="mb-4 text-xs font-medium text-black">
          Número do WhatsApp*
        </label>
        <input
          type="text"
          name="number"
          className="w-2/4 rounded-md border-[1px] border-gray-300 bg-gray-100 p-2 text-sm text-black"
          placeholder="(00) 0 0000-0000"
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

      <div className="mb-12 flex flex-col">
        <label className="mb-4 text-xs font-medium text-black">
          Mensagem (Opcional)
        </label>
        <textarea
          rows={4}
          name="great"
          className="resize-none rounded-md border-[1px] border-gray-300 bg-gray-100 p-4 text-sm text-black"
          placeholder="Crie uma mensagem que facilite a comunicação com o seu cliente"
          ref={messageRef}
          onChange={handleCharCount}
          maxLength={250}
        ></textarea>
        <span className="mt-2 self-end text-xs font-semibold text-gray-400">
          {charCount}/250
        </span>
      </div>
      <SubmitButton />
    </form>
  );
}
