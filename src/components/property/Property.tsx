import React from 'react';
import './Style.css';
import { useHistory } from "react-router-dom";

import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';

import hotel1 from "../../images/hotel1.jpg";
import hotel2 from "../../images/hotel2.jpg";
import hotel3 from "../../images/hotel3.jpg";
import hotel4 from "../../images/hotel4.jpg";
import hotel5 from "../../images/hotel5.jpg";
import hotel6 from "../../images/hotel6.jpg";


export default function Property() {

	
	// redirect to accomodation details page (PropertyDetails)
	let history = useHistory();
	const goPropertyDetails = () => {
		history.push('detalhes');
	}; 

	// getting random hotel pics to fill search results
	var hotelPics = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];

	var randPic = hotelPics[Math.floor(Math.random() * hotelPics.length)];
	console.log(hotelPics);

	return (

		<section className="property" onClick={goPropertyDetails}>

			<div className="property__header">
				<div className="property__img">
						<picture>
								<img src={randPic} alt="hotel"/>
						</picture>
				</div>
			</div>
			
			<article className="description">

				<div className="description__highlighted-info">

					<h3>Premier Inn London Holborn hotel</h3><br/>
					<div className="description__details">

						<div>
							<LocationOnIcon style={{fontSize: 15}}/>
							<p className="description__item-title">Sheffield</p>
						</div>
						<div>
							<PeopleIcon style={{fontSize: 15}}/>
							<p  className="description__item-title">8 hóspedes</p>
						</div>
						<div>
							<AirlineSeatIndividualSuiteIcon style={{fontSize: 15}}/>
							<p  className="description__item-title">4 quartos</p>
						</div>
					</div>
				</div>

				<div className="description__property-price">
	
					<hgroup className="description__service">
							<h5>Valor diária</h5>
							<h5>Total 5 diárias</h5>
							<h5>Taxa de limpeza</h5>
							<h5>Caução</h5> 
							<h4>Total:</h4>
					</hgroup>
		
					<hgroup className="description__value">
							<h5>R$50,00</h5>
							<h5>R$200,00</h5>
							<h5>R$200,00</h5>
							<h5>R$200,00</h5>
							<h4>R$3700,00</h4>
					</hgroup>
				</div>
			
			</article>
		
		</section>
	);
}