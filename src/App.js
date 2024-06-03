import styles from './App.module.css';
import Board from './components/Board';
import Shop from './components/Shop';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.eventImg}>
        <img id={styles.image} src='images/event.jpeg'/>
      </div>
      <Board />
      <Shop />
    </div>
  );
}

export default App;
