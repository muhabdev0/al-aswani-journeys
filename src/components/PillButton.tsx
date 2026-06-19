import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

export function PillButton({
  children,
  variant = "dark",
  href,
  className,
  icon = true,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
  href?: string;
  className?: string;
  icon?: boolean;
}) {
  const { dir } = useLang();
  const Comp: any = href ? "a" : "button";
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Comp
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide shadow-[0_8px_24px_-10px_rgba(40,30,15,0.45)] transition-colors",
          variant === "dark"
            ? "bg-primary text-primary-foreground hover:bg-accent"
            : "bg-paper text-ink hover:bg-paper-warm",
          className,
        )}
      >
        <span>{children}</span>
        {icon && (
          <ArrowRight
            className={cn(
              "h-4 w-4 transition-transform group-hover:translate-x-1",
              dir === "rtl" && "rotate-180 group-hover:-translate-x-1",
            )}
          />
        )}
      </Comp>
    </motion.div>
  );
}

export function PhoneLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href="tel:+31644444226"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-opacity hover:opacity-70",
        light ? "text-paper" : "text-ink",
      )}
      dir="ltr"
    >
      <Phone className="h-4 w-4" />
      +31 6 44444226
    </a>
  );
}
