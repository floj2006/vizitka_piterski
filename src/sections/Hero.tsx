import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] flex items-center overflow-hidden pt-20"
    >
      {/* BG photo */}
      <motion.div style={{ y: yImg }} className="absolute inset-0 z-0">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%]">
          <img
            src="/images/vk/photo_457253454_26796928.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 18%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container-x relative z-10 lg:max-w-[60%] w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="eyebrow">Москва · СПб · Краснодар</span>
        </motion.div>

        <h1 className="font-display font-black text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight">
          {"Ведущий, который".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.06 }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-accent"
          >
            превращает вечер
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="inline-block"
          >
            в настоящий движ
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 text-base sm:text-lg text-white/50 max-w-lg"
        >
          Свадьбы · Корпоративы · Юбилеи · Выездные регистрации · Концерты
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#booking" className="btn-primary group">
            <span>Забронировать дату</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#video" className="btn-ghost group">
            <Play size={14} fill="currentColor" className="opacity-60" />
            <span>Смотреть видео</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 sm:mt-16 flex gap-10 sm:gap-14"
        >
          {[
            { n: "10+", l: "лет на сцене" },
            { n: "500+", l: "мероприятий" },
            { n: "24", l: "города" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-2xl sm:text-3xl text-white">
                {s.n}
              </div>
              <div className="text-xs uppercase tracking-[0.12em] text-white/35 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/8 bg-bg/80 backdrop-blur py-3 overflow-hidden z-[3]">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(3).fill([
            "Свадебный движ",
            "Только эмоции, только хардкор",
            "10+ лет на сцене",
            "500+ мероприятий",
            "24 города России и СНГ",
            "Школа SUPERSTAR",
          ]).flat().map((m, i) => (
            <span
              key={i}
              className="mx-6 text-xs text-white/30 flex items-center gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-accent/50" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
