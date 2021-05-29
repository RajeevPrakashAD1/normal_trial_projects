import React, { useContext } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './cocktailContext';
import CocktailTile from './coctailTiles';

const CocktailHome = () => {
	const {cocktails,loading,searchTerm,setSearchTerm} = useGlobalContext();
	

	return (
    <CocktailDiv>
    {cocktails.map((item) =>  <CocktailTile key={item.id} id={item.id} name={item.name} glass={item.glass} info={item.info} image={item.image} />)}
    </CocktailDiv>
    )
};

export default CocktailHome;


const CocktailDiv = styled.div `

    margin-top:30px;
    display:flex;
    justify-content:space-evenly;
   
    flex-wrap:wrap;


`