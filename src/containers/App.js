import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchfield: '',
			movies: []
		}
	}

	componentDidMount = async() => {
		let response = await fetch('http://localhost:8084/Robofriends-version-2.0-ServerSide/NewServlet');
		const allUsers = await response.json();
		await this.setState({ users: allUsers }); 
		let movie = [];
		 await this.state.users.map(async(user, i) => {
							 let resp = await fetch(`http://www.omdbapi.com/?apikey=1610a37c&t=${user.name}`);
							 let allMovies = await resp.json();
							 //movie[i] = await allMovies;
							 movie = movie.concat(allMovies);
							 if(movie.length === this.state.users.length)
							 	this.setState({movies:movie});
				    });
	}

	componentDidMoun = () => {
		fetch(`http://localhost:8084/Robofriends-version-2.0-ServerSide/NewServlet`, {
		        method: 'POST',
			    body: JSON.stringify({input: this.state.searchfield, id: '12' }),
		         headers: new Headers({
	             		'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
	             		
	   			 }),
		      })
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value }, this.componentDidMoun);	
	}

	render() {
		const { users, searchfield, movies} = this.state;
		const filteredUsers = (movies.length)
								? movies.filter(user =>{
									return user.Title.toLowerCase().includes(searchfield.toLowerCase())
								})
								: null;
		return (!users.length) ?
			<h1 className='title'>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='title'>MovieBuff</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList movie={filteredUsers}/>
					</Scroll>
				</div>
			); 
	}
}

export default App;