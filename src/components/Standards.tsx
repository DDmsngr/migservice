import { Download } from 'lucide-react'
import { BASE, gosts } from '../data/catalog'
import Reveal from './Reveal'

export default function Standards() {
  return (
    <section id="docs" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="eyebrow">Нормативы</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">ГОСТы и ТУ для справки</h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/65">
            Материалы поставляются по государственным стандартам и техническим условиям. Тексты основных ГОСТов
            можно скачать и приложить к техзаданию.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {gosts.map((g) => (
              <div key={g.material} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <span className="font-semibold">{g.material}</span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it, i) =>
                    g.files[i] ? (
                      <a
                        key={it}
                        href={`${BASE}docs/${g.files[i]}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-paper px-2.5 py-1 font-mono text-xs transition hover:bg-ink hover:text-white"
                      >
                        {it} <Download size={12} />
                      </a>
                    ) : (
                      <span key={it} className="rounded-md bg-paper px-2.5 py-1 font-mono text-xs">
                        {it}
                      </span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
