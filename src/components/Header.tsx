import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Header() {
  const { t, dir, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#packages", label: t.nav.packages },
    { href: "#lifestyle", label: t.nav.lifestyle },
    { href: "#stories", label: t.nav.stories },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <a href="#top" className="shrink-0">
          <img
            src={logo}
            alt="Al Aswani Tourism & Transport"
            className="h-10 w-auto rounded-md md:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper/70 px-3.5 py-2 text-xs font-semibold tracking-wide text-ink backdrop-blur transition-colors hover:bg-paper"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={cn(lang === "en" && "text-accent")}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={cn(lang === "ar" && "text-accent")} dir="rtl">ع</span>
          </button>
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Menu"
            className="inline-flex rounded-full border border-border bg-paper/70 p-2.5 text-ink backdrop-blur lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 rounded-3xl border border-border bg-paper/95 p-5 shadow-xl backdrop-blur lg:hidden"
            dir={dir}
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-base font-medium text-ink/90 transition-colors hover:bg-paper-warm"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
