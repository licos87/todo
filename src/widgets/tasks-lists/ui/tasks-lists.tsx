import TaskListName from '../../../entities/task-list-name/ui/task-list-name'
import styles from './tasks-lists.module.css'
import BtnAddTaskList from '../../../shared/ui/btn-add-task-list/ui/btn-add-task-list'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks'
import { selectLoadUserData } from '../../../app/store/selects/select-load-userData'
import { TasksListsType } from '../../../shared/types/tasks-lists-type'
import { changeActiveTaskList } from '../../../app/store/actions/actions'
import { selectLoadActiveTasksList } from '../../../app/store/selects/select-load-active-tasks-list'

function TasksLists() {
	const dispatch = useAppDispatch();
	const activeTaskList = useAppSelector(selectLoadActiveTasksList);
	function activeTaskListHendler(name: string) {
		dispatch(changeActiveTaskList(name))
	}

	const userData = useAppSelector(selectLoadUserData);
	const taskLists = userData?.tasksLists
	return (
		<section className={styles.dropdown}>
			<h3 className={styles.title}>Список задач</h3>
			<ul className={styles.list}>
				{
					taskLists && taskLists.map((item: TasksListsType) =>
						<li key={item.id} >
							<TaskListName name={item.listTitle} btnColorTheme={item.colorTheme} count={item.tasks.length} isActive={activeTaskList === item.listTitle} activeTaskListHendler={activeTaskListHendler} />
						</li>
					)
				}
				<li><BtnAddTaskList /></li>
			</ul>
			<img className={styles.author} src='../src/shared/assets/image/author.svg' alt='author Frontend Developer - Sergey Ivanov' />
		</section>

	)
}

export default TasksLists;
