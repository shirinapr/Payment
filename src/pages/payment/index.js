import React from 'react';

import Layout from '../../components/Layout';
import Navlink from '../../components/Navlink';

import styles from '../../../styles/payment.module.css';

import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { BsChevronLeft } from 'react-icons/bs';

const Payment = () => {
	const renderer = ({ minutes, seconds }) => (
		<span>
			{minutes} : {seconds}{' '}
		</span>
	);
	return (
		<>
			<Layout>
				<div>
					<div className={styles.rightBox}>
						<div className={styles.head}>
							<img
								src='https://s4.uupload.ir/files/geepay_oq4.png'
								alt='GeePay'
								className={styles.img}
							/>
							<div className={styles.count}>
								<CountdownCircleTimer
									isPlaying
									duration={9000}
									colors={[['#e5e5e5']]}
									trailColor={[['#979797']]}
									size={[[18]]}
									strokeWidth={[[2]]}
									onComplete={() => [true, 1000]}
								/>
							</div>
							<div className={styles.counter}>
								<Countdown
									date={Date.now() + 1000 * 60 * 15}
									renderer={renderer}
								/>
							</div>
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
						<div className={styles.footer}>
							<BsChevronLeft className={styles.backIcon} />
							<p className={styles.back}>Back</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Payment;
