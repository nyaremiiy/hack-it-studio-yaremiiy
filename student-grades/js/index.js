import data from './../data/storage.js';

const table = document.getElementById('js-table-info');

const createTR = (classes, content) => {
  const tr = document.createElement('tr');
  tr.classList.add(`tr-${classes}`);
  content.forEach(item => {
    tr.append(createTD(classes, item));
  })
  return tr;
};

const createTD = (classes, text) => {
  const td = document.createElement('td');
  td.classList.add(`td-${classes}`);
  td.textContent = text;
  return td;
};

data.forEach((item) => {
  table.append(createTR('dates', item.dates));
  table.append(createTR('description', item.description));
  item.grades.forEach(grade => {
    table.append(createTR('grade', grade));
  })
});
