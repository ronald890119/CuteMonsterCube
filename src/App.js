import styles from './App.module.css';
import Board from './components/Board';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

function App() {
  const [cost, setCost] = useState(0);
	const [cubeUsed, setCubeUsed] = useState(0);
	const [numCube, setNumCube] = useState(0);
	const [attributes, setAttributes] = useState([]);
	let probabilityData = [];

	let loadJson = fetch('data/probability.json')
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status);
			}

			return res.json();
		})
		.then(data => {
			probabilityData = data;
			return data;
		});

	window.onload = async() => {
    await loadJson;
	}

  // buy cubes
	const buy = () => {
		setCost(cost + 1350);
		setNumCube(numCube + 55);
	};

  // choose 3 attributes
	function randomChoose() {
		let temp = [];
		for(let i = 0; i < 3; i++) {
			let p = Math.random();
			let total = 0;
			for(let i = 0; i < probabilityData.length; i++) {
				let result = probabilityData[i];
				if(p >= total && p <= total + result.p) {
					temp.push(result['attribute']);
					setAttributes(temp);
					break;
				} else {
					total = total + result.p;
				}
			}
		}
	};

	const use = () => {
		if(numCube <= 0) {
			alert('方塊數量不足');
		} else {
			setCubeUsed(cubeUsed + 1);
			setNumCube(numCube - 1);
			randomChoose();
		}
	};

  return (
    <div className={styles.App}>
      <div className={styles.eventImg}>
        <img id={styles.image} src='images/event.jpeg'/>
      </div>
      <Board attributes={attributes}/>
      <div className={styles['shop-container']}>
        <img className={styles.cube} src='images/cube.png'/>
        <div className={styles.button}>
        <Button variant="contained" style={{fontSize: '3rem', backgroundColor: '#95b222'}} startIcon={<ShoppingCartIcon />} onClick={() => buy()}>
          購買一組 (55個)
        </Button>
        </div>
        <div className={styles.info}>
          <div className={styles.cost}>
            累計花費: ${cost}
          </div>
          <div className={styles.cost}>
            累計使用{cubeUsed}個方塊
          </div>
          <div className={styles.cost}>
            目前持有{numCube}個方塊
          </div>
          <Button variant="contained" style={{fontSize: '2rem', backgroundColor: '#95b222'}} onClick={() => use()}>
            使用方塊
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
