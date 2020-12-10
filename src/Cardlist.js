import React from 'react';

function Cardlist(props){
	//console.log(props)
	return (
		<>
			<div className="col-md-2 mt-4" id={props.keyVal}>
				<div className="card custClass">
					  <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
					  	<div className="card-body">
					  		<h5 className="card-title">{props.title}</h5>					  		
					  	</div>
				</div>
			</div>
		</>
	)
}

export default Cardlist;