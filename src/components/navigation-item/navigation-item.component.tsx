import styles from './navigation-item.module.scss'

type NavigationItemProps = {
  label: string
  href: string
  current?: boolean
  icon?: string
}

export function NavigationItem({ label, href, current = false, icon }: NavigationItemProps) {
  return (
    <li className={styles.item}>
      <a
        href={href}
        aria-current={current ? 'page' : undefined}
        className={current ? styles.current : ''}
      >
        {icon && <img src={icon} alt="" aria-hidden="true" />}
        {label}
      </a>
    </li>
  )
}
