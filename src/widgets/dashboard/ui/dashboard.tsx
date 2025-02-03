import TasksListHeader from "../../../shared/ui/tasks-list-header/ui/tasks-list-header";
import Header from "../../header/ui/header";
import TasksList from "../../tasks-list/ui/tasks-list";
import styles from './dashboard.module.css'

function Dashboard() {
	const taskList = [
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '12.03.2025',
			dateEnd: '13.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '12.03.2025',
			dateEnd: '13.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '12.03.2025',
			dateEnd: '13.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '12.03.2025',
			dateEnd: '13.03.2025'
		},

		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
		{
			id: crypto.randomUUID(),
			title: 'Загловок таски',
			descriptions: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error perferendis maiores soluta quae magni nobis nulla a aut rem quos ea voluptatem vero doloremque incidunt! Quam expedita rem laudantium.',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		},
	]
	return (
		<section className={styles.dashboard}>
			<Header />
			<TasksListHeader count={taskList.length} />
			<TasksList taskList={taskList} />
		</section>
	)
}

export default Dashboard;
