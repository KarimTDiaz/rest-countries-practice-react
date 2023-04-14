import styled from 'styled-components';

const StyledHome = styled.div`
	padding: 2rem 1rem;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 1rem;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 2rem;
`;

const HomeCountriesContainer = styled.div`
	display: grid;
	gap: 2rem;
`;

export { StyledForm, StyledHome, HomeCountriesContainer };
