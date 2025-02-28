import { useEffect } from 'react';
import { useAppDispatch } from '../../shared/lib/hooks';
import Dashboard from '../../widgets/dashboard/ui/dashboard';
import Menu from '../../widgets/menu/ui/menu';
import TasksLists from '../../widgets/tasks-lists/ui/tasks-lists';
import styles from './app.module.css'
import { fetchUserDataAction } from '../store/actions/async-actions';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchUserDataAction());
	}, [])
	return (
		<section className={styles.app}>
			<Menu />
			<TasksLists />
			<Dashboard />
		</section>
	)
}

export default App;
