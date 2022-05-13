import { generateUUID, loadData, writeData } from './ApiUtils';

export const getClassrooms = () => {
  const data = loadData();
  return data?.classrooms;
};

export const getClassroomById = (classroomId) => {
  const data = loadData();
  return data?.classrooms?.find((classroom) => classroom.id === classroomId);
};

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

export const deleteClassroom = (classroomId) => {
  const data = loadData();
  const { classrooms } = JSON.parse(JSON.stringify(data));
  data.classrooms = classrooms.filter((classroom) => classroom.id !== classroomId);
  writeData(data);
};
