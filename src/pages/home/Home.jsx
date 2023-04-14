import FilterRegion from '../../components/filter-region/FilterRegion';
import FilterSearch from '../../components/filter-search/FilterSearch';
import { StyledForm, StyledHome } from './styles';

const Home = () => {
	return (
		<>
			<StyledHome>
				<StyledForm>
					<FilterSearch />
					<FilterRegion />
				</StyledForm>
			</StyledHome>
		</>
	);
};

export default Home;
