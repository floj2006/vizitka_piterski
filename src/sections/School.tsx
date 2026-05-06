import { motion } from "framer-motion";
import { Zap, Video, Users, ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";

const perks = [
  { icon: Zap, title: "Свежие фишки", text: "Рабочие блоки, которые можно внедрить завтра на свадьбе." },
  { icon: Video, title: "Видео + разбор", text: "Прямой эфир с разбором программы и ответами на вопросы." },
  { icon: Users, title: "Сообщество", text: "Закрытый чат ведущих со всей России — поддержка и обмен." },
];

export default function School() {
  return (
    <section id="school" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="rounded-2xl border border-white/8 bg-bg-soft p-6 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-accent" />
                  <span className="eyebrow">Для ведущих</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="h2 mb-5">
                  Школа <span className="text-accent">SUPERSTAR</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-white/50 leading-relaxed mb-4">
                  Авторский мастер-класс для ведущих. Программа без воды — только
                  рабочие фишки для свадеб, юбилеев и выпускных.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-white/50 leading-relaxed mb-8">
                  Проходит выездом в <span className="text-white/70 font-medium">24 городах</span>,
                  а также в онлайн-формате с разбором от автора.
                </p>
              </Reveal>

              <div className="space-y-3 mb-10">
                {[
                  "Программа «Свадебный движ» — без баянов",
                  "Материалы для свадеб, юбилеев и выпускных",
                  "Доступ к закрытому сообществу ведущих",
                  "Прямые эфиры и разборы кейсов",
                ].map((p, i) => (
                  <Reveal key={p} delay={0.25 + i * 0.05}>
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                      </span>
                      <span className="text-white/65 text-sm">{p}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://vk.com/club63682123"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary group"
                  >
                    <span>Записаться на МК</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://vk.com/club63682123"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    Группа ВК
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right */}
            <div>
              <div className="space-y-3">
                {perks.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={p.title} delay={0.15 + i * 0.08}>
                      <motion.div
                        whileHover={{ x: -4 }}
                        className="card p-5 flex items-start gap-4 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} className="text-accent" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-base mb-1">{p.title}</div>
                          <div className="text-white/40 text-sm leading-relaxed">{p.text}</div>
                        </div>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.5}>
                <div className="mt-4 card p-5 flex items-center gap-5">
                  <div>
                    <div className="font-display font-black text-3xl text-accent">500+</div>
                    <div className="text-xs text-white/35 mt-1">учеников прошли МК</div>
                  </div>
                  <div className="flex -space-x-2">
                    {[
                      "/images/vk/photo_457253656_26796928.jpg",
                      "/images/vk/photo_457253294_26796928.jpg",
                      "/images/vk/photo_457253698_26796928.jpg",
                      "/images/vk/photo_457254228_26796928.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-9 h-9 rounded-full border-2 border-bg-soft object-cover"
                        style={{ objectPosition: "center 25%" }}
                      />
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-bg-soft bg-accent flex items-center justify-center text-bg font-bold text-xs">
                      +
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
