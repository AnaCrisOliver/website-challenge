import React from 'react';
import './Style.css';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CheckOutButton from '../date/checkout/CheckOutButton';
import CheckInButton from '../date/checkin/CheckInButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const marks = [
	{
    value: 0,
    label: 'R$0',
  },
	{
    value: 25,
    label: 'R$25',
  },
  {
    value: 50,
    label: 'R$50',
  },
	{
    value: 75,
    label: 'R$75',
  },
	{
    value: 100,
    label: 'R$100',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

	root: {
		'& .MuiTextField-root': {
		  margin: theme.spacing(1),
		  width: '25ch',
		},
	},

	button: {
		margin: theme.spacing(1),
	},
}),
);

export default function Filters() {

	
	const PriceSlider = withStyles({
	
		root: {
			minWidth: 200,
			maxWidth: 300,
			color: '#3a8589',
			height: 3,
			padding: '13px 0',
		},
		thumb: {
			height: 15,
			width: 15,
			backgroundColor: '#73A4AA',
			'&:focus, &:hover, &$active': {
				boxShadow: 'inherit',
			},
		},
		'& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
		active: {},
		valueLabel: {
			left: 'calc(-50% + 4px)',
		},
		track: {
			height: 3,
		},
		rail: {
			color: '#d8d8d8',
			opacity: 1,
			height: 3,
		},
		
	})(Slider);

	const [value, setValue] = React.useState<number[]>([50, 100]);

	const handlePriceChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

	const classes = useStyles();

	return (

		<section className="filters">
			<ul className="filters__list--row1">
				<li className="filters__local-field">
					<form className={classes.root} noValidate autoComplete="off">
						<TextField 
							label="Localização" 
							defaultValue="Jurerê Internacional"
							variant="outlined"/>
					</form>
				</li>
				<li><CheckInButton/></li>
				<li><CheckOutButton/></li>
			</ul>
			
			<ul className="filters__list--row2">
					<li className="filters__total-guests">
						<form className={classes.root} noValidate autoComplete="off">
							<TextField
								id="outlined-number"
								label={"N° de hóspedes"}
								type="number"
								defaultValue="4"
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
						</form>
					</li>
					<li className="filters__total-rooms">
						<form className={classes.root} noValidate autoComplete="off">
						<TextField
							id="outlined-number"
							label="N° de quartos"
							type="number"
							defaultValue="4"
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</form>
					</li>
					<li className="filters__price-range">
						<div>
							<Typography id="filters__price-slider" gutterBottom>
								Preço
							</Typography>
							<PriceSlider
								value={value}
								onChange={handlePriceChange}
								valueLabelDisplay="on"
								getAriaValueText={valuetext}
								aria-labelledby="range-slider"
								step={1}
								marks={marks}
							/>	
						</div>
					</li>
					<li className="filters__add-more">
						<div className="filters__add-button">
							<strong> <a href="">+ mais filtros</a> </strong>
						</div>
					</li>
			</ul>	

			<div className="filters__search-button">
				<Button
					size="large"
					variant="contained"
					color="default"
					className={classes.button}
					startIcon={<SearchIcon />}
				>Buscar
				</Button>
			</div>
			
		</section>
	);
}