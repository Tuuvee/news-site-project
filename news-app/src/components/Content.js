import ArticlePreview from './ArticlePreview';
import Article from './ArticleRender';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
function Content() {
  return (
    
			<Router>
				<Routes>
					<Route path="/" element={<ArticlePreview />} 
					/>
					<Route path="/article/:id" element={<Article />}
					/>
				</Routes>
			</Router>
		
  );
}

export default Content;
