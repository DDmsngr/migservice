import RequestForm from '../components/RequestForm'
import ContactInfo from '../components/ContactInfo'

export default function ContactsPage() {
  return (
    <div className="container-x py-14 md:py-20">
      <p className="eyebrow">Контакты</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Свяжитесь с нами</h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        Консультации, приём заказов, комплектация заявок, заключение договоров — многоканальный тел./факс (812) 336-50-80.
      </p>
      <div id="request" className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactInfo />
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <RequestForm />
        </div>
      </div>
    </div>
  )
}
