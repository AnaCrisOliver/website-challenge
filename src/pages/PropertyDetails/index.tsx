import React, { Component }  from 'react';
import '../../styles/PropertyDetails.css';

import Header from '../../components/header/Header';
import Filters from '../../components/filters/Filters';
import Facilities from '../../components/facilities/Facilities';
import GeneralInfo from '../../components/generalInfo/GeneralInfo';

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Footer from '../../components/footer/Footer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import hotel6 from "../../images/hotel6.jpg";


class PropertyDetails extends Component {

	render() {
    document.title = "Premier Inn London Holborn hotel";
    return (
			<section>
				<Header />
				<Filters />
				<main>
					<section className="accomodation">

						<div className="accomodation__path">
								<p><a href="./">Hotéis</a></p>
								<ArrowForwardIosIcon style={{fontSize: 15, color: 'grey'}} />
								<p>Premier Inn London Holborn hotel</p>
						</div>
		
						<div className="accomodation__highlighted-info">

							<div className="accomodation__property-img">
								<picture>
										<img src={hotel6} className="hotel-img" alt="hotel"/>
								</picture>
							</div>

							<div className="accomodation__location">
								<RoomOutlinedIcon style={{fontSize: 40, color: 'grey'}}/>
								<p>Bedford Street</p>
							</div>

						</div>	

						<article className="accomodation__info">

							<div className="accomodation__title"> 
								<h1>Premier Inn London Holborn hotel</h1>
							</div>
							
							<div className="accomodation__availability">
								<CheckCircleOutlinedIcon style={{fontSize: 20, color: 'green'}}/>
								<h5>Disponível</h5>
							</div>

							<div className="accomodation__general-info">
								<GeneralInfo />
							</div>

							<div className="accomodation__facilities">
								<Facilities />
							</div>
							
							<div className="accomodation__address"> 
								<h2>Endereço</h2> <br/>
								<hr color="#ebebeb"/> <br/>
								<p>4915  Bedford Street, MINERAL, TX</p><br/>
							</div>

							<div className="accomodation__details">
								<hgroup>
									<h2>Descrição</h2><br/>
									<hr color="#ebebeb"/> <br/>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
										vitae pulvinar lorem, eget tincidunt metus. Sed vulputate ut ante sed lacinia. 
										Suspendisse placerat augue sit amet cursus euismod. Nullam tempus vulputate sem, 
										ac egestas lorem malesuada ut. Aliquam erat volutpat. Mauris molestie ligula erat,
										a imperdiet dui cursus sed. Nullam eu velit odio. Ut rhoncus magna orci, quis porta 
										ligula lobortis nec. Fusce erat nisi, vehicula ac mauris vitae, pretium varius ex. 
										Ut pulvinar nisi mauris, a tincidunt lectus fringilla non. Nullam gravida lacus ligula, 
										ut mattis ante pretium id. Mauris fringilla faucibus ligula ac lobortis. Praesent quis mi 
										blandit, accumsan ligula quis, ultrices quam. Curabitur ipsum odio, consequat vel nisl non, 
										rutrum finibus ipsum. Suspendisse semper fringilla odio eget facilisis. Integer porttitor 
										scelerisque metus id dapibus.</p>
								</hgroup>     
							</div>
						
						</article>
					</section>
				</main>
				<Footer/>
			</section>     
    );
    }
}

export default PropertyDetails;