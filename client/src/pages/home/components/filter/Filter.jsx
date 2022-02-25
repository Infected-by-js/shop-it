import React from 'react';

export const Filter = () => {
	return (
		<>
			<div className='filter'>
				<button className='filter__button'></button>
			</div>
			<div className='container'>
				<div className='item'>
					<button className='button'>
						<span className='label'>label</span>
						<span className='icon'></span>
					</button>
					<div className='panel'>
						<div className='children'></div>
					</div>
				</div>
			</div>
		</>
	);-
};

const filters = {
	author: ['jhonn', 'alberrt'],
	style: ['paint'],
	price: [[0, 99], [100, 499], [500, 999], [1000, 4999], [5000, 9999], [10000]],
	category: [],
	year: [],
};
