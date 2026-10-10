"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";

type Props = { endpoint: string };
type SubmissionError = { field?: string; message?: string };

const inputClass =
  "w-full min-w-0 rounded border border-goldline bg-warm px-4 py-3 font-normal text-walnut outline-none transition focus:border-champagne focus:ring-2 focus:ring-champagne/20 disabled:opacity-60";

export default function ContactForm({ endpoint }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const submitting = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setFieldErrors({});
    if (!configured) {
      setStatus("error");
      setMessage("L'envoi du formulaire n'est pas encore disponible. Contactez-nous par telephone ou par e-mail.");
      return;
    }

    const data = new FormData(form);
    submitting.current = true;
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null) as { errors?: SubmissionError[] } | null;
        const errors: Record<string, string> = {};
        for (const error of body?.errors ?? []) {
          if (error.field) errors[error.field] = "Veuillez verifier ce champ.";
        }
        setFieldErrors(errors);
        setStatus("error");
        setMessage(response.status === 429
          ? "Trop de demandes ont ete envoyees. Patientez avant de reessayer ou contactez-nous directement."
          : "Votre demande n'a pas pu etre envoyee. Verifiez les champs et reessayez, ou contactez-nous directement.");
        return;
      }
      form.reset();
      setStatus("success");
      setMessage("Merci, votre demande a bien ete envoyee. Nous vous recontacterons pour echanger sur votre projet.");
    } catch {
      setStatus("error");
      setMessage("Nous n'avons pas pu confirmer l'envoi. Verifiez votre connexion ou contactez-nous directement.");
    } finally {
      submitting.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  }

  function errorFor(name: string) {
    return fieldErrors[name] ? <span id={`${name}-error`} className="text-sm font-normal text-red-800">{fieldErrors[name]}</span> : null;
  }

  return (
    <form action={configured ? endpoint : undefined} method="POST" onSubmit={handleSubmit}
      className="min-w-0 border-t border-goldline pt-6 lg:pt-0 lg:border-t-0" aria-busy={status === "sending"}>
      <h2 className="font-display text-3xl font-semibold">Votre projet</h2>
      <p className="mt-2 text-sm leading-6 text-taupe">Les champs marques d&apos;un * sont obligatoires.</p>
      <input type="hidden" name="_subject" value={`Nouvelle demande de contact - ${siteConfig.name}`} />
      <div hidden aria-hidden="true"><label>Ne pas remplir<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <fieldset disabled={status === "sending"} className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Nom et prenom *
          <input name="name" autoComplete="name" required maxLength={120} className={inputClass}
            aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
          {errorFor("name")}
        </label>
        <label className="grid gap-2 text-sm font-bold">
          E-mail *
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass}
            aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
          {errorFor("email")}
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Telephone
          <input name="phone" type="tel" autoComplete="tel" maxLength={30} className={inputClass}
            aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
          {errorFor("phone")}
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Ville du chantier *
          <input name="city" autoComplete="address-level2" required maxLength={120} className={inputClass}
            aria-invalid={Boolean(fieldErrors.city)} aria-describedby={fieldErrors.city ? "city-error" : undefined} />
          {errorFor("city")}
        </label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">
          Type de travaux *
          <select name="work_type" required defaultValue="" className={inputClass}
            aria-invalid={Boolean(fieldErrors.work_type)} aria-describedby={fieldErrors.work_type ? "work_type-error" : undefined}>
            <option value="" disabled>Choisir une prestation</option>
            <option>Cloisons et doublages</option><option>Faux plafonds</option>
            <option>Isolation interieure</option><option>Bandes et enduits</option>
            <option>Amenagement des combles</option><option>Peinture interieure</option>
            <option>Finitions sur mesure</option><option>Autre demande</option>
          </select>
          {errorFor("work_type")}
        </label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">
          Votre message *
          <textarea name="message" required maxLength={5000} rows={6} className={`${inputClass} resize-y`}
            placeholder="Travaux envisages, surface approximative, delai souhaite..."
            aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "message-error" : undefined} />
          {errorFor("message")}
        </label>
        <p className="text-sm leading-6 text-taupe sm:col-span-2">
          Vos coordonnees seront utilisees pour repondre a votre demande.
          {" "}<Link href="/confidentialite" className="underline underline-offset-4">Politique de confidentialite</Link>
        </p>
        <button type="submit" disabled={!configured || status === "sending"}
          className="min-h-12 w-full rounded bg-champagne px-6 py-3.5 font-bold text-white transition hover:bg-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
          {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </fieldset>
      {!configured && <p className="mt-4 text-sm leading-6 text-taupe">Le formulaire sera disponible prochainement. Vous pouvez nous joindre par telephone ou par e-mail.</p>}
      <div ref={feedback} tabIndex={-1} aria-live="polite" aria-atomic="true" className="mt-4 outline-none">
        {message && <p className={`border-l-4 p-4 text-sm leading-6 ${status === "success" ? "border-green-700 bg-green-50 text-green-900" : "border-red-700 bg-red-50 text-red-900"}`}>{message}</p>}
      </div>
    </form>
  );
}
