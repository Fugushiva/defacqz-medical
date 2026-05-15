/**
 * Centralized site constants.
 * Single source of truth for contact info, URLs, and other shared values.
 */

export const SITE = {
  name: "Defacqz Medical Center 125",
  shortName: "DMC 125",
  url: "https://defacqz-medical.vercel.app",
  address: {
    street: "Rue Defacqz 125",
    city: "Saint-Gilles",
    postalCode: "1060",
    country: "Belgique",
    countryCode: "BE",
  },
} as const;

export const CONTACT = {
  /** Canonical phone number — E.164 format for tel: links */
  phoneE164: "+3225390000",
  /** Display format for Belgian local style */
  phoneDisplay: "02 539 00 00",
  /** International display format */
  phoneIntl: "+32 2 539 00 00",
  email: "contact@defacqz-medical.be",
  doctoranytimeUrl: "https://www.doctoranytime.be/d/neurochirurgien/saint-gilles",
} as const;

export const HOURS = {
  days: "Lun–Ven",
  label: "Consultations sur rendez-vous",
} as const;
