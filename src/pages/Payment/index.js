import React from 'react';

import Layout from '../../components/Layout';
import Navlink from '../../components/Navlink';

import styles from '../../../styles/layout.module.css';

import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { IoChevronBackOutline } from 'react-icons/io';

const Payment = () => {
	return (
		<>
			<Layout>
				<div>
					<div className={styles.rightBox}>
						<div className={styles.header}>
							<img
								src='https://s4.uupload.ir/files/geepay_oq4.png'
								alt='GeePay'
								className={styles.img}
							/>
							<CountdownCircleTimer
								isPlaying
								duration={60}
								colors={[['#979797']]}
								size={[[30]]}
								strokeWidth={[[3]]}
								onComplete={() => [true, 1000]}
							/>
							<Countdown date={Date.now() + 1000 * 60 * 15} />
						</div>

						<form>
							<p className={styles.choose}>Choose a currency</p>
							<Navlink
								icon='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Bitcoin-BTC-icon.png'
								value='Bitcoin'
							/>
							<Navlink
								icon='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png'
								value='Ethereum'
							/>
							<Navlink
								icon='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Binance-Coin-BNB-icon.png'
								value='Binance'
							/>
							<Navlink
								icon='https://s2.coinmarketcap.com/static/img/coins/200x200/512.png'
								value='Stellar'
							/>
						</form>
						<p>
							<IoChevronBackOutline />
							Back
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Payment;
