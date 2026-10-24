import { NavigationItem } from '@/components/navigation-item/navigation-item.component'

import styles from './main-navigation.module.scss'

const navigationItems = [
  { label: 'Todas categorias', href: '#categorias' },
  { label: 'Supermercado', href: '#supermercado' },
  { label: 'Livros', href: '#livros' },
  { label: 'Moda', href: '#moda' },
  { label: 'Lançamentos', href: '#lancamentos' },
  { label: 'Ofertas do dia', href: '#ofertas', current: true },
  { label: 'Assinatura', href: '#assinatura', icon: '/src/assets/icons/crown-simple.svg' },
]

export function MainNavigation() {
  return (
    <nav className={styles.navigation} aria-label="Categorias principais">
      <ul className={styles.items}>
        {navigationItems.map((item) => (
          <NavigationItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}
