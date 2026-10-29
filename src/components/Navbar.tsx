import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { BASE, company } from '../data/catalog'

const links = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/#process', label: 'Как работаем' },
  { to: '/#docs', label: 'Нормативы' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phone = company.phones[0]

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? 'border-line shadow-[0_6px_24px_-12px_rgb(11_27_46/.25)]' : 'border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="МИГ СЕРВИС — на главную" className="shrink-0">
          <img src={`${BASE}img/logo.GIF`} alt="МИГ СЕРВИС" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основное меню">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors hover:text-brand ${
                  isActive && !l.to.includes('#') ? 'text-brand' : 'text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone.href}`}
            className="hidden items-center gap-2 font-semibold tabular-nums lg:flex"
          >
            <Phone size={16} className="text-brand" />
            {phone.value}
          </a>
          <Link to="/contacts#request" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            Запросить цену
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="container-x flex flex-col py-3">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="border-b border-line py-3.5 text-lg font-medium">
                  {l.label}
                </Link>
              ))}
              <a href={`tel:${phone.href}`} className="btn btn-primary mt-4">
                <Phone size={18} /> {phone.value}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
