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
			dataArrayRight : [],
			showButton : true,
			
		}
		
	}
	
apiCall(){
	fetch(API_URL+maxArticles)
	.then(response => response.json())
	.then(data=>{ 
	let array = data;
	
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

moreArticles(){
	if (this.state.dataArray.length !== maxArticles){
		this.setState({showButton : false})
		alert ('No more articles')
		return
	}
	maxArticles += 10;
	this.apiCall();
	
}
	
	
	
render(){
		return(
		<>
		<h1 style={{textAlign:'center'}}>MOST RECENT</h1>
		<div className="content">
			<div className="column"></div>
			{isMobile ? <div className="articleColumnMobile"><Article articleData={this.state.dataArray} /></div> : <><div className="articleColumnLeft"><Article articleData={this.state.dataArrayLeft} /></div><div className="articleColumnRight"><Article articleData={this.state.dataArrayRight} /></div> </>}
			
			<div className="column"></div>
		</div>
		{this.state.showButton ? <button className="moreButton"onClick={this.moreArticles.bind(this)}>MORE ARTICLES </button> : null}
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
