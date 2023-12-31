'use client'

import { useState, useRef, ChangeEvent, useEffect } from "react"
import { useFormState } from "react-dom";
import { createLinkAction } from "@/app/lib/actions";
import { SubmitButton } from "./submit-button";

export default function Form() {
  const [charCount, setCharCount] = useState<number>(0);
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const initialState = { errors: {}, message: '' };
  const [state, formAction] = useFormState(createLinkAction, initialState);

  const handleCharCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value
    setCharCount(inputValue.length)
  };

  const phoneMask = (value: string) => {
    const newValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2");

    if (phoneRef.current) {
      phoneRef.current.value = newValue
    }
  };

  useEffect(() => {
    if(state.success) {
      console.log(state.link)
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col">
      <div className="flex flex-col mb-8">
        <label className="text-black font-medium text-xs mb-4">
          Número do WhatsApp*
        </label>
        <input
          type="text"
          name="number"
          className="bg-gray-100 border-[1px] border-gray-300 text-black text-sm w-2/4 rounded-md p-2"
          placeholder="(00) 0 0000-0000"
          aria-describedby="number-error"
          ref={phoneRef}
          maxLength={15}
          onChange={(e) => phoneMask(e.target.value)}
        />
        <div id="number-error" aria-live="polite" aria-atomic="true">
          {state && state.errors?.number &&
            state.errors.number.map((error: string) => (
              <p className="text-xs text-red-500 mt-2" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <label className="text-black font-medium text-xs mb-4">
          Mensagem (Opcional)
        </label>
        <textarea
          rows={4}
          name="great"
          className="bg-gray-100 border-[1px] border-gray-300 text-black text-sm p-4 rounded-md resize-none"
          placeholder="Crie uma mensagem que facilite a comunicação com o seu cliente"
          ref={messageRef}
          onChange={handleCharCount}
          maxLength={250}
        ></textarea>
        <span className="text-gray-400 text-xs font-semibold mt-2 self-end">
          {charCount}/250
        </span>
      </div>
      <SubmitButton />
    </form>
  )
}