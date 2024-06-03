import styles from './Board.module.css';

function Board() {
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
				最終傷害 +20%<br />
				最終傷害 +20%<br />
				最終傷害 +20%<br />
			</div>
		</div>
	);
}

export default Board;