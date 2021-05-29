import React, { useState } from 'react';
import data from '../review_data';

import CircularPic from '../reusableThings/profilePhoto';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Review() {
	const [ index, setIndex ] = useState(0);
	const handleForwardClick = () => {
		let newIndex = 0;
		if (index >= data.length - 1) {
			newIndex = 0;
		} else newIndex = index + 1;
		console.log(newIndex);
		setIndex(newIndex);
	};
	const handleBackwardClick = () => {
		let newIndex = 0;
		if (index <= 0) {
			newIndex = data.length - 1;
		} else newIndex = index - 1;
		console.log(newIndex);
		setIndex(newIndex);
	};
	return (
		<React.Fragment>
			<h1 className="our-review"> Our Reviews</h1>
			<div className="bottom" />
			<div className="review-box">
				<CircularPic source={data[index].image} />
				<div className="font-link">{data[index].name}</div>

				<div>{data[index].job}</div>
				<div className="review-content ">
					<p>{data[index].text}</p>
				</div>
				<div className="little-nav-review-button-class">
					<button onClick={handleBackwardClick} className="little-navigation-button">
						<ArrowBackIosIcon />
					</button>
					<button onClick={handleForwardClick} className="little-navigation-button">
						{' '}
						<ArrowForwardIosIcon />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
export default Review;
