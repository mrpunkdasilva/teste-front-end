import { HeaderActions } from '@/components/header-actions/header-actions.component'
import { SearchBar } from '@/components/search-bar/search-bar.component'
import { StoreLogo } from '@/components/store-logo/store-logo.component'

import styles from './main-header.module.scss'

type MainHeaderProps = {
  cartCount: number
}

export function MainHeader({ cartCount }: MainHeaderProps) {
  return (
    <div className={styles.headerRow}>
      <div className={styles.content}>
        <div className={styles.logoSlot}>
          <StoreLogo />
        </div>
        <div className={styles.searchSlot}>
          <SearchBar />
        </div>
        <div className={styles.actionsSlot}>
          <HeaderActions cartCount={cartCount} />
        </div>
      </div>
    </div>
  )
}
