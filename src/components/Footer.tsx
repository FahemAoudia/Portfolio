"use client";

import { site } from "@/lib/site";
import { useLocale } from "@/contexts/LocaleProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { locale, t } = useLocale();
  const location = locale === "fr" ? site.locationFr : site.locationEn;

  return (
    <footer className="border-t border-white/[0.06] py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-5">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            © {year} · {t.footer.crafted} — {location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
          <a href={site.github} className="hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {t.contact.email.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
