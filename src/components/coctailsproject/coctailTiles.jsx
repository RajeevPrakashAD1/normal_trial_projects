import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CocktailTile({ name, image, id, info, glass }) {
    console.log("image",image);
	return (
		<Tiles>
			<img src={image} />

			<p className="title">  {name} </p>
			<p className="glass"> {glass}</p>
			<p className="info"> {info}</p>
            <button>
                <StyledLink to="#" > Details</StyledLink>
            </button>
		</Tiles>
	);
}

export default CocktailTile;

const Tiles = styled.div`
	background-color: #fff;
	margin: 40px;
	width: 25rem;
	height: 35rem;
    text-align:left;
    
    
    

    >p.title{
        font-size:2.5rem;
        text-align:left;
     
        margin-left:20px;
        
        
    };
    >p.glass{
        font-size:1.5rem;
        text-align:left;
       
        margin-left:20px;

    };

    >p.info{
        font-size: 1rem;
        font-weight: lighter;
        text-align:left;
        margin-left:20px;
    }
    >img{
        height:20rem;
        width:25rem;
       

    }
    >button {
        background-color: #3da01b;
        height:2rem;
        width: 6rem;
        border:none;
        
        margin-left:20px;
        


    
    
        

    }
`;
const StyledLink = styled(Link)`

    text-decoration:none;
    color:#fff;
    
`;
