import React from 'react';
import {StyleSheet, View} from 'react-native';

import PropTypes from 'prop-types';

import TextButton from './TextButton';
import TaskForm from './TaskForm';

export default class ToggleableTaskForm extends React.Component{
	static propTypes = {
   		onFormSubmit: PropTypes.func.isRequired,
  	};

	state = {
		isOpen: false,
	};

	handleFormOpen = () => {
		this.setState({ isOpen: true});
	}

	handleFormSubmit = task => {
		const { onFormSubmit } = this.props;

		onFormSubmit(task);
		this.setState({ isOpen: false })
	}

	handleFormClose = () => {
		this.setState({ isOpen: false });
	};

	render(){
		const {isOpen} = this.state;

		return (
			<View style={[styles.container, !isOpen && styles.buttonPadding]}>
				{isOpen ? (
					<TaskForm 
						onFormSubmit={this.handleFormSubmit}
						onFormClose={this.handleFormClose}
					/>
				) : (
					<TextButton title="+" color="black" onPress={this.handleFormOpen}/>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
	},
	buttonPadding: {
		paddingHorizontal: 15,
	},
});

