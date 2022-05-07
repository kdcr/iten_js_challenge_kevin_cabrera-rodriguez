const writeData = (data) => {
  localStorage.itenData = JSON.stringify(data);
};

const loadData = () => JSON.parse(localStorage.itenData);

export { writeData, loadData };
