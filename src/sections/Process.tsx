import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const steps = [
  { n: "01", title: "Заявка", text: "Оставляете заявку — я отвечаю в течение часа." },
  { n: "02", title: "Обсуждение", text: "Созваниваемся, обсуждаем формат, гостей, атмосферу." },
  { n: "03", title: "Подготовка", text: "Готовлю индивидуальный сценарий и согласовываю детали." },
  { n: "04", title: "Проведение", text: "Безупречный вечер, который запомнится на годы." },
];

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Как мы работаем</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2">
              4 шага к <span className="text-accent">идеальному вечеру</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="card p-6 h-full group text-center"
              >
                <div className="font-display font-black text-4xl text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                  {s.n}
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
