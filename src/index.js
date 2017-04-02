import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"

import SearchBar from './components/search_bar';

// create a new componet . This component shoujld produce some html

// const for API key
const API_KEY = "AIzaSyBSS49i2Adws1dhwRKjIlfL85brIGDk_fs"



class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos :[],
			selectedVideo: null
		};

		this.videoSearch('nodejs');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0],
			 });
			
		});		
	}

	render(){
		return (
			<div>
				<SearchBar onSearchTermChange = {term => this.videoSearch(term)}/> 
				<VideoDetail video ={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos ={this.state.videos}/>
			</div>
		);	
	}
	
}

ReactDom.render(<App></App>, document.querySelector('.container'));
