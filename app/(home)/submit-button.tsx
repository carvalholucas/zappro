"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function SubmitButton() {
  const { pending } = useFormStatus();

  const DefaultButton = () => (
    <>
      <span>Gerar meu link gratuitamente</span>
      <Icon name="ArrowRight" size={18} className="ml-4" />
    </>
  );

  const LoadingButton = () => (
    <>
      <Icon name="Loader2" size={18} className="mr-4 animate-spin" />
      <span>Gerando um novo link</span>
    </>
  );

  return (
    <Button type="submit" className="rounded-full">
      {pending ? <LoadingButton /> : <DefaultButton />}
    </Button>
  );
}
