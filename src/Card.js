import React from 'react';
import Cardlist from './Cardlist';

function Card(props){
	console.log(props);
	return(
		<>
			{
				props.allData.map((all, index)=>{					
					return <Cardlist keyVal={index} imgSrc={all.images.Poster_Art.url} title={all.title} />
				})
			}
		</>
	)
}

export default Card;