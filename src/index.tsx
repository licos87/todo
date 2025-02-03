import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './shared/assets/normalize.css';
import './shared/fonts/Nunito.css';
import './index.css'
import App from './app/ui/app';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
