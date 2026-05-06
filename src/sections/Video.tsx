import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Свадьба у моря",
    sub: "Санкт-Петербург · «Свадебный движ»",
    img: "/images/vk/photo_457253277_26796928.jpg",
    pos: "center 35%",
    big: true,
  },
  {
    title: "Disco-корпоратив",
    sub: "Зеркальные артисты · шары",
    img: "/images/vk/photo_457254228_26796928.jpg",
    pos: "center 35%",
  },
  {
    title: "Танцпол на свадьбе",
    sub: "Гости отжигают",
    img: "/images/vk/photo_457254518_26796928.jpg",
    pos: "center 25%",
  },
  {
    title: "Фотозона · Владивосток",
    sub: "Тур 2024 · 24 города",
    img: "/images/vk/photo_457254400_26796928.jpg",
    pos: "center",
  },
];

export default function Video() {
  return (
    <section id="video" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="eyebrow">Живые выступления</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2">
                Смотреть <span className="text-accent">в движении</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a href="#gallery" className="btn-ghost">
              Смотреть все
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] sm:auto-rows-[260px] md:auto-rows-[280px]">
          {videos.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.08}
              className={v.big ? "md:col-span-2 md:row-span-2 !h-full" : ""}
            >
              <motion.a
                href="#"
                whileHover="hover"
                className="group relative block rounded-2xl overflow-hidden h-full"
              >
                <motion.img
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.5 }}
                  src={v.img}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: v.pos ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Play size={22} className="text-white translate-x-0.5" fill="currentColor" />
                </div>

                <div className="absolute left-5 bottom-5 right-5">
                  <div className="font-display font-bold text-lg mb-0.5">{v.title}</div>
                  <div className="text-xs text-white/45">{v.sub}</div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
