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
        {/* Responsable du traitement */}
        <section>
          <h2 className="text-neutral-900">Responsable du traitement</h2>
          <p>
            <strong>Defacqz Medical Center 125</strong>
            <br />
            Rue Defacqz 125, 1060 Saint-Gilles, Belgique
            <br />
            E-mail :{" "}
            <a
              href="mailto:contact@defacqz-medical.be"
              className="text-brand-primary hover:underline"
            >
              contact@defacqz-medical.be
            </a>
          </p>
          <p>
            <strong>Délégué à la Protection des Données (DPO) :</strong>
            <br />
            <a
              href="mailto:dpo@defacqz-medical.be"
              className="text-brand-primary hover:underline"
            >
              dpo@defacqz-medical.be
            </a>{" "}
            <em>(adresse à confirmer)</em>
          </p>
        </section>

        {/* Données collectées */}
        <section>
          <h2 className="text-neutral-900">Données collectées</h2>
          <p>
            Via le formulaire de contact, nous collectons les données suivantes :
          </p>
          <ul>
            <li>Prénom et nom</li>
            <li>Numéro de téléphone</li>
            <li>Adresse e-mail</li>
            <li>Motif de consultation</li>
            <li>Message libre</li>
            <li>Horodatage de la demande</li>
          </ul>
          <p>
            Nous ne collectons pas de données de santé sensibles via ce
            formulaire. Aucun dossier médical n&apos;est constitué en ligne.
          </p>
        </section>

        {/* Finalités et bases légales */}
        <section>
          <h2 className="text-neutral-900">Finalités et bases légales</h2>
          <ul>
            <li>
              <strong>Traitement de la demande de rendez-vous</strong> — base
              légale : intérêt légitime (Art. 6(1)(f) RGPD) — prise en charge
              des demandes entrantes
            </li>
            <li>
              <strong>Envoi de la confirmation de contact</strong> — base
              légale : consentement explicite (Art. 6(1)(a) RGPD) — case à
              cocher dans le formulaire
            </li>
          </ul>
        </section>

        {/* Durée de conservation */}
        <section>
          <h2 className="text-neutral-900">Durée de conservation</h2>
          <ul>
            <li>
              Données du formulaire de contact : <strong>3 ans</strong> après
              le dernier contact
            </li>
            <li>
              Données de navigation (Vercel Analytics) :{" "}
              <strong>anonymisées</strong>, pas de conservation nominative
            </li>
          </ul>
        </section>

        {/* Destinataires */}
        <section>
          <h2 className="text-neutral-900">Destinataires des données</h2>
          <p>
            Vos données sont transmises aux destinataires suivants :
          </p>
          <ul>
            <li>
              <strong>Resend</strong> (sous-traitant email) — conforme RGPD,
              clauses contractuelles types pour transfert hors UE
            </li>
            <li>
              <strong>Équipe de secrétariat</strong> du Defacqz Medical Center
              125
            </li>
          </ul>
          <p>
            <strong>Pas de transfert hors Union Européenne</strong> pour les
            données nominatives, sauf via Resend (encadré par des garanties
            appropriées).
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-neutral-900">Cookies et traceurs</h2>
          <p>
            Ce site utilise les catégories de cookies suivantes :
          </p>
          <ul>
            <li>
              <strong>Nécessaires</strong> (toujours actifs) : fonctionnement
              du site, mémorisation de vos préférences de cookies
              (localStorage)
            </li>
            <li>
              <strong>Analytiques</strong> (soumis à consentement) : Vercel
              Analytics — mesure d&apos;audience anonymisée, sans identifiant
              personnel
            </li>
            <li>
              <strong>Marketing</strong> : aucun outil marketing en V1
            </li>
          </ul>
          <p>
            Vous pouvez modifier vos préférences à tout moment via le bouton
            &quot;Gérer mes cookies&quot; en pied de page.
          </p>
        </section>

        {/* Vos droits */}
        <section>
          <h2 className="text-neutral-900">Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi belge du 30 juillet 2018, vous
            disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit de retrait du consentement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a
              href="mailto:contact@defacqz-medical.be"
              className="text-brand-primary hover:underline"
            >
              contact@defacqz-medical.be
            </a>
          </p>
        </section>

        {/* Autorité de contrôle */}
        <section>
          <h2 className="text-neutral-900">Autorité de contrôle</h2>
          <p>
            Vous avez le droit d&apos;introduire une réclamation auprès de
            l&apos;
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Autorité de Protection des Données (APD) belge
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
