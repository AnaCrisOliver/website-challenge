import React, { Component } from 'react';
import '../../styles/SearchProperty.css';
import Header from '../../components/header/Header';
import Property from '../../components/property/Property';
import Results from '../../components/results/Results';
import Filters from '../../components/filters/Filters';
import Footer from '../../components/footer/Footer';

class SearchProperty extends Component {

	render() {
		document.title = 'Seazone - Buscar';
		return (
			<section>
				<Header/>
				<main>
					<Filters/>
					<section className="search-results">
							<div className="search-results__list">
									<Results/>      
							</div>
					</section>
				</main>
				<Footer/>
			</section>
		);
	}
}

export default SearchProperty;