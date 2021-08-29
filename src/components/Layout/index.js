import React from 'react';
import styles from '../../../styles/layout.module.css';
import Select from 'react-select';
import LeftBox from './leftBox';

import Image from 'next/image';
import uk from '../../assets/flags/ukFlag.png';
import triangle from '../../assets/icons/triangle.png';
import china from '../../assets/flags/chinaFlag.png';

const Layout = ({ children }) => {
	const customStyles = {
		menu: () => ({
			width: 107,
			height: 30,
			backgroundColor: 'blue',
		}),
		control: (base) => ({
			...base,
			width: 107,
			backgroundColor: 'white',
		}),
		options: () => ({
			width: 107,
			backgroundColor: 'red',
		}),
		indicatorSeparator: () => {},
		dropdownIndicator: () => ({
			display: 'none',
		}),
	};
	const options = [
		{
			value: 'english',
			label: (
				<div className={styles.selectOpt}>
					<Image src={uk} /> English
					<Image src={triangle} />
				</div>
			),
		},
		{
			value: 'chinese',
			label: (
				<div className={styles.selectOpt}>
					<Image src={china} /> chinese
				</div>
			),
		},
	];

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-10'>
					<div className={styles.container}>
						<div className={styles.header}>
							<p className={styles.support}>Support</p>
							<Select
								options={options}
								styles={customStyles}
								defaultValue={options[0]}
							/>
						</div>
						<div className={styles.box}>
							<LeftBox />
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
{
	/* <option data-content="<img src='http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2833.png'/>"> */
}
export default Layout;
