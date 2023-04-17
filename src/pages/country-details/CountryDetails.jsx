import { useNavigate, useParams } from 'react-router-dom';
import { API_REQUEST } from '../../constants/requests';
import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import CountryDetailCard from '../../components/country-detail-card/CountryDetailCard';

const CountryDetails = () => {
	const navigate = useNavigate();
	const { countryId } = useParams();

	const { data, setLink } = useFetch();
	useEffect(() => {
		setLink(API_REQUEST.name + '/' + countryId);
	}, []);

	return (
		<>
			<CountryDetailCard country={data} />
		</>
	);
};

export default CountryDetails;
