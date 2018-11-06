import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = { users: [] };
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState( { users: users } );
			})
	}
  	render() {
	  	return (
			<div className='list'>
				<h1>
					Users
				</h1>
				{
					this.state.users.map( (user, index) => {
						return (
							<NavLink 
								key={index} 
								to={`/users/${user.id}`} 
								activeClassName='selected' >
								{user.name}
							</NavLink>
						);
					})
				}
			</div>
		);
  	}
}