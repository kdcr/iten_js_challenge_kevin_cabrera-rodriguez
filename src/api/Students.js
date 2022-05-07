import { loadData } from './ApiUtils';

export const getStudents = (classroomId) => {
  const data = loadData();
  const foundClassRoom = data.classrooms.find((classroom) => classroom.id === classroomId);
  return foundClassRoom.students || [];
};

export const createStudents = () => {};

export const deleteStudent = () => {};
