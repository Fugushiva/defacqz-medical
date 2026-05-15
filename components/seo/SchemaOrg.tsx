/**
 * Global Schema.org JSON-LD for Defacqz Medical Center 125.
 * Renders MedicalClinic + Organization + WebSite schemas in the root layout.
 * Per-page schemas (MedicalSpecialty, FAQPage, etc.) are added in individual page.tsx files.
 */

const BASE_URL = "https://defacqz-medical.vercel.app";

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${BASE_URL}/#medical-clinic`,
  name: "Defacqz Medical Center 125",
  alternateName: "DMC 125",
  description:
    "Cabinet de neurosciences à Saint-Gilles proposant des consultations en neurochirurgie, neurologie, neuropsychologie et psychiatrie.",
  url: BASE_URL,
  telephone: "+3225390000",
  email: "contact@defacqz-medical.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue Defacqz 125",
    addressLocality: "Saint-Gilles",
    postalCode: "1060",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8327,
    longitude: 4.3524,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "28",
    bestRating: "5",
    worstRating: "1",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Accessibilité PMR",
      value: true,
    },
  ],
  medicalSpecialty: [
    "Neurochirurgie",
    "Neurologie",
    "Neuropsychologie",
    "Psychiatrie",
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Consultation en neurochirurgie",
    },
    {
      "@type": "MedicalTherapy",
      name: "Consultation en neurologie",
    },
    {
      "@type": "MedicalTherapy",
      name: "Consultation en neuropsychologie",
    },
    {
      "@type": "MedicalTherapy",
      name: "Consultation en psychiatrie",
    },
  ],
  hasMap: "https://maps.google.com/?q=Rue+Defacqz+125,+1060+Saint-Gilles",
  sameAs: [
    "https://www.doctoranytime.be",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Defacqz Medical Center 125",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og/logo.png`,
    width: 200,
    height: 60,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue Defacqz 125",
    addressLocality: "Saint-Gilles",
    postalCode: "1060",
    addressCountry: "BE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+3225390000",
    contactType: "customer service",
    availableLanguage: ["French"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Defacqz Medical Center 125",
  url: BASE_URL,
  description:
    "Site officiel du Defacqz Medical Center 125 — cabinet de neurosciences à Saint-Gilles, Bruxelles.",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/contact?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}
