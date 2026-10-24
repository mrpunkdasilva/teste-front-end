import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { App } from '@/app.component'

const productFixture = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
  photo:
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
  price: 15000,
}

const productList = [
  productFixture,
  {
    ...productFixture,
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    price: 9000,
  },
  {
    ...productFixture,
    productName: 'Iphone 11 PRO MAX BRANCO 2',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
    price: 14990,
  },
  {
    ...productFixture,
    productName: 'IPHONE 13 MINI 2',
    descriptionShort: 'IPHONE 13 MINI 2',
    price: 12000,
  },
  {
    ...productFixture,
    productName: 'Iphone 11 PRO MAX BRANCO 3',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
    price: 4550,
  },
  {
    ...productFixture,
    productName: 'IPHONE 13 MINI 3',
    descriptionShort: 'IPHONE 13 MINI 3',
    price: 38000,
  },
  {
    ...productFixture,
    productName: 'Iphone 11 PRO MAX BRANCO 4',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
    price: 42000,
  },
  {
    ...productFixture,
    productName: 'IPHONE 13 MINI 4',
    descriptionShort: 'IPHONE 13 MINI 4',
    price: 520,
  },
  {
    ...productFixture,
    productName: 'Iphone 11 PRO MAX BRANCO 5',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
    price: 149990,
  },
  {
    ...productFixture,
    productName: 'IPHONE 13 MINI 5',
    descriptionShort: 'IPHONE 13 MINI 5',
    price: 100000,
  },
]

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, products: productList }),
    } as Response)
  })

  it('renders the store layout, header, and remote catalog products', async () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /venha conhecer nossas promoções/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Vantagens da loja' })).toBeInTheDocument()
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Categorias principais' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pular para o conteúdo' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
    expect(screen.getAllByRole('group', { name: 'Filtrar produtos por categoria' })).toHaveLength(1)
    expect(
      await screen.findAllByRole('button', { name: 'Comprar Iphone 11 PRO MAX BRANCO 1' }),
    ).toHaveLength(3)
    expect(
      screen.queryByRole('button', { name: 'Ver detalhes de Iphone 11 PRO MAX BRANCO 1' }),
    ).not.toBeInTheDocument()
    expect(screen.getAllByRole('list', { name: 'Produtos: Produtos relacionados' })).toHaveLength(3)
  })

  it('opens product details and supports quantity and Escape dismissal', async () => {
    const user = userEvent.setup()
    render(<App />)

    const productName = await screen.findAllByText('Iphone 11 PRO MAX BRANCO 1')
    await user.click(productName[0])
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const buyButton = screen.getAllByRole('button', {
      name: 'Comprar Iphone 11 PRO MAX BRANCO 1',
    })[0]
    await user.click(buyButton)

    const dialog = screen.getByRole('dialog', { name: 'Iphone 11 PRO MAX BRANCO 1' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByText('R$ 150,00')).toBeInTheDocument()
    expect(
      within(dialog).getByRole('heading', { name: 'Iphone 11 PRO MAX BRANCO 1' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))
    expect(screen.getByText('2')).toBeInTheDocument()

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(buyButton).toHaveFocus()
  })

  it('adds the selected quantity to the cart and updates the header count', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findAllByRole('button', { name: 'Comprar Iphone 11 PRO MAX BRANCO 1' })
    await user.click(
      screen.getAllByRole('button', { name: 'Comprar Iphone 11 PRO MAX BRANCO 1' })[0],
    )
    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))
    await user.click(screen.getByRole('button', { name: /^Comprar$/ }))

    expect(screen.getByRole('button', { name: 'Carrinho, 2 itens' })).toHaveTextContent('2')
    expect(screen.getByRole('status')).toHaveTextContent(
      '2 Iphone 11 PRO MAX BRANCO 1 adicionados ao carrinho.',
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
