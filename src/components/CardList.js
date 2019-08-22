import React from 'react';
import Card from './Card';

const CardList = ({ movie }) => {
	if(movie !== null && movie.length){
	return(
		movie.map((user, i) => <Card 
									key={i} 
									movies={user} 
								/>)
	);
}
else{
	return(<h1 className='title'>Loading</h1>);
}
};

export default CardList;