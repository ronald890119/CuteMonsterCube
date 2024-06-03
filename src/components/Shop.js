import styles from './Shop.module.css'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

function Shop() {
	const [cost, setCost] = useState(0);
	const [cubeUsed, setCubeUsed] = useState(0);
	const [numCube, setNumCube] = useState(0);

	const buy = () => {
		setCost(cost + 1350);
		setNumCube(numCube + 55);
	};

	const use = () => {
		if(numCube <= 0) {
			alert('方塊數量不足');
		} else {
			setCubeUsed(cubeUsed + 1);
			setNumCube(numCube - 1);
		}
	};

	return (
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
					共持有{numCube}個方塊
				</div>
				<Button variant="contained" style={{fontSize: '2rem', backgroundColor: '#95b222'}} onClick={() => use()}>
					使用方塊
				</Button>
			</div>
		</div>
	);
}

export default Shop;