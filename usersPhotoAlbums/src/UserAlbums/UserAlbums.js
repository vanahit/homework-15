import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class UserAlbums extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: [] } ;
		this.fetchData = this.fetchData.bind(this);
	}
  	fetchData() {
  		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/albums`)
			.then(response => response.json())
			.then(albums => {
				this.setState( { albums: albums } );
		})
  	}
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.fetchData();
		}
	}
  	render() {
	  	return (
			<div className='list'>
				<h1>
					Albums
				</h1>
				{ 
					this.state.albums.map( (album, index) => {
						return (
							<NavLink 
								key={index} 
								to={`/users/${album.userId}/albums/${album.id}`} 
								activeClassName='selected' >
								{album.title}
							</NavLink>
						);
					})
				}
			</div>
		);
  	}
}