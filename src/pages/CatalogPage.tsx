import { categories, groups } from '../data/catalog'
import type { Category } from '../data/catalog'
import CategoryCard from '../components/CategoryCard'
import Reveal from '../components/Reveal'

export default function CatalogPage() {
  const order = Object.keys(groups) as Category['group'][]
  return (
    <div className="container-x py-14 md:py-20">
      <p className="eyebrow">Каталог</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Материалы со склада в Санкт-Петербурге</h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        Цены и наличие уточняйте по телефону или в заявке — отвечаем в рабочее время.
      </p>

      {order.map((g) => {
        const items = categories.filter((c) => c.group === g)
        if (!items.length) return null
        return (
          <section key={g} className="mt-14">
            <h2 className="border-b border-line pb-3 text-xl font-semibold">{groups[g]}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 4) * 0.05}>
                  <CategoryCard c={c} />
                </Reveal>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
