import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TasksList from './shared/ui/tasks-list/ui/tasks-list'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TasksList />
	</StrictMode>,
)
