import { render, screen } from '@testing-library/react'

import { App } from '@/app.component'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /teste front-end/i })).toBeInTheDocument()
  })
})
