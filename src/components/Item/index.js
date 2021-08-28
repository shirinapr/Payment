import { React, useState } from 'react';
import styles from '../../../styles/Item.module.css';

import { IoMdCopy } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';
import copy from 'copy-to-clipboard';

import cn from 'classnames';
const Item = ({ icon, label, value, hasLine, hasCopy }) => {
	const [isClicked, setIsClicked] = useState(false);
	const copyIt = () => {
		copy(value);
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 1000);
	};
	return (
		<div className={cn(styles.Item, 'row justify-content-center')}>
			<div className={styles.label}>
				<div className={styles.icon}> {icon}</div>
				{label}
			</div>
			<p className={styles.input}>
				{value}
				{hasCopy ? (
					<>
						{isClicked ? (
							<BiCheck className={styles.copy} />
						) : (
							<IoMdCopy
								className={styles.copy}
								onClick={copyIt}
							/>
						)}
					</>
				) : (
					' '
				)}
			</p>

			{hasLine ? <div className={styles.line} /> : ' '}
		</div>
	);
};

export default Item;
