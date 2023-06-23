import grades from './grades.js';

const showGrade = async (tbody, url) => {
  const records = await grades(url);
  tbody.innerHTML = '';
  records.result.forEach((data) => {
    const gradeElements = ` <tr>
    <td scope="row">${data.user}:</td>
         <td>${data.score}</td>
    </tr>`;
    tbody.innerHTML += gradeElements;
  });
};
export default showGrade;