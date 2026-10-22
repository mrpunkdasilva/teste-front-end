import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '@/components/button/button.component'

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>Comprar</Button>)

    expect(screen.getByRole('button', { name: 'Comprar' })).toBeInTheDocument()
  })

  it('fires onClick when pressed', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Comprar</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledOnce()
  })
})
