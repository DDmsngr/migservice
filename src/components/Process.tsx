import { ClipboardList, FileSignature, MessagesSquare, PackageCheck, Truck } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  { icon: MessagesSquare, t: 'Консультация', d: 'Подскажем марку и толщину под вашу задачу, пришлём ГОСТ.' },
  { icon: ClipboardList, t: 'Заявка', d: 'Принимаем круглосуточно на почту и по телефону в рабочее время.' },
  { icon: PackageCheck, t: 'Комплектация', d: 'Собираем заказ на складе из того, что есть в наличии.' },
  { icon: FileSignature, t: 'Договор и документы', d: 'Заключаем договор, оформляем отгрузочные документы.' },
  { icon: Truck, t: 'Отгрузка', d: 'Доставка до транспортной компании или по городу.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Как работаем</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            От заявки до отгрузки — пять шагов
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <li key={t} className="bg-white p-6">
              <Reveal delay={i * 0.07}>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-ink text-white">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-sm text-ink/30">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
