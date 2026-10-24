import type { ReactNode } from 'react'

import styles from './benefit-item.module.scss'

type BenefitItemProps = {
  icon: string
  label: string
  emphasis: string
}

export function BenefitItem({ icon, label, emphasis }: BenefitItemProps) {
  const [before, after] = label.split(emphasis)

  return (
    <li className={styles.item}>
      <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
      <span className={styles.label}>
        {before}
        <strong>{emphasis}</strong>
        {after as ReactNode}
      </span>
    </li>
  )
}
