import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";
import { Award } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="about" className="relative py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <motion.div style={{ y: yImg }}>
          <Reveal>
            <div className="relative max-w-md mx-auto">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/vk/photo_457253454_26796928.jpg"
                  alt="Дмитрий Питерский — ведущий мероприятий"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 22%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-bg-card border border-white/10 rounded-xl px-5 py-4">
                <div className="font-display font-black text-3xl text-accent">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">лет на сцене</div>
              </div>
            </div>
          </Reveal>
        </motion.div>

        {/* Text */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">О ведущем</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mb-6">
              Привет, я — <span className="text-accent">Дмитрий</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/55 leading-relaxed mb-4">
              Ведущий из Санкт-Петербурга. Работаю в Москве, Петербурге и Краснодаре,
              летаю вести свадьбы по всей России — от Магнитогорска до Краснодара.
              Автор программы <span className="text-white/80 font-medium">«Свадебный движ»</span>,
              которую сегодня используют сотни ведущих в стране.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/55 leading-relaxed mb-8">
              Я не работаю по шаблону. Каждый вечер — это живая атмосфера, драйв и
              индивидуальный сценарий. Мой стиль — современная энергия, тонкий юмор
              и интерактивы, которые вовлекают гостей от 18 до 80 лет.
            </p>
          </Reveal>

          <ul className="space-y-3 mb-10">
            {[
              "Автор программы «Свадебный Движ»",
              "Основатель школы ведущих SUPERSTAR",
              "Мастер-классы в 24 городах России и СНГ",
              "Работаю с залами от 20 до 5 000+ гостей",
            ].map((p, i) => (
              <Reveal key={p} delay={0.25 + i * 0.05}>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-white/70 text-sm">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="btn-primary">
                Обсудить мероприятие
              </a>
              <a href="#school" className="btn-ghost group">
                <Award size={16} className="text-accent" />
                <span>Я ведущий — хочу на МК</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
