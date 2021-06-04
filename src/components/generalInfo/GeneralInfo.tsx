import React from 'react';
import './Style.css';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import LocalLaundryServiceSharpIcon from '@material-ui/icons/LocalLaundryServiceSharp';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

	icon: {
		fontSize: 40,
		color: 'grey',
	},

}),
);

export default function GeneralInfo () {

	const classes = useStyles();

    return (
			<ul className="general-info">
				<li>
					<div className="general-info__item">
						<div className="general-info__icon">
							<PeopleOutlineIcon className={classes.icon}/>
						</div>
						<h4 className="general-info__value">6</h4>
						<h6 className="general-info__title">Máx. hóspedes</h6>
					</div>
				</li>

				<li>
					<div className="general-info__item">
						<div className="general-info__icon">
							<LocalLaundryServiceSharpIcon className={classes.icon}/>	
						</div>
						<h4 className="general-info__value">R$50,00</h4>
						<h6 className="general-info__title">Taxa de limpeza</h6>
					</div>
				</li>

				<li>
					<div className="general-info__item">
						<div className="general-info__icon">
							<MonetizationOnSharpIcon className={classes.icon}/>
						</div>
						<h4 className="general-info__value">R$700,00</h4>
						<h6 className="general-info__title">Taxa de caução</h6>
					</div>
				</li>
			</ul>
    );
}