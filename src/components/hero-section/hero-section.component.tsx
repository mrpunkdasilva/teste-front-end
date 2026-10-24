import heroImage from '@/assets/images/hero.png'

import styles from '@/components/storefront/storefront.module.scss'

export function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%), url(${heroImage})`,
      }}
    >
      <div className={styles.heroContent}>
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos">Ver produtos</a>
      </div>
    </section>
  )
}
