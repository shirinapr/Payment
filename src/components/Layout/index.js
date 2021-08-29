import React from 'react';
import styles from '../../../styles/layout.module.css';

import LeftBox from './leftBox';

const Layout = ({ children }) => {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-10'>
					<div className={styles.container}>
						<div className={styles.header}>
							<p className={styles.support}>Support</p>
							<select className={styles.select}>
								<option data-content="<img src='http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2833.png'/>">
									English
								</option>
							</select>
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

export default Layout;
