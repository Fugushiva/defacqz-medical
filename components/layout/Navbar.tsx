"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/specialites", label: "Spécialités" },
  { href: "/equipe", label: "Équipe" },
  { href: "/informations-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  // Store the pathname at which the menu was opened; close when pathname changes
  const [menuOpenAtPath, setMenuOpenAtPath] = useState<string | null>(null);
  const isOpen = menuOpenAtPath !== null && menuOpenAtPath === pathname;
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const setIsOpen = useCallback(
    (open: boolean) => {
      setMenuOpenAtPath(open ? pathname : null);
    },
    [pathname]
  );

  // Scroll-progressive reveal
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trap when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      menu.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl?.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-semibold text-brand-primary text-lg leading-tight"
          aria-label="Defacqz Medical Center 125 — Accueil"
        >
          <span aria-hidden="true" className="text-2xl">⚕</span>
          <span className="hidden sm:block">
            DMC<span className="text-neutral-400 font-normal"> 125</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-150 hover:text-brand-primary ${
                    isActive
                      ? "text-brand-primary border-b-2 border-brand-primary pb-0.5"
                      : "text-neutral-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CONTACT.doctoranytimeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-brand-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Doctoranytime
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden p-2 rounded-md text-neutral-700 hover:text-brand-primary hover:bg-neutral-100 transition-colors"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white border-t border-neutral-200 shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <ul className="px-4 py-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-primary/10 text-brand-primary"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-neutral-200">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2.5 rounded-md bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary-hover transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </li>
            <li>
              <a
                href={CONTACT.doctoranytimeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm text-neutral-500 hover:text-brand-primary transition-colors"
              >
                Doctoranytime
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
