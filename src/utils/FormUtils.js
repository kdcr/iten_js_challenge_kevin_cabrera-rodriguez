/**
 *
 * @param {*} name of a person to check
 * @returns true if empty string or correct name, false if incorrect
 */
const checkPersonName = (name = '') => {
  if (name === '') return true;
  return !/\d/g.test(name);
};

/**
 *
 * @param {*} name of a classroom to check
 * @returns true if empty string or correct name, false if incorrect
 */
const checkClassroomName = (name = '') => {
  if (name === '') return true;
  return name.length < 15;
};

/**
 *
 * @param {String} date to check it's format (DD-MM-YYYY)
 * @returns true if empty string or correct date, false if incorrect
 */
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

/**
 *
 * @param {String} email to check
 * @returns true if empty string or correct email, false if incorrect
 */
const checkEmail = (email = '') => {
  if (email === '') return true;
  // eslint-disable-next-line max-len
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
};

export { checkPersonName, checkEmail, checkClassroomName, checkDate };
