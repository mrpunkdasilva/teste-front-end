import storeLogo from '@/assets/branding/logo.svg'

import styles from '@/components/storefront/storefront.module.scss'

export function BrandSection() {
  return (
    <section id="marcas" className={styles.brandSection}>
      <h2>Navegue por marcas</h2>
      <div className={styles.brandList}>
        {[0, 1, 2, 3, 4].map((brand) => (
          <a
            className={styles.brandItem}
            href="#produtos"
            key={brand}
            aria-label="Ver produtos Econverse"
          >
            <img src={storeLogo} alt="" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}
