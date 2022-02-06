import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
const API_URL='/api/articles/article/';

function ArticleRender() {
	
const [storedData, setStoredData] = useState({}); 
const { id } = useParams();

React.useEffect(() => {
	fetch(API_URL+id)
	.then(response => response.json())
	.then(data=>{ 
	let array = data;
	
	//unnecessarily large code to slice the date to make it look pretty
	let string=array.Date;
	let date = '';
	let time = '';
	date = string.slice(0,10);
	time = string.slice(11,16);
	array.Date=date+' '+time;
	
	console.log(array)
	setStoredData(array);
	});
		
		
	},[]);




	return (
	<div className="articleFull">
	<h2> {storedData.Title}</h2>
		{storedData.ImageURL === null ? null : <><img src={storedData.ImageURL} width="65%"alt={'Image, Credit to: '+ storedData.ImageCredit}/><p className="imageCredit">Image credit to: {storedData.ImageCredit}</p></>}
		<div className="rowSmall">
		<p>{'Article By: '+storedData.Author}</p>
		
		<p>{'Posted: '+storedData.Date}</p>
		</div>
		<hr/>
		<p>{storedData.Content}</p>
   </div>
  );
}

export default ArticleRender;
