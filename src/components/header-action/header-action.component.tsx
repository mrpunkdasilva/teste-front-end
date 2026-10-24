import styles from './header-action.module.scss'

type HeaderActionProps = {
  label: string
  icon: string
  count?: number
}

export function HeaderAction({ label, icon, count }: HeaderActionProps) {
  return (
    <button className={styles.action} type="button" aria-label={label}>
      <img src={icon} alt="" aria-hidden="true" />
      {count !== undefined && count > 0 && (
        <span className={styles.count} aria-hidden="true">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}
