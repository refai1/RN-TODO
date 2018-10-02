import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';

import TextButton from './TextButton';
import Button from './Button';

import getImageForButton from './../utils/getImageForButton';

export default class Task extends React.Component {
	static propTypes = {
	    id: PropTypes.string.isRequired,
	    title: PropTypes.string.isRequired,
	    project: PropTypes.string.isRequired,
	    onEditPress: PropTypes.func.isRequired,
	    onRemovePress: PropTypes.func.isRequired,
	};
	handleRemovePress = () => {
		const { id, onRemovePress } = this.props;

		onRemovePress(id);
	};


	render(){
		const { title, project, onEditPress, onRemovePress } = this.props;

		return (
			<View style={styles.taskContainer}>
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text>{project}</Text>
				</View>
				<View style={styles.buttonGroup}>
					<Button small color="#ffffff" title={getImageForButton("edit")} onPress={onEditPress} />
					<Button small color="#ffffff" title={getImageForButton("remove")} onPress={this.handleRemovePress} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	taskContainer: {
		backgroundColor:'white',
		borderColor: "#d6d7da",
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		margin: 10,
		marginBottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	buttonGroup:{
		flexDirection:'row',
		justifyContent: 'space-between',
	},
});