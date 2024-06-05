"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const links = [
    { name: "Faq", href: "/#", action: false, active: false },
    { name: "Comparativo", href: "/#", action: false, active: false },
    { name: "Seja premium", href: "/#", action: true, active: true },
  ];

  return (
    <header className="mx-auto my-0 flex h-28 w-[min(100%,_1280px)] items-center justify-between px-6">
      <span className="text-3xl font-bold text-green-600">Zappro</span>
      <nav>
        <ul className="text-white">
          {links.map((link) => {
            if (link.action && link.active) {
              return (
                <Button
                  asChild
                  key={link.name}
                  variant="secondary"
                  className="ml-16 rounded-full px-6"
                >
                  <Link key={link.name} href={link.href}>
                    {link.name}
                  </Link>
                </Button>
              );
            }

            if (link.active) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="ml-16 inline hover:text-green-500 hover:underline"
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
