import React from 'react';
import styles from '../../../styles/layout.module.css';

import LeftBox from './leftBox';
import Selection from '../select';

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.support}>Support</p>
				<Selection />
				{/* select */}
			</div>
			<div className={styles.box}>
				<LeftBox />
				{children}
			</div>
		</div>
	);
};

export default Layout;
