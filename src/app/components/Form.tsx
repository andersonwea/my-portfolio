import { Button, Input, Textarea } from '@nextui-org/react'

export function Form() {
  return (
    <form action="" className="space-y-5">
      <Input
        isRequired
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
        isRequired
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
        isRequired
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

      <Button type="submit" color="primary" variant="solid">
        Enviar mensagem
      </Button>
    </form>
  )
}
