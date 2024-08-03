import styles from './Board.module.css';

function Board(props) {
	return (
		<div className={styles['board-container']}>
			<div className={styles['img-container']}>
				{/* <img src='CuteMonsterCube/images/orchid.gif'/> */}
				<img src='images/orchid.gif'/>
			</div>
			<div className={styles.name}>
				{props.toEng ? (
					<div>Orchid (Commander)</div>
				) : (
					<div>殺人鯨(軍團長)</div>
				)}
			</div>
			<div className={styles.skill}>
				{props.toEng ? (
					<div>Commander Orchid's Power</div>
				) : (
					<div>殺人鯨軍團長的力量</div>
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