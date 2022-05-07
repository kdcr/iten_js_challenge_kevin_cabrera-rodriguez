import { loadData } from './ApiUtils';

export const getClassrooms = () => {
  const data = loadData();
  return data.classrooms;
};

export const createClassrooms = () => {};

export const deleteClassroom = () => {};
