import Link from 'next/link';
import styles from '../../../styles/navlink.module.css';

import { GrFormNext } from 'react-icons/gr';

const Navlink = ({ icon, value }) => {
	return (
		<div className={styles.container}>
			<Link href='/#'>
				<div className={styles.linkContainer}>
					<img className={styles.icon} src={icon} />
					<a className={styles.value}>{value}</a>
					<div className={styles.forward}>
						<GrFormNext />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Navlink;
