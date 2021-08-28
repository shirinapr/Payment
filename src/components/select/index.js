import React from 'react';

import Select from 'react-select';
import { css, jsx } from '@emotion/react';

const Selection = () => {
	// const customStyles = {
	// 	option: (provided, state) => ({
	// 		...provided,
	// 		borderBottom: '1px dotted pink',
	// 		color: state.isSelected ? 'red' : 'blue',
	// 		padding: 20,
	// 	}),
	// 	control: () => ({
	// 		// none of react-select's styles are passed to <Control />
	// 		width: 200,
	// 	}),
	// 	singleValue: (provided, state) => {
	// 		const opacity = state.isDisabled ? 0.5 : 1;
	// 		const transition = 'opacity 300ms';

	// 		return { ...provided, opacity, transition };
	// 	},
	// };
	const options = [
		{
			value: 'english',
			label: 'English',
		},
		{ value: 'chinese', label: 'Chinese' },
	];
	return (
		<div>
			<select className='selectpicker' data-width='fit'>
				<option
					data-content='<span className="flag-icon flag-icon-us"
                >
                
                </span> English'
				>
					English
				</option>
				<option data-content='<span className="flag-icon flag-icon-mx"></span> Español'>
					Español
				</option>
			</select>
			<Select
				css={{
					backgroundColor: 'hotpink',
					'&:hover': {
						color: 'lightgreen',
					},
				}}
				options={options}
				// styles={customStyles}
			/>
		</div>
	);
};

export default Selection;
// {
// 	<img
//     src={
//         'https://cdn.iconscout.com/icon/free/png-512/united-kingdom-flag-country-nation-union-empire-33115.png'
//     }
//     height='14px'
//     width='14px'
// />
