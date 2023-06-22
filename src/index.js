import './style.css';

const STATISTICS = [
  { name: 'Name', grade: 100 },
  { name: 'Name', grade: 20 },
  { name: 'Name', grade: 50 },
  { name: 'Name', grade: 78 },
  { name: 'Name', grade: 125 },
  { name: 'Name', grade: 77 },
  { name: 'Name', grade: 42 },
];

const tbody = document.querySelector('.body-area');

const records = STATISTICS.map((data) => `
  <tr>
    <td scope="row">${data.name}:</td>
    <td>${data.grade}</td>
  </tr>
`).join('');

tbody.innerHTML += records;
