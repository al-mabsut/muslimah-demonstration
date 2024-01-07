import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';

import './style/index.css';

export default function App() {
  return (
    <div id="app">
			<main>
				<Router>
					<Home path="/" />
				</Router>
			</main>
    </div>
  );
}
