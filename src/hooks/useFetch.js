import { useState, useEffect } from 'react';
import { API_REQUEST } from '../constants/requests';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [link, setLink] = useState(url);

	useEffect(() => {
		fetchData(link, setData);
	}, [link]);
	return { setLink, data };
};

const fetchData = async (link, setData) => {
	const response = await fetch(link);
	const data = await response.json();
	setData(data);
};
