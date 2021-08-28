import Head from 'next/head';

import Payment from './payment';

export default function Home() {
	return (
		<div>
			<Head>
				<title>GeePay</title>
				<link rel='icon' href='/logo.png' />
			</Head>
			<Payment />
		</div>
	);
}
