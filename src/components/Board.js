import styles from './Board.module.css';

function Board(props) {
	return (
		<div className={styles['board-container']}>
			<div className={styles['img-container']}>
				{/* <img src='CuteMonsterCube/images/lucid.webp'/> */}
				<img src='images/lucid.webp'/>
			</div>
			<div className={styles.name}>
				{props.toEng ? (
					<div>Lucid</div>
				) : (
					<div>露西妲</div>
				)}
			</div>
			<div className={styles.skill}>
				{props.toEng ? (
					<div>Hypnosis</div>
				) : (
					<div>催眠</div>
				)}
			</div>
			<div className={styles.attributes}>
				<div className={styles.attribute}>
					{props.attributes[0]}
				</div>
				<div className={styles.attribute}>
					{props.attributes[1]}
				</div>
				<div className={styles.attribute}>
					{props.attributes[2]}
				</div>
			</div>
		</div>
	);
}

export default Board;