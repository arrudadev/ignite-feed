import styles from './styles.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={igniteLogo} alt="Logo do Ignite" />

      <h1 className={styles.heading}>Ignite Feed</h1>
    </header>
  )
}
