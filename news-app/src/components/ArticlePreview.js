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
	//send everyother object of data into the rightside column to display the most recent articles at the top of the page and in two columns
	array.forEach((value, index) => {index % 2 === 0 ?  arrayLeft.push(value) : arrayRight.push(value)});
	
	
	this.setState({dataArray : array})
	this.setState({dataArrayLeft : arrayLeft})
	this.setState({dataArrayRight : arrayRight})
	
	});
}
componentDidMount(){
	this.apiCall();
}

moreArticles(){ //checks if dataArray lengths has increased after the last function call and hides the button if it hasnt
	if (this.state.dataArray.length !== maxArticles){
		this.setState({showButton : false})
		alert ('No more articles')
		return
	}
	//increases the amount of rendered articles and fetches additional data from the database
	maxArticles += 10;
	this.apiCall();
	
}
	
	
	
render(){
		return(
		<div className="column">
		<h1 style={{textAlign:'center'}}>MOST RECENT</h1>
			<div className="row">
			
			
			{isMobile ? <div className="articleColumnMobile"><Article articleData={this.state.dataArray} /></div> : <><div className="articleColumnLeft"><Article articleData={this.state.dataArrayLeft} /></div><div className="articleColumnRight"><Article articleData={this.state.dataArrayRight} /></div> </>}
			
			
		{/*If showbutton === true, render a button that increases the amount of rendered articles and fetches additional data from the database*/}
			</div>
			{this.state.showButton ? <button className="moreButton"onClick={this.moreArticles.bind(this)}>MORE ARTICLES </button> : null}
		</div>
		
		);
		
		
	}
	
};
function ArticlePreview() {
  return (
		<Articles />

  );
}

export default ArticlePreview;
