import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identity */}
          <div>
            <p className="font-heading text-white text-lg font-semibold mb-2">
              Defacqz Medical Center 125
            </p>
            <address className="not-italic text-sm text-neutral-400 space-y-1">
              <p>Rue Defacqz 125</p>
              <p>1060 Saint-Gilles, Belgique</p>
              <p className="mt-2">
                <a
                  href="tel:+3225390000"
                  className="hover:text-white transition-colors"
                  aria-label="Appeler le cabinet"
                >
                  +32 2 539 00 00
                </a>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <p className="text-white font-medium text-sm mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/specialites", label: "Spécialités" },
                { href: "/equipe", label: "Notre équipe" },
                { href: "/informations-pratiques", label: "Infos pratiques" },
                { href: "/contact", label: "Contact & RDV" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Liens légaux">
            <p className="text-white font-medium text-sm mb-3">Informations légales</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                  aria-label="Gérer mes préférences de cookies"
                >
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} Defacqz Medical Center 125. Tous droits réservés.
          </p>
          <p>
            Accessibilité PMR ·{" "}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              APD Belgique
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
