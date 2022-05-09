import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Label from '../../atomic/label';
import TextInput from '../../atomic/textInput';
import { checkEmail, checkPersonName, checkDate } from '../../../utils/FormUtils';
import Select from '../../atomic/select';
import Button from '../../atomic/button';
import { createStudent } from '../../../api/Students';
import { DeviceSizes } from '../../../utils/Constants';
import { getClassroomById } from '../../../api/Classrooms';
import { setClassroom } from '../../../redux/reducers/selectedClassroom';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;

const FormContainer = styled.div`
  @media (max-width: ${DeviceSizes.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

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

  @media (max-width: ${DeviceSizes.sm}) {
    width: 90%;
  }

  width: ${({ width }) => width};
`;

const GenderSelect = styled(Select)`
  @media (max-width: ${DeviceSizes.sm}) {
    width: 100%;
  }
  width: 145px;
`;

const StudentCreation = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedClassroom = useSelector((state) => state.selectedClassroom?.value);

  useEffect(() => {
    if (!selectedClassroom && getClassroomById(localStorage.selectedClassroom)) {
      dispatch(setClassroom(localStorage.selectedClassroom));
    } else if (!selectedClassroom) {
      navigate('/classrooms');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: null,
    birth: null,
    email: null,
    gender: null,
  });
  const [errors, setErrors] = useState({ name: false, birth: false, email: false });

  const handleCreateStudent = () => {
    createStudent(formData, selectedClassroom);
    navigate('/classroomDetail');
  };

  const handleFormData = (data, type) => {
    switch (type) {
      case 'name':
        if (checkPersonName(data)) {
          setFormData({ ...formData, name: data });
          setErrors({ ...errors, name: false });
        } else {
          setErrors({ ...errors, name: true });
        }
        break;
      case 'gender':
        setFormData({ ...formData, gender: data });
        break;
      case 'birth':
        if (checkDate(data)) {
          setFormData({ ...formData, birth: data });
          setErrors({ ...errors, birth: false });
        } else {
          setErrors({ ...errors, birth: true });
        }
        break;
      case 'email':
        if (checkEmail(data)) {
          setFormData({ ...formData, email: data });
          setErrors({ ...errors, email: false });
        } else {
          setErrors({ ...errors, email: true });
        }
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Label size="title">{t('addNewStudent')}</Label>
      <FormContainer>
        <FormItem width="300px">
          <Label>{t('name')}</Label>
          <TextInput onChange={(e) => handleFormData(e.target.value, 'name')} />
        </FormItem>
        <FormItem width="150px">
          <Label>{t('gender')}</Label>
          <GenderSelect
            placeholder={t('selectGender')}
            selectedOption={formData.gender}
            options={[t('gender_m'), t('gender_f')]}
            onChange={(value) => handleFormData(value, 'gender')}
          />
        </FormItem>
        <FormItem width="120px">
          <Label>{t('birth')}</Label>
          <TextInput
            placeholder="DD-MM-YYYY"
            onChange={(e) => handleFormData(e.target.value, 'birth')}
          />
        </FormItem>
        <FormItem width="330px">
          <Label>{t('email')}</Label>
          <TextInput onChange={(e) => handleFormData(e.target.value, 'email')} />
        </FormItem>
      </FormContainer>
      <Button
        onClick={handleCreateStudent}
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

export default StudentCreation;
