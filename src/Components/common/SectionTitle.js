import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ ...props }) => (
	<div className='section-title row'>
		<b className='col'></b>
		<h2 className='col mb-0 p-4'>
			{ props.title }
		</h2>
		<b className='col'></b>
	</div>
);

SectionTitle.propTypes = {
	titleName: PropTypes.string
}

export default SectionTitle;