import { notFound, redirect } from "next/navigation";
import { fetchLinkBySlug } from "@/lib/actions";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default async function SinglePage({ params }: ParamsProps) {
  const slug = params.slug;
  const [link] = await fetchLinkBySlug(slug);

  if (link) {
    redirect(`https://wa.me/${link.number}?text=${link.message}`);
  } else {
    notFound();
  }

  return <main></main>;
}
