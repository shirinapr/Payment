import React from 'react';

import Item from '../Item';

import { BiReceipt, BiCreditCard } from 'react-icons/bi';
import { IoIosGlobe } from 'react-icons/io';
import { RiCalendarEventLine } from 'react-icons/ri';
import styles from '../../../styles/leftBox.module.css';

const LeftBox = () => {
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-10'>
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
				</div>
			</div>
		</>
	);
};

export default LeftBox;
