import { generateUUID, loadData, writeData } from './ApiUtils';

/**
 *
 * @param {String} classroomId Classroom id
 * @returns All the students of the specified classroom
 */
export const getStudents = (classroomId) => {
  const data = loadData();
  const foundClassRoom = data.classrooms.find((classroom) => classroom.id === classroomId);
  return foundClassRoom.students || [];
};

/**
 *
 * @param {Object} studentData Student object to create
 * @param {String} classroomId Classroom id to add the student to
 */
export const createStudent = (studentData, classroomId) => {
  const data = loadData();
  data.classrooms
    .find((classroom) => classroom.id === classroomId)
    .students.push({ id: generateUUID(), ...studentData });
  writeData(data);
};

/**
 * Deletes the specified student of the specified classroom
 * @param {String} studentId Student to delete
 * @param {String} classroomId Classroom id of the student to delete
 */
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
