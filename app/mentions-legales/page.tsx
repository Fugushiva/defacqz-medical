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

      <p className="text-neutral-500 text-sm mb-8">
        Dernière mise à jour : mai 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
        {/* Éditeur */}
        <section>
          <h2 className="text-neutral-900">Éditeur du site</h2>
          <p>
            <strong>Defacqz Medical Center 125</strong>
            <br />
            Rue Defacqz 125
            <br />
            1060 Saint-Gilles, Belgique
            <br />
            Numéro d&apos;entreprise BCE :{" "}
            <em>0XXX.XXX.XXX (à compléter)</em>
            <br />
            E-mail de contact :{" "}
            <a
              href="mailto:contact@defacqz-medical.be"
              className="text-brand-primary hover:underline"
            >
              contact@defacqz-medical.be
            </a>
          </p>
        </section>

        {/* Responsable médical */}
        <section>
          <h2 className="text-neutral-900">Responsable médical</h2>
          <p>
            <strong>Dr Nordeyn Oulad Ben Taib</strong>, Neurologue
            <br />
            Numéro INAMI :{" "}
            <em>1-XXXXX-XX-XXX (à compléter)</em>
            <br />
            Membre de l&apos;Ordre des médecins — Conseil provincial du Brabant
          </p>
        </section>

        {/* Hébergeur */}
        <section>
          <h2 className="text-neutral-900">Hébergeur</h2>
          <p>
            <strong>Vercel Inc.</strong>
            <br />
            340 Pine Street, Suite 1701
            <br />
            San Francisco, CA 94104, États-Unis
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

        {/* Disclaimer médical */}
        <section>
          <h2 className="text-neutral-900">Avertissement médical</h2>
          <p className="border-l-4 border-amber-400 pl-4 bg-amber-50 py-3 rounded-r-md text-sm">
            Les informations présentes sur ce site sont à titre informatif
            uniquement et ne se substituent pas à une consultation médicale.
            Pour tout problème de santé, consultez un professionnel de santé
            qualifié.
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-neutral-900">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes)
            est la propriété exclusive du Defacqz Medical Center 125. Toute
            reproduction, même partielle, est interdite sans autorisation
            préalable écrite.
          </p>
        </section>

        {/* Autorité de contrôle */}
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

        {/* Droit applicable */}
        <section>
          <h2 className="text-neutral-900">Droit applicable</h2>
          <p>
            Le présent site est soumis au droit belge. Tout litige relatif à
            son utilisation sera soumis à la compétence exclusive des tribunaux
            de l&apos;arrondissement judiciaire de Bruxelles.
          </p>
        </section>
      </div>
    </section>
  );
}
