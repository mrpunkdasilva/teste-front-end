import { BenefitItem } from '@/components/benefit-item/benefit-item.component'

import styles from './top-bar.module.scss'

const defaultBenefits = [
  {
    icon: '/src/assets/icons/shield-check.svg',
    label: 'Compra 100% segura',
    emphasis: '100% segura',
  },
  {
    icon: '/src/assets/icons/truck.svg',
    label: 'Frete grátis acima de R$ 200',
    emphasis: 'Frete grátis',
  },
  {
    icon: '/src/assets/icons/credit-card.svg',
    label: 'Parcele suas compras',
    emphasis: 'Parcele',
  },
]

export function TopBar() {
  return (
    <section className={styles.topBar} aria-label="Vantagens da loja">
      <ul className={styles.benefits}>
        {defaultBenefits.map((benefit) => (
          <BenefitItem key={benefit.label} {...benefit} />
        ))}
      </ul>
    </section>
  )
}
