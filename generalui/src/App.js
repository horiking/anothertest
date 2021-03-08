import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Elements from './components/element';
import React, { useEffect, useState } from 'react';

function App() {
	const [elements, setElements] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		const apiUrl = `http://ec2-18-225-37-154.us-east-2.compute.amazonaws.com:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((elements) => {
				setElements(elements);
				setLoading(false);
			});
		console.log('Du dummer Hurensohn');
	},[setElements]);


	return (
	<div className="App-header">
		{loading ? (
			<p>Loading ...</p>
		) : (
			<div>
				{elements.map((element) => (
					<div key={element.id}>
						<span key={element.id}>{element.id}{element.name}</span>
					</div>

					
				
				))}
			</div>
		)}
	</div>
        
	);
}

export default App;
