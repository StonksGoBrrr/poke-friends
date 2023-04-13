import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { pokemon } from '../pokemon';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor() {
		super()
		this.state = {
			pokemon: pokemon,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { pokemon, searchfield } = this.state;
		const filteredPokemon = pokemon.filter(pokemon => {
			return pokemon.email.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Poké-Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList pokemon={filteredPokemon}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;