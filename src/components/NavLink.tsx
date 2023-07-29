"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const activePath = usePathname();

  return (
    <Link
      data-active={activePath === href}
      className="px-4 py-1 border-l border-white/5 text-zinc-400 hover:text-white transition-colors data-[active=true]:border-cyan-400 data-[active=true]:text-white"
      href={href}
    >
      {children}
    </Link>
  );
}
