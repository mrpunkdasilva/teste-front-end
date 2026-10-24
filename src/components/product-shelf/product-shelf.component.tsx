import { useId, useRef } from 'react'

import type { Product } from '@/types/product'
import { formatPrice } from '@/utils/format-price'
import styles from '@/components/storefront/storefront.module.scss'

const productTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

type ProductShelfProps = {
  products: Product[]
  isLoading: boolean
  loadError: string | null
  title: string
  subtitle?: string
  showTabs?: boolean
  selectedTab?: string
  onSelectTab?: (tab: string) => void
  onSelectProduct: (product: Product) => void
}

export function ProductShelf({
  products,
  isLoading,
  loadError,
  title,
  subtitle,
  showTabs = false,
  selectedTab = productTabs[0],
  onSelectTab,
  onSelectProduct,
}: ProductShelfProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const headingId = useId()
  const productListId = `${headingId}-products`

  function scrollProducts(direction: -1 | 1) {
    listRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  }

  return (
    <section className={styles.productSection} aria-labelledby={headingId}>
      <div className={styles.sectionHeading}>
        <span />
        <h2 id={headingId}>{title}</h2>
        <span />
      </div>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      {showTabs && (
        <div className={styles.tabs} role="group" aria-label="Filtrar produtos por categoria">
          {productTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={selectedTab === tab}
              className={selectedTab === tab ? styles.selectedTab : ''}
              onClick={() => onSelectTab?.(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      <div className={styles.productRail}>
        <button
          className={`${styles.railArrow} ${styles.previous}`}
          type="button"
          aria-label={`Produtos anteriores: ${title}`}
          aria-controls={productListId}
          onClick={() => scrollProducts(-1)}
        >
          ‹
        </button>
        <div
          className={styles.productGrid}
          id={productListId}
          role="list"
          aria-label={`Produtos: ${title}`}
          ref={listRef}
        >
          {isLoading && <p role="status">Carregando produtos...</p>}
          {loadError && <p role="alert">{loadError}</p>}
          {products.map((product) => (
            <article className={styles.productCard} key={product.productName} role="listitem">
              <div className={styles.productDetails}>
                <span className={styles.productImage}>
                  <img src={product.photo} alt="" aria-hidden="true" />
                </span>
                <span className={styles.productName}>{product.productName}</span>
              </div>
              <p className={styles.price}>
                <data value={(product.price / 100).toFixed(2)}>{formatPrice(product.price)}</data>
              </p>
              <p className={styles.shipping}>Confira as condições de entrega</p>
              <button
                className={styles.buyButton}
                type="button"
                aria-label={`Comprar ${product.productName}`}
                onClick={() => onSelectProduct(product)}
              >
                Comprar
              </button>
            </article>
          ))}
        </div>
        <button
          className={`${styles.railArrow} ${styles.next}`}
          type="button"
          aria-label={`Próximos produtos: ${title}`}
          aria-controls={productListId}
          onClick={() => scrollProducts(1)}
        >
          ›
        </button>
      </div>
    </section>
  )
}
