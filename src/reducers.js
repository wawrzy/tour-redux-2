/***************************************
 ** O-rizon development
 ** Created by Bastien Cecere
 ** 20/07/2017 - 18:27
 ** reducers.js
 ** 2017 - All rights reserved
 ***************************************/

import { combineReducers } from 'redux'


const getRandomColor = () => {
	console.log("getRandomColor");
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


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

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
        case 'CHANGE_COLOR': {
            return Object.assign({}, ...state, {carres: [
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
			]})
        }
        default:
			return state;
	}
};

const reducers = combineReducers({
	AppReducer
});

export default reducers