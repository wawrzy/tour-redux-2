/***************************************
 ** O-rizon development
 ** Created by Bastien Cecere
 ** 20/07/2017 - 18:27
 ** reducers.js
 ** 2017 - All rights reserved
 ***************************************/

import { combineReducers } from 'redux'


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const getNewCarre = (carres) => {
	carres.push({color: getRandomColor()})
	return carres
}


const initialState = {
	carres: [
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		}
	]
};

const topLeftChange = (carres) => {
	let tmp = JSON.parse(JSON.stringify(carres));
	tmp[0].color = getRandomColor()
	return tmp
}

const topRightChange = (carres) => {
    let tmp = JSON.parse(JSON.stringify(carres));
    tmp[tmp.length - 2].color = getRandomColor()
    return tmp
}

const bottomLeftChange = (carres) => {
    let tmp = JSON.parse(JSON.stringify(carres));
    for (let i = 0; i < tmp.length; i++) {
    	tmp[i].color = tmp[tmp.length - 2].color
	}
	return tmp
}

const onChangeInput = (carres) => {

	const tmp = []
	const size = parseInt(document.getElementById("inputId").value)
	if (size <= 0)
		return []
	for (let i = 0; i < size; i++) {
		tmp.push({color: getRandomColor()})
	}
	return tmp
}

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOP_LEFT': {
            return Object.assign({}, ...state, {carres: topLeftChange(state.carres)})
        }
		case 'TOP_RIGHT': {
			return Object.assign({}, ...state, {carres: topRightChange(state.carres)})
		}
        case 'BOTTOM_LEFT': {
            return Object.assign({}, ...state, {carres: bottomLeftChange(state.carres)})
        }
        case 'NUMBER_CARRE': {
            return Object.assign({}, ...state, {carres: onChangeInput(state.carres)})
        }
        default:
			return state;
	}
};

const reducers = combineReducers({
	AppReducer
});

export default reducers