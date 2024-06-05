import { getFaq } from "@/lib/actions";
import Faq from "./content";

const FaqContainer = async () => {
  const faqs = await getFaq();

  if (faqs) {
    return (
      <section className="w-full md:w-[1280px]">
        <h2 className="mb-6 text-4xl font-bold">Faq - Perguntas frequentes</h2>
        <Faq content={faqs} />
      </section>
    );
  }
};

export default FaqContainer;
