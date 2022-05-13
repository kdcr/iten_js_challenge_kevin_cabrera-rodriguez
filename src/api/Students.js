import { generateUUID, loadData, writeData } from './ApiUtils';

export const getStudents = (classroomId) => {
  const data = loadData();
  const foundClassRoom = data.classrooms.find((classroom) => classroom.id === classroomId);
  return foundClassRoom.students || [];
};

export const createStudent = (studentData, classroomId) => {
  const data = loadData();
  data.classrooms
    .find((classroom) => classroom.id === classroomId)
    .students.push({ id: generateUUID(), ...studentData });
  writeData(data);
};

export const deleteStudent = (studentId, classroomId) => {
  const data = loadData();
  const filteredClassrooms = { ...data }.classrooms.filter(
    (classroom) => classroom.id !== classroomId,
  );
  const finalData = {
    ...data,
    classrooms: filteredClassrooms,
  };
  const editedClassroom = { ...data }.classrooms.find((classroom) => classroom.id === classroomId);
  editedClassroom.students = { ...editedClassroom }.students.filter(
    (student) => student.id !== studentId,
  );
  if (!finalData.classrooms) finalData.classrooms = [];
  finalData.classrooms.push(editedClassroom);
  writeData(finalData);
};
