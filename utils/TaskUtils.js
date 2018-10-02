import uuidv4 from 'uuid/v4';


const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export const newTask = (attrs = {}) => {
  const task = {
    title: attrs.title || 'Task',
    project: attrs.project || 'Project',
    id: uuidv4(),
  };

  return task;
};
