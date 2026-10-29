import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '../data/catalog'

export default function CategoryCard({ c }: { c: Category }) {
  return (
    <Link
      to={`/catalog/${c.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_18px_40px_-20px_rgb(11_27_46/.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        <img
          src={c.image}
          alt={c.title}
          loading="lazy"
          className="size-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white text-ink opacity-0 shadow transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
        <p className="mt-1.5 text-sm text-ink/60">{c.short}</p>
      </div>
    </Link>
  )
}
