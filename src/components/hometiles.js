import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';

const HomeTiles = ({ name }) => {
	return (
		<Tiles>
			<StyledLink to={`${name}`}>{name}</StyledLink>
		</Tiles>
	);
};

export default HomeTiles;

const Tiles = styled.div`
	background-color: #136087;
	height: 15rem;
	width: 15rem;

	display: flex;

	justify-content: center;
	align-items: center;

	border: 1px solid black;
	box-shadow: 5px 5px 5px 5px #888888;

	padding: 15px;
	&:hover {
		transform: scale(1.1);
		color: aqua;
	}
    margin:40px;
`;

const StyledLink = styled(Link)`

    text-decoration:none;
    color:aqua;
    font-size:30px;
`;
