import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum';
import CopyClipboard from '../reusableThings/copyToClipboard';


const Lorem = () => {
	const [ numOfParagraph, setNP ] = useState(0);

	const [ lorem, setlorem ] = useState("");
    
	const handleSubmit = (e) => {

    console.log('calle');
    console.log('calle');


    
    
    
    setlorem(<LoremIpsum p={numOfParagraph} />);
    
    console.log(lorem);
    
    

		e.preventDefault();
	};
	const handleChange = (e) => {
       
		setNP(e.target.value);

	};

	return (
		<React.Fragment>
			<ParentDiv>
				<form onSubmit={handleSubmit}>
					<div className="form-floating mb-3" style={{ marginLeft: '38%' }}>
						<input
							type="number"
							className="form-control "
							style={{ width: '15rem' }}
							id="floatingInput"
							placeholder="name@example.com"
							value={numOfParagraph}
							onChange={handleChange}
						/>
						<label htmlFor="floatingInput">No of paragraph</label>
					</div>
					<button className="btn btn-success mb-3" type="submit">
						{' '}
						Generate
					</button>
				</form>

				
                <LoremDiv> {lorem} </LoremDiv>
                
                
			</ParentDiv>
		</React.Fragment>
	);
};

export default Lorem;

const Input = styled.input`
	width: 10rem;
	height: 3rem;

	border: none;
`;

const ParentDiv = styled.div`
	background-color: #41768d;
	padding-top: 100px;
	height: 100%;
	width: 100%;

	text-align: center;
    padding-bottom: 100px;
`;
const LoremDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #fff;
	padding: 20px;
    margin: 0 auto;
    width:50%;
`;
