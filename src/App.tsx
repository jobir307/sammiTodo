import styles from './home.module.css'

const App = (): JSX.Element => {
  return (
    <div className={styles.todo}>
      <h2 className={styles.title}>App Todo</h2>
      <button className={styles.button}>Add Todo</button>
    </div>

  )
}

export default App