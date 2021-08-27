import React from 'react';
import styles from '../../../styles/layout.module.css';

import LeftBox from './leftBox';

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.support}>Support</p>
				<select className={styles.select}>
					<img src='https://cdn.iconscout.com/icon/free/png-512/united-kingdom-flag-country-nation-union-empire-33115.png' />
					<option value='English'>English</option>
				</select>
			</div>
			<div className={styles.box}>
				<LeftBox />
				{children}
			</div>
		</div>
	);
};

export default Layout;
