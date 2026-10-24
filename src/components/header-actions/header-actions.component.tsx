import { HeaderAction } from '@/components/header-action/header-action.component'

import styles from './header-actions.module.scss'

const actions = [
  { label: 'Minha sacola', icon: '/src/assets/icons/shopping-cart.svg' },
  { label: 'Favoritos', icon: '/src/assets/icons/heart.svg' },
  { label: 'Minha conta', icon: '/src/assets/icons/user-circle.svg' },
]

type HeaderActionsProps = {
  cartCount: number
}

export function HeaderActions({ cartCount }: HeaderActionsProps) {
  return (
    <nav className={styles.actions} aria-label="Atalhos da conta e compras">
      {actions.map((action) => (
        <HeaderAction key={action.label} {...action} />
      ))}
      <HeaderAction
        label={cartCount > 0 ? `Carrinho, ${cartCount} itens` : 'Carrinho vazio'}
        icon="/src/assets/icons/shopping-cart.svg"
        count={cartCount}
      />
    </nav>
  )
}
