import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function SinglePageLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 bg-green-950 p-6 text-white">
      {children}
    </main>
  );
}
