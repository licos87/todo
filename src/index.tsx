import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './shared/assets/normalize.css';
import './shared/fonts/Nunito.css';
import './index.css'
import App from './app';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
)
