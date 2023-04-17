import {
	StyledCountryDetailCard,
	CountryDetailImage,
	CountryName,
	CountryKey,
	CountryValue
} from './styles';

const CountryDetailCard = ({ country }) => {
	return (
		<>
			{country.length === 0 ? (
				<h1>Loading...</h1>
			) : (
				<StyledCountryDetailCard>
					<CountryDetailImage
						src={country[0].flags.svg}
						alt='bandera de pais'
					/>
					<CountryName>{country[0].name.common}</CountryName>
					<CountryKey>
						Native Name:
						<CountryValue>
							{Object.values(country[0].name.nativeName)[0].common}
						</CountryValue>
					</CountryKey>
					<CountryKey>
						Population:
						<CountryValue>
							{country[0].population.toLocaleString('de-DE')}
						</CountryValue>
					</CountryKey>
					<CountryKey>
						Region:
						<CountryValue>{country[0].region}</CountryValue>
					</CountryKey>
					<CountryKey>
						SubRegion:
						<CountryValue>{country[0].subregion}</CountryValue>
					</CountryKey>
					<CountryKey>
						Capital:
						<CountryValue>{country[0].capital}</CountryValue>
					</CountryKey>
					<CountryKey>
						Top Level Domain:
						<CountryValue>{country[0].tld[0]}</CountryValue>
					</CountryKey>
					<CountryKey>
						Currencies:
						<CountryValue>
							{Object.values(country[0].currencies)[0].name}
						</CountryValue>
					</CountryKey>
					<CountryKey>
						Languages:
						<CountryValue>
							{Object.values(country[0].languages)[0]}
						</CountryValue>
					</CountryKey>
				</StyledCountryDetailCard>
			)}
		</>
	);
};

export default CountryDetailCard;
