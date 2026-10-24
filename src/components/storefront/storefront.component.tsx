import { useState } from 'react'

import { BrandSection } from '@/components/brand-section/brand-section.component'
import { CategorySection } from '@/components/category-section/category-section.component'
import { HeroSection } from '@/components/hero-section/hero-section.component'
import { PartnerPromos } from '@/components/partner-promos/partner-promos.component'
import { ProductModal } from '@/components/product-modal/product-modal.component'
import { ProductShelf } from '@/components/product-shelf/product-shelf.component'
import { StoreFooter } from '@/components/store-footer/store-footer.component'
import { useProductModal } from '@/hooks/use-product-modal'
import { useProducts } from '@/hooks/use-products'
import type { Product } from '@/types/product'

import styles from './storefront.module.scss'

const productTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

type StorefrontProps = {
  onAddToCart: (name: string, quantity: number) => void
}

export function Storefront({ onAddToCart }: StorefrontProps) {
  const { products, isLoading, error } = useProducts()
  const [selectedTab, setSelectedTab] = useState(productTabs[0])
  const {
    product: selectedProduct,
    quantity,
    openProduct,
    closeProduct,
    increaseQuantity,
    decreaseQuantity,
    buyProduct,
  } = useProductModal(onAddToCart)

  function selectProduct(product: Product) {
    openProduct(product)
  }

  return (
    <>
      <main id="main-content" className={styles.storefront}>
        <HeroSection />
        <CategorySection />

        <div id="produtos" className={styles.content}>
          <ProductShelf
            products={products}
            isLoading={isLoading}
            loadError={error}
            title="Produtos relacionados"
            showTabs
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
            onSelectProduct={selectProduct}
          />
          <PartnerPromos />
          <ProductShelf
            products={products}
            isLoading={isLoading}
            loadError={error}
            title="Produtos relacionados"
            subtitle="Ver todos"
            onSelectProduct={selectProduct}
          />
          <BrandSection />
          <ProductShelf
            products={products}
            isLoading={isLoading}
            loadError={error}
            title="Produtos relacionados"
            subtitle="Ver todos"
            onSelectProduct={selectProduct}
          />
        </div>
      </main>

      <StoreFooter />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          quantity={quantity}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onClose={closeProduct}
          onBuy={buyProduct}
        />
      )}
    </>
  )
}
