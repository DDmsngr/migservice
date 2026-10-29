import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send } from 'lucide-react'
import { categories, company } from '../data/catalog'

export default function RequestForm() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [org, setOrg] = useState('')
  const [text, setText] = useState(() => {
    const c = categories.find((x) => x.slug === params.get('item'))
    return c ? `Интересует: ${c.title}\nМарка, размеры, количество: ` : ''
  })
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [`Имя: ${name}`]
    if (org) lines.push(`Организация: ${org}`)
    lines.push(`Телефон / e-mail: ${contact}`, '', text)
    const subject = 'Заявка с сайта МИГ СЕРВИС'
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Имя</span>
          <input className="field" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Организация</span>
          <input className="field" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Телефон или e-mail</span>
        <input className="field" required value={contact} onChange={(e) => setContact(e.target.value)} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Что нужно</span>
        <textarea
          className="field min-h-36 resize-y"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Материал, марка, размеры, количество, срок"
        />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        <Send size={17} /> Отправить заявку
      </button>
      <p className="text-sm text-ink/55" aria-live="polite">
        {sent
          ? `Открылась почтовая программа с готовым письмом. Если не открылась — напишите на ${company.emails[0]}`
          : 'Заявка откроется письмом в вашей почтовой программе. Отвечаем в рабочее время.'}
      </p>
    </form>
  )
}
