import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";


import SearchBar from './components/search_bar';

// create a new componet . This component shoujld produce some html

// const for API key
const API_KEY = "AIzaSyBSS49i2Adws1dhwRKjIlfL85brIGDk_fs"



class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos :[]};

		YTSearch({key: API_KEY, term: 'reactjs'}, (videos) => {
			this.setState({ videos });
			
		});
	}

	render(){
		return (
			<div>
				<SearchBar /> 
				<VideoList videos ={this.state.videos}/>
			</div>
		);	
	}
	
}

ReactDom.render(<App></App>, document.querySelector('.container'));
