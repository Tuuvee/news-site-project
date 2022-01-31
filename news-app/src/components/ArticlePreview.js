import React from 'react';
import Article from './ArticleDisplay';
import {isMobile} from "react-device-detect";
const API_URL='/api/articles/';

let maxArticles = 10;

class Articles extends React.Component{
	constructor(){
		super();
		this.state = {
			dataArray : [],
			dataArrayLeft : [],
			dataArrayRight : []
			
		}
		
	}
	
apiCall(){
	fetch(API_URL+maxArticles)
	.then(response => response.json())
	.then(data=>{ 
	let array = data;
	console.log(array)
	let arrayLeft = [];
	let arrayRight = [];
	array.forEach((value, index) => {index % 2 === 0 ?  arrayLeft.push(value) : arrayRight.push(value)});
	
	
	this.setState({dataArray : array})
	this.setState({dataArrayLeft : arrayLeft})
	this.setState({dataArrayRight : arrayRight})
	
	});
}
componentDidMount(){
	this.apiCall();
}

	
	
	
	
render(){
		return(
		<>
		
		{isMobile ? <div className="articleColumnMobile"><Article articleData={this.state.dataArray} /></div> : <><div className="articleColumnLeft"><Article articleData={this.state.dataArrayLeft} /></div><div className="articleColumnLeft"><Article articleData={this.state.dataArrayRight} /></div> </>}
		</>
		);
		
		
	}
	
};
function ArticlePreview() {
  return (
		<Articles />

  );
}

export default ArticlePreview;
