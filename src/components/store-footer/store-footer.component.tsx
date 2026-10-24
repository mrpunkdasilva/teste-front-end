import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import storeLogo from '@/assets/branding/logo.svg'
import { NewsletterSection } from '@/components/newsletter-section/newsletter-section.component'
import styles from '@/components/storefront/storefront.module.scss'

export function StoreFooter() {
  return (
    <footer className={styles.footer}>
      <NewsletterSection />
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <img src={storeLogo} alt="Econverse" />
          <p>Uma experiência de compra simples, segura e feita para você.</p>
          <div className={styles.socialLinks} aria-label="Redes sociais">
            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
        <nav className={styles.footerLinks} aria-label="Links institucionais">
          <div>
            <h3>Institucional</h3>
            <a href="#sobre">Sobre nós</a>
            <a href="#movimento">Movimento</a>
            <a href="#trabalhe">Trabalhe conosco</a>
          </div>
          <div>
            <h3>Ajuda</h3>
            <a href="#suporte">Suporte</a>
            <a href="#contato">Fale conosco</a>
            <a href="#faq">Perguntas frequentes</a>
          </div>
          <div>
            <h3>Termos</h3>
            <a href="#termos">Termos e condições</a>
            <a href="#privacidade">Política de privacidade</a>
            <a href="#trocas">Troca e devolução</a>
          </div>
        </nav>
      </div>
      <p className={styles.footerBottom}>Econverse. Todos os direitos reservados.</p>
    </footer>
  )
}
