import { useEffect, useState } from 'react'

import type { Product } from '@/types/product'
import { parseProductsPayload } from '@/utils/product-catalog'

const PRODUCTS_ENDPOINT = '/api/products'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        const response = await fetch(PRODUCTS_ENDPOINT, { signal: controller.signal })
        if (!response.ok) throw new Error('Não foi possível carregar os produtos.')

        const payload = parseProductsPayload(await response.json())
        setProducts(payload.products)
        setError(null)
      } catch {
        if (!controller.signal.aborted) {
          setError('Não foi possível carregar os produtos. Tente novamente mais tarde.')
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    void loadProducts()
    return () => controller.abort()
  }, [])

  return { products, isLoading, error }
}
