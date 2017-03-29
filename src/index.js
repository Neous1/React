import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'

// create a new componet . This component shoujld produce some html

// const for API key
const API_KEY = "AIzaSyBSS49i2Adws1dhwRKjIlfL85brIGDk_fs"


const App = () => {
	return (
		<div>
			<SearchBar /> 
		</div>
		);

}

// take this component's generated html and put in on the page(in the DOM)

ReactDom.render(<App></App>, document.querySelector('.container'));
