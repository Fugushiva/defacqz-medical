/**
 * Environment variable validation stub.
 * Will be populated in M6 with full Zod schema validation.
 *
 * @see https://env.t3.gg/ for the pattern used here
 */

// TODO M6: replace with full zod validation
// import { z } from "zod";

export const env = {
  SITE_URL: process.env["SITE_URL"] ?? "https://defacqz-medical.vercel.app",
  RESEND_API_KEY: process.env["RESEND_API_KEY"] ?? "",
  CONTACT_EMAIL: process.env["CONTACT_EMAIL"] ?? "contact@defacqz-medical.be",
} as const;
