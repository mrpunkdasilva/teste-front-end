import { useState } from 'react'

import deviceImage from '@/assets/categories/dispositives.svg'
import fashionImage from '@/assets/categories/fashion.svg'
import healthImage from '@/assets/categories/health-care.svg'
import runningImage from '@/assets/categories/running.svg'
import supermarketImage from '@/assets/categories/supermarkets.svg'
import toolsImage from '@/assets/categories/tools.svg'
import drinksImage from '@/assets/categories/whisky.svg'

import styles from '@/components/storefront/storefront.module.scss'

const categories = [
  { label: 'Tecnologia', image: deviceImage },
  { label: 'Supermercado', image: supermarketImage },
  { label: 'Bebidas', image: drinksImage },
  { label: 'Ferramentas', image: toolsImage },
  { label: 'Saúde', image: healthImage },
  { label: 'Esportes e Fitness', image: runningImage },
  { label: 'Moda', image: fashionImage },
]

export function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState('Tecnologia')

  return (
    <section className={styles.categorySection} aria-label="Compre por categoria">
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <button
            className={styles.categoryButton}
            type="button"
            key={category.label}
            aria-pressed={selectedCategory === category.label}
            onClick={() => setSelectedCategory(category.label)}
          >
            <span className={styles.categoryImage}>
              <img src={category.image} alt="" aria-hidden="true" />
            </span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
