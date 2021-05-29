import React from 'react';
//import "App.css";
import styled from 'styled-components';
import Review from './components/Review';
import SideNav from './components/sidenav';

import {Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import Lorem from './components/loremcreator';
import VideoPlaying from './reusableThings/video';
import CocktailHome from './components/coctailsproject/cocktailHome';




export default function App() {
	return (
		<React.Fragment>
           <MainContainer>
            <SideNav />
           
			
            <Route exact path="/" component={Home} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/epsomlourem" component={Lorem} />
            <Route exact path="/camera" component={VideoPlaying} />
            <Route exact path="/cocktails" component={CocktailHome} />

            
            </MainContainer>
            
           
			

			
		</React.Fragment>
	);
}


const MainContainer = styled.div `

 

`