import { loadData, notifyUpdate, writeData } from './ApiUtils';

export const getStudents = (classroomId) => {
  const data = loadData();
  const foundClassRoom = data.classrooms.find((classroom) => classroom.id === classroomId);
  return foundClassRoom.students || [];
};

export const createStudents = () => {};

export const deleteStudent = (studentId, classroomId) => {
  const data = loadData();
  const filteredClasrooms = { ...data }.classrooms.filter(
    (classroom) => classroom.id !== classroomId,
  );
  const finalData = {
    ...data,
    classrooms: filteredClasrooms,
  };
  const editedClassroom = { ...data }.classrooms.find((classroom) => classroom.id === classroomId);
  editedClassroom.students = { ...editedClassroom }.students.filter(
    (student) => student.id !== studentId,
  );
  if (!finalData.classrooms) finalData.classrooms = [];
  finalData.classrooms.push(editedClassroom);
  writeData(finalData);
  notifyUpdate();
};
