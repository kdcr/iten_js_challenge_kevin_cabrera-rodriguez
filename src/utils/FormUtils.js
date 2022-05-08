const checkPersonName = (name = '') => {
  if (name === '') return true;
  return !/\d/g.test(name);
};

const checkClassroomName = (name = '') => {
  if (name === '') return true;
  return name.length < 15;
};

const checkEmail = (email = '') => {
  if (email === '') return true;
  return email.match(
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export { checkPersonName, checkEmail, checkClassroomName };
