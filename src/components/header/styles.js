import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledHeader = styled.header`
	padding: 1.875rem 1rem;
	background-color: ${COLORS.countryCardBg};
`;

const HeaderTitle = styled.h1`
	margin: 0;
	font-size: 14px;
`;

export { StyledHeader, HeaderTitle };
