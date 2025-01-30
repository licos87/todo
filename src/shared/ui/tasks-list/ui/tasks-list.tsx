import Task from "../../task/ui/task";

function TasksList() {
	const taskList = [
		{
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '12.03.2025',
			dateEnd: '13.03.2025'
		},
		{
			title: 'Загловок таски',
			descriptions: 'Здесь будет описание задачи',
			dateStart: '14.03.2025',
			dateEnd: '15.03.2025'
		}
	]
	return (
		<section className="styles.tasks__list">
			{taskList.map((task) => <Task title={task.title} descriptions={task.descriptions} dateStart={task.dateStart} dateEnd={task.dateEnd} />)}
		</section>
	)
}

export default TasksList;
