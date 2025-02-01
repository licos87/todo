import TaskType from "../../../shared/types/task-type";
import Task from "../../../shared/ui/task/ui/task";
import styles from './tasks-list.module.css';

type TasksListProps = {
	taskList: TaskType[];
}

function TasksList({ taskList }: TasksListProps) {
	return (
		<section className={styles.list}>
			<ul className={styles.listWrap}>
				{taskList.map((task) => <li key={task.id}><Task title={task.title} descriptions={task.descriptions} dateStart={task.dateStart} dateEnd={task.dateEnd} /></li>)}
			</ul>
		</section >
	)
}

export default TasksList;
