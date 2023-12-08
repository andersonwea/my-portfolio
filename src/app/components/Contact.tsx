import { Title } from './Title'
import { Mail } from 'lucide-react'
import { ContactCard } from './ContactCard'
import { WhatsApp } from '@/assets/WhatsApp'
import { Form } from './Form'

export function Contact() {
  return (
    <section id="contact">
      <Title title="Contato" />

      <div className="grid grid-cols-[0.5fr_1fr] mt-16">
        <div className="flex flex-col gap-5 items-center">
          <ContactCard
            content="andersonwea14@gmail.com"
            icon={<Mail color="#4DB5FF" />}
            type="email"
          />

          <ContactCard
            content="+55 (11) 97753-3040"
            icon={<WhatsApp />}
            type="phone"
          />
        </div>

        <div>
          <Form />
        </div>
      </div>
    </section>
  )
}
