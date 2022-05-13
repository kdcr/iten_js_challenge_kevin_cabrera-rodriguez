import { generateUUID, loadData, writeData } from './ApiUtils';

/**
 *
 * @returns All the stored classrooms as an array of objects
 */
export const getClassrooms = () => {
  const data = loadData();
  return data?.classrooms;
};

/**
 *
 * @param {String} classroomId The classrooms id to search for
 * @returns The found classroom, null if none was found
 */
export const getClassroomById = (classroomId) => {
  const data = loadData();
  return data?.classrooms?.find((classroom) => classroom.id === classroomId);
};

/**
 *
 * @param {Object} newClassroom The new classroom to create
 */
export const createClassrooms = (newClassroom) => {
  const data = loadData();
  data.classrooms?.push({
    id: generateUUID(),
    name: newClassroom.name,
    level: newClassroom.level,
    teacher: {
      name: newClassroom.teacherName,
      email: newClassroom.teacherEmail,
    },
    students: [],
  });
  writeData(data);
};

/**
 *
 * @param {String} classroomId The classrooms id to be deleted
 */
export const deleteClassroom = (classroomId) => {
  const data = loadData();
  const { classrooms } = JSON.parse(JSON.stringify(data));
  data.classrooms = classrooms.filter((classroom) => classroom.id !== classroomId);
  writeData(data);
};
