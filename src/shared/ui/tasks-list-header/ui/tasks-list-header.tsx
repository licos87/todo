import styles from './tasks-list-header.module.css'

type TasksListHeaderProps = {
	count: number;
}

function TasksListHeader({ count }: TasksListHeaderProps) {
	const listName = 'Работа'

	const responseDependsCount = (count: number) => {
		if (count === 1) {
			return `${count} задача`;
		}
		if (count > 1 && count < 5) {
			return `${count} задачи`;
		}
		if (count > 5) {
			return `${count} задач`;
		}
	}

	return (
		<section className={styles.header}>
			<div className={styles.header__titleWrapper}>
				<h2 className={styles.header__title}>{listName}</h2>
				<p className={styles.header__counter}>
					{responseDependsCount(count)}
				</p>
			</div>
			<button className={styles.addTask}>
				<span className={styles.addTask__text}>Новая задача</span>
			</button>
		</section>
	)
}

export default TasksListHeader;
