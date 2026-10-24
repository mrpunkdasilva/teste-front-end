import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MainNavigation } from '@/components/main-navigation/main-navigation.component'

describe('MainNavigation', () => {
  it('renders category links and marks the daily offers as current', () => {
    render(<MainNavigation />)

    expect(screen.getByRole('navigation', { name: 'Categorias principais' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Todas categorias' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ofertas do dia' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'Assinatura' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(7)
  })
})
