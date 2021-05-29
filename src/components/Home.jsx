import React from 'react';
import HomeTiles from './hometiles';

import styled from 'styled-components';

const Home = () => {
	return (
		<HomePage>
			<HomeTiles name="Review" />
			<HomeTiles name="EpsomLourem" />
			<HomeTiles name="Camera" />
			<HomeTiles name="Cocktails" />
			
			
		</HomePage>
	);
};

export default Home;

const HomePage = styled.div`
	margin: 0;
    height:100vh;
    width:100%;
	background-color: #ffffff;
	display: flex;
    flex-wrap: wrap;
	justify-content: space-around;
    margin-top:5rem;
    padding:20px;
    
`;
