import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "О ведущем" },
  { href: "#services", label: "Услуги" },
  { href: "#video", label: "Видео" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#school", label: "Для ведущих" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-white/8 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center font-display font-black text-bg text-xs">
            ДП
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold text-sm text-white/90">Дмитрий Питерский</div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">ведущий мероприятий</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#booking" className="btn-primary !py-2.5 !px-5 !text-xs hidden sm:inline-flex">
            Забронировать
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
            aria-label="Меню"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-t border-white/8"
          >
            <nav className="container-x py-5 flex flex-col gap-1">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3"
              >
                Забронировать
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
