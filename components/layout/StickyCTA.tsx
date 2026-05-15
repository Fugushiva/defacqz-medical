"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyCTA() {
  const pathname = usePathname();

  // Hide on contact page (already has the form)
  if (pathname === "/contact") return null;

  return (
    <div
      className="
        fixed bottom-0 inset-x-0 z-40
        md:hidden
        pointer-coarse:block
        p-4 pb-safe
        bg-gradient-to-t from-white/95 to-transparent
        backdrop-blur-sm
      "
      aria-hidden="false"
    >
      <Link
        href="/contact"
        className="
          block w-full text-center
          px-6 py-3.5 rounded-xl
          bg-brand-primary text-white
          text-sm font-semibold
          shadow-lg shadow-brand-primary/30
          hover:bg-brand-primary-hover
          active:scale-[0.98]
          transition-all duration-150
          focus-visible:outline-2 focus-visible:outline-offset-2
        "
      >
        Prendre rendez-vous
      </Link>
    </div>
  );
}
