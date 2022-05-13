import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { deleteClassroom, getClassroomById } from '../../../api/Classrooms';
import { deleteStudent } from '../../../api/Students';
import { setClassroom } from '../../../redux/reducers/selectedClassroom';
import { DeviceSizes } from '../../../utils/Constants';

import Button from '../../atomic/button';
import Label from '../../atomic/label';
import LinkButton from '../../atomic/linkButton';
import List from '../../atomic/list';
import { TrashIcon } from '../../icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  @media (max-width: ${DeviceSizes.md}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  display: grid;
  grid-template-columns: auto 210px;
  grid-template-rows: 90px 160px 82px auto;

  align-items: baseline;

  width: 960px;
  margin-top: 56px;

  height: 100%;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ActionLink = styled(LinkButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ClassroomInfo = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  gap: 10px;

  display: flex;
  flex-direction: column;
`;

const InfoLabels = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const ListContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-column: 1 / span 2;
  overflow-x: auto;
  max-width: 98vw;
  min-width: 0px;
`;

const ClassroomDetail = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedClassroom = useSelector((state) => state.selectedClassroom?.value);

  const [data, setData] = useState(null);

  const handleDeleteClass = (classroomId) => {
    deleteClassroom(classroomId);
    navigate('/classrooms');
  };

  const handleDeleteStudent = (studentId, classroomId) => {
    deleteStudent(studentId, classroomId);
    // eslint-disable-next-line no-use-before-define
    loadClassroomData();
  };

  const handleAddStudent = () => {
    navigate('/newStudent');
  };

  const loadClassroomData = () => {
    const rawData = getClassroomById(selectedClassroom);

    if (!rawData) return;

    const students = rawData?.students?.map(({ id, name, gender, birth, email }) => ({
      name,
      gender: t(`${gender}`),
      birth,
      email,
      actions: (
        <ActionsContainer>
          <ActionLink size="large" onClick={() => handleDeleteStudent(id, rawData.id)}>
            <TrashIcon fill="var(--color-warning)" style={{ width: '16px', height: '16px' }} />
            <Label size="small">{t('delete')}</Label>
          </ActionLink>
        </ActionsContainer>
      ),
    }));

    const { id, name, level, teacher } = rawData;

    setData({
      id,
      name,
      level,
      teacherName: teacher.name,
      teacherEmail: teacher.email,
      students,
    });
  };

  useEffect(() => {
    if (!selectedClassroom && getClassroomById(localStorage.selectedClassroom)) {
      dispatch(setClassroom(localStorage.selectedClassroom));
    } else if (!selectedClassroom) {
      navigate('/classrooms');
    }
  }, []);

  useEffect(() => {
    loadClassroomData();
  }, [selectedClassroom]);

  const ListHeaders = [
    {
      width: '30%',
      align: 'left',
      label: t('name'),
      dataName: 'name',
    },
    {
      width: '10%',
      align: 'left',
      label: t('gender'),
      dataName: 'gender',
    },
    {
      width: '20%',
      align: 'left',
      label: t('birth'),
      dataName: 'birth',
    },
    {
      width: '30%',
      align: 'left',
      label: t('email'),
      dataName: 'email',
    },
    {
      width: '10%',
      align: 'center',
      label: t('actions'),
      dataName: 'actions',
    },
  ];

  return (
    <Container>
      <InnerContainer>
        <Label size="title" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
          {data?.name}
        </Label>
        <ClassroomInfo>
          <InfoLabels>
            <Label style={{ fontWeight: 'bold' }}>{`${t('level')}:`}</Label>
            <Label>{t(data?.level)}</Label>
          </InfoLabels>
          <InfoLabels>
            <Label style={{ fontWeight: 'bold' }}>{`${t('teacherName')}:`}</Label>
            <Label>{data?.teacherName}</Label>
          </InfoLabels>
          <InfoLabels>
            <Label style={{ fontWeight: 'bold' }}>{`${t('teacherEmail')}:`}</Label>
            <Label>{data?.teacherEmail}</Label>
          </InfoLabels>
          <InfoLabels>
            <Label style={{ fontWeight: 'bold' }}>{`${t('students')}:`}</Label>
            <Label>{data?.students?.length}</Label>
          </InfoLabels>
        </ClassroomInfo>
        <Button
          onClick={() => handleDeleteClass(data.id)}
          style={{ gridColumnStart: 2, gridRowStart: 1 }}
          type="warning"
        >
          {t('deleteClassroom')}
        </Button>
        <Label size="subtitlelarge" style={{ gridColumnStart: 1, gridRowStart: 3 }}>
          {t('students')}
        </Label>
        <Button onClick={handleAddStudent} style={{ gridColumnStart: 2, gridRowStart: 3 }}>
          {t('addStudent')}
        </Button>
        {data?.students?.length > 0 ? (
          <ListContainer className="scroll">
            <List
              style={{
                width: '960px',
              }}
              data={data.students}
              heads={ListHeaders}
            />
          </ListContainer>
        ) : (
          <Label
            size="subtitle"
            style={{
              gridColumnStart: 1,
              gridRowStart: 4,
              gridColumn: '1 / span 2',
              textAlign: 'center',
            }}
          >
            {t('noStudents')}
          </Label>
        )}
      </InnerContainer>
    </Container>
  );
};

export default ClassroomDetail;
