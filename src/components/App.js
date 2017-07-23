//import './styles/App.css'

import React from 'react'
import { connect } from 'react-redux'
import Carre from './Carre'

const AppComponent = ({ carres, changeColor}) => {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		margin: '0 0'
	}
	const stylesTab = {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1',
		height: '50%'
	}
	return (
		<div style={styles}>
			{
				Array.from(Array(carres.length / 2).keys()).map((_, i) => {
					const tab = carres.map((e, i) => (

						<Carre key={'carre' + i} color={e.color} onClick={changeColor}>{
							console.log(e)
						}</Carre>
					));
					return (
						<div key={'subdivider' + i} style={stylesTab} >
							{
								tab.slice(i * 2, i * 2 + 2)
							}
						</div>
					)
				})
			}
		</div>
	)
}

import { changeColor } from '../actions/Click'


const mapStateToProps = ({ AppReducer }, ownProps) => {
	return {
		carres: AppReducer.carres
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeColor: () => dispatch(changeColor())
})

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default App
