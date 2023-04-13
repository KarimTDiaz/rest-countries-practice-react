import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import CountryDetails from '../pages/country-details/CountryDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/country/:countryId' element={<CountryDetails />} />
		</Routes>
	);
};

export default Router;
