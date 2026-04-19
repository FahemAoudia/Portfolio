"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useLocale } from "@/contexts/LocaleProvider";

export function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const items = [
    { ...c.email, href: `mailto:${site.email}` },
    { ...c.github, href: site.github },
    { ...c.linkedin, href: site.linkedin },
  ];

  return (
    <section id="contact" className="relative scroll-mt-[7.5rem] py-16 sm:scroll-mt-28 sm:py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-medium text-cyan-400">{c.label}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {c.title}
            </h2>
            <p className="mt-4 text-base text-zinc-400 sm:text-lg">{c.intro}</p>
            <p className="mt-6 text-sm text-zinc-500">
              {c.phone}: <span className="text-zinc-300">{site.phone}</span>
            </p>
            <a
              href={site.cvPdf}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-500/40 hover:bg-white/[0.07]"
            >
              {t.nav.cv} (PDF)
            </a>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {items.map((it, i) => (
              <motion.a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.01 }}
                className="group flex min-h-[44px] items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-cyan-500/35 hover:bg-white/[0.05] sm:rounded-3xl sm:p-6"
              >
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {it.label}
                  </p>
                  <p className="mt-1 break-words text-base font-semibold text-white sm:text-lg">
                    {it.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{it.hint}</p>
                </div>
                <span className="shrink-0 text-2xl text-zinc-600 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
