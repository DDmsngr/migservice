import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../data/catalog'
import CategoryCard from './CategoryCard'
import Reveal from './Reveal'

export default function CatalogSection() {
  const featured = categories.slice(0, 8)
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Каталог</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">Что есть на складе</h2>
          </Reveal>
          <Link to="/catalog" className="btn btn-outline !py-2.5">
            Весь каталог <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.06}>
              <CategoryCard c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
