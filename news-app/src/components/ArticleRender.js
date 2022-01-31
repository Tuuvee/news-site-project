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
	<div>
   
   <h2> {storedData.Title}</h2>
   {storedData.ImageURL === null ? null : <><img src={storedData.ImageURL} alt={'Image, Credit to: '+ storedData.ImageCredit}/><p className="imageCredit">Image credit to: {storedData.ImageCredit}</p></>}
   <p>{'Posted: '+storedData.Date}</p>
   <p>{'Article By: '+storedData.Author}</p>
   <hr/>
   <p>{storedData.Content}</p>
   
   </div>
  );
}

export default ArticleRender;
