import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales du Defacqz Medical Center 125 — Rue Defacqz 125, 1060 Saint-Gilles, Belgique.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/mentions-legales",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-brand-primary mb-8">Mentions légales</h1>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
        <section>
          <h2 className="text-neutral-900">Éditeur du site</h2>
          <p>
            <strong>Defacqz Medical Center 125</strong>
            <br />
            Rue Defacqz 125
            <br />
            1060 Saint-Gilles, Belgique
            <br />
            Numéro BCE : <em>À compléter — Phase M5</em>
            <br />
            Numéro TVA : <em>À compléter — Phase M5</em>
            <br />
            Responsable de publication : <em>À compléter — Phase M5</em>
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Hébergeur</h2>
          <p>
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789, USA
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              vercel.com
            </a>
          </p>
          <p>URL de production : https://defacqz-medical.vercel.app/</p>
        </section>

        <section>
          <h2 className="text-neutral-900">Autorité de contrôle</h2>
          <p>
            Autorité de Protection des Données (APD) belge
            <br />
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              www.autoriteprotectiondonnees.be
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes)
            est la propriété exclusive du Defacqz Medical Center 125. Toute
            reproduction, même partielle, est interdite sans autorisation
            préalable.
          </p>
        </section>
      </div>
    </section>
  );
}
