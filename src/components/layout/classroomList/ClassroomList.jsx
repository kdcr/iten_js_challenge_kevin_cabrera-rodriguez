import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { deleteClassroom, getClassrooms } from '../../../api/Classrooms';
import { setClassroom } from '../../../redux/reducers/selectedClassroom';
import { DeviceSizes } from '../../../utils/Constants';

import Button from '../../atomic/button';
import Label from '../../atomic/label';
import LinkButton from '../../atomic/linkButton';
import List from '../../atomic/list';
import { EyeIcon, TrashIcon } from '../../icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  @media (max-width: ${DeviceSizes.sm}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  display: grid;
  grid-template-columns: auto 210px;
  grid-template-rows: min-content;
  grid-row-gap: 44px;

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

const ClassroomList = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastUpdate = useSelector((state) => state.lastUpdate?.value);

  const [data, setData] = useState(null);

  const handleViewClass = (classroomId) => {
    dispatch(setClassroom(classroomId));
    navigate('/classroomDetail');
  };

  const handleDeleteClass = (classroomId) => {
    deleteClassroom(classroomId);
    // eslint-disable-next-line no-use-before-define
    loadClassroomData();
  };

  const loadClassroomData = () => {
    const rawData = getClassrooms();

    setData(
      rawData?.map((classroom) => ({
        name: classroom.name,
        level: t(classroom.level),
        teacherName: classroom.teacher.name,
        teacherEmail: classroom.teacher.email,
        students: `${classroom.students.length}`,
        actions: (
          <ActionsContainer>
            <ActionLink size="large" onClick={() => handleViewClass(classroom.id)}>
              <EyeIcon fill="var(--color-accent)" style={{ width: '16px', height: '16px' }} />
              <Label size="small">{t('view')}</Label>
            </ActionLink>
            <ActionLink size="large" onClick={() => handleDeleteClass(classroom.id)}>
              <TrashIcon fill="var(--color-warning)" style={{ width: '16px', height: '16px' }} />
              <Label size="small">{t('delete')}</Label>
            </ActionLink>
          </ActionsContainer>
        ),
      })),
    );
  };

  useEffect(() => {
    loadClassroomData();
  }, [lastUpdate]);

  useEffect(() => {
    loadClassroomData();
  }, []);

  const ListHeaders = [
    {
      width: '16%',
      align: 'left',
      label: t('name'),
      dataName: 'name',
    },
    {
      width: '16%',
      align: 'left',
      label: t('level'),
      dataName: 'level',
    },
    {
      width: '18%',
      align: 'left',
      label: t('teacherName'),
      dataName: 'teacherName',
    },
    {
      width: '22%',
      align: 'left',
      label: t('teacherEmail'),
      dataName: 'teacherEmail',
    },
    {
      width: '10%',
      align: 'center',
      label: t('students'),
      dataName: 'students',
    },
    {
      width: '18%',
      align: 'center',
      label: t('actions'),
      dataName: 'actions',
    },
  ];

  return (
    <Container>
      <InnerContainer>
        <Label size="title" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
          {t('classrooms')}
        </Label>
        <Button
          onClick={() => navigate('/newClassroom')}
          style={{ gridColumnStart: 2, gridRowStart: 1 }}
        >
          {t('addClassroom')}
        </Button>
        {data?.length > 0 ? (
          <List
            style={{ gridColumnStart: 1, gridRowStart: 2, gridColumn: '1 / span 2' }}
            data={data}
            heads={ListHeaders}
          />
        ) : (
          <Label
            size="subtitle"
            style={{
              gridColumnStart: 1,
              gridRowStart: 2,
              gridColumn: '1 / span 2',
              textAlign: 'center',
            }}
          >
            {t('noClassrooms')}
          </Label>
        )}
      </InnerContainer>
    </Container>
  );
};

export default ClassroomList;
