import store from '../redux/store';
import MockupData from './MockupData.json';

/**
 *
 * @param {Object} data writes the given data to localStorage
 */
const writeData = (data) => {
  localStorage.itenData = JSON.stringify(data);
};

/**
 * Read the stored data in localStorage, if there is none, writes the default data and returns it
 * @returns The stored data in object format
 */
const loadData = () => {
  if (!localStorage.itenData || localStorage.itenData === 'null') {
    writeData(MockupData);
  }
  return JSON.parse(localStorage.itenData);
};

/**
 *
 * @returns A pseudo-random UUID
 */
const generateUUID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    // eslint-disable-next-line no-bitwise
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  );

/**
 * Dispatches the lastUpdate action to redux state
 */
const notifyUpdate = () => {
  store.dispatch({ type: 'lastUpdate/setLastUpdate', payload: Date.now() });
};

/**
 * Loads the default data to localStorage
 */
const reloadMockUp = () => {
  writeData(MockupData);
  notifyUpdate();
};

export { writeData, loadData, generateUUID, notifyUpdate, reloadMockUp };
