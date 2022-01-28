
function ArticleDisplay(props) {
	
	const articleContent = props.articleData.map(data =>
	<div className="article" key={data.ID}>
	<h2>{data.Title}</h2>
	<p>{data.Author}</p>
	<p>{data.Date}</p>
	{data.ImageURL === null ? null : <><img src={data.ImageURL} alt={'Image, Credit to: '+ data.ImageCredit}/><p className="imageCredit">Image credit to: {data.ImageCredit}</p></>}
	<hr className="articleLine" />
	<p>{data.Content}</p>
	</div>
		
	);
	
	
	
	
  return (
    <>
	{articleContent}
    </>
  );
}

export default ArticleDisplay;
