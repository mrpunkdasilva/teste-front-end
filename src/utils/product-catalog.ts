import type { Product, ProductsPayload } from '@/types/product'

export function isProduct(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) return false

  return (
    'productName' in value &&
    typeof value.productName === 'string' &&
    'descriptionShort' in value &&
    typeof value.descriptionShort === 'string' &&
    'photo' in value &&
    typeof value.photo === 'string' &&
    'price' in value &&
    typeof value.price === 'number'
  )
}

export function parseProductsPayload(value: unknown): ProductsPayload {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('success' in value) ||
    !('products' in value) ||
    value.success !== true ||
    !Array.isArray(value.products) ||
    !value.products.every(isProduct)
  ) {
    throw new Error('O catálogo de produtos está inválido.')
  }

  return value as ProductsPayload
}
