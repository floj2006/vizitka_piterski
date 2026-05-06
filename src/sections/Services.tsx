import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { Heart, Building2, Cake, Mic2, GlassWater, Sunset, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Свадьбы",
    text: "«Свадебный движ» — авторская программа с трогательными и драйвовыми моментами.",
    tag: "топ",
  },
  {
    icon: Sunset,
    title: "Выездные регистрации",
    text: "Дневные, вечерние и ночные выездные. Самые живые и нестандартные.",
    tag: "новое",
  },
  {
    icon: Building2,
    title: "Корпоративы",
    text: "Драйв, нетворкинг, вау-формат. Работал с корпоративами от 50 до 500+ гостей.",
  },
  {
    icon: Cake,
    title: "Юбилеи",
    text: "Камерный формат или масштабно. Веду юбилеи частные и корпоративные.",
  },
  {
    icon: Mic2,
    title: "Концерты",
    text: "Опыт работы с большими залами. Держу ритм, энергию и внимание публики.",
  },
  {
    icon: GlassWater,
    title: "Частные события",
    text: "Помолвки, закрытые вечеринки, дни рождения. Только по рекомендации.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Что я провожу</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mb-4">
              Услуги <span className="text-accent">ведущего</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/45">
              Любое мероприятие превращаю в яркое шоу с сильной эмоцией и безупречным таймингом.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="card p-6 sm:p-7 h-full group cursor-pointer relative"
                >
                  {s.tag && (
                    <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] uppercase tracking-widest font-semibold">
                      {s.tag}
                    </span>
                  )}

                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                    <Icon size={20} className="text-white/60 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {s.text}
                  </p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-xs text-white/30 group-hover:text-accent transition-colors"
                  >
                    <span>Обсудить</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
