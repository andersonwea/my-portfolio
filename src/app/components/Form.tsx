'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import emailjs from '@emailjs/browser'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

const emailFormSchema = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  email: z.string().email('Informe um email válido'),
  message: z.string().min(1, 'Informe sua mensagem'),
})

type EmailForm = z.infer<typeof emailFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailForm>({
    resolver: zodResolver(emailFormSchema),
  })

  async function handleSendEmail(data: EmailForm) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )

      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (err) {
      console.log(err)

      toast.error('Erro ao enviar mensagem')
    }
  }
  return (
    <form onSubmit={handleSubmit(handleSendEmail)} className="space-y-5">
      <Input
        {...register('name')}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        type="text"
        variant="bordered"
        color="secondary"
        label="Nome"
        className="text-white"
        classNames={{
          inputWrapper: [
            'border-secondary group-data-[focus=true]:border-primary group-data-[hover=true]:border-primary',
          ],
          label: ['text-light'],
        }}
      />

      <Input
        {...register('email')}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        type="email"
        variant="bordered"
        color="secondary"
        label="Email"
        className="text-white"
        classNames={{
          inputWrapper: [
            'border-secondary group-data-[focus=true]:border-primary group-data-[hover=true]:border-primary',
          ],
          label: ['text-light'],
        }}
      />

      <Textarea
        {...register('message')}
        isInvalid={!!errors.message}
        errorMessage={errors.message?.message}
        variant="bordered"
        color="secondary"
        label="Mensagem"
        className="text-white"
        classNames={{
          inputWrapper: [
            'border-secondary group-data-[focus=true]:border-primary group-data-[hover=true]:border-primary',
          ],
          label: ['text-light'],
        }}
      />

      <Button
        type="submit"
        color="primary"
        variant="solid"
        isLoading={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}
