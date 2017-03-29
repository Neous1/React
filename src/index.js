import React from 'react';
import ReactDom from 'react-dom';
// create a new componet . This component shoujld produce some html


const App = function (){
	return <div>Hi!</div>;

}

// take this component's generated html and put in on the page(in the DOM)

ReactDom.render(<App></App>, document.querySelector('.container'));
