import React from 'react';
import Article from './ArticleDisplay';
const API_URL='/api/articles/';


class Articles extends React.Component{
	constructor(){
		super();
		this.state = {
			dataArray : []
			
		}
		
	}
	
componentDidMount(){
	fetch(API_URL)
	.then(response => response.json())
	.then(data=>{ 
	let array = data;
	this.setState({dataArray : array})
	console.log(array)
	});
}
apiCall(){
	
}
	
	
	
	
render(){
		return(
		<>
		<div className="articleColumnLeft">
			<Article articleData={this.state.dataArray}/>
		</div>
		
		<div className="articleColumnRight">
			
		</div>
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
