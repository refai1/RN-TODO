import uuidv4 from 'uuid/v4';


export const newTask = (attrs = {}) => {
  const task = {
    title: attrs.title || 'Task',
    project: attrs.project || 'Project',
    isComplete: false,
    id: uuidv4(),
  };

  return task;
};
