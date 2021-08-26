import React from 'react';
import styles from '../../../styles/Item.module.css';

import cn from 'classnames';
const Item = ({ icon, label, value, hasLine }) => {
	return (
		<div className={cn(styles.Item, 'row justify-content-center')}>
			<div className={styles.label}>
				<div className={styles.icon}> {icon}</div>
				{label}
			</div>
			<p className={styles.input}>{value}</p>
			{hasLine ? <div className={styles.line} /> : ' '}
		</div>
	);
};

export default Item;
