import styled from 'styled-components';
import { COLORS } from '../../constants/variables';
import { NavLink } from 'react-router-dom';

const StyledCountryCard = styled.div`
	background-color: ${COLORS.countryCardBg};
	border-radius: 10px;
	box-shadow: 2px 2px 8px 1px ${COLORS.boxShadow};
`;

const CountryImage = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	min-height: 210px;
	max-height: 210px;
	pointer-events: none;
`;

const CountryInfo = styled.div`
	padding: 1rem;
`;

const CountryName = styled.h2``;

const CountryKey = styled.p``;

const CountryValue = styled.span``;
export {
	StyledCountryCard,
	CountryImage,
	CountryInfo,
	CountryName,
	CountryKey,
	CountryValue
};
