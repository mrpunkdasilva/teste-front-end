import { useState } from 'react'
import type { FormEvent } from 'react'

export function useNewsletter() {
  const [message, setMessage] = useState('')

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Inscrição recebida. Obrigado!')
  }

  return { message, subscribe }
}
