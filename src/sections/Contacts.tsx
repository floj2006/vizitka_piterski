import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, Users, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

type Item = {
  icon: typeof Phone;
  title: string;
  value: string;
  href: string;
};

const items: Item[] = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (921) 000-00-00",
    href: "tel:+79210000000",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Написать в WhatsApp",
    href: "https://wa.me/79210000000",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@dmitriypiterskiy",
    href: "https://t.me/dmitriypiterskiy",
  },
  {
    icon: Users,
    title: "ВКонтакте",
    value: "vk.com/dmitriypiterskiy",
    href: "https://vk.com/dmitriypiterskiy",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-10 sm:mb-14 text-center mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Контакты</span>
              <span className="w-8 h-px bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mb-3">
              Давайте <span className="text-accent">познакомимся</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/40 text-sm">
              Выберите удобный канал — отвечу максимально быстро.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            const external = it.href.startsWith("http");
            return (
              <Reveal key={it.title} delay={i * 0.06}>
                <motion.a
                  href={it.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="card p-5 sm:p-6 group block h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-1">
                    {it.title}
                  </div>
                  <div className="font-display font-semibold text-sm text-white/80 group-hover:text-accent transition-colors break-words">
                    {it.value}
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">
                Для коллег-ведущих
              </div>
              <div className="font-display font-bold">
                Группа <span className="text-accent">«Фишки для ведущих»</span>
              </div>
              <div className="text-xs text-white/35 mt-0.5">
                Авторские МК, материалы, закрытое сообщество
              </div>
            </div>
            <a
              href="https://vk.com/club63682123"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-5 !py-2.5 group self-start sm:self-center shrink-0 !text-xs"
            >
              <span>Открыть группу ВК</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
