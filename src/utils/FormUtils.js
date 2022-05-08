const checkPersonName = (name = '') => {
  if (name === '') return true;
  return !/\d/g.test(name);
};

const checkClassroomName = (name = '') => {
  if (name === '') return true;
  return name.length < 15;
};

const checkDate = (date = '') => {
  if (date === '') return true;
  if (/^\d\d-\d\d-\d\d\d\d$/.test(date)) {
    const day = parseInt(date.split('-')[0], 10);
    const month = parseInt(date.split('-')[1], 10);
    const year = parseInt(date.split('-')[2], 10);
    if (month > 12 || month < 1) return false;
    return Date.parse(year, month - 1, day) > 0;
  }
  return false;
};

const checkEmail = (email = '') => {
  if (email === '') return true;
  return email.match(
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

// eslint-disable-next-line object-curly-newline
export { checkPersonName, checkEmail, checkClassroomName, checkDate };
