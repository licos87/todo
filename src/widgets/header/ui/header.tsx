import styles from './header.module.css'

function Header() {

	return (
		<section className={styles.header}>
			<div className={styles.account}>
				<span className={styles.calendar}>1 Февраля 2025</span>
				<img src='../src/shared/assets/image/icon.svg' />
			</div>
		</section>
	)
}

export default Header;
