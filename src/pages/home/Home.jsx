import FilterRegion from '../../components/filter-region/FilterRegion';
import FilterSearch from '../../components/filter-search/FilterSearch';
import { useFetch } from '../../hooks/useFetch';
import { StyledForm, StyledHome, HomeCountriesContainer } from './styles';
import { API_REQUEST } from '../../constants/requests';
import { useState } from 'react';
import CountryCard from '../../components/country-card/CountryCard';
import { v4 } from 'uuid';

const Home = () => {
	const { data, setLink } = useFetch(API_REQUEST.all);
	const [region, setRegion] = useState('all');
	return (
		<>
			<StyledHome>
				<StyledForm>
					<FilterSearch setLink={setLink} />
					<FilterRegion
						region={region}
						setRegion={setRegion}
						setLink={setLink}
					/>
				</StyledForm>
				<HomeCountriesContainer>
					{data === [] ? (
						<h1>Loading...</h1>
					) : (
						data.map(country => (
							<CountryCard key={v4()} country={country}></CountryCard>
						))
					)}
				</HomeCountriesContainer>
			</StyledHome>
		</>
	);
};

export default Home;
