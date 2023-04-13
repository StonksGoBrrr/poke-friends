import React from 'react';
import Card from './Card'
;
const CardList = ({ pokemon }) => {
	return (
		<div>
			{
				pokemon.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={pokemon[i].id} 
							imgUrl={pokemon[i].imgUrl} 
							name={pokemon[i].name} 
							email={pokemon[i].email} 
							/>
					);
				})
			}
		</div>
	);
}

export default CardList;