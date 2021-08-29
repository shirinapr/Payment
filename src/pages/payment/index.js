import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Navlink from '../../components/Navlink';

import styles from '../../../styles/payment.module.css';

import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { BsChevronLeft } from 'react-icons/bs';

import binance from '../../assets/coins/binance.png';
import ether from '../../assets/coins/etheri.png';
import bitcoin from '../../assets/coins/bitcoin.png';
import stellar from '../../assets/coins/stellar.png';

const Payment = () => {
	const renderer = ({ minutes, seconds }) => (
		<span>
			{minutes} : {seconds}{' '}
		</span>
	);
	const router = useRouter();
	const aclick = () => {
		router.back();
	};
	return (
		<>
			<Layout>
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
								duration={15 * 60}
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
						<Navlink icon={bitcoin} value='Bitcoin' />
						<Navlink icon={ether} value='Ethereum' />
						<Navlink icon={binance} value='Binance' />
						<Navlink icon={stellar} value='Stellar' />
					</form>
					<Link href='#'>
						<a onClick={aclick}>
							<div className={styles.footer}>
								<BsChevronLeft className={styles.backIcon} />
								<p className={styles.back}>Back</p>
							</div>
						</a>
					</Link>
				</div>
			</Layout>
		</>
	);
};

export default Payment;
