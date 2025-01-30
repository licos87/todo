import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<h1>Initialization app</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia nobis numquam accusamus aspernatur quod, iste perferendis explicabo consequatur magnam deserunt, nesciunt minima dignissimos tempora harum sint accusantium excepturi enim?</p>
	</StrictMode>,
)
