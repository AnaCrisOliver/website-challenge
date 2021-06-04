import React from 'react';
import './Style.css';

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import LocalParkingOutlinedIcon from '@material-ui/icons/LocalParkingOutlined';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

function YesIcon () {
	return (
		<CheckCircleOutlineOutlinedIcon style={{fontSize: 20, color: 'green'}}/>
	);
}

function NoIcon () {
	return (
		<HighlightOffRoundedIcon style={{fontSize: 20, color: 'red'}}/>
	);
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

	icon: {
		fontSize: 30,
		color: 'grey',
	},

}),
);

export default function Facilities() {
	
	const classes = useStyles();

	return (

		<section className="facilities">

			<h3>Comodidades</h3><br/>
			<hr color="#ebebeb"/> <br/>

			<ul className="facilities__list">
				<li className="facilities__item">
					<LocalParkingOutlinedIcon className={classes.icon}/>
					<p>Estacionamento</p>
					<YesIcon/>
				</li>
				<li className="facilities__item">
					<PoolOutlinedIcon className={classes.icon}/>
					<p>Piscina particular</p>
					<YesIcon/>
				</li>
				<li className="facilities__item">
					<WifiOutlinedIcon className={classes.icon}/>
					<p>Wi-fi</p>
					<YesIcon/>
				</li>
				<li className="facilities__item">
					<AcUnitOutlinedIcon className={classes.icon}/>
					<p>Ar condicionado</p>
					<NoIcon/>
				</li>
				<li className="facilities__item">
					<PetsOutlinedIcon className={classes.icon}/>
					<p>Pet friendly</p>
					<YesIcon/>
				</li>
				<li className="facilities__item">
					<SpaOutlinedIcon className={classes.icon}/>
					<p>Spa</p>
					<NoIcon/>
				</li>
				<li className="facilities__item">
					<ArrowUpwardOutlinedIcon className={classes.icon}/>
					<p>Elevador</p>
					<NoIcon/>
				</li>
			</ul>
	
		</section>
	);
}