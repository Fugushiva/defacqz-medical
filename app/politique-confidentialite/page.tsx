import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique RGPD du Defacqz Medical Center 125. Données personnelles, droits des patients, contact DPO.",
  alternates: {
    canonical:
      "https://defacqz-medical.vercel.app/politique-confidentialite",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-brand-primary mb-8">Politique de confidentialité</h1>

      <p className="text-neutral-500 text-sm mb-8">
        Dernière mise à jour : mai 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
        <section>
          <h2 className="text-neutral-900">Responsable du traitement</h2>
          <p>
            Defacqz Medical Center 125
            <br />
            Rue Defacqz 125, 1060 Saint-Gilles, Belgique
            <br />
            Contact DPO : <em>À compléter — Phase M5</em>
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Données collectées</h2>
          <p>
            Via le formulaire de contact : nom, adresse e-mail, numéro de
            téléphone, spécialité souhaitée, motif de consultation, créneau
            préféré, horodatage, adresse IP.
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Finalités et bases légales</h2>
          <ul>
            <li>
              Traitement de la demande de rendez-vous — base légale :
              consentement (Art. 6(1)(a) RGPD)
            </li>
            <li>
              Rappel du secrétariat — base légale : intérêt légitime (Art.
              6(1)(f) RGPD)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-neutral-900">Durée de conservation</h2>
          <ul>
            <li>Demandes non converties : 3 ans</li>
            <li>Dossiers patients : 5 ans (norme médicale belge)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-neutral-900">Destinataires</h2>
          <p>
            Resend (sous-traitant email, conforme RGPD — clauses contractuelles
            types pour transfert hors UE), équipe de secrétariat du cabinet.
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Vos droits</h2>
          <p>
            Vous disposez des droits d&apos;accès, de rectification,
            d&apos;effacement, de portabilité, d&apos;opposition et de retrait
            du consentement. Pour les exercer, contactez-nous à l&apos;adresse
            indiquée ci-dessus.
          </p>
          <p>
            Vous avez également le droit d&apos;introduire une réclamation
            auprès de l&apos;
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Autorité de Protection des Données
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-neutral-900">Cookies</h2>
          <p>
            Ce site utilise des cookies. Vous pouvez gérer vos préférences via
            le bandeau de consentement ou en cliquant sur &quot;Gérer mes
            cookies&quot; dans le pied de page.
          </p>
          <ul>
            <li>
              <strong>Nécessaires</strong> : toujours actifs (fonctionnement du
              site)
            </li>
            <li>
              <strong>Analytiques</strong> : Vercel Analytics (conditionnel au
              consentement)
            </li>
            <li>
              <strong>Marketing</strong> : aucun en V1
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
