import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/layout.module.css';
import Select from '../Select';
import LeftBox from './leftBox';
import cn from 'classnames';

const Layout = ({ children }) => {
	return (
		<div className='container-fluid '>
			<div className='d-flex justify-content-center'>
				<div className='col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12'>
					<div
						className={cn(
							'row justify-content-between align-items-center',
							styles.headerRow
						)}
					>
						<div className='col-2'>
							<Link href='#'>
								<a className={styles.support}>Support</a>
							</Link>
						</div>
						<div className='col-2'>
							<Select />
						</div>
					</div>
				</div>
			</div>
			<div className='d-flex flex-column min-vh-100 justify-content-start justify-content-lg-center justify-content-md-center justify-content-xl-center justify-content-sm-center align-items-center '>
				<div className='col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12'>
					<div className={cn('row justify-content-center', styles.boxes)}>
						<div
							className={cn(
								styles.leftBox,
								'col-xl-5 col-lg-5 col-md-5 col-sm-5 col-11 order-1'
							)}
						>
							<LeftBox />
						</div>
						<div
							className={cn(
								styles.rightBox,
								'col-xl-7 col-lg-7 col-md-7 col-sm-7 col-11 order-2'
							)}
						>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
