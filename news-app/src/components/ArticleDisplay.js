import {Link} from 'react-router-dom';
function ArticleDisplay(props) {
	
	const articleContent = props.articleData.map(data =>
	<Link to={'/article/'+data.ID} key={data.ID}>
	<div className="article" >
	<h2>{data.Title}</h2>
	<p>{data.FlavorText}</p>
	<p>{data.Date.slice(0,10)+' '+data.Date.slice(11,16)}</p> {/*slices the date to look pretty*/}
		{/*checks if ImageUrl exists in the received data and renders an image if it does*/}
	{data.ImageURL === null ? null : <><img src={data.ImageURL} alt={'Image, Credit to: '+ data.ImageCredit}/><p className="imageCredit">Image credit to: {data.ImageCredit}</p></>}
	</div>
	</Link>
	);
	
	
	
	
  return (
    <>
	{articleContent}
    </>
  );
}

export default ArticleDisplay;
