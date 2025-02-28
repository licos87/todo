import { TaskType } from "../../../shared/types/task-type";
import Task from "../../../shared/ui/task/ui/task";
import styles from './tasks-list.module.css';

type TasksListProps = {
	taskList: TaskType[];
}

function TasksList({ taskList }: TasksListProps) {
	return (
		<section className={styles.listWrap}>
			<ul className={styles.list}>
				{taskList.map((task) => <li key={task.id}><Task title={task.taskTitle} descriptions={task.taskDescription} dateStart={task.taskEntryDate} dateEnd={task.taskEndDate} /></li>)}
			</ul>
			<div className={styles.rightFakeLine}></div>
		</section >
	)
}

export default TasksList;
