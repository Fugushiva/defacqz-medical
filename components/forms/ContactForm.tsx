"use client";

import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { sendContactForm } from "@/app/contact/actions";
import {
  contactFormSchema,
  MOTIF_OPTIONS,
  type ContactFormData,
} from "@/lib/contact-schema";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─── Accessible field wrapper ────────────────────────────────────────────────

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, required, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-neutral-900"
      >
        {label}
        {required && (
          <span className="ml-1 text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            id={errorId}
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-xs text-error font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Input styles ─────────────────────────────────────────────────────────────

const inputBase =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:border-brand-primary aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/30 disabled:opacity-50 disabled:cursor-not-allowed";

// ─── Confirmation modal ───────────────────────────────────────────────────────

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
}

function ConfirmationModal({ open, onClose }: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
      aria-describedby="confirmation-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2
              className="size-8 text-success"
              aria-hidden="true"
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h2
              id="confirmation-title"
              className="font-heading text-xl font-semibold text-neutral-900 mb-2"
            >
              Demande envoyée !
            </h2>
            <p id="confirmation-desc" className="text-neutral-600 text-sm leading-relaxed">
              Votre demande a été envoyée avec succès. Nous vous contacterons
              dans les <strong>24–48h ouvrées</strong> pour confirmer votre
              rendez-vous.
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────

export function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      telephone: "",
      email: "",
      motif: undefined,
      message: "",
      consentement: undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await sendContactForm(data);

    if (result.success) {
      toast.success("Demande envoyée !", {
        description: result.message,
        duration: 6000,
      });
      setShowModal(true);
      reset();
    } else {
      toast.error("Erreur lors de l'envoi", {
        description: result.error,
        duration: 8000,
        action: {
          label: "Réessayer",
          onClick: () => handleSubmit(onSubmit)(),
        },
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <ConfirmationModal
            open={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>

      <motion.form
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Formulaire de demande de rendez-vous"
        className="space-y-6"
      >
        {/* Row: Prénom + Nom */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <Field
            id={id("prenom")}
            label="Prénom"
            error={errors.prenom?.message}
            required
          >
            <input
              id={id("prenom")}
              type="text"
              autoComplete="given-name"
              placeholder="Marie"
              aria-required="true"
              aria-invalid={!!errors.prenom}
              aria-describedby={errors.prenom ? `${id("prenom")}-error` : undefined}
              className={inputBase}
              disabled={isSubmitting}
              {...register("prenom")}
            />
          </Field>

          <Field
            id={id("nom")}
            label="Nom"
            error={errors.nom?.message}
            required
          >
            <input
              id={id("nom")}
              type="text"
              autoComplete="family-name"
              placeholder="Dupont"
              aria-required="true"
              aria-invalid={!!errors.nom}
              aria-describedby={errors.nom ? `${id("nom")}-error` : undefined}
              className={inputBase}
              disabled={isSubmitting}
              {...register("nom")}
            />
          </Field>
        </motion.div>

        {/* Row: Téléphone + Email */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <Field
            id={id("telephone")}
            label="Téléphone"
            error={errors.telephone?.message}
            required
          >
            <input
              id={id("telephone")}
              type="tel"
              autoComplete="tel"
              placeholder="02/555.12.34"
              aria-required="true"
              aria-invalid={!!errors.telephone}
              aria-describedby={
                errors.telephone ? `${id("telephone")}-error` : undefined
              }
              className={inputBase}
              disabled={isSubmitting}
              {...register("telephone")}
            />
          </Field>

          <Field
            id={id("email")}
            label="E-mail"
            error={errors.email?.message}
            required
          >
            <input
              id={id("email")}
              type="email"
              autoComplete="email"
              placeholder="marie.dupont@exemple.be"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${id("email")}-error` : undefined}
              className={inputBase}
              disabled={isSubmitting}
              {...register("email")}
            />
          </Field>
        </motion.div>

        {/* Motif */}
        <motion.div variants={fadeUpVariants}>
          <Field
            id={id("motif")}
            label="Motif de consultation"
            error={errors.motif?.message}
            required
          >
            <select
              id={id("motif")}
              aria-required="true"
              aria-invalid={!!errors.motif}
              aria-describedby={errors.motif ? `${id("motif")}-error` : undefined}
              className={cn(inputBase, "cursor-pointer")}
              disabled={isSubmitting}
              defaultValue=""
              {...register("motif")}
            >
              <option value="" disabled>
                Sélectionnez un motif…
              </option>
              {MOTIF_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUpVariants}>
          <Field
            id={id("message")}
            label="Message"
            error={errors.message?.message}
            required
          >
            <textarea
              id={id("message")}
              rows={5}
              placeholder="Décrivez brièvement vos symptômes ou votre demande…"
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? `${id("message")}-error` : undefined
              }
              className={cn(inputBase, "resize-y min-h-[120px]")}
              disabled={isSubmitting}
              {...register("message")}
            />
          </Field>
        </motion.div>

        {/* Consentement RGPD */}
        <motion.div variants={fadeUpVariants}>
          <div className="flex items-start gap-3">
            <input
              id={id("consentement")}
              type="checkbox"
              aria-required="true"
              aria-invalid={!!errors.consentement}
              aria-describedby={
                errors.consentement
                  ? `${id("consentement")}-error`
                  : `${id("consentement")}-hint`
              }
              className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-neutral-300 text-brand-primary accent-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:opacity-50"
              disabled={isSubmitting}
              {...register("consentement")}
            />
            <div className="flex flex-col gap-1">
              <label
                htmlFor={id("consentement")}
                className="text-sm text-neutral-700 cursor-pointer leading-relaxed"
              >
                J&apos;accepte que mes données personnelles soient traitées par
                le Defacqz Medical Center 125 dans le but de traiter ma demande
                de rendez-vous, conformément à la{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  politique de confidentialité
                </a>
                .{" "}
                <span className="text-error" aria-hidden="true">
                  *
                </span>
              </label>
              <p
                id={`${id("consentement")}-hint`}
                className="text-xs text-neutral-400"
              >
                Vos données ne seront jamais partagées avec des tiers.
              </p>
              <AnimatePresence mode="wait">
                {errors.consentement && (
                  <motion.p
                    id={`${id("consentement")}-error`}
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="text-xs text-error font-medium"
                  >
                    {errors.consentement.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={fadeUpVariants}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full sm:w-auto inline-flex items-center gap-2 rounded-lg bg-brand-primary px-8 py-3 text-sm font-semibold text-white transition-all",
              "hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                <span>Envoi en cours…</span>
              </>
            ) : (
              <>
                <Send className="size-4" aria-hidden="true" />
                <span>Envoyer ma demande</span>
              </>
            )}
          </Button>

          <p className="mt-3 text-xs text-neutral-400">
            <span aria-hidden="true">* </span>Champs obligatoires — Réponse
            sous 24–48h ouvrées.
          </p>
        </motion.div>
      </motion.form>
    </>
  );
}
