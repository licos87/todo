import BtnDoneRemove from '../../../shared/ui/btn-done-remove/btn-done-remove'
import styles from './task-list-name.module.css'

type TaskListButtonProps = {
	name: string;
	btnColorTheme: 'green' | 'blue';
	isActive: boolean;
	activeTaskListHendler: (name: string) => void;
}

function TaskListName({ name, btnColorTheme, isActive, activeTaskListHendler }: TaskListButtonProps) {

	let btn = styles.btn;
	let taskCount = styles.tasksCount;

	if (btnColorTheme === 'green') {
		btn += ` ${styles.btn_bgGreen}`
		taskCount += ` ${styles.tasksCount_bgGreen}`
	}
	if (btnColorTheme === 'blue') {
		btn += ` ${styles.btn_bgBlue}`
		taskCount += ` ${styles.tasksCount_bgBlue}`
	}

	if (isActive) {
		btn += ` ${styles.btn_active}`
	}


	return (
		<div className={btn} onClick={() => activeTaskListHendler(name)}>
			<span className={styles.taskListName}>{name}</span>
			<span className={taskCount}><span></span>12</span>
			<BtnDoneRemove type='remove' />
		</div>
	)
}

export default TaskListName;
