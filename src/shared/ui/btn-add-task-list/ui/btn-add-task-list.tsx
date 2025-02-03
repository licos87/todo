import styles from './btn-add-task-list.module.css'

function BtnAddTaskList() {
	return (
		<button className={styles.btn}>
			<span className={styles.taskListName}>Добавить список</span>
		</button>
	)
}

export default BtnAddTaskList;
