import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import PropTypes from 'prop-types';

import TextButton from './TextButton';
import Button from './Button';

import getImageForButton from './../utils/getImageForButton';

export default class TaskForm extends React.Component {
	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.string,
		project: PropTypes.string,
		onFormSubmit: PropTypes.func.isRequired,
		onFormClose: PropTypes.func.isRequired,
	};

	static defaultProps = {
		id: null,
		title: '',
		project: '',
	};

	constructor(props){
		super(props);
		const {id, title, project} = props;
		this.state = {
			title: id ? title : '',
			project: id ? project : '',
		};
	}

	handleTitleChange = title => {
		this.setState({title});
	};

	handleProjectChange = project => {
		this.setState({project});
	};

	handleSubmit = () => {
		const { onFormSubmit, id } = this.props;
		const { title, project } = this.state;

		onFormSubmit({
			id,
			title,
			project,
		});
	};
	render(){
		const {id, onFormClose} = this.props;
		const {title, project} = this.state;

		const submitText = id ? 'Update' : 'Create';
		
		return (
			<View style={styles.formContainer}>
				<View style={styles.attributeContainer}>
					<Text style={styles.textInputTitle}>Title</Text>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							underlineColorAndroid="transparent"
							onChangeText={this.handleTitleChange}
							value={title}
						/>
					</View>
				</View>
				<View style={styles.attributeContainer}>
					<Text style={styles.textInputTitle}>Project</Text>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							underlineColorAndroid="transparent"
							onChangeText={this.handleProjectChange}
							value={project}
						/>
					</View>
				</View>
				<View style={styles.buttonGroup}>
					<TextButton 
						small 
						color="#21BA45" 
						title={submitText}
						onPress={this.handleSubmit} 
					/>
					<TextButton 
						small
						color="#DB2828"
						title="Cancel" 
						onPress={onFormClose} 
					/>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: 'white',
		borderColor: "#D6D7DA",
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		margin: 10,
		marginBottom:0,
	},
	attributeContainer: {
		marginVertical: 8,
	},
	textInputContainer:{
		borderColor: '#D6D7DA',
    	borderRadius: 2,
    	borderWidth: 1,
    	marginBottom: 5,
	},
	textInput: {
		height: 30,
		padding: 5,
		fontSize: 12,
	},
	textInputTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});
