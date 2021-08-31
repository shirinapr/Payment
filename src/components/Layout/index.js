import React from 'react';
import styles from '../../../styles/layout.module.css';
import Select from 'react-select';
import LeftBox from './leftBox';

import cn from 'classnames';
import Image from 'next/image';
import uk from '../../assets/flags/ukFlag.svg';
import triangle from '../../assets/icons/triangle.svg';
import china from '../../assets/flags/chinaFlag.png';
import Link from 'next/link';

const Layout = ({ children }) => {
	const customStyles = {
		menu: () => ({
			width: 107,
			height: 30,
		}),
		control: (base) => ({
			...base,
			width: 107,
			backgroundColor: 'white',
		}),
		options: () => ({
			width: 107,
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
					<Image src={uk} width={20} height={13} />
					<span>English</span>
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
	// 'container-fluid p-0'
	return (
		<div className={cn(styles.container)}>
			{/* <div className='row'> */}
			<div
				className={cn(
					'justify-content-center',
					'd-flex'
					// 'align-items-center'
				)}
			>
				<div>
					<div className={styles.header}>
						<Link href='#'>
							<a className={styles.support}>Support</a>
						</Link>

						<Select
							menuPosition='fixed'
							menuPlacement='bottom'
							isSearchable={false}
							options={options}
							styles={customStyles}
							defaultValue={options[0]}
						/>
					</div>
					<div className={cn('row', styles.box)}>
						<LeftBox />
						{children}
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Layout;
