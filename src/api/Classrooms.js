import { loadData, writeData } from './ApiUtils';

export const getClassrooms = () => {
  const data = loadData();
  return data?.classrooms;
};

export const createClassrooms = () => {};

export const deleteClassroom = (classroomId) => {
  const data = loadData();
  const { classrooms } = JSON.parse(JSON.stringify(data));
  data.classrooms = classrooms.filter((classroom) => classroom.id !== classroomId);
  writeData(data);
};
