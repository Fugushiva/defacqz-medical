"use server";

import { Resend } from "resend";
import { env } from "@/lib/env";
import {
  contactFormSchema,
  MOTIF_LABELS,
  type ContactFormData,
} from "@/lib/contact-schema";

// TODO: Add rate limiting (e.g., Upstash Ratelimit) before production launch.
// Current MVP has no rate limiting on this endpoint.

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function sendContactForm(
  rawData: unknown
): Promise<ActionResult> {
  // Validate input
  const parsed = contactFormSchema.safeParse(rawData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return {
      success: false,
      error: firstError?.message ?? "Données invalides",
    };
  }

  const data = parsed.data;

  // Guard: no API key in dev → simulate success
  if (!env.RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set — simulating email send");
    return {
      success: true,
      message:
        "Votre demande a été envoyée. Nous vous contacterons dans les 24–48h ouvrées.",
    };
  }

  const resend = new Resend(env.RESEND_API_KEY);

  const emailHtml = buildEmailHtml(data);

  try {
    const { error } = await resend.emails.send({
      from: "Defacqz Medical Center <noreply@defacqz-medical.be>",
      to: [env.CONTACT_EMAIL_TO],
      replyTo: data.email,
      subject: `Demande de RDV — ${MOTIF_LABELS[data.motif]} — ${data.prenom} ${data.nom}`,
      html: emailHtml,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        success: false,
        error:
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement.",
      };
    }

    return {
      success: true,
      message:
        "Votre demande a été envoyée. Nous vous contacterons dans les 24–48h ouvrées.",
    };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      success: false,
      error:
        "Une erreur inattendue est survenue. Veuillez réessayer ou nous appeler directement.",
    };
  }
}

function buildEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouvelle demande de rendez-vous</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <h1 style="color: #2d6a6a; font-size: 1.5rem; margin-bottom: 1rem;">
    Nouvelle demande de rendez-vous
  </h1>
  <p style="color: #666; margin-bottom: 1.5rem;">
    Reçue via le formulaire de contact du Defacqz Medical Center 125.
  </p>

  <table style="width: 100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid #e5e5e5;">
      <td style="padding: 10px 0; font-weight: bold; width: 40%;">Prénom</td>
      <td style="padding: 10px 0;">${escapeHtml(data.prenom)}</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e5e5;">
      <td style="padding: 10px 0; font-weight: bold;">Nom</td>
      <td style="padding: 10px 0;">${escapeHtml(data.nom)}</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e5e5;">
      <td style="padding: 10px 0; font-weight: bold;">Téléphone</td>
      <td style="padding: 10px 0;">${escapeHtml(data.telephone)}</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e5e5;">
      <td style="padding: 10px 0; font-weight: bold;">E-mail</td>
      <td style="padding: 10px 0;">
        <a href="mailto:${escapeHtml(data.email)}" style="color: #2d6a6a;">
          ${escapeHtml(data.email)}
        </a>
      </td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e5e5;">
      <td style="padding: 10px 0; font-weight: bold;">Motif</td>
      <td style="padding: 10px 0;">${MOTIF_LABELS[data.motif]}</td>
    </tr>
    <tr>
      <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td>
      <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
    </tr>
  </table>

  <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #e5e5e5;" />
  <p style="color: #999; font-size: 0.875rem;">
    Consentement RGPD : accordé lors de l'envoi du formulaire.<br />
    Defacqz Medical Center 125 — Rue Defacqz 125, 1060 Saint-Gilles
  </p>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
