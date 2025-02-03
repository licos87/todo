import { useState } from 'react'
import TaskListName from '../../../entities/task-list-name/ui/task-list-name'
import TaskListNameType from '../../../shared/types/task-list-name'
import styles from './tasks-lists.module.css'
import BtnAddTaskList from '../../../shared/ui/btn-add-task-list/ui/btn-add-task-list'

function TasksLists() {
	const mockTaskListNamesList: TaskListNameType[] = [
		{
			id: crypto.randomUUID(),
			name: 'Работа',
			colorTheme: 'blue',
		},
		{
			id: crypto.randomUUID(),
			name: 'Проект',
			colorTheme: 'green',
		},
		{
			id: crypto.randomUUID(),
			name: 'Список покупок',
			colorTheme: 'green',
		},
	]

	const [isActive, setIsActive] = useState('');
	function activeTaskListHendler(name: string) {
		setIsActive(name)
	}
	return (
		<section className={styles.dropdown}>
			<h3 className={styles.title}>Список задач</h3>
			<ul className={styles.list}>
				{
					mockTaskListNamesList.map((item) =>
						<li key={item.id} >
							<TaskListName name={item.name} btnColorTheme={item.colorTheme} isActive={isActive === item.name} activeTaskListHendler={activeTaskListHendler} />
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
