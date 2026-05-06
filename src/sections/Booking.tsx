import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Clock, Gift, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";

const bullets = [
  { icon: Clock, text: "Ответ в течение 60 минут" },
  { icon: Gift, text: "Бесплатная консультация" },
  { icon: Sparkles, text: "Индивидуальное предложение" },
];

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="rounded-2xl border border-white/8 bg-bg-soft p-6 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Info */}
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-accent" />
                  <span className="eyebrow">Бронирование</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="h2 mb-5">
                  Забронируйте <span className="text-accent">дату</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-white/50 mb-10 leading-relaxed max-w-md">
                  Оставьте заявку — свяжусь в течение часа, обсудим формат и
                  пришлю предложение. Календарь заполняется быстро, особенно в сезон.
                </p>
              </Reveal>
              <ul className="space-y-4">
                {bullets.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Reveal key={b.text} delay={0.2 + i * 0.08}>
                      <li className="flex items-center gap-4">
                        <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon size={16} className="text-accent" />
                        </span>
                        <span className="text-white/65 text-sm">{b.text}</span>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <Reveal delay={0.15}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-5">
                      <Check size={28} className="text-bg" strokeWidth={3} />
                    </div>
                    <h3 className="h3 mb-2 text-accent">Заявка отправлена!</h3>
                    <p className="text-white/50 text-sm">
                      Свяжусь с вами в течение часа. До скорой встречи!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="card p-6 sm:p-8 space-y-4"
                  >
                    <Field label="Имя" name="name" placeholder="Как к вам обращаться" required />
                    <Field label="Телефон" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Дата" name="date" type="date" />
                      <div>
                        <label className="block text-xs uppercase tracking-[0.12em] text-white/35 mb-2">
                          Тип мероприятия
                        </label>
                        <select
                          name="type"
                          className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-accent/50 focus:outline-none transition-colors"
                        >
                          <option>Свадьба</option>
                          <option>Корпоратив</option>
                          <option>Юбилей</option>
                          <option>Концерт</option>
                          <option>Частное мероприятие</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.12em] text-white/35 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Расскажите пару слов о событии"
                        className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-accent/50 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full group disabled:opacity-60"
                    >
                      <span>{loading ? "Отправляю…" : "Забронировать"}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[11px] text-white/25 text-center pt-1">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.12em] text-white/35 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-accent/50 focus:outline-none transition-colors"
      />
    </div>
  );
}
