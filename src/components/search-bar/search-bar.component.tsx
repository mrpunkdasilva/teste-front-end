import styles from './search-bar.module.scss'

export function SearchBar() {
  return (
    <form className={styles.search} role="search" onSubmit={(event) => event.preventDefault()}>
      <label className={styles.label} htmlFor="store-search">
        Buscar produtos
      </label>
      <input id="store-search" type="search" placeholder="O que você está buscando?" />
      <button type="submit" aria-label="Buscar">
        <img src="/src/assets/icons/magnifying-glass.svg" alt="" aria-hidden="true" />
      </button>
    </form>
  )
}
