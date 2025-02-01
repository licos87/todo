import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './shared/assets/normalize.css';
import './shared/fonts/Nunito.css';
import './index.css'
import Header from './widgets/header/ui/header';
import Dashboard from './widgets/dashboard/ui/dashboard';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<Header />
		<Dashboard />
	</StrictMode>,
)
