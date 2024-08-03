import styles from './App.module.css';
import Board from './components/Board';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

function App() {
  const [cost, setCost] = useState(0);
	const [cubeUsed, setCubeUsed] = useState(0);
	const [numCube, setNumCube] = useState(0);
	const [attributes, setAttributes] = useState(['?', '?', '?']);
	const [toEng, setToEng] = useState(false);
	let probabilityData = [];

	let loadJson = fetch('CuteMonsterCube/data/probability.json')
	// let loadJson = fetch('data/probability.json')
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

	// load json once window is loaded
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

	// consume the cube
	const use = () => {
		if(numCube <= 0) {
			if(toEng) {
				alert('Insufficient cubes');
			} else {
				alert('方塊數量不足');
			}
		} else {
			setCubeUsed(cubeUsed + 1);
			setNumCube(numCube - 1);
			randomChoose();
		}
	};

	// switch language between Chinese and English
	const setLanguage = () => {
		setToEng(!toEng);
	};

  return (
    <div className={styles.App}>
			<header>
				<nav>
					<FormControlLabel control={<Switch onClick={setLanguage}/>} label={<span style={{ fontSize: '2rem', color: 'white' }}>To English</span>}/>
				</nav>
			</header>
      <div className={styles.leftPart}>
				<img id={styles.image} src='CuteMonsterCube/images/event.jpg'/>
        {/* <img id={styles.image} src='images/event.jpg'/> */}
				<div className={styles.player}>
					<div className={styles.message}>
						{toEng ? (
							<label>Play BGM and relax👇</label>
						) : (
							<label>聽個音樂放鬆一下👇</label>
						)}
					</div>
					<audio loop controls controlsList="nodownload noplaybackrate">
						<source src="CuteMonsterCube/music/Heaven_Again.mp3" type="audio/mpeg"/>
						{/* <source src="music/Heaven_Again.mp3" type="audio/mpeg"/> */}
					</audio>
				</div>
				
      </div>
      <Board attributes={attributes} toEng={toEng}/>
      <div className={styles['shop-container']}>
				<img className={styles.cube} src='CuteMonsterCube/images/cube.png'/>
        {/* <img className={styles.cube} src='images/cube.png'/> */}
        <div className={styles.button}>
        <Button variant="contained" style={{fontSize: '3rem', backgroundColor: '#95b222'}} startIcon={<ShoppingCartIcon />} onClick={() => buy()}>
						{toEng ? (
							<div>Buy 55 cubes</div>
						) : (
							<div>購買一組 (55個)</div>
						)}
        </Button>
        </div>
        <div className={styles.info}>
          <div className={styles.cost}>
						{toEng ? (
							<div>Total cost: ${cost}</div>
						) : (
							<div>累計花費: ${cost}</div>
						)}
          </div>
          <div className={styles.cost}>
						{toEng ? (
							<div>Total {cubeUsed} cubes used</div>
						) : (
							<div>累計使用{cubeUsed}個方塊</div>
						)}
          </div>
          <div className={styles.cost}>
						{toEng ? (
							<div>Currently holding {numCube} cubes</div>
						) : (
							<div>目前持有{numCube}個方塊</div>
						)}
          </div>
          <Button variant="contained" style={{fontSize: '2rem', backgroundColor: '#95b222'}} onClick={() => use()}>
						{toEng ? (
							<div>Use 1 cube</div>
						) : (
							<div>使用方塊</div>
						)}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
