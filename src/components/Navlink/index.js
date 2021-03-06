import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navlink.module.css';

import { BsChevronRight } from 'react-icons/bs';

const Navlink = ({ icon, value }) => {
	return (
		<div className={styles.container}>
			<Link href='/#'>
				<>
					<div className={styles.linkContainer}>
						<Image className={styles.icon} src={icon} width={17} height={17} />
						<BsChevronRight className={styles.forward} />
						<a className={styles.value}>{value}</a>
					</div>
				</>
			</Link>
		</div>
	);
};

export default Navlink;
