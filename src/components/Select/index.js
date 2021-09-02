import Image from 'next/image';
import SelectPack from 'react-select';
import styles from '../../styles/layout.module.css';

import uk from '../../assets/flags/ukFlag.svg';
import triangle from '../../assets/icons/triangle.svg';
import china from '../../assets/flags/chinaFlag.png';

const ShowOption = ({ hasDrop }) => {
	return (
		<div>
			<Image src={uk} width={20} height={13} />
			<span className={styles.label}> English </span>
			{hasDrop ? (
				<span>
					<Image src={triangle} />
				</span>
			) : (
				' '
			)}
		</div>
	);
};
const Select = () => {
	const customStyles = {
		menu: () => ({
			width: 130,
			backgroundColor: 'white',
			marginTop: 5,
			borderRadius: 4,
		}),
		control: (base) => ({
			...base,
			width: 130,
			height: 30,
			backgroundColor: 'white',
			borderRadius: 4,
			borderColor: 'white',
		}),
		options: () => ({
			width: 130,
		}),
		indicatorSeparator: () => {},
		dropdownIndicator: () => ({
			display: 'none',
		}),
	};
	const options = [
		{
			value: 'english',
			label: <ShowOption />,
		},
		{
			value: 'chinese',
			label: (
				<div>
					<Image src={china} className={styles.label} width={20} height={13} />{' '}
					Chinese
				</div>
			),
		},
	];
	return (
		<div>
			<SelectPack
				menuPosition='fixed'
				menuPlacement='bottom'
				isSearchable={false}
				options={options}
				styles={customStyles}
				defaultValue={{ label: <ShowOption hasDrop />, value: 0 }}
			/>
		</div>
	);
};

export default Select;
