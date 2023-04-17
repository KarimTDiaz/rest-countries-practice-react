import styled from 'styled-components';
const StyledCountryDetailCard = styled.div`
	padding: 1rem;
`;
const CountryDetailImage = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	min-height: 210px;
	max-height: 210px;
	pointer-events: none;
`;
const CountryName = styled.h2``;

const CountryKey = styled.p`
	font-weight: 600;
`;

const CountryValue = styled.span`
	font-weight: 300;
`;

export {
	StyledCountryDetailCard,
	CountryDetailImage,
	CountryName,
	CountryKey,
	CountryValue
};
