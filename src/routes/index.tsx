import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  MapPinned,
  CarFront,
  UserRound,
  BedDouble,
  Quote,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";
import { LanguageProvider, useLang } from "@/lib/language";
import { Header } from "@/components/Header";
import { PillButton, PhoneLink } from "@/components/PillButton";
import { TornEdge } from "@/components/TornEdge";

import heroScene from "@/assets/hero-scene.png";
import manGrass from "@/assets/man-grass.png";
import manGrassEn from "@/assets/man-grassEn.png";
import promiseBg from "@/assets/promise-bg.jpg";
import footerScene from "@/assets/footer-scene.jpg";
import cardTrips from "@/assets/card-trips.jpg";
import cardTransport from "@/assets/card-transport.jpg";
import cardDrivers from "@/assets/card-drivers.jpg";
import cardHotel from "@/assets/card-hotel.jpg";
import avatarKhalid from "@/assets/avatar-khalid.jpg";
import avatarLayla from "@/assets/avatar-layla.jpg";
import avatarOmar from "@/assets/avatar-omar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Aswani — Premium Travel & Transport across Europe" },
      {
        name: "description",
        content:
          "Al-Aswani offers curated tourist trips, reliable transportation, Arabic-speaking chauffeurs, and hotel booking from the Netherlands across Europe.",
      },
      { property: "og:title", content: "Al-Aswani — Travel & Transport across Europe" },
      {
        property: "og:description",
        content:
          "Curated European journeys, trusted transport, and Arabic-speaking drivers. Plan your trip with Al-Aswani.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: promiseBg },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
      {children}
    </span>
  );
}

function Content() {
  const { t, dir, lang } = useLang();

  return (
    <div id="top" dir={dir} className="overflow-x-hidden bg-paper">
      <Header />

      {/* 1. HERO */}
      <section className="relative min-h-[100svh] bg-gradient-to-b from-sky-soft to-sky px-5 pt-28 md:px-10">
        <div className="pointer-events-none absolute right-[8%] top-24 h-24 w-24 rounded-full bg-paper/40 blur-xl" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 pb-40 pt-8 md:grid-cols-2 md:gap-16 md:pt-16 lg:gap-20">
          <div className="flex min-w-0 flex-col gap-6 items-center text-center md:items-start md:justify-center md:gap-8 md:py-6 md:text-start lg:gap-10 lg:py-8">
            <Reveal>
              <Kicker>{t.hero.kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
                <span className="block whitespace-nowrap">{t.hero.titleLine1}</span>
                <span className="block whitespace-nowrap">{t.hero.titleLine2}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-ink/75 md:max-w-none md:text-lg lg:text-xl">
                {t.hero.desc}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <PillButton href="#contact">{t.hero.cta}</PillButton>
                <PhoneLink />
              </div>
            </Reveal>
          </div>

          <div className="flex min-w-0 items-center justify-center md:justify-start md:py-6 lg:py-8">
            <motion.img
              src={heroScene}
              alt={dir === "rtl" ? "مشهد طبيعي: شجرة ومنزل صغير على تلة" : "Scenic cutout of a tree and small house on a hill"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              width={1280}
              height={960}
              className="cutout-shadow float-soft w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
        <TornEdge color="var(--sky)" />
      </section>

      {/* 2. FIND YOUR PERFECT TRIP */}
      <section className="relative bg-paper px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal className="text-start">
            <Kicker>{t.find.kicker}</Kicker>
            <h2 className="text-4xl leading-tight text-ink md:text-5xl">{t.find.title}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">{t.find.desc}</p>
            <ul className="mt-8 space-y-3 text-sm text-ink/80">
              {[t.find.point1, t.find.point2].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto">
            <div className="float-soft relative rounded-[2rem] border-[10px] border-card bg-card p-1 shadow-[0_30px_60px_-30px_rgba(40,30,15,0.4)] [transform:rotate(-3deg)]">
              <img
                src={cardTrips}
                alt={dir === "rtl" ? "زقاق أوروبي قديم ملوّن" : "Colorful old European street"}
                loading="lazy"
                width={820}
                height={1024}
                className="h-[420px] w-[300px] rounded-[1.4rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 end-[-2rem] rounded-2xl border-[8px] border-card bg-card shadow-xl [transform:rotate(5deg)]">
              <img
                src={cardHotel}
                alt={dir === "rtl" ? "غرفة فندق أنيقة" : "Elegant hotel room"}
                loading="lazy"
                width={820}
                height={1024}
                className="h-32 w-44 rounded-xl object-cover"
              />
            </div>
          </Reveal>
        </div>
        <TornEdge color="var(--paper)" />
      </section>

      {/* 3. SERVICES / PACKAGES */}
      <section id="services" className="relative bg-sky-soft px-5 py-24 md:px-10 md:py-36">
        <div id="packages" className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <Kicker>{t.services.kicker}</Kicker>
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight text-ink md:text-5xl">
              {t.services.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((item, i) => {
              const imgs = [cardTrips, cardTransport, cardDrivers, cardHotel];
              const icons = [MapPinned, CarFront, UserRound, BedDouble];
              const Icon = icons[i];
              const tilt = [-2.5, 2, -1.5, 2.5][i];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <motion.article
                    whileHover={{ y: -10, rotate: 0 }}
                    style={{ rotate: `${tilt}deg` }}
                    className="group h-full rounded-[1.6rem] border-[7px] border-card bg-card p-2 shadow-[0_22px_44px_-26px_rgba(40,30,15,0.5)]"
                  >
                    <div className="overflow-hidden rounded-[1.1rem]">
                      <img
                        src={imgs[i]}
                        alt={item.title}
                        loading="lazy"
                        width={820}
                        height={1024}
                        className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-3 pb-4 pt-4 text-start">
                      <Icon className="mb-3 h-6 w-6 text-accent" />
                      <h3 className="text-2xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
        <TornEdge color="var(--sky-soft)" />
      </section>

      {/* 4. LIFESTYLE / HUMAN MOMENT */}
      <section
        id="lifestyle"
        className="relative bg-grass px-5 py-24 md:px-10 md:py-36"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-md text-start">
            <h2 className="text-5xl leading-[1.05] text-paper md:text-6xl">{t.lifestyle.title}</h2>
            <p className="mt-3 font-serif text-3xl italic text-paper/90 md:text-4xl">
              {t.lifestyle.sub}
            </p>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/80">
              {t.lifestyle.desc}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative w-full max-w-xl">
            <img
              src={lang === "en" ? manGrassEn : manGrass}
              alt={
                dir === "rtl"
                  ? "رجل مسترخٍ مستلقٍ على العشب وحذاؤه ظاهر"
                  : "A relaxed man lying back on the grass with his shoes visible"
              }
              loading="lazy"
              width={1600}
              height={900}
              className="cutout-shadow float-soft w-full"
            />
          </Reveal>
        </div>
        <TornEdge color="var(--grass)" />
      </section>

      {/* 5. BRAND PROMISE */}
      <section
        className="relative bg-cover bg-center px-5 py-28 md:px-10 md:py-40"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(20,30,40,0.28), rgba(20,30,40,0.5)), url(${promiseBg})` }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Kicker>{t.promise.kicker}</Kicker>
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight text-paper md:text-5xl">
              {t.promise.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 text-start sm:grid-cols-2">
            {t.promise.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.07}>
                <div className="flex items-start gap-3 rounded-2xl bg-paper/90 px-5 py-4 shadow-lg backdrop-blur">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-ink">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <div className="mt-10 flex justify-center">
              <PillButton href="#contact" variant="light">
                {t.promise.cta}
              </PillButton>
            </div>
          </Reveal>
        </div>
        <TornEdge color="var(--paper)" className="!bottom-0" />
      </section>

      {/* 6. STORIES / TESTIMONIALS */}
      <section id="stories" className="relative bg-paper px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <Kicker>{t.stories.kicker}</Kicker>
            <h2 className="text-4xl text-ink md:text-5xl">{t.stories.title}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.stories.items.map((item, i) => {
              const avatars = [avatarKhalid, avatarLayla, avatarOmar];
              const tilt = [-1.5, 1.5, -1][i];
              return (
                <Reveal key={item.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, rotate: 0 }}
                    style={{ rotate: `${tilt}deg` }}
                    className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-7 shadow-[0_20px_44px_-28px_rgba(40,30,15,0.5)]"
                  >
                    <Quote className="h-7 w-7 text-sand" />
                    <p className="mt-4 flex-1 text-start text-base leading-relaxed text-ink/80">
                      {item.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-start">
                      <img
                        src={avatars[i]}
                        alt={item.name}
                        loading="lazy"
                        width={640}
                        height={640}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-ink">{item.name}</p>
                        <p className="text-xs text-muted-foreground" dir="ltr">{item.place}</p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <TornEdge color="var(--paper)" />
      </section>

      {/* 7. FINAL CTA / FOOTER */}
      <footer
        id="contact"
        className="relative bg-cover bg-center px-5 pt-28 md:px-10 md:pt-40"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(20,28,38,0.55), rgba(20,28,38,0.78)), url(${footerScene})` }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance text-4xl leading-tight text-paper md:text-6xl">
              {t.footer.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/80">
              {t.footer.desc}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PillButton href="tel:+31644444226" variant="light">
                {t.footer.cta}
              </PillButton>
              <div className="text-paper">
                <PhoneLink light />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 max-w-6xl border-t border-paper/20 py-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-start">
            <div>
              <p className="font-serif text-2xl text-paper">{t.brand}</p>
              <p className="mt-1 text-sm text-paper/70">{t.footer.based}</p>
            </div>
            <div className="flex items-center gap-4 text-paper/85">
              <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-60">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-60">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/31644444226" aria-label="WhatsApp" className="transition-opacity hover:opacity-60">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-paper/50">
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
