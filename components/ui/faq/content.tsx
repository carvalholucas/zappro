"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqTypes = {
  id: number;
  title: string;
  description: string;
  active: boolean;
};

const Faq = ({ content }: { content: FaqTypes[] }) => {
  return (
    <Accordion type="single" collapsible>
      {content?.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id.toString()}>
          <AccordionTrigger>{faq.title}</AccordionTrigger>
          <AccordionContent>{faq.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
