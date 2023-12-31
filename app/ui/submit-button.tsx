'use client'

import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-green-800 text-white p-4 rounded-md w-full text-sm"
    >
      {pending ? 'Gerando um novo link...' : 'Gerar meu link gratuitamente'}
    </button>
  )
}