import './style.css';
import Grades from './modules/fetchGrade.js';
import uploadGrade from './modules/uploadGrade.js';

const Document = document.querySelector('form');
const refresh = document.querySelector('#refresh');

const grade = new Grades();
grade.render();

refresh.addEventListener('click', () => {
  window.location.reload();
});
Document.addEventListener('submit', (e) => {
  e.preventDefault();
  uploadGrade(grade.url, grade.render);
});
