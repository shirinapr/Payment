import React from 'react';

import Layout from '../../components/Layout';

import styles from '../../../styles/payment.module.css';

const Payment = () => {
	return (
		<>
			<Layout>
				<div className={styles.container}>
					<p>Fill your information</p>
					<label forHtml='name'>Full name</label>
				</div>
			</Layout>
		</>
	);
};

export default Payment;
