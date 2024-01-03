import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Criar links para WhatsApp | Zappro",
  description: "Gerar link para o WhatsApp gratuitamente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={fira.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
