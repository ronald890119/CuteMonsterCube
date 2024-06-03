import styles from './Board.module.css';

function Board(props) {
	return (
		<div className={styles['board-container']}>
			<div className={styles['img-container']}>
				<img src='images/lucid.webp'/>
			</div>
			<div className={styles.name}>
				露西妲
			</div>
			<div className={styles.skill}>
				催眠
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