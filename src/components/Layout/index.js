import React from 'react';
import styles from '../../../styles/layout.module.css';

import { BiReceipt, BiCreditCard } from 'react-icons/bi';
import { IoIosGlobe } from 'react-icons/io';
import { RiCalendarEventLine } from 'react-icons/ri';

import label from '../../assets/geepay.png';

import Item from '../Item';
const Layout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>Support</p>
				<select>
					<option value='English'>English</option>
				</select>
			</div>

			<div className={styles.box}>
				<div className={styles.rightBox}>
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
						hasLine
						icon={<BiCreditCard />}
						label='Payment ID'
						value='GP238979343289109732891097'
					/>
					{/* <IoMdCopy /> */}
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
				<div className={styles.leftBox}>
					<img src={label} alt='GeePay' />
					<form>
						<p>Choose a currency</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Layout;
