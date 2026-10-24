import partnersImage from '@/assets/images/parceiros.png'

import styles from '@/components/storefront/storefront.module.scss'

export function PartnerPromos() {
  return (
    <section className={styles.partnerPromos} aria-label="Destaques de parceiros">
      {[0, 1].map((card) => (
        <a
          className={styles.partnerCard}
          href="#marcas"
          key={card}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.12)), url(${partnersImage})`,
          }}
        >
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <span className={styles.partnerLink}>Confira</span>
        </a>
      ))}
    </section>
  )
}
