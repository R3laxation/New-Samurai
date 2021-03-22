import React from 'react';
import './App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";


const App = () => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<Content/>
		</div>

	);
}

export default App;