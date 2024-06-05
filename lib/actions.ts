"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { z } from "zod";

export type State = {
  errors?: {
    number?: string[];
    great?: string[];
  };
  message?: string | null;
  success?: boolean | null;
  link?: {
    anchor: string;
    slug: string;
  };
};

type FaqTypes = {
  id: number;
  title: string;
  description: string;
  active: boolean;
};

const FormSchema = z.object({
  number: z.string().min(1, {
    message: "Por favor, informe um número de whatsapp válido",
  }),
  great: z.string().optional(),
});

export async function fetchLinkBySlug(slug: string) {
  noStore();

  try {
    const data = await sql`
      SELECT 
        number, 
        message
      FROM links
      WHERE slug = ${slug}
    `;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch link");
  }
}

export async function createLinkAction(
  prevState: State | undefined,
  formData: FormData,
) {
  const validatedFields = FormSchema.safeParse({
    number: formData.get("number"),
    great: formData.get("great"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Preencha os campos obrigatórios",
    };
  }

  const { number, great } = validatedFields.data;
  const slug = Math.random().toString(36).substring(2, 8);
  const numberWithoutMask = "+55".concat(number.replace(/[^0-9]+/g, ""));

  const link = {
    anchor: `https://wa.me/${numberWithoutMask}?text=${great}`,
    slug,
  };

  try {
    await sql`
      INSERT INTO links (slug, number, message)
      VALUES (${slug}, ${numberWithoutMask}, ${great})
      ON CONFLICT (slug) DO NOTHING;
   `;
  } catch (error) {
    return { message: "Falha ao criar novo link" };
  }

  revalidatePath("/");
  return { success: validatedFields.success, link };
}

export async function getFaq() {
  noStore();

  try {
    const data = await sql`
      SELECT * FROM faq
    `;

    return data.rows as FaqTypes[];
  } catch (error) {
    throw new Error("Failed to fetch faq");
  }
}
