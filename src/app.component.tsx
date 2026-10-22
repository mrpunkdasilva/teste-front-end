import { Button } from '@/components/button/button.component'

import styles from './app.module.scss'

export function App() {
  return (
    <main className={styles.app}>
      <h1>Teste Front-End</h1>
      <Button onClick={() => window.alert('Bem-vindo!')}>Começar</Button>
    </main>
  )
}

export default App
