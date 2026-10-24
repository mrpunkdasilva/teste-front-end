import styles from './store-logo.module.scss'

export function StoreLogo() {
  return (
    <a className={styles.logo} href="/" aria-label="eConverse, página inicial">
      <img src="/src/assets/branding/logo.svg" alt="eConverse" />
    </a>
  )
}
