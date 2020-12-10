import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import MovieData from './JSON/sample.json';


function Home(){

	var defaultFilter = MovieData.entries.filter((gre)=> gre.releaseYear >= 2010);
	defaultFilter = defaultFilter.sort((a,b) => (a.title > b.title) - (a.title < b.title));
	//console.log(defaultFilter);
	const [ms, setMov_Ser] = useState(defaultFilter);
	//console.log(ms);

	const inputEvent =(event) => {
		var data = event.target.value;
		data = data.toLowerCase();
		//console.log(data);
		let currentData = defaultFilter.filter((d) => d.programType === data);
		if(event.target.value.length >= 3){
			setMov_Ser(currentData);		
		}else{
			setMov_Ser(defaultFilter);
		}
	}
	const filterTitle= (event) => {		
		debugger;
		var fil = event.target.value;
		var cureentResult;
		if(fil === 'Sort by year in descending order'){
			cureentResult = defaultFilter.sort((a,b) =>  (a.releaseYear < b.releaseYear) - (a.releaseYear > b.releaseYear));
			setMov_Ser(cureentResult);
		}else if(fil === 'Sort by year in ascending order'){
			cureentResult = defaultFilter.sort((a,b) =>   (a.releaseYear > b.releaseYear) - (a.releaseYear < b.releaseYear));
			setMov_Ser(cureentResult);
		}else if(fil === 'Sort by title in descending order'){
			cureentResult = defaultFilter.sort((a,b) =>   (a.title < b.title) - (a.title > b.title));
			setMov_Ser(cureentResult);
		}else{
			cureentResult = defaultFilter.sort((a,b) =>   (a.title > b.title) - (a.title < b.title));
			setMov_Ser(cureentResult);
		}

	}
	


	return (
		<>
		<div className="alert alert-primary homeTitle" role="alert">
		  Papular Movies
		</div>
		<div className="container-fluid custFilter">
			<div className="row">
				<div className="col-md-12">				
					<div className="row justify-content-between">
						<div className="col-4">
						  <div className="input-group mb-3">
						    <input type="text" className="form-control" placeholder="Search.." onChange={inputEvent} />
						    <div className="input-group-append">
						      <span className="input-group-text">Search</span>
						    </div>
						  </div>
						</div>
						<div className="col-1 mr-3">
							<div className="btn-group">
							  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Sort by...
							  </button>
							  <div className="dropdown-menu dropdown-menu-right">
							    <button className="dropdown-item" type="button" onClick={filterTitle} value="Sort by year in descending order">Sort by year in descending order</button>
							    <button className="dropdown-item" type="button" onClick={filterTitle} value="Sort by year in ascending order">Sort by year in ascending order</button>
							    <button className="dropdown-item" type="button" onClick={filterTitle} value="Sort by title in descending order">Sort by title in descending order</button>
							    <button className="dropdown-item" type="button" onClick={filterTitle} value="Sort by title in ascending order">Sort by title in ascending order</button>
							  </div>
							</div>
						</div>
					</div>
				</div>
				<div style={{clear:'both'}}></div>
				<Card allData={ms}/>
			</div>
		</div>

		</>
	)
}

export default Home;
