import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Download, Phone } from 'lucide-react'
import { categories, categoryBySlug, company } from '../data/catalog'
import CategoryCard from '../components/CategoryCard'
import NotFound from './NotFound'

export default function CategoryPage() {
  const { slug } = useParams()
  const c = categoryBySlug(slug)

  useEffect(() => {
    if (c) document.title = `${c.title} — купить со склада в Санкт-Петербурге | МИГ СЕРВИС`
    return () => {
      document.title = 'МИГ СЕРВИС — электроизоляционные и конструкционные материалы'
    }
  }, [c])

  if (!c) return <NotFound />

  const idx = categories.indexOf(c)
  const related = [1, 2, 3].map((n) => categories[(idx + n) % categories.length])

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-x py-10 md:py-14">
          <Link to="/catalog" className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-brand">
            <ArrowLeft size={15} /> Каталог
          </Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{c.title}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{c.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={`/contacts?item=${c.slug}#request`} className="btn btn-primary">
                  Запросить цену
                </Link>
                <a href={`tel:${company.phones[0].href}`} className="btn btn-outline">
                  <Phone size={17} /> {company.phones[0].value}
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
              <img src={c.image} alt={c.title} className="size-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-12">
          {c.details && (
            <div className="space-y-4 leading-relaxed text-ink/80">
              {c.details.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          )}

          {c.applications && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Применение</h2>
              <ul className="mt-5 space-y-3">
                {c.applications.map((a) => (
                  <li key={a} className="flex gap-3 text-ink/80">
                    <Check size={18} className="mt-1 shrink-0 text-brand" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {c.blocks && (
            <div className="grid gap-4">
              {c.blocks.map((b) => (
                <div key={b.title} className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.text}</p>
                </div>
              ))}
            </div>
          )}

          {c.specs && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Характеристики</h2>
              <dl className="mt-5 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                {c.specs.map((s) => (
                  <div key={s.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                    <dt className="text-sm text-ink/55">{s.label}</dt>
                    <dd className="font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-ink p-6 text-white">
            <h2 className="font-mono text-xs uppercase tracking-[.18em] text-white/50">В наличии и под заказ</h2>
            <ul className="mt-4 divide-y divide-white/10">
              {c.stock.map((s) => (
                <li key={s} className="py-2.5 text-[15px] leading-snug">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/50">Актуальное наличие и цену уточняйте у менеджера.</p>
          </div>

          {(c.docs || c.note) && (
            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="font-mono text-xs uppercase tracking-[.18em] text-ink/50">Нормативы</h2>
              {c.note && <p className="mt-3 text-sm">{c.note}</p>}
              {c.docs && (
                <ul className="mt-3 space-y-2">
                  {c.docs.map((d) => (
                    <li key={d.file}>
                      <a
                        href={d.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand"
                      >
                        <Download size={15} /> {d.title} (PDF)
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </aside>
      </div>

      <section className="border-t border-line bg-white py-14">
        <div className="container-x">
          <h2 className="text-2xl font-bold tracking-tight">Смотрите также</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <CategoryCard key={r.slug} c={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
