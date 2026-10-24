import { useState } from 'react'

import type { Product } from '@/types/product'

export function useProductModal(onAddToCart: (name: string, quantity: number) => void) {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)

  function openProduct(selectedProduct: Product) {
    setQuantity(1)
    setProduct(selectedProduct)
  }

  function closeProduct() {
    setProduct(null)
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

  function buyProduct() {
    if (!product) return
    onAddToCart(product.productName, quantity)
    closeProduct()
  }

  return {
    product,
    quantity,
    openProduct,
    closeProduct,
    increaseQuantity,
    decreaseQuantity,
    buyProduct,
  }
}
