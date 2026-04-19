"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleProvider";
import type { Translation } from "@/lib/i18n";

function matchReply(input: string, t: Translation): string {
  const q = input.toLowerCase().trim();
  const r = t.chatbot.replies;
  if (/(hi|hello|hey|bonjour|salut|bonsoir)/.test(q)) return r.hello;
  if (/(project|projets?)/.test(q)) return r.projects;
  if (/(stack|tech|skill|compétence|competence)/.test(q)) return r.stack;
  if (/(contact|email|courriel|reach|linkedin|github)/.test(q)) return r.contact;
  if (/(hire|embauche|recrut|job|work|travail|interview)/.test(q)) return r.hire;
  return r.default;
}

export function AIChatDemo() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [draft, setDraft] = useState("");

  const hello = t.chatbot.replies.hello;

  useEffect(() => {
    setMessages([{ role: "assistant", text: hello }]);
  }, [locale, hello]);

  const quick = useMemo(() => [...t.chatbot.quick], [t.chatbot.quick]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    const reply = matchReply(trimmed, t);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    }, 280);
    setDraft("");
  };

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[90] flex max-w-[100vw] flex-col items-end gap-3 p-1">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="glass w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-white/10 shadow-glass"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="min-w-0 pr-2">
                <p className="text-sm font-semibold text-white">{t.chatbot.title}</p>
                <p className="text-xs text-zinc-400">{t.chatbot.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-lg px-2 py-1 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                {t.chatbot.close}
              </button>
            </div>
            <div className="max-h-[min(50vh,320px)] space-y-3 overflow-y-auto overscroll-contain px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={`${i}-${m.text.slice(0, 12)}`}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-cyan-500/15 text-cyan-50 ring-1 ring-cyan-500/25"
                        : "bg-white/[0.06] text-zinc-100 ring-1 ring-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
              {quick.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2 border-t border-white/10 p-3"
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={t.chatbot.placeholder}
                className="min-h-[44px] min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-cyan-500/40"
              />
              <button
                type="submit"
                className="min-h-[44px] shrink-0 rounded-xl bg-gradient-to-r from-cyan-500/90 to-violet-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                {t.chatbot.send}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((v) => !v)}
        className="glass group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/15 shadow-glass"
        aria-label={open ? t.chatbot.closeAssistant : t.chatbot.open}
      >
        <span className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-cyan-400/30 via-violet-400/20 to-transparent opacity-0 blur-xl transition group-hover:opacity-100" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7 text-cyan-200" fill="none" aria-hidden>
          <path
            d="M12 3v3m0 12v3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M3 12h3m12 0h3M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.button>
    </div>
  );
}
