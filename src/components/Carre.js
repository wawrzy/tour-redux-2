/***************************************
** O-rizon development
** Created by Bastien Cecere
** 20/07/2017 - 18:31
** Carre.js
** 2017 - All rights reserved
***************************************/

import React from 'react'

const Carre = ({color, children, carres, index, topLeft, topRight, bottomLeft}) => {
	const styles = {
		border: '1px solid black',
		display: 'flex',
		flex: '1 1',
		backgroundColor: color,
		justifyContent: 'center',
		alignItems: 'center'
	}
	let carre = undefined

	if (index === 0) {
		carre = <div style={styles} onClick={topLeft}>
            		{color}
				</div>
	} else if (index === 1) {
        carre = <div style={styles} onClick={topRight}>
            {color}
		</div>
	} else if (index === carres.length - 2) {
        carre = <div style={styles} onClick={bottomLeft}>
            {color}
		</div>
    }  else {
        carre = <div style={styles}>
            		{color}
				</div>
	}

	return (
		carre
	)
};

export default Carre
