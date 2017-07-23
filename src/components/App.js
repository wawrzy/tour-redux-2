//import './styles/App.css'

import React from 'react'
import { connect } from 'react-redux'
import Carre from './Carre'

const AppComponent = ({carres, topLeft, topRight, bottomLeft, changeNumberCarre}) => {
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
    if (carres.length % 2 === 1) {
		carres = []
	}
	return (
		<div style={styles}>
			<input
				id="inputId"
				onChange={changeNumberCarre}
				type="text"
			/>
			{
				Array.from(Array(carres.length / 2).keys()).map((_, i) => {
					const tab = carres.map((e, i) => (
                        <Carre key={'carre' + i} carres={carres} color={e.color} index={i} bottomLeft={bottomLeft} topRight={topRight} topLeft={topLeft} >Test</Carre>
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

import { topLeft } from '../actions/Click'
import { topRight } from '../actions/Click'
import { bottomLeft } from '../actions/Click'
import { changeNumberCarre } from '../actions/Click'


const mapStateToProps = ({ AppReducer }, ownProps) => {
	return {
		carres: AppReducer.carres
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    topLeft: () => dispatch(topLeft()),
	topRight: () => dispatch(topRight()),
	bottomLeft: () => dispatch(bottomLeft()),
    changeNumberCarre: () => dispatch(changeNumberCarre())
})

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default App
