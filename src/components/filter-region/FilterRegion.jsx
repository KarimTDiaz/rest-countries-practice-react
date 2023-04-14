import { StyledSelect } from './styles';
import { API_REQUEST } from '../../constants/requests';
import { useEffect } from 'react';

const FilterRegion = ({ region, setRegion, setLink }) => {
	useEffect(() => {
		setLink(API_REQUEST[region]);
	}, [region]);
	return (
		<>
			<StyledSelect onChange={ev => setRegion(ev.target.value)}>
				<option value='all'>Filter by Region</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</StyledSelect>
		</>
	);
};

export default FilterRegion;
