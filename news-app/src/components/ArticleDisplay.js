import {Link} from 'react-router-dom';
function ArticleDisplay(props) {
	
	const articleContent = props.articleData.map(data =>
	<Link to={'/article/'+data.ID}>
	<div className="article" key={data.ID}>
	<h2>{data.Title}</h2>
	<p>{data.FlavorText}</p>
	<p>{data.Date}</p>
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
