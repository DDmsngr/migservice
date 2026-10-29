import { Link } from 'react-router-dom'
import { BASE, categories, company } from '../data/catalog'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <img src={`${BASE}img/logo.GIF`} alt="МИГ СЕРВИС" className="h-9 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Поставка электроизоляционных и конструкционных материалов со склада в Санкт-Петербурге во все регионы России.
          </p>
        </div>

        <div>
          <h3 className="eyebrow !text-white/50">Каталог</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to={`/catalog/${c.slug}`} className="transition hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/catalog" className="text-white underline decoration-brand underline-offset-4">
                Весь каталог
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-white/50">Контакты</h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p>{company.address}</p>
            {company.phones.slice(0, 2).map((p) => (
              <p key={p.href}>
                <a href={`tel:${p.href}`} className="font-semibold text-white tabular-nums">
                  {p.value}
                </a>
              </p>
            ))}
            {company.emails.map((e) => (
              <p key={e}>
                <a href={`mailto:${e}`} className="transition hover:text-white">
                  {e}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {company.legal}</span>
          <span>Информация на сайте не является публичной офертой</span>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/25">
        <div className="container-x flex justify-center py-5">
          <a
            href="https://deepdrift.tech"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-sm text-white/55 transition hover:text-white"
          >
            <img src={`${BASE}img/ae-logo.png`} alt="" className="h-9 w-auto" />
            <span>
              Сайт создан: <b className="font-semibold text-[#e6b94a]">студия Алексея Евтушенко</b>
              <span className="ml-2 underline decoration-white/30 underline-offset-4 group-hover:decoration-[#e6b94a]">
                портфолио →
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
