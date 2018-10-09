import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import uuidv4 from 'uuid/v4';

import { newTask } from './utils/TaskUtils'

import EditableTask from './components/EditableTask';
import ToggleableTaskForm from './components/ToggleableTaskForm';


export default class App extends React.Component {
    state = {
        tasks: [
            {
                title: 'Mow the lawn',
                project: 'House Chores',
                isComplete: false,
                id: uuidv4(),
            },
            {
                title: 'Complete Bake-off #1',
                project: 'School',
                isComplete: true,
                id: uuidv4(),
            },
        ],
    }; 

    handleCreateFormSubmit = task => {
      const { tasks } = this.state;

      this.setState({
        tasks: [newTask(task), ...tasks],
      });
    };

    handleFormSubmit = attrs => {
      const { tasks } = this.state;

      this.setState({
        tasks: tasks.map(task => {
          if (task.id === attrs.id) {
            const { title, project, isComplete} = attrs;

            return {
              ...task,
              title,
              project,
              isComplete: false,
            };
          }

          return task;
        }),
      });
    };


    handleTaskRemove = taskId => {
        this.setState({
            tasks: this.state.tasks.filter(t => t.id !== taskId),
        });
    };

    handleTaskDone = taskId => {
        this.setState(prevState => {
            const{tasks} = prevState;

            return {
                tasks: this.state.tasks.map(task => {
                    const {id, isComplete} = task;

                    if (task.id === taskId) {
                        return {
                            ...task,
                            isComplete: !isComplete,
                        };
                    }
                    return task;
                }),
            };
        });
    };
    
    // It'll work one day.
    showAlert = () => {
      Alert.alert(
        'Warning!',
        'Are you sure?',
        [
            {text: 'Yes', onPress: () => console.log(this)},
            {text: 'No', onPress: () => console.log('nada')},
        ],
        {cancelable: false}
    )


   };
    // {this.handleTaskRemove}
    render() {
        const {tasks} = this.state;

        return (
            <View style={styles.appContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TODO</Text>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.taskListContainer}>
                    <ScrollView style={styles.taskList}>
                        <ToggleableTaskForm onFormSubmit={this.handleCreateFormSubmit} />
                        {tasks.map(({title,project,id,isComplete}) => {
                            if (isComplete === false) {
                                return (
                                <EditableTask
                                    key={id}
                                    id={id}
                                    title={title}
                                    project={project}
                                    isComplete={isComplete}
                                    onFormSubmit={this.handleFormSubmit}
                                    onRemovePress={this.handleTaskRemove}
                                    onDonePress={this.handleTaskDone}
                                />
                                )
                            }
                        })}
                        {tasks.map(({title,project,id,isComplete}) => {
                            if (isComplete === true) {
                                return (
                                <EditableTask
                                    key={id}
                                    id={id}
                                    title={title}
                                    project={project}
                                    isComplete={isComplete}
                                    onFormSubmit={this.handleFormSubmit}
                                    onRemovePress={this.handleTaskRemove}
                                    onDonePress={this.handleTaskDone}
                                />
                                )
                            }
                        })}
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
    },
    taskListContainer: {
      flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    taskList: {
        paddingBottom: 15,
    },
    button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   },
});
