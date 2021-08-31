import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CountdownTimer from 'react-component-countdown-timer';

import { BsChevronLeft } from 'react-icons/bs';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import Layout from '../../components/Layout';
import Navlink from '../../components/Navlink';
import styles from '../../../styles/payment.module.css';

import cn from 'classnames';

import geepay from '../../assets/logo.svg';
import ether from '../../assets/coins/etheri.png';
import binance from '../../assets/coins/binance.png';
import bitcoin from '../../assets/coins/bitcoin.png';
import stellar from '../../assets/coins/stellar.png';

const Payment = () => {
	const renderer = ({ minutes, seconds }) => (
		<div>
			<span>
				{minutes}:{seconds}
			</span>
		</div>
	);
	const router = useRouter();
	const aclick = () => {
		router.back();
	};
	return (
		<Layout>
			<div className={cn(styles.rightBox, 'col-md-7')}>
				<div className={cn(styles.head, 'row')}>
					<div className={cn('col-5')}>
						<Image src={geepay} alt='GeePay' width={70} />
					</div>
					<div className='col-7'>
						<div className='row'>
							<div className={cn(styles.count, 'col-4')}>
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

							<div className='col-8'>
								<div className={styles.counter}>
									<CountdownTimer
										count={15 * 60}
										hideDay
										hideHours
										// noPoints
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className={styles.choose}>Choose a currency</p>
					<Navlink icon={bitcoin} value='Bitcoin' />
					<Navlink icon={ether} value='Ethereum' />
					<Navlink icon={binance} value='Binance' />
					<Navlink icon={stellar} value='Stellar' />
				</div>

				<Link href='#'>
					<p onClick={aclick}>
						<div className={styles.footer}>
							<BsChevronLeft className={styles.backIcon} />
							<p className={styles.back}>Back</p>
						</div>
					</p>
				</Link>
			</div>
		</Layout>
	);
};

export default Payment;
