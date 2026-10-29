import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Truck, Warehouse } from 'lucide-react'
import { motion } from 'motion/react'
import { BASE, company } from '../data/catalog'

const tiles = [
  { src: '31.jpg', label: 'Фторопласт', cls: 'col-span-2 row-span-2' },
  { src: 'IMG_6317.JPG', label: 'Капролон', cls: '' },
  { src: 's1122.jpeg', label: 'Стеклотекстолит', cls: '' },
  { src: 'IMG_6335.JPG', label: 'Лента ЛЭТСАР', cls: '' },
  { src: 'det1122.jpeg', label: 'Текстолит', cls: '' },
]

const perks = [
  { icon: Warehouse, t: 'Собственный склад', d: 'Уманский пер., 71' },
  { icon: Truck, t: 'До транспортной компании', d: 'и по городу' },
  { icon: MapPin, t: 'Во все регионы', d: 'отгрузка по России' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_75%)]" />
      <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow !text-white/60"
          >
            Санкт-Петербург · склад · доставка по России
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-5 text-[1.85rem] font-bold leading-[1.1] tracking-tight min-[400px]:text-[2.1rem] sm:text-5xl lg:text-6xl"
          >
            Электроизоляционные и&nbsp;конструкционные материалы{' '}
            <span className="text-brand">со&nbsp;склада</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Текстолит, стеклотекстолит, фторопласт, капролон, паронит, ленты и трубки. Для тех, кто производит
            оборудование, занимается ремонтом или снабжает предприятие.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link to="/contacts#request" className="btn btn-primary">
              Запросить цену <ArrowRight size={18} />
            </Link>
            <a href={`tel:${company.phones[0].href}`} className="btn btn-ghost">
              <Phone size={18} /> {company.phones[0].value}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid gap-4 text-sm text-white/70 sm:grid-cols-3"
          >
            {perks.map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex items-start gap-3 border-l border-white/15 pl-4">
                <Icon size={18} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <b className="block font-semibold text-white">{t}</b>
                  {d}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid auto-rows-[9.5rem] grid-cols-3 gap-3 sm:auto-rows-[11rem]"
        >
          {tiles.map((t) => (
            <figure key={t.src} className={`group relative overflow-hidden rounded-xl bg-ink-2 ${t.cls}`}>
              <img
                src={`${BASE}img/${t.src}`}
                alt={t.label}
                className="size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-8 text-xs font-medium">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
