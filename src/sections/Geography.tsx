import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import Reveal from "../components/Reveal";

const cities = [
  "Москва", "Санкт-Петербург", "Краснодар", "Екатеринбург", "Новосибирск",
  "Казань", "Нижний Новгород", "Самара", "Уфа", "Пермь", "Челябинск",
  "Омск", "Красноярск", "Ростов-на-Дону", "Волгоград", "Саратов",
  "Вологда", "Оренбург", "Ижевск", "Брянск", "Петрозаводск",
  "Калининград", "Ессентуки", "Магнитогорск", "Минск",
];

export default function Geography() {
  const rowA = cities.slice(0, 13);
  const rowB = cities.slice(13);

  return (
    <section className="relative py-20 sm:py-24 border-y border-white/6">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="eyebrow">География</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2">
                По всей <span className="text-accent">России и СНГ</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="font-display font-black text-2xl text-accent">24</div>
                <div className="text-[10px] uppercase tracking-widest text-white/35">города</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="font-display font-black text-2xl text-accent">3</div>
                <div className="text-[10px] uppercase tracking-widest text-white/35">страны</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-white/6 bg-bg-soft py-5 overflow-hidden">
            <div className="overflow-hidden py-2">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="flex gap-3 whitespace-nowrap"
              >
                {[...rowA, ...rowA].map((c, i) => (
                  <CityTag key={`a-${i}`} name={c} />
                ))}
              </motion.div>
            </div>
            <div className="overflow-hidden py-2 mt-2">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="flex gap-3 whitespace-nowrap"
              >
                {[...rowB, ...rowB, ...rowB].map((c, i) => (
                  <CityTag key={`b-${i}`} name={c} />
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/35">
            <Plane size={14} className="text-accent/60" />
            <span>Летаю вести свадьбы по всей стране — трансфер и проживание берём на себя</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CityTag({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/8 bg-white/[0.02] text-white/60 hover:text-white/80 hover:border-white/15 transition-colors">
      <MapPin size={13} className="text-white/30" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
