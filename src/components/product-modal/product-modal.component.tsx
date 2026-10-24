import { useEffect, useId, useRef } from 'react'

import styles from './product-modal.module.scss'

type ProductModalProps = {
  product: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
  onClose: () => void
  onBuy: () => void
}

export function ProductModal({
  product,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onClose,
  onBuy,
}: ProductModalProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price / 100)

  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previouslyFocusedElement = document.activeElement
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (previouslyFocusedElement instanceof HTMLElement) previouslyFocusedElement.focus()
    }
  }, [])

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not(:disabled), a[href], input:not(:disabled), [tabindex]:not([tabindex="-1"])',
    )
    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby={titleId}
        aria-modal="true"
        className={styles.dialog}
        onKeyDown={handleKeyDown}
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <button
          aria-label="Fechar detalhes do produto"
          className={styles.closeButton}
          onClick={onClose}
          type="button"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.productVisual}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.productInfo}>
          <h2 id={titleId}>{product.productName}</h2>
          <p className={styles.price}>{formattedPrice}</p>
          <p className={styles.description}>{product.descriptionShort}</p>
          <a className={styles.detailsLink} href="#produtos" onClick={onClose}>
            Ver mais produtos
          </a>

          <div className={styles.actions}>
            <div aria-label="Quantidade" className={styles.quantityControl}>
              <button
                aria-label="Diminuir quantidade"
                disabled={quantity <= 1}
                onClick={onDecreaseQuantity}
                type="button"
              >
                −
              </button>
              <output aria-live="polite">{quantity}</output>
              <button aria-label="Aumentar quantidade" onClick={onIncreaseQuantity} type="button">
                +
              </button>
            </div>
            <button className={styles.buyButton} onClick={onBuy} type="button">
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
