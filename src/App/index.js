import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../unitls/ErrorBoundary';
import Nav from './components/Nav';
import Home from './Pages/Home/loadable';
import About from './Pages/About/loadable';

const App = () => (
	<BrowserRouter>
		<ErrorBoundary>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
			</Switch>
		</ErrorBoundary>
	</BrowserRouter>
)

export default App;