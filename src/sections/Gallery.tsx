import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

type Category = "all" | "wedding" | "corporate" | "party";

type Photo = {
  src: string;
  alt: string;
  cat: Exclude<Category, "all">;
  pos?: string;
};

const photos: Photo[] = [
  { src: "/images/vk/photo_457248628_74575341.jpg", alt: "Выездная регистрация",  cat: "wedding", pos: "center 25%" },
  { src: "/images/vk/photo_457253603_26796928.jpg", alt: "Свадебный банкет",       cat: "wedding", pos: "center 25%" },
  { src: "/images/vk/photo_457253639_26796928.jpg", alt: "Свадьба у бара",         cat: "wedding", pos: "center 35%" },
  { src: "/images/vk/photo_457254518_26796928.jpg", alt: "Танцпол на свадьбе",     cat: "wedding", pos: "center 30%" },
  { src: "/images/vk/photo_457250412_17575058.jpg", alt: "Свадьба в Петербурге",   cat: "wedding", pos: "center 40%" },
  { src: "/images/vk/photo_457253129_26796928.jpg", alt: "Свадебная программа",    cat: "wedding", pos: "center 30%" },
  { src: "/images/vk/photo_457253597_26796928.jpg", alt: "Свадебный момент",       cat: "wedding", pos: "center 30%" },
  { src: "/images/vk/photo_457253701_26796928.jpg", alt: "Свадебный фуршет",       cat: "wedding", pos: "center 30%" },
  { src: "/images/vk/photo_457245551_30423360.jpg", alt: "Свадебная сцена",        cat: "wedding", pos: "center 30%" },
  { src: "/images/vk/photo_457253590_26796928.jpg", alt: "Корпоратив",             cat: "corporate", pos: "center 25%" },
  { src: "/images/vk/photo_457253698_26796928.jpg", alt: "Интерактив на корпоративе", cat: "corporate", pos: "center 35%" },
  { src: "/images/vk/photo_457253164_26796928.jpg", alt: "Юбилей",                 cat: "corporate", pos: "center 25%" },
  { src: "/images/vk/photo_457250449_38624989.jpg", alt: "Корпоративный праздник", cat: "corporate", pos: "center 30%" },
  { src: "/images/vk/photo_457254228_26796928.jpg", alt: "Disco-вечеринка с шарами", cat: "party", pos: "center 35%" },
  { src: "/images/vk/photo_457253786_26796928.jpg", alt: "Девичник",               cat: "party", pos: "center 25%" },
  { src: "/images/vk/photo_457253277_26796928.jpg", alt: "Праздник у моря",         cat: "party", pos: "center 35%" },
  { src: "/images/vk/photo_457250925_152335927.jpg", alt: "Праздничная сцена",     cat: "party", pos: "center 30%" },
  { src: "/images/vk/photo_457251764_212245324.jpg", alt: "Праздничный банкет",    cat: "party", pos: "center 30%" },
];

const filters: { id: Category; label: string }[] = [
  { id: "all",       label: "Все" },
  { id: "wedding",   label: "Свадьбы" },
  { id: "corporate", label: "Корпоративы" },
  { id: "party",     label: "Праздники" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("all");
  const visible = active === "all" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Моменты праздника</span>
              <span className="w-8 h-px bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mb-3">
              Фото-<span className="text-accent">хроника</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/40 text-sm max-w-md">
              Реальные кадры со свадеб, корпоративов и юбилеев.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  active === f.id
                    ? "bg-accent text-bg"
                    : "border border-white/10 text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
        >
          {visible.map((p, i) => (
            <motion.div
              key={p.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.03 }}
              className="aspect-[4/5]"
            >
              <a
                href={p.src}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl w-full h-full"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: p.pos ?? "center 30%" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
