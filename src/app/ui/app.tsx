import Dashboard from '../../widgets/dashboard/ui/dashboard';
import Menu from '../../widgets/menu/ui/menu';
import TasksLists from '../../widgets/tasks-lists/ui/tasks-lists';
import styles from './app.module.css'

function App() {
	return (
		<section className={styles.app}>
			<Menu />
			<TasksLists />
			<Dashboard />
		</section>
	)
}

export default App;
