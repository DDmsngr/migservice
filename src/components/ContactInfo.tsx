import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/catalog'

const mapUrl = 'https://yandex.ru/maps/?text=' + encodeURIComponent('Санкт-Петербург, Уманский переулок, 71')

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <MapPin className="mt-1 shrink-0 text-brand" size={20} />
        <div>
          <p className="font-semibold">{company.address}</p>
          <p className="mt-1 text-sm text-ink/60">{company.addressNote}</p>
          <p className="mt-1 text-sm text-ink/60">Отгрузка товара и оформление документов — по этому адресу.</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-brand underline underline-offset-4"
          >
            Открыть на карте
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Phone className="mt-1 shrink-0 text-brand" size={20} />
        <ul className="space-y-1.5">
          {company.phones.map((p) => (
            <li key={p.href} className="flex gap-3">
              <span className="w-20 text-sm text-ink/50">{p.label}</span>
              <a href={`tel:${p.href}`} className="font-semibold tabular-nums hover:text-brand">
                {p.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <Mail className="mt-1 shrink-0 text-brand" size={20} />
        <div>
          {company.emails.map((e) => (
            <p key={e}>
              <a href={`mailto:${e}`} className="font-semibold hover:text-brand">
                {e}
              </a>
            </p>
          ))}
          <p className="mt-1 text-sm text-ink/60">Заявки принимаем круглосуточно</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Clock className="mt-1 shrink-0 text-brand" size={20} />
        <div>
          <p className="mb-1 text-sm text-ink/50">Офис и склад</p>
          <ul className="space-y-1">
            {company.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 text-sm">
                <span>{h.days}</span>
                <span className="font-semibold tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
