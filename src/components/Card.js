import React from 'react';

const Card = ({ imgUrl, name, email }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow'>
			<img src={imgUrl} alt='pokemon' height='200px' width='200px' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card