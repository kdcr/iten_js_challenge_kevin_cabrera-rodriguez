import { loadData, notifyUpdate, writeData } from './ApiUtils';

export const getClassrooms = () => {
  const data = loadData();
  return data?.classrooms;
};

export const getClassroomById = (classroomId) => {
  const data = loadData();
  return data?.classrooms?.find((classroom) => classroom.id === classroomId);
};

export const createClassrooms = () => {};

export const deleteClassroom = (classroomId) => {
  const data = loadData();
  const { classrooms } = JSON.parse(JSON.stringify(data));
  data.classrooms = classrooms.filter((classroom) => classroom.id !== classroomId);
  writeData(data);
  notifyUpdate();
};
