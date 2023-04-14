import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
