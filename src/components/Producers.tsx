import { Link } from 'react-router-dom'
import { Factory } from 'lucide-react'
import Reveal from './Reveal'

const wanted = [
  'Винипласт листовой',
  'Фторопласт листовой, стержни, плёнка',
  'Текстолит листовой, стержень',
  'Стеклотекстолит листовой, фольгированный',
  'Капролон блочный: стержень, плита',
]

export default function Producers() {
  return (
    <section className="bg-ink py-20 text-white md:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="grid size-12 place-items-center rounded-xl bg-brand">
            <Factory size={22} />
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Вы производитель электроизоляционных материалов?
          </h2>
          <p className="mt-4 max-w-xl text-white/65">
            Мы готовы рассмотреть ваши предложения о поставках.
          </p>
          <Link to="/contacts#request" className="btn btn-primary mt-8">
            Отправить предложение
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow !text-white/50">Нас интересует</p>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {wanted.map((w) => (
              <li key={w} className="py-3 text-white/85">
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
