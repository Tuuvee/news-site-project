import ArticlePreview from './ArticlePreview';
import Article from './ArticleRender';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
function Content() {
  return (
    <div className="content">
		<div className="column"></div>
			<Router>
				<Routes>
					<Route path="/" element={<ArticlePreview />} 
					/>
					<Route path="/article/:id" element={<Article />}
					/>
				</Routes>
			</Router>
		<div className="column"></div>
		
    </div>
  );
}

export default Content;
