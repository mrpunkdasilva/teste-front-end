import { useNewsletter } from '@/hooks/use-newsletter'
import styles from '@/components/storefront/storefront.module.scss'

export function NewsletterSection() {
  const { message, subscribe } = useNewsletter()

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.newsletterIntro}>
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>
      <form className={styles.newsletterForm} onSubmit={subscribe}>
        <label>
          <span>Seu nome</span>
          <input name="name" placeholder="Digite seu nome" required />
        </label>
        <label>
          <span>Seu e-mail</span>
          <input name="email" type="email" placeholder="Digite seu e-mail" required />
        </label>
        <button type="submit">Inscrever</button>
        <label className={styles.terms}>
          <input type="checkbox" required />
          <span>Aceito os termos e condições</span>
        </label>
        {message && (
          <p className={styles.newsletterMessage} role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  )
}
