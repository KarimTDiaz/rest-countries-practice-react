import { useNavigate } from 'react-router-dom';
import {
	StyledCountryDetailCard,
	CountryDetailImage,
	CountryName,
	CountryKey,
	CountryValue,
	CountryBorderedContainer
} from './styles';

const CountryDetailCard = ({
	flags,
	name,
	population,
	region,
	subregion,
	capital,
	tld,
	currencies,
	languages,
	borders
}) => {
	console.log(borders);
	const navigate = useNavigate();
	return (
		<>
			<StyledCountryDetailCard>
				<CountryDetailImage src={flags.svg} alt='bandera de pais' />
				<CountryName>{name.common}</CountryName>
				<CountryKey>
					Native Name:
					<CountryValue>
						{Object.values(name.nativeName)[0].common}
					</CountryValue>
				</CountryKey>
				<CountryKey>
					Population:
					<CountryValue>{population.toLocaleString('de-DE')}</CountryValue>
				</CountryKey>
				<CountryKey>
					Region:
					<CountryValue>{region}</CountryValue>
				</CountryKey>
				<CountryKey>
					SubRegion:
					<CountryValue>{subregion}</CountryValue>
				</CountryKey>
				<CountryKey>
					Capital:
					<CountryValue>{capital}</CountryValue>
				</CountryKey>
				<CountryKey>
					Top Level Domain:
					<CountryValue>{tld[0]}</CountryValue>
				</CountryKey>
				<CountryKey>
					Currencies:
					<CountryValue>{Object.values(currencies)[0].name}</CountryValue>
				</CountryKey>
				<CountryKey>
					Languages:
					<CountryValue>{Object.values(languages)[0]}</CountryValue>
				</CountryKey>
				<CountryBorderedContainer>
					{!borders
						? ''
						: borders.map(border => (
								<button onClick={() => navigate(`countryCode/${border}`)}>
									{border}
								</button>
						  ))}
				</CountryBorderedContainer>
			</StyledCountryDetailCard>
		</>
	);
};

export default CountryDetailCard;
