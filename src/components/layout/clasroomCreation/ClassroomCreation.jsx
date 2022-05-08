import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Label from '../../atomic/label';
import TextInput from '../../atomic/textInput';
import { checkEmail, checkPersonName, checkClassroomName } from '../../../utils/FormUtils';
import Select from '../../atomic/select';
import Button from '../../atomic/button';
import { createClassrooms } from '../../../api/Classrooms';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 470px;
  row-gap: 10px;
  column-gap: 20px;
  justify-content: space-between;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: ${({ width }) => width};
`;

const ClassroomCreation = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    name: null,
    teacherName: null,
    teacherEmail: null,
    level: null,
  });
  const [errors, setErrors] = useState({ name: false, teacherName: false, teacherEmail: false });

  const handleCreateClassroom = () => {
    createClassrooms(formData);
  };

  const handleFormData = (data, type) => {
    switch (type) {
      case 'name':
        if (checkClassroomName(data)) {
          setFormData({ ...formData, name: data });
          setErrors({ ...errors, name: false });
        } else {
          setErrors({ ...errors, name: true });
        }
        break;
      case 'level':
        setFormData({ ...formData, level: data });
        break;
      case 'teacherName':
        if (checkPersonName(data)) {
          setFormData({ ...formData, teacherName: data });
          setErrors({ ...errors, teacherName: false });
        } else {
          setErrors({ ...errors, teacherName: true });
        }
        break;
      case 'teacherEmail':
        if (checkEmail(data)) {
          setFormData({ ...formData, teacherEmail: data });
          setErrors({ ...errors, teacherEmail: false });
        } else {
          setErrors({ ...errors, teacherEmail: true });
        }
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Label size="title">{t('addNewClassroom')}</Label>
      <FormContainer>
        <FormItem width="300px">
          <Label>{t('classroomName')}</Label>
          <TextInput onChange={(e) => handleFormData(e.target.value, 'name')} />
        </FormItem>
        <FormItem width="150px">
          <Label>{t('level')}</Label>
          <Select
            style={{ width: '145px' }}
            selectedOption={formData.level}
            options={[t('primaryEd'), t('secondaryEd')]}
            onChange={(value) => handleFormData(value, 'level')}
          />
        </FormItem>
        <FormItem width="225px">
          <Label>{t('teacherName')}</Label>
          <TextInput onChange={(e) => handleFormData(e.target.value, 'teacherName')} />
        </FormItem>
        <FormItem width="225px">
          <Label>{t('teacherEmail')}</Label>
          <TextInput onChange={(e) => handleFormData(e.target.value, 'teacherEmail')} />
        </FormItem>
      </FormContainer>
      <Button
        onClick={handleCreateClassroom}
        disabled={
          // eslint-disable-next-line operator-linebreak
          Object.entries(errors).find((entry) => entry[1]) ||
          Object.values(formData).filter((value) => value === '' || value === null).length
        }
      >
        {t('add')}
      </Button>
      {Object.entries(errors).find((entry) => entry[1]) ? (
        <span>
          {`${t('errorsFoundIn')}: ${Object.entries(errors)
            .filter((data) => data[1])
            .map((field) => t(field[0]))}`}
        </span>
      ) : (
        <div style={{ height: '18px' }} />
      )}
    </Container>
  );
};

export default ClassroomCreation;
