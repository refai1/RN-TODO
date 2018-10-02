import React from 'react';

import PropTypes from 'prop-types';

import TaskForm from './TaskForm';
import Task from './Task';

export default class EditableTask extends React.Component {

	static propTypes = {
	    id: PropTypes.string.isRequired,
	    title: PropTypes.string.isRequired,
	    project: PropTypes.string.isRequired,
	    onFormSubmit: PropTypes.func.isRequired,
	    onRemovePress: PropTypes.func.isRequired,
	};

	state = {
		editFormOpen: false,
	};

	handleEditPress = () => {
		this.openForm();
	};

	handleFormClose = () => {
		this.closeForm();
	};

	handleSubmit = task => {
		const { onFormSubmit } = this.props;

		onFormSubmit(task);
		this.closeForm();
	};

	closeForm = () => {
		this.setState({ editFormOpen: false });
	};

	openForm = () => {
		this.setState({ editFormOpen: true });
	};


	render(){
		const {
			id, 
			title,
			project,
			onRemovePress,
			onStartPress,
			onStopPress,
		} = this.props;

		const {editFormOpen} = this.state;
		
		if (editFormOpen){
			return (
				<TaskForm 
					id={id}
					title={title}
					project={project}
					onFormSubmit={this.handleSubmit}
					onFormClose={this.handleFormClose} 
				/>
			);
		}
		return (
			<Task
				id={id}
				title={title}
				project={project}
				onEditPress={this.handleEditPress}
				onRemovePress={onRemovePress}
				onStartPress={onStartPress}
				onStopPress={onStopPress}
			/>
		);
	}
}