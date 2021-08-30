import React from 'react';
import Image from 'next/image';
import Item from '../Item';

import styles from '../../../styles/leftBox.module.css';
import cn from 'classnames';

import check from '../../assets/icons/check.svg';
import date from '../../assets/icons/date.svg';
import payment from '../../assets/icons/payment.svg';
import website from '../../assets/icons/website.svg';

const LeftBox = () => {
	return (
		// <div className='col col-md-6'>
		<div className={cn(styles.leftBox, 'col-5')}>
			<div className={styles.amount}>
				<p className={styles.type}>Amount</p>
				<span className={styles.numberSign}>$</span>
				<span className={styles.number}>125</span>
			</div>
			<Item
				hasLine
				icon={<Image src={check} />}
				label='Receipt for'
				value='Digikala'
			/>
			<Item
				hasCopy
				hasLine
				icon={<Image src={payment} />}
				label='Payment ID'
				value='GP2389793432891097328'
			/>

			<Item
				hasLine
				icon={<Image src={website} />}
				label='Website:'
				value='www.geepay.io'
			/>
			<Item
				icon={<Image src={date} />}
				label='Date'
				value='April 3, 2019'
			/>
		</div>
		// </div>
	);
};

export default LeftBox;
