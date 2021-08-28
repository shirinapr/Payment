import React from 'react';

import Item from '../Item';

import { BiReceipt, BiCreditCard } from 'react-icons/bi';
import { IoIosGlobe } from 'react-icons/io';
import { RiCalendarEventLine } from 'react-icons/ri';
import styles from '../../../styles/leftBox.module.css';

const LeftBox = () => {
	return (
		<div>
			<div className={styles.leftBox}>
				<div className={styles.amount}>
					<p className={styles.type}>Amount</p>
					<span className={styles.numberSign}>$</span>
					<span className={styles.number}>125</span>
				</div>
				<Item
					hasLine
					icon={<BiReceipt />}
					label='Receipt for'
					value='Digikala'
				/>
				<Item
					hasCopy
					hasLine
					icon={<BiCreditCard />}
					label='Payment ID'
					value='GP2389793432891097328'
				/>

				<Item
					hasLine
					icon={<IoIosGlobe />}
					label='Website:'
					value='www.geepay.io'
				/>
				<Item
					icon={<RiCalendarEventLine />}
					label='Date'
					value='April 3, 2019'
				/>
			</div>
		</div>
	);
};

export default LeftBox;
