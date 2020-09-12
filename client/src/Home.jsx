import React from 'react';
import TitleBar from './components/TitleBar';
import Posts from './components/Posts';

function Home() {
	return (
		<div className='container'>
			<TitleBar />
			<Posts />
		</div>
	);
}

export default Home;
