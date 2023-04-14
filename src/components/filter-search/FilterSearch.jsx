import { useEffect, useState } from 'react';
import { StyledInput } from './styles';
import { API_REQUEST } from '../../constants/requests';

const FilterSearch = ({ setLink }) => {
	const [filterName, setFilterName] = useState('');

	useEffect(() => {
		setLink(API_REQUEST.name + filterName);
	}, [filterName]);

	return (
		<StyledInput
			type='text'
			name='country'
			placeholder='Search your country...'
			onChange={ev => {
				setFilterName(ev.target.value);
			}}
		/>
	);
};

export default FilterSearch;
