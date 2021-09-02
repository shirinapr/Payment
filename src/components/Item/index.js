import { React, useState } from 'react';
import styles from '../../styles/Item.module.css';
import Image from 'next/image';

import { BiCheck } from 'react-icons/bi';
import copy from 'copy-to-clipboard';

import copyLogo from '../../assets/icons/copy.svg';

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
		<div className={styles.Item}>
			<div className={styles.label}>
				<div className={styles.icon}> {icon}</div>
				{label}
			</div>
			<div>
				<p className={styles.input}>
					{value}{' '}
					{hasCopy ? (
						<span className={styles.span}>
							{isClicked ? (
								<BiCheck />
							) : (
								<Image src={copyLogo} onClick={copyIt} />
							)}
						</span>
					) : (
						''
					)}
				</p>
			</div>

			{hasLine ? <div className={styles.line} /> : ''}
		</div>
	);
};

export default Item;
