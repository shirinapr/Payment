import React from 'react';
import styles from '../../../styles/Item.module.css';

import { IoMdCopy } from 'react-icons/io';

// import copy from 'copy-to-clipboard';

import cn from 'classnames';
const Item = ({ icon, label, value, hasLine, hasCopy }) => {
	return (
		<div className={cn(styles.Item, 'row justify-content-center')}>
			<div className={styles.label}>
				<div className={styles.icon}> {icon}</div>
				{label}
			</div>
			<p className={styles.input}>
				{value}
				{hasCopy ? <IoMdCopy className={styles.copy} /> : ' '}
			</p>

			{hasLine ? <div className={styles.line} /> : ' '}
		</div>
	);
};

export default Item;
