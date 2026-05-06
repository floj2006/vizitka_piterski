import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal from "../components/Reveal";

type Review = {
  text: string;
  name: string;
  role: string;
};

const reviews: Review[] = [
  {
    text: "Дима, огромное СПАСИБО за нашу свадьбу, которая пролетела на одном дыхании, за твой профессионализм. Лодочка, фонтанчик навсегда в моём сердце.",
    name: "Невеста, свадьба 31.07",
    role: "Санкт-Петербург",
  },
  {
    text: "ДИМА ТЫ ПРОСТО КОСМОС! Все ведущие как ведущие, а ты СУПЕР ПУПЕР ЗВЕЗДА! 1 000 000 % попадание в яблочко. Интерактивы, фишки и игровые блоки — БОМБА И ПУШКА!",
    name: "Роман и Светлана",
    role: "Свадьба в Магнитогорске",
  },
  {
    text: "19.08 прошла наша свадьба. Долго не могли найти ведущего по внешнему виду, харизме, опыту. Увидев Диму, сразу поняли — наш. Здесь только эмоции, только хардкор!",
    name: "Молодожёны",
    role: "Свадьба, летний сезон",
  },
  {
    text: "Дима, спасибо, что ты стал частью нашей свадьбы! Банкет пролетел на ура, мы ничуть не пожалели, что выбрали именно тебя.",
    name: "Екатерина",
    role: "Выездная регистрация + банкет",
  },
  {
    text: "Работала с Димой на корпоративе — 120 человек ОТЖИГАЛИ, девчонки вставали на стулья, атмосфера огонь. Материал новый, рабочий, вдохновляющий.",
    name: "Олеся Яковлевич",
    role: "Корпоратив «Династия»",
  },
  {
    text: "Дима — настоящий мастер праздника. Объединить и сплотить разновозрастную толпу — это его талант. Программа современная, гости не видели такого!",
    name: "Семья Н.",
    role: "Юбилей, 80 гостей",
  },
  {
    text: "Это был лучший вечер в нашей жизни! Дима держал внимание всех гостей, от бабушки 80 лет до племянника 16.",
    name: "Лидия Зимина",
    role: "Девичник в ресторане",
  },
  {
    text: "Спасибо за тёплую и искреннюю атмосферу. Когда говорят «ведущий делает свадьбу», это точно про Диму.",
    name: "Анна и Павел",
    role: "Свадьба в Петербурге",
  },
];

export default function Reviews() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (d: number) => {
    setDir(d);
    setI((p) => (p + d + reviews.length) % reviews.length);
  };

  const current = reviews[i];

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12 sm:mb-14 text-center mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Отзывы</span>
              <span className="w-8 h-px bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mb-3">
              Эмоции <span className="text-accent">в словах</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/40 text-sm">
              Живые отзывы из сообщений после свадеб и корпоративов.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="card p-8 sm:p-12 lg:p-14 min-h-[280px] flex flex-col justify-between relative">
              <Quote
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/5"
                size={60}
                strokeWidth={1}
              />

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 30 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} className="text-accent" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-light text-white/85 mb-6">
                    «{current.text}»
                  </p>
                  <div>
                    <div className="font-display font-bold text-accent">{current.name}</div>
                    <div className="text-xs text-white/35 mt-0.5">{current.role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6 gap-4">
              <div className="flex gap-1.5 flex-wrap flex-1">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDir(idx > i ? 1 : -1);
                      setI(idx);
                    }}
                    className={`h-1 rounded-full transition-all ${
                      idx === i
                        ? "w-7 bg-accent"
                        : "w-4 bg-white/12 hover:bg-white/25"
                    }`}
                    aria-label={`Отзыв ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
                  aria-label="Предыдущий"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center hover:bg-accent-light transition-colors"
                  aria-label="Следующий"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
