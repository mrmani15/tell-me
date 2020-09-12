import React from 'react';
import Write from './Write';

function TitleBar() {
	return (
		<nav
			className='bg-dark text-warning p-2 mt-2 font-weight-bolder d-flex justify-content-between'
			id='titlebar'
		>
			<h2 className='mt-2 bg-dark'>TELL ME</h2>
			<Write />
		</nav>
	);
}

export default TitleBar;
