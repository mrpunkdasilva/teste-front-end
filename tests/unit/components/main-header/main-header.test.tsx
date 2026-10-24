import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MainHeader } from '@/components/main-header/main-header.component'

describe('MainHeader', () => {
  it('shows the store logo, product search, and shopping shortcuts', () => {
    render(<MainHeader cartCount={0} />)

    expect(screen.getByRole('link', { name: 'eConverse, página inicial' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: 'Buscar produtos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Favoritos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Minha conta' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Carrinho vazio' })).toBeInTheDocument()
  })
})
