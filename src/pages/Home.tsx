import Hero from '../components/Hero'
import CatalogSection from '../components/CatalogSection'
import Process from '../components/Process'
import Standards from '../components/Standards'
import Producers from '../components/Producers'
import RequestForm from '../components/RequestForm'
import ContactInfo from '../components/ContactInfo'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <Process />
      <Standards />
      <Producers />
      <section id="request" className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Заявка</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Напишите, что нужно — ответим по цене и наличию
            </h2>
            <div className="mt-10">
              <ContactInfo />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <RequestForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
