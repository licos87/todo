import styles from './header.module.css'

function Header() {

	return (
		<section className={styles.header}>
			<div className={styles.account}>
				<span className={styles.calendar}>1 Февраля 2025</span>
				<a className={styles.profileLink}>
					<span className={styles.user}>Tester</span>
					<img src='../src/shared/assets/image/user.svg' width='24' height='24' />
				</a>
			</div>
		</section>
	)
}

export default Header;
