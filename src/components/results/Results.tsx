import React from 'react';
import Property from "../property/Property";
import './Style.css';

export default function Results () {
	return (
		<section className="results">
			<div className="results__title">
				<h1>Todos os imóveis</h1>
				<p>6 imóveis</p>
			</div>
			<div className="results__items">
				<div className="results__propertys">
					<Property/>
					<Property/>
					<Property/>
					<Property/>
					<Property/>
					<Property/>
				</div>
			</div>
		</section>
	);

}