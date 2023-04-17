import {
	CountryImage,
	CountryInfo,
	StyledCountryCard,
	CountryName,
	CountryKey,
	CountryValue
} from './styles';
import { useNavigate } from 'react-router-dom';
const CountryCard = ({ country }) => {
	const navigate = useNavigate();
	return (
		<StyledCountryCard
			onClick={() => navigate(`country/${country.name.common.toLowerCase()}`)}
		>
			<CountryImage src={country.flags.svg} />
			<CountryInfo>
				<CountryName>{country.name.common}</CountryName>
				<CountryKey>
					Population: <CountryValue>{country.population}</CountryValue>
				</CountryKey>
				<CountryKey>
					Region: <CountryValue>{country.region}</CountryValue>
				</CountryKey>
				<CountryKey>
					Capital: <CountryValue>{country.capital}</CountryValue>
				</CountryKey>
			</CountryInfo>
		</StyledCountryCard>
	);
};

export default CountryCard;
