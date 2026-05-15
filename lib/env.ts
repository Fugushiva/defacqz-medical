/**
 * Environment variable validation with Zod.
 * Server-only — never import in client components.
 */

import { z } from "zod";

const envSchema = z.object({
  SITE_URL: z.string().url().default("https://defacqz-medical.vercel.app"),
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  CONTACT_EMAIL_TO: z
    .string()
    .email()
    .default("contact@defacqz-medical.be"),
});

function parseEnv() {
  const result = envSchema.safeParse({
    SITE_URL: process.env["SITE_URL"],
    RESEND_API_KEY: process.env["RESEND_API_KEY"],
    CONTACT_EMAIL_TO: process.env["CONTACT_EMAIL_TO"],
  });

  if (!result.success) {
    // In production, throw. In dev, warn and use defaults where possible.
    if (process.env["NODE_ENV"] === "production") {
      throw new Error(
        `Invalid environment variables:\n${result.error.issues
          .map((i) => `  ${i.path.join(".")}: ${i.message}`)
          .join("\n")}`
      );
    }
    console.warn(
      "[env] Missing env vars (using defaults for dev):",
      result.error.issues.map((i) => i.path.join(".")).join(", ")
    );
    // Return with defaults for dev
    return {
      SITE_URL: process.env["SITE_URL"] ?? "https://defacqz-medical.vercel.app",
      RESEND_API_KEY: process.env["RESEND_API_KEY"] ?? "",
      CONTACT_EMAIL_TO:
        process.env["CONTACT_EMAIL_TO"] ?? "contact@defacqz-medical.be",
    };
  }

  return result.data;
}

export const env = parseEnv();
