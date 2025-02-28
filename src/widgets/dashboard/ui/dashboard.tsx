import { selectLoadActiveTasksList } from "../../../app/store/selects/select-load-active-tasks-list";
import { selectLoadUserData } from "../../../app/store/selects/select-load-userData";
import { useAppSelector } from "../../../shared/lib/hooks";
import { TasksListsType } from "../../../shared/types/tasks-lists-type";
import TasksListHeader from "../../../shared/ui/tasks-list-header/ui/tasks-list-header";
import Header from "../../header/ui/header";
import TasksList from "../../tasks-list/ui/tasks-list";
import styles from './dashboard.module.css'

function Dashboard() {
	const userData = useAppSelector(selectLoadUserData);
	const activeTaskList = useAppSelector(selectLoadActiveTasksList);
	if (userData === undefined || activeTaskList === '') {
		return;
	}
	const taskLists = userData.tasksLists;
	const taskList = taskLists.find((item: TasksListsType) => item.listTitle === activeTaskList)?.tasks;

	return (
		<section className={styles.dashboard}>
			<Header />
			<TasksListHeader count={taskList.length} />
			<TasksList taskList={taskList} />
		</section>
	)
}

export default Dashboard;
