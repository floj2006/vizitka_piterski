import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { Target, Flame, Music4, Gem } from "lucide-react";

const counters = [
  { to: 10, suffix: "+", label: "лет опыта на сцене" },
  { to: 500, suffix: "+", label: "проведённых событий" },
  { to: 24, suffix: "", label: "городов России и СНГ" },
  { to: 98, suffix: "%", label: "клиентов рекомендуют" },
];

const cards = [
  {
    icon: Target,
    title: "Авторский сценарий",
    text: "Готовлю программу под вашу историю — без шаблонов, только «Свадебный движ».",
  },
  {
    icon: Flame,
    title: "Держу зал",
    text: "Работаю с любой публикой — от 20 близких до 500+ гостей.",
  },
  {
    icon: Music4,
    title: "Команда под ключ",
    text: "Ведущий, диджей, артисты, звук и свет — одна точка контакта.",
  },
  {
    icon: Gem,
    title: "Премиум-уровень",
    text: "Ценю эстетику и тонкий юмор. Работаю с частными клиентами и топ-брендами.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Почему выбирают меня</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2">
              Цифры <span className="text-accent">говорят</span> за меня
            </h2>
          </Reveal>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {counters.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="card p-6 sm:p-8 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-accent mb-2">
                  <Counter to={c.to} suffix={c.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-white/35">
                  {c.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="card p-6 h-full group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" strokeWidth={2} />
                  </div>
                  <h4 className="font-display font-bold text-base mb-2">{c.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
