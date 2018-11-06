import React, { Component } from 'react';

export default class Photos extends Component {
	constructor(props) {
		super(props);
		this.state = { photos: [] };
		this.fetchData = this.fetchData.bind(this);
	}
	fetchData () {
		fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
			.then(response => response.json())
			.then(photos => {
				this.setState( { photos: photos } );
		})
	}
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate (prevProps, prevState) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.fetchData();
		}
	}
  	render() {
	  	return (
			<div className='list photos'>
				<h1>
					Photos
				</h1>
				{
					this.state.photos.map( (photo, index) => {
						return (
							<img key={index} 
								src={photo.url} 
								alt={photo.title} 
							/>
						);
					})
				}
			</div>
		);
  	}
}