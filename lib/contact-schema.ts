import { z } from "zod";

export const contactFormSchema = z.object({
  prenom: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long"),
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long"),
  telephone: z
    .string()
    .min(1, "Le numéro de téléphone est requis")
    .regex(
      /^[\d\s./\-()+ ]{7,20}$/,
      "Numéro de téléphone invalide"
    ),
  email: z.string().email("Adresse e-mail invalide"),
  motif: z.enum(
    [
      "epilepsie",
      "cephalees",
      "sclerose-en-plaques",
      "troubles-du-sommeil",
      "autre",
    ],
    { error: "Veuillez sélectionner un motif de consultation" }
  ),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message est trop long (2000 caractères maximum)"),
  consentement: z.literal(true, {
    error: "Vous devez accepter la politique de confidentialité",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const MOTIF_LABELS: Record<ContactFormData["motif"], string> = {
  epilepsie: "Épilepsie",
  cephalees: "Céphalées / Migraines",
  "sclerose-en-plaques": "Sclérose en plaques",
  "troubles-du-sommeil": "Troubles du sommeil",
  autre: "Autre",
};

export const MOTIF_OPTIONS = [
  { value: "epilepsie", label: "Épilepsie" },
  { value: "cephalees", label: "Céphalées / Migraines" },
  { value: "sclerose-en-plaques", label: "Sclérose en plaques" },
  { value: "troubles-du-sommeil", label: "Troubles du sommeil" },
  { value: "autre", label: "Autre" },
] as const;
