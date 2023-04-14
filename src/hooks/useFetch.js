import { useState, useEffect } from 'react';

export const useFetch = url => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchData(url, setData);
	}, []);

	return { data };
};

const fetchData = async (url, setData) => {
	const response = await fetch(url);
	const data = await response.json();
	setData(data);
};
