import { useState } from 'react'

import { MainHeader } from '@/components/main-header/main-header.component'
import { MainNavigation } from '@/components/main-navigation/main-navigation.component'
import { Storefront } from '@/components/storefront/storefront.component'
import { TopBar } from '@/components/top-bar/top-bar.component'
import styles from './app.module.scss'

export function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartMessage, setCartMessage] = useState('')

  function addToCart(productName: string, quantity: number) {
    setCartCount((currentCount) => currentCount + quantity)
    setCartMessage(`${quantity} ${productName} adicionado${quantity === 1 ? '' : 's'} ao carrinho.`)
  }

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Pular para o conteúdo
      </a>
      <header>
        <TopBar />
        <MainHeader cartCount={cartCount} />
        <MainNavigation />
      </header>
      <Storefront onAddToCart={addToCart} />
      <p className={styles.visuallyHidden} role="status" aria-live="polite">
        {cartMessage}
      </p>
    </>
  )
}

export default App
