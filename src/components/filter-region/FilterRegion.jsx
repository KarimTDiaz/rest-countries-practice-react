import { useFetch } from '../../hooks/useFetch';
import { StyledSelect } from './styles';
import { API_REQUEST } from '../../constants/requests';
import { useState } from 'react';

const FilterRegion = () => {
	const [region, setRegion] = useState();
	const {} = useFetch(API_REQUEST + '.' + region);
	return (
		<>
			<StyledSelect onChange={ev => setRegion(ev.target.value.toLowerCase())}>
				<option>Filter by Region</option>
				<option>Africa</option>
				<option>America</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</StyledSelect>
		</>
	);
};

export default FilterRegion;
