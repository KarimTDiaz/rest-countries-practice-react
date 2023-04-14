import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import CountryDetails from '../pages/country-details/CountryDetails';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/country/:countryId' element={<CountryDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
