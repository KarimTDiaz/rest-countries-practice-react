import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledInput = styled.input`
	width: 100%;
	padding: 1rem 2rem 1rem 2rem;
	background-color: ${COLORS.countryCardBg};
	color: ${COLORS.select};
	border: none;
`;

export { StyledInput };
