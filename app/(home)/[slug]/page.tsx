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
    const path = `https://wa.me/${link.number}?text=${link.message}`;
    redirect(path);
  } else {
    notFound();
  }
}
