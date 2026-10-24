import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TopBar } from '@/components/top-bar/top-bar.component'

describe('TopBar', () => {
  it('shows the three store benefits with decorative icons', () => {
    render(<TopBar />)

    expect(screen.getByRole('region', { name: 'Vantagens da loja' })).toBeInTheDocument()
    const benefits = screen.getAllByRole('listitem')

    expect(benefits).toHaveLength(3)
    expect(benefits[0]).toHaveTextContent('Compra 100% segura')
    expect(benefits[1]).toHaveTextContent('Frete grátis acima de R$ 200')
    expect(benefits[2]).toHaveTextContent('Parcele suas compras')
  })
})
