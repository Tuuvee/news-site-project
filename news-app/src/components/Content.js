import ArticlePreview from './ArticlePreview';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
function Content() {
  return (
    <div className="content">
		<div className="column"></div>
		
			<ArticlePreview />
		
		<div className="column"></div>
		
    </div>
  );
}

export default Content;
